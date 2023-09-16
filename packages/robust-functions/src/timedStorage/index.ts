import { ItemToStore, RetrieveItemOptions, StoreItemOptions } from "./types";

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

export function storeItem<T>({ key, value }: StoreItemOptions<T>): void {
  if (!key || value === null) {
    throw new Error("You must provide a key and value");
  }

  const now = Date.now();
  const item: ItemToStore<T> = {
    value,
    timestamp: now,
  };

  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    throw new Error(
      `An unexpected error occurred while storing the ${key} item. ${error}`,
    );
  }
}

export function retrieveItem<T>({ key, timeLimitInDays }: RetrieveItemOptions) {
  try {
    if (!key) {
      throw new Error("You must provide a key");
    }
    const storedItem = localStorage.getItem(key);

    if (!storedItem) {
      return null;
    } else if (storedItem) {
      const { timestamp, value }: ItemToStore<T> = JSON.parse(storedItem);
      const now = Date.now();
      const storedTime = timestamp;
      const diffInMilliseconds = now - storedTime;
      const diffInDays = diffInMilliseconds / MILLISECONDS_IN_A_DAY;

      if (diffInDays >= timeLimitInDays) {
        localStorage.removeItem(key);
        return null;
      }
      return value;
    }
  } catch (error) {
    throw new Error(
      `An unexpected error occurred while retrieving the ${key} item. ${error}`,
    );
  }
}
