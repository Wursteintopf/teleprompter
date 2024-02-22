type StringKeyedObject = {
  [key: string]: any;
};

export function objectEntries<T extends StringKeyedObject>(obj: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}