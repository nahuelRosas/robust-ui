import React, { cloneElement, ReactElement, HTMLAttributes } from "react";
import { mergedActions } from "../mergedActions";

interface OnActionMap {
  [key: string]: () => void;
}

interface CloneElementWithMergedActionProps {
  child: ReactElement;
  onAction: OnActionMap;
}

export function cloneElementWithMergedAction({
  child,
  onAction,
}: CloneElementWithMergedActionProps): ReactElement | null {
  try {
    if (!React.isValidElement(child)) {
      throw new Error("The 'child' parameter must be a valid React element.");
    }

    if (typeof onAction !== "object" || onAction === null) {
      throw new Error(
        "The 'onAction' parameter must be an object containing action callbacks."
      );
    }

    let clonedChild: ReactElement | null = null;

    Object.entries(onAction).forEach(([key, value]) => {
      if (typeof value !== "function") {
        throw new Error(
          `The value for '${key}' in 'onAction' must be a function.`
        );
      }

      const existingOnAction = (child.props as HTMLAttributes<HTMLElement>)[
        key as keyof HTMLAttributes<HTMLElement>
      ];
      const newOnAction = value;

      const mergedOnAction = existingOnAction
        ? () => mergedActions({ existingOnAction, newOnAction })
        : value;

      const newProps: HTMLAttributes<HTMLElement> = {
        [key]: mergedOnAction,
      };

      clonedChild = clonedChild
        ? cloneElement(clonedChild, newProps)
        : cloneElement(child, newProps);
    });

    return clonedChild!;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error while cloning React element with merged actions: ${error.message}`
      );
    } else {
      throw new Error(
        "An unknown error occurred while cloning React element with merged actions."
      );
    }
  }
}
