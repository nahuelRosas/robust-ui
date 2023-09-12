export interface ItemToStore<T> {
  value: T;
  timestamp: number;
}

export interface StoreItemOptions<T> {
  key: string;
  value: T;
}

export interface RetrieveItemOptions {
  key: string;
  timeLimitInDays: number;
}
