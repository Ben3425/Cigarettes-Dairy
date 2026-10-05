import { useContext, useState, type ChangeEvent } from "react";
import { Formatter } from "./Formatter";
import type { IAuth, IEntry } from "./Components";
import { Api } from "./Api";
import AuthContext from "./Auth.context";
import AuthProvider from "./Auth.provider";

export function EntryInputForm({ date }: { date: string }) {
  const today = new Date();
  let currentTime = Formatter.GetTimeFormatToString(today);
  const { user, onRefresh } = useContext(AuthContext) as IAuth;
  const [userDate, setUserDate] = useState(date);
  const [time, setTime] = useState(currentTime);
  const [amount, setAmount] = useState(1);
  const [reason, setReason] = useState("Schmachter");
  const [needed, setNeeded] = useState("Nein");

  function handleChangeDate(e: ChangeEvent<HTMLInputElement>) {
    const date = e.target.value;
    setUserDate(date);
  }

  function handleChangeTime(e: ChangeEvent<HTMLSelectElement>) {
    const time = e.target.value;
    setTime(time);
  }
  function handleChangeAmount(e: ChangeEvent<HTMLSelectElement>): void {
    const amount = Number(e.target.value);
    setAmount(amount);
  }
  function handleChangeReason(e: ChangeEvent<HTMLSelectElement>) {
    const reason = e.target.value;
    setReason(reason);
  }
  function handleChangeNeeded(e: ChangeEvent<HTMLSelectElement>): void {
    const needed = e.target.value;
    setNeeded(needed);
  }
  async function handleClick() {
    if (!user || !user?.email) {
      console.error("User or user.email is missing!");
    }
    const entry: IEntry = {
      email: user?.email!,
      date: userDate,
      time: time,
      amount: amount,
      reason: reason,
      needed: needed,
    };
    try {
      await Api.AddEntry(entry);
      alert(
        "Eintrag wurde erfolgreich hinzugefügt.",
        // `Der folgende Eintrag wurde hinzugefügt:\nEmail: ${user?.email}\nDatum: ${userDate}\nUhrzeit: ${time}\nAnzahl: ${amount}\nGrund: ${reason}\nNötig: ${needed}`,
      );
      onRefresh();
    } catch (err) {
      if (err instanceof Error) {
        console.error("Failed to add entry:", err.message);
      }
      alert("Fehler! Eintrag konnte nicht hinzugefügt werden.");
      throw err;
    }
  }

  return (
    <AuthProvider>
      <form id={"entry-input-container"}>
        <div id={"date_input-container"}>
          <label htmlFor="date">Datum</label>
          <input
            type="date"
            id={"date"}
            value={userDate}
            onChange={handleChangeDate}
          />
        </div>
        <div id={"time_input-container"}>
          <label htmlFor={"time"}>Uhrzeit</label>
          <select id={"time"} value={time} onChange={handleChangeTime}>
            <option value={currentTime}>{currentTime + " Uhr"}</option>
            <option value={"00-02"}>{"00-02 Uhr"}</option>
            <option value={"02-04"}>{"02-04 Uhr"}</option>
            <option value={"04-06"}>{"04-06 Uhr"}</option>
            <option value={"06-08"}>{"06-08 Uhr"}</option>
            <option value={"08-10"}>{"08-10 Uhr"}</option>
            <option value={"10-12"}>{"10-12 Uhr"}</option>
            <option value={"12-14"}>{"12-14 Uhr"}</option>
            <option value={"14-16"}>{"14-16Uhr"}</option>
            <option value={"16-18"}>{"16-18 Uhr"}</option>
            <option value={"18-20"}>{"18-20 Uhr"}</option>
            <option value={"20-22"}>{"20-22 Uhr"}</option>
            <option value={"22-24"}>{"22-24 Uhr"}</option>
          </select>
        </div>
        <div id={"amount_input-container"}>
          <label htmlFor={"amount"}>Anzahl</label>
          <select id={"amount"} value={amount} onChange={handleChangeAmount}>
            <option value={1}>{"1"}</option>
            <option value={2}>{"2"}</option>
            <option value={3}>{"3"}</option>
            <option value={4}>{"4"}</option>
            <option value={5}>{"5"}</option>
            <option value={6}>{"6"}</option>
            <option value={7}>{"7"}</option>
            <option value={8}>{"8"}</option>
            <option value={9}>{"9"}</option>
          </select>
        </div>
        <div id={"reason_input-container"}>
          <label htmlFor={"reason"}>Grund</label>
          <select id={"reason"} value={reason} onChange={handleChangeReason}>
            <option value={"Schmachter"}>{"Schmachter"}</option>
            <option value={"Stress"}>{"Stress"}</option>
            <option value={"Gewohnheit"}>{"Gewohnheit"}</option>
            <option value={"Langeweile"}>{"Langeweile"}</option>
            <option value={"sozialer Kontakt"}>{"Sozialer Kontakt"}</option>
            <option value={"Sonstiges"}>{"Sonstiges"}</option>
          </select>
        </div>
        <div id={"needed_input-container"}>
          <label htmlFor={"needed"}>Nötig</label>
          <select id={"needed"} value={needed} onChange={handleChangeNeeded}>
            <option value={"Nein"}>{"Nein"}</option>
            <option value={"Ja"}>{"Ja"}</option>
          </select>
        </div>
        <button id={"submit_button"} type={"button"} onClick={handleClick}>
          Speichern
        </button>
      </form>
    </AuthProvider>
  );
}
