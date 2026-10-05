import { Link } from "react-router-dom";
import SelectDay from "../components/Select.day";

export default function Review() {
  return (
    <main>
      <h1>Wähle einen Tag aus</h1>
      <ul id={"link_ul"}>
        <li id={"link_home"}>
          <Link to="/" className={"link"}>Startseite</Link>
        </li>
      </ul>
      <SelectDay />
    </main>
  )
}
