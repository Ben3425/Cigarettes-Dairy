import { useContext, useEffect } from "react";
import Table from "./Table.tsx";
import type { IAuth, ITableProps } from "./Components";
import { DataSetup } from "./Data.setup.ts";
import { EntryRow } from "./Entry.row.ts";
import { useState } from "react";
import { Api } from "./Api.tsx";
import { Formatter } from "./Formatter.ts";
import type { Entry } from "./Entry.ts";
import AuthContext from "./Auth.context.tsx";

export default function TodaysDairyTable({ props }: { props: ITableProps }) {
  const dataSetup = new DataSetup();
  const { user, refresh, afterRefreshed } = useContext(AuthContext) as IAuth;
  const [entryRows, setEntryRows] = useState<EntryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const date = new Date();
  const today = Formatter.ToDbDateStr(date);

  useEffect((): void => {
    setLoading(true);
    Api.GetEntriesByEmailAndDate(user?.email!, today)
      .then((entries: Entry[]): EntryRow[] =>
        dataSetup.setupTodaysEntryRows(today, entries),
      )
      .then((entryRows: EntryRow[]): void => setEntryRows(entryRows))
      .catch((err: Error): void => setError(err))
      .finally(() => {
        setLoading(false);
        afterRefreshed();
      });
  }, [refresh]);

  if (error) {
    if (error instanceof Error) {
      console.error("Error while setting todays dairy table:", error.message);
    }
    return <p>Es ist leider etwas schief gelaufen! Bitte versuch es erneut.</p>;
  }

  if (loading) {
    console.log("Todays dairy table is loading...");
    return <p>Loading...</p>;
  }
  if (!loading) {
    props.entryRows = entryRows;
    console.log("props.entryRows: " + JSON.stringify(props.entryRows));

    return <Table props={props} />;
  }
}
