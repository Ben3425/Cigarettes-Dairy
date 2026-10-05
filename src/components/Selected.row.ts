import type { ISelectedRow, ISelectedEntry, IEntry } from "./Components";
import { Api } from "./Api";

export class SelectedEntry implements ISelectedEntry {
  id?: number | undefined;
  email: string;
  date: string;
  time: string;
  amount: number;
  reason: string;
  needed: string;
  entry_id: number;
  constructor(entry: IEntry) {
    this.email = entry.email;
    this.date = entry.date;
    this.time = entry.time;
    this.amount = entry.amount;
    this.reason = entry.reason;
    this.needed = entry.needed;
    this.entry_id = entry.id!;
  }
}

export class SelectedRow implements ISelectedRow {
  email: string;
  date: string;
  time: string;
  entries: ISelectedEntry[] = [];

  constructor(email: string, date: string, time: string) {
    this.email = email;
    this.date = date;
    this.time = time;
  }

  async setup() {
    const entries = await Api.GetEntriesByEmailAndDate(this.email, this.date);
    entries.filter((entry: IEntry) => {
      entry.time === this.time;
    });
    entries.forEach((entry: IEntry) => {
      const selectedEntry = new SelectedEntry(entry);
      this.entries.push(selectedEntry);
    });
  }
}
