import { Children, isValidElement, cloneElement } from "react";

export function stopPropagation({ children }: { children: React.ReactNode }) {
  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          if (child.props.onClick) {
            child.props.onClick(e);
          }
        },
      } as React.HTMLAttributes<HTMLElement>);
    }
    return child;
  });
}
