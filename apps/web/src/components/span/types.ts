import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
} from "@robust-ui/nextjs-components";

export interface SpanProps extends EnhancedElementProps<HTMLSpanElement> {}

export interface SpanPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLSpanElement> {}
