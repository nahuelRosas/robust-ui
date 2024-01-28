import { Ticon, IconProps } from "@robust-ui/icon";
import { SpinnerProps } from "@robust-ui/spinner";
import { SpanProps } from "@robust-ui/span";
import { FlexProps } from "@robust-ui/flex";
import { LinkProps } from "next/link";
import {
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
  EnhancedProps,
} from "@robust-ui/constructor";

export interface NextLinkProps extends EnhancedProps<LinkProps> {
  direction?: PartialOrNestedPartial<"row" | "rowReverse">;
  isDisabled?: PartialOrNestedPartial<boolean>;
  hoverHelp?: PartialOrNestedPartial<boolean>;
  isLoading?: PartialOrNestedPartial<boolean>;
  hoverText?: PartialOrNestedPartial<string>;
  iconType?: PartialOrNestedPartial<Ticon>;
  hoverTextProps?: PartialOrNestedPartial<{
    containerProps?: FlexProps;
    textProps?: SpanProps;
  }>;
  spinnerProps?: SpinnerProps;
  textProps?: SpanProps;
  iconProps?: IconProps;
}

export interface NextLinkPropsNoGeneric
  extends EnhancedPropsNoGeneric<LinkProps> {
  direction?: "row" | "rowReverse";
  hoverTextProps?: {
    containerProps?: FlexProps;
    textProps?: SpanProps;
  };
  isDisabled?: boolean;
  hoverHelp?: boolean;
  isLoading?: boolean;
  hoverText?: string;
  iconType?: Ticon;
}
