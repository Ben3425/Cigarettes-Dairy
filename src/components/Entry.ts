import type { IEntry } from "./Components.ts";

export class Entry implements IEntry {
  id?: number | undefined;
  email: string;
  date: string;
  time: string;
  amount: number;
  reason: string;
  needed: string;

  constructor(
    email: string,
    date: string,
    time: string,
    amount: number,
    reason: string,
    needed: string,
    id?: number,
  ) {
    this.email = email;
    this.date = date;
    this.time = time;
    this.amount = amount;
    this.reason = reason;
    this.needed = needed;
    this.id = id!;
  }
}
