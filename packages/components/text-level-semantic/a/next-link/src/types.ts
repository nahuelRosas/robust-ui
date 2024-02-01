import { TIcons, IconProps } from "@robust-ui/icon";
import { SpinnerProps } from "@robust-ui/spinner";
import { SpanProps } from "@robust-ui/span";
import { FlexProps } from "@robust-ui/flex";
import { LinkProps } from "next/link";
import {
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
  EnhancedProps,
} from "@robust-ui/constructor";

/**
 * Represents the props for a component.
 */
type ComponentProps = {
  direction?: PartialOrNestedPartial<"row" | "rowReverse">;
  isDisabled?: PartialOrNestedPartial<boolean>;
  hoverHelp?: PartialOrNestedPartial<boolean>;
  isLoading?: PartialOrNestedPartial<boolean>;
  hoverText?: PartialOrNestedPartial<string>;
  iconType?: PartialOrNestedPartial<keyof TIcons>;
  hoverTextProps?: PartialOrNestedPartial<{
    containerProps?: FlexProps;
    textProps?: SpanProps;
  }>;
  spinnerProps?: SpinnerProps;
  textProps?: SpanProps;
  iconProps?: IconProps;
};

/**
 * Props for the NextLink component.
 */
export type NextLinkProps = EnhancedProps<LinkProps> & ComponentProps;

/**
 * Props for the component without generics.
 */
type ComponentPropsNoGeneric = {
  direction?: "row" | "rowReverse";
  isDisabled?: boolean;
  hoverHelp?: boolean;
  isLoading?: boolean;
  hoverText?: string;
  iconType?: keyof TIcons;
  hoverTextProps?: {
    containerProps?: FlexProps;
    textProps?: SpanProps;
  };
  spinnerProps?: SpinnerProps;
  textProps?: SpanProps;
  iconProps?: IconProps;
};

/**
 * Props for the NextLink component without generics.
 */
export type NextLinkPropsNoGeneric = EnhancedPropsNoGeneric<LinkProps> &
  ComponentPropsNoGeneric;
