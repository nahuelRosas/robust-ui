import {
  isValidElement,
  HTMLAttributes,
  cloneElement,
  ReactNode,
  Children,
  Fragment,
} from "react";

/**
 * Propagates HTML attributes to all valid React elements in the children tree.
 *
 * @param children - The ReactNode representing the children tree.
 * @param props - The HTML attributes to be propagated.
 * @returns The updated ReactNode with the propagated attributes.
 */
export function propagation({
  children,
  props,
}: {
  children: ReactNode;
  props: HTMLAttributes<HTMLElement>;
}): ReactNode[] | null | undefined {
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
