import React from "react";

export interface breakPoints {
  [key: string]: number;
}

export type HandleResizeOptions<T> = {
  breakPoints: breakPoints;
  setCurrentBreakpoint: React.Dispatch<React.SetStateAction<string | null>>;
  currentBreakpoint: string | null;
};
