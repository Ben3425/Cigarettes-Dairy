import { EntryInputForm } from "../components/Entry.input";
import TodaysTable from "../components/Table.today.tsx";
import type { IAuth, ITableProps } from "../components/Components.ts";
import { Formatter } from "../components/Formatter.ts";
import { useContext } from "react";
import AuthContext from "../components/Auth.context.tsx";

const today = new Date();
const date = Formatter.ToDbDateStr(today);
const title: string = "Zigaretten Tagebuch";
const columns: string[] = ["Uhrzeit", "Anzahl", "Gründe", "Nötig"];
const props: ITableProps = { title: title, date: date, headers: columns };

export default function Home() {
  const { user } = useContext(AuthContext) as IAuth;
  if (!user) {
    console.error("User is missing");
  } else if (!user.email) {
    console.error("User email is missing");
  } else if (!user.name) {
    console.error("User name is missing");
  }

  return (
    <main>
      <h1>{"Willkommen " + user?.name}</h1>
      <EntryInputForm date={date} />
      <TodaysTable props={props} />
    </main>
  );
}
