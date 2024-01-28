import {
  Children,
  isValidElement,
  cloneElement,
  MouseEvent,
  HTMLAttributes,
  ReactNode,
} from "react";

/**
 * Stops the propagation of click events on the provided React children elements.
 *
 * @param children - The React children elements.
 * @returns The modified React children elements with click event propagation stopped.
 */
export function stopPropagation({ children }: { children: ReactNode }) {
  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        onClick: (e: MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          if (child.props.onClick) {
            child.props.onClick(e);
          }
        },
      } as HTMLAttributes<HTMLElement>);
    }
    return child;
  });
}
