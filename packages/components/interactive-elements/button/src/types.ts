import { IconProps, TIcons } from "@robust-ui/icon";
import { SpinnerProps } from "@robust-ui/spinner";
import { SpanProps } from "@robust-ui/span";
import { FlexProps } from "@robust-ui/flex";
import {
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
  EnhancedProps,
} from "@robust-ui/constructor";

export interface ButtonProps extends EnhancedProps<HTMLButtonElement> {
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
}

export interface ButtonPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLButtonElement> {
  direction?: "row" | "rowReverse";
  hoverTextProps?: {
    containerProps?: FlexProps;
    textProps?: SpanProps;
  };
  isDisabled?: boolean;
  hoverHelp?: boolean;
  isLoading?: boolean;
  hoverText?: string;
  iconType?: keyof TIcons;
}
