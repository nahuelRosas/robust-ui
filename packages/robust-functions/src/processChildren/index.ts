import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";
import { ProcessChildrenProps } from "./types";
import { cloneElementWithMergedAction } from "../cloneElementWithMergedAction";
import { mapNestedChildren } from "../mapNestedChildren";

export function processChildren({
  children,
  passAction,
  onAction,
  subChildren,
  parent,
}: ProcessChildrenProps) {
  return (
    Children.map(children, (child: React.ReactNode) => {
      if (!passAction || !isValidElement(child)) {
        return child;
      }
      if (subChildren && parent && child.type.toString().includes(parent)) {
        const newChildren = mapNestedChildren({
          children: child.props.children,
          onAction,
        });
        return cloneElement(child as ReactElement, {
          children: newChildren,
        });
      }

      return cloneElementWithMergedAction({
        child,
        onAction,
      });
    }) || []
  );
}
