import { EnhancedElementProps } from "@robust-ui/constructor";

export interface TextProps extends EnhancedElementProps<HTMLParagraphElement> {}

export type ForwardRefExoticText = Omit<TextProps, "ref"> &
  React.RefAttributes<unknown> &
  TextProps;
