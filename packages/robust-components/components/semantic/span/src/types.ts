import { EnhancedElementProps } from "@robust-ui/constructor";

export interface SpanProps extends EnhancedElementProps<HTMLSpanElement> {}

export type ForwardRefExoticSpan = Omit<SpanProps, "ref"> &
  React.RefAttributes<unknown> &
  SpanProps;
