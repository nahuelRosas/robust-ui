import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/nextjs-components";

export interface TextProps extends EnhancedElementProps<HTMLParagraphElement> {}

export interface TextPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLParagraphElement> {}
