import { Database } from "./types";

export type TableName = keyof Database["public"]["Tables"];
export type ViewName = keyof Database["public"]["Views"];

export type Table<T extends TableName | ViewName> = T extends TableName
  ? Database["public"]["Tables"][T]["Row"]
  : T extends ViewName
  ? Database["public"]["Views"][T]["Row"]
  : never;

export type Enum<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];