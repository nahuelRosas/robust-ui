import React from "react";

export function stopPropagation({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
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
