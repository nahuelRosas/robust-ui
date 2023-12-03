import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/constructor";
export interface BlockProps extends EnhancedElementProps<HTMLDivElement> {}

export interface BlockPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {}
