import { Children, ReactElement, ReactNode } from "react";
import { cloneElementWithMergedAction } from "../cloneElementWithMergedAction";
import { MergedActionParams } from "./types";

export function mapNestedChildren({ children, onAction }: MergedActionParams) {
  return (
    Children.map(children, (nestedChild: React.ReactNode) =>
      cloneElementWithMergedAction({
        child: nestedChild as ReactElement,
        onAction,
      })
    ) || []
  );
}
