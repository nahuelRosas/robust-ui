import { createContext } from "react";
import { globalContextValue } from "./types";

// Create the global context with an empty initial value
export const RobustGlobalContext = createContext<globalContextValue>(
  {} as globalContextValue,
);
