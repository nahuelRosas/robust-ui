import {
  isValidElement,
  HTMLAttributes,
  cloneElement,
  ReactNode,
  Children,
  Fragment,
} from "react";

/**
 * Propagates HTML attributes to child components.
 *
 * @param children - The child components to propagate attributes to.
 * @param props - The HTML attributes to propagate.
 * @returns The updated child components with propagated attributes.
 */
export function propagation({
  children,
  props,
}: {
  children: ReactNode;
  props: HTMLAttributes<HTMLElement>;
}) {
  const updatedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === Fragment) {
        return Children.map(child.props.children, (fragmentChild) => {
          if (isValidElement(fragmentChild)) {
            return cloneElement(fragmentChild, {
              ...(props as object),
              ...(fragmentChild.props as object),
            });
          }
          return fragmentChild;
        });
      } else {
        return cloneElement(child, {
          ...(props as object),
        } as HTMLAttributes<HTMLElement>);
      }
    }
    return child;
  });

  return updatedChildren;
}
