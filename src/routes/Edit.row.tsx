import { EditSelectedRow } from "../components/Edit.selected.row.tsx";
import { Link } from "react-router-dom";

export default function EditRow() {
  return (
    <main>
      <Link to="/"
        className={"link"}>Startseite</Link>
      <EditSelectedRow />
    </main>
  )
}
