import type { Entry } from "./Entry";
import { EntryRow } from "./Entry.row";

export class DataSetup {
  setupTodaysEntryRows(date: string, entries: Entry[]): EntryRow[] {
    const entryRows = new Array<EntryRow>();
    const times: string[] = [
      "00-02", // 0
      "02-04",
      "04-06",
      "06-08",
      "08-10",
      "10-12",
      "12-14",
      "14-16",
      "16-18",
      "18-20",
      "20-22",
      "22-24", // 11
    ];
    times.forEach((time: string): void => {
      entryRows.push(new EntryRow(date, time));
    });
    let idx = 0;
    try {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].date === date) {
          switch (entries[i].time) {
            case "00-02":
              idx = 0;
              break;
            case "02-04":
              idx = 1;
              break;
            case "04-06":
              idx = 2;
              break;
            case "06-08":
              idx = 3;
              break;
            case "08-10":
              idx = 4;
              break;
            case "10-12":
              idx = 5;
              break;
            case "12-14":
              idx = 6;
              break;
            case "14-16":
              idx = 7;
              break;
            case "16-18":
              idx = 8;
              break;
            case "18-20":
              idx = 9;
              break;
            case "20-22":
              idx = 10;
              break;
            case "22-24":
              idx = 11;
              break;
          }
          entryRows[idx].addEntryValues(entries[i]);
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(
          `Failed to setup entryRows at row: ${entryRows[idx]}, with error:`,
          err.message,
        );
      }
      throw err;
    }
    return entryRows;
  }
}
