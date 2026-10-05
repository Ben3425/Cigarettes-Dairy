import axios from "axios";
import type { Entry } from "./Entry";

export class Api {
  private static instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  public static async GetAllEntriesByEmail(email: string): Promise<Entry[]> {
    if (!email) {
      console.error("Cant get all entries. Missing email");
    }
    try {
      const res = await this.instance({
        url: "/entries.php",
        method: "GET",
        params: {
          email: email,
        },
      });
      console.log(
        `Fetched entries from user ${email}: ${JSON.stringify(res.data)}`,
      );
      return res.data;
    } catch (err) {
      if (err instanceof Error) {
        console.error("ERROR: failed to fetch all entries:", err.message);
      }
      throw err;
    }
  }

  public static async GetEntriesByEmailAndDate(
    email: string,
    date: string,
  ): Promise<Entry[]> {
    if (!email || email === undefined || email === "") {
      console.error("Cant get entries, missing email");
    }
    if (!date || date === undefined || date === "") {
      console.error("Cant get entries, missing date");
    }
    try {
      const res = await this.instance({
        url: "/entries.php",
        method: "GET",
        params: {
          email: email,
          date: date,
        },
      });
      if (res.status === 200) {
        console.log(
          `Fetched entries from user email ${email}, with date (${date}): ${JSON.stringify(res.data)})`,
        );
      }

      return res.data;
    } catch (err) {
      if (err instanceof Error) {
        console.error("ERROR: failed to fetch all entries:", err.message);
      }
      throw err;
    }
  }

  public static async AddEntry(entry: Entry): Promise<number> {
    try {
      const res = await this.instance({
        url: "/entries.php",
        method: "POST",
        data: JSON.stringify(entry),
      });
      return res.status;
    } catch (err) {
      if (err instanceof Error) {
        console.error(
          `ERROR: failed to add entry: ${JSON.stringify(entry)}`,
          err.message,
        );
      }
      throw err;
    }
  }

  public static async DeleteEntryById(id: number): Promise<number> {
    try {
      const res = await this.instance({
        url: "entries.php",
        method: "DELETE",
        data: {
          id: JSON.stringify(id),
        },
      });
      return res.status;
    } catch (err) {
      if (err instanceof Error) {
        console.error("ERROR: failed to fetch all entries:", err.message);
      }
      throw err;
    }
  }
}
