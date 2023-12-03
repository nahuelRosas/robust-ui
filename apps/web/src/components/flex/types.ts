import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/nextjs-components";

export interface FlexProps extends EnhancedElementProps<HTMLDivElement> {}

export interface FlexPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {}
