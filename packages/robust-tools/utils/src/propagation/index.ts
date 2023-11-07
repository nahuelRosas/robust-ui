import React from "react";

export function propagation({
  children,
  props,
}: {
  children: React.ReactNode;
  props: React.HTMLAttributes<HTMLElement>;
}) {
  const updatedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === React.Fragment) {
        return React.Children.map(child.props.children, (fragmentChild) => {
          if (React.isValidElement(fragmentChild)) {
            return React.cloneElement(fragmentChild, {
              ...(props as object),
              ...(fragmentChild.props as object),
            });
          }
          return fragmentChild;
        });
      } else {
        return React.cloneElement(child, {
          ...(props as object),
        } as React.HTMLAttributes<HTMLElement>);
      }
    }
    return child;
  });

  return updatedChildren;
}
