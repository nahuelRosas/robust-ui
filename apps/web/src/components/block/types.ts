import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/nextjs-components";

export interface BlockProps extends EnhancedElementProps<HTMLDivElement> {}

export interface BlockPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {}
