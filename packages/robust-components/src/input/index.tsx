import React, { forwardRef } from "react";
import { Constructor } from "@robust-ui/constructor";
import { InputProps } from "./types";

// Create a dynamic styles component using the "input" tag
const Component = Constructor({
  Component: "input",
});

/**
 * Input Component
 *
 * An input element component.
 *
 * @component
 * @param {InputProps} props - Props for the Input component
 * @param {React.Ref<unknown>} ref - Ref forwarded to the underlying input element
 * @returns {React.ReactNode} - Rendered Input component
 */
export const Factory = forwardRef<unknown, InputProps>(function InputComponent(
  { children, ...props },
  ref,
) {
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
});

export const Input = React.memo(Factory);
