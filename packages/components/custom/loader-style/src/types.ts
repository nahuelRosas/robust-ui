import { EnhancedProps, EnhancedPropsNoGeneric } from "@robust-ui/constructor";

export interface LoaderStyleProps extends EnhancedProps<HTMLLinkElement> {
  pathname: string;
}

export interface LoaderStylePropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLLinkElement> {
  pathname: string;
}
