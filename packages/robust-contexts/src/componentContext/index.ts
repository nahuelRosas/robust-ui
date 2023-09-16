import { createContext } from "react";
import { componentContextValue } from "./types";

export const ComponentContext = createContext<componentContextValue>(
  {} as componentContextValue,
);
