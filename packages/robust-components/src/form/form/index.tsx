import React, { forwardRef } from "react";
import { Constructor } from "@robust-ui/constructor";
import { FormProps } from "./types";

// Create a dynamic styles component using the "form" tag
const Component = Constructor({
  Component: "form",
});

/**
 * Form Component
 *
 * A form element component that wraps its children.
 *
 * @component
 * @param {FormProps} props - Props for the Form component
 * @param {React.Ref<unknown>} ref - Ref forwarded to the underlying form element
 * @returns {React.ReactNode} - Rendered Form component
 */
export const Factory = forwardRef<unknown, FormProps>(function FormComponent(
  { children, ...props },
  ref,
) {
  return (
    <Component componentName="Form" ref={ref} {...props}>
      {children}
    </Component>
  );
});

export const Form = React.memo(Factory);
