import { EntryRow } from "./Entry.row";
import type { SelectedRow } from "./Selected.row";
import type { User } from "./User";

export interface IUserLoginResponse {
  message: string;
  jwt: string;
  email: string;
  username: string;
  expireAt: number;
}

export interface IAuth {
  token: string | null;
  user: User | null;
  refresh: boolean;
  onLogin: (user: User) => void;
  onLogout: () => void;
  onRefresh: () => void;
  afterRefreshed: () => void;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};

export interface IUser {
  name?: string;
  email: string;
  password: string;
}

export interface IRow {
  id?: number;
  email: string;
  date: string;
  time: string;
  amount: number;
  reasons: string[];
  needs: string[];
}

export interface ITableProps {
  date: string;
  title: string;
  headers: string[];
  entryRows?: EntryRow[];
}

export interface ISelectedRowProps {
  columns: string[];
  row: SelectedRow;
}

export interface IEntry {
  id?: number;
  email: string;
  date: string;
  time: string;
  amount: number;
  reason: string;
  needed: string;
}

export interface IEntryRow {
  id?: number;
  date: string;
  time: string;
  amount: number;
  reasons: string[];
  needs: string[];
}

export interface IEntryInput {
  email: string;
  time: string;
  amount: number;
  reason: string;
  needed: string;
}

export interface ISelectedEntry {
  id?: number;
  email: string;
  date: string;
  time: string;
  amount: number;
  reason: string;
  needed: string;
  entry_id: number;
}

export interface ISelectedRow {
  date: string;
  time: string;
  entries: ISelectedEntry[];
}
