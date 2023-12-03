import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
} from "@robust-ui/constructor";

export interface TextProps extends EnhancedElementProps<HTMLParagraphElement> {}

export interface TextPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLParagraphElement> {}
