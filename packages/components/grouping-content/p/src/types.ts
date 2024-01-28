import { EnhancedProps, EnhancedPropsNoGeneric } from "@robust-ui/constructor";

export interface TextProps extends EnhancedProps<HTMLParagraphElement> {}

export interface TextPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLParagraphElement> {}
