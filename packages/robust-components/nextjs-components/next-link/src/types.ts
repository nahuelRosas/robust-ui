import { EnhancedElementProps } from "@robust-ui/constructor";

export interface NextLinkProps extends EnhancedElementProps<HTMLAnchorElement> {
  [key: string]: unknown;
}

export type ForwardRefExoticNextLink = Omit<NextLinkProps, "ref"> &
  React.RefAttributes<unknown> &
  NextLinkProps;
