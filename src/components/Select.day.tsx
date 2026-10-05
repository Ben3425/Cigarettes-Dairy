import { useContext, useState, type ChangeEvent } from "react";
import { Api } from "./Api.tsx";
import Table from "./Table.tsx";
import { EntryRow } from "./Entry.row.ts";
import { DataSetup } from "./Data.setup.ts";
import { Formatter } from "./Formatter.ts";
import AuthContext from "./Auth.context.tsx";
import type { IAuth } from "./Components.ts";

export default function DateInput() {
  const title: string = "Zigaretten Tagebuch";
  const columns: string[] = ["Uhrzeit", "Anzahl", "Gründe", "Nötig"];
  const today = new Date();
  const { user } = useContext(AuthContext) as IAuth;
  const [date, setDate] = useState<string>(Formatter.ToDbDateStr(today));
  const [onShow, setOnShow] = useState<boolean>(false);
  const [rows, setRows] = useState<EntryRow[]>([]);
  const dataSetup = new DataSetup();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
  }
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    Api.GetEntriesByEmailAndDate(user?.email!, date)
      .then((entries) => dataSetup.setupTodaysEntryRows(date, entries))
      .then((rows) => setRows(rows))
      .then(() => setOnShow(true))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div id={"date_input-container"}>
        <form id={"date_form-container"}>
          <label htmlFor={"date_input"}>Datum</label>
          <input
            type="date"
            id={"date_input"}
            value={date}
            onChange={handleChange}
          />
          <button className={"show_button"} onClick={handleClick}>
            Zeige Tag
          </button>
        </form>
      </div>
      <div id={"review_table-container"}>
        {onShow && (
          <Table
            props={{
              date: date,
              headers: columns,
              title: title,
              entryRows: rows,
            }}
          />
        )}
      </div>
    </>
  );
}
