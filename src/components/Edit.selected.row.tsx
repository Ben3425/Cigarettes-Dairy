import { Entry } from "./Entry";
import { Api } from "./Api";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./Auth.context";
import type { IAuth } from "./Components";

type Props = {
  date: string;
  time: string;
};

function TableRows({ props }: { props: Props }) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const { user } = useContext(AuthContext) as IAuth;

  useEffect(() => {
    Api.GetEntriesByEmailAndDate(user?.email!, props.date)
      .then((data) => {
        data = data.filter((entry: Entry) => entry.time === props.time);
        setEntries(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const rows: any[] = [];
  let id: number = 0;
  const navigate = useNavigate();

  async function handleDeleteButtonClick(e: any) {
    const entryId = e.target?.id.split("_")[2];
    console.log(entryId);
    const response = await Api.DeleteEntryById(entryId);
    alert(response);
    navigate("/");
  }

  entries.forEach((row) => {
    rows.push(
      <tr key={id++}>
        <td key={"row_" + id.toString()}>{id}</td>
        <td key={row.time}>{row.time + " Uhr"}</td>
        <td key={"amount"}>{row.amount}</td>
        <td key={"reasons"}>{row.reason}</td>
        <td key={"needs"}>{row.needed}</td>
        <td>
          <button
            id={"delete_button_" + row.id?.toString()}
            onClick={handleDeleteButtonClick}
          >
            Löschen
          </button>
        </td>
      </tr>,
    );
  });

  return <>{rows}</>;
}

export function EditSelectedRow() {
  const columnData: string[] = [
    "Nummer",
    "Uhrzeit",
    "Anzahl",
    "Gründe",
    "Nötig",
    "Löschen",
  ];
  const columns: any[] = [];
  columnData.forEach((column) => {
    columns.push(<td key={column}>{column}</td>);
  });
  const date = localStorage.getItem("date") as string;
  const time = localStorage.getItem("time") as string;

  return (
    <div className="table-container">
      <h2>{"Bearbeite selektierte Einträge"}</h2>
      <table>
        <thead>
          <tr>{columns}</tr>
        </thead>
        <tbody>
          <TableRows props={{ date: date, time: time }} />
        </tbody>
      </table>
    </div>
  );
}
