import { useNavigate } from "react-router-dom";
import type { ITableProps } from "./Components.ts";
import { Formatter } from "./Formatter.ts";
import type { EntryRow } from "./Entry.row.ts";

function TableRows({ props }: { props: ITableProps }) {
  const rows: any[] = [];
  const navigate = useNavigate();

  async function handleRowClick(e: React.MouseEvent<HTMLTableRowElement>) {
    const rowSplit = e.currentTarget.id.split("_");
    const time: string = rowSplit[1];
    const date: string = rowSplit[2];
    localStorage.setItem("time", time);
    localStorage.setItem("date", date);
    navigate("/editrow");
  }
  console.log(props.entryRows);

  props.entryRows?.forEach((row: EntryRow): void => {
    rows.push(
      <tr
        key={"row_" + row.time}
        id={"row_" + row.time}
        onClick={handleRowClick}
      >
        <td key={row.time}>{row.time + " Uhr"}</td>
        <td key={"amount"}>{row.amount}</td>
        <td key={"reasons"}>
          {row.reasons.map((reason: string): string => reason + ", ")}
        </td>
        <td key={"needs"}>
          {row.needs.map((needed: string): string => needed + ", ")}
        </td>
      </tr>,
    );
  });

  return <>{rows}</>;
}

export default function Table({ props }: { props: ITableProps }) {
  const columns: any[] = [];
  props.headers.forEach((header) => {
    columns.push(<th key={header}> {header}</th>);
  });
  let cigaretteAmount = 0;
  props.entryRows?.forEach((row) => {
    cigaretteAmount += Number(row?.amount);
  });

  return (
    <div className="table-container">
      <h2>
        {props.title +
          ", den " +
          Formatter.FromDbDateStrToLocalDateStr(props.date)}
      </h2>
      <p>
        Heute geraucht: {cigaretteAmount}{" "}
        {cigaretteAmount > 1 || cigaretteAmount < 1
          ? "Zigaretten"
          : "Zigarette"}
      </p>
      <table>
        <thead>
          <tr>{columns}</tr>
        </thead>
        <tbody>
          <TableRows props={props} />
        </tbody>
      </table>
    </div>
  );
}
