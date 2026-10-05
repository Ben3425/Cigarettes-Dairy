import type { IEntryRow } from "./Components";
import type { Entry } from "./Entry";

export class EntryRow implements IEntryRow {
  id?: number;
  date: string;
  time: string;
  amount: number = 0;
  reasons: string[] = [];
  needs: string[] = [];

  constructor(date: string, time: string, id?: number) {
    this.date = date;
    this.time = time;
    this.id = id!;
  }

  addValues(
    date: string,
    time: string,
    amount: number,
    reason: string,
    needed: string,
    id?: number,
  ) {
    if (this.date !== date || this.time !== time) {
      console.log("Error: wrong entryRow while try adding values");
    }
    this.amount += Number(amount);
    this.reasons.push(reason);
    this.needs.push(needed);
    this.id = id!;
  }

  addEntryValues(entry: Entry): void {
    if (this.date !== entry.date || this.time !== entry.time) {
      console.log(
        `Error: wrong entryRow while try adding values.\ndate1: ${this.date}, date2: ${entry.date};\ntime1: ${this.time}, time2: ${entry.time};`,
      );
    }
    this.amount += Number(entry.amount);
    this.reasons.push(entry.reason);
    this.needs.push(entry.needed);
    this.id = entry.id!;
    console.log("Entry added values successfully: " + JSON.stringify(entry));
  }
}
