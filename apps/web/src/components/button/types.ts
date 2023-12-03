import {
  EnhancedElementProps,
  GenericProperty,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/nextjs-components";
import { FlexProps } from "../flex";
import { IconProps, Ticon } from "../icon";
import { SpanProps } from "../span";
import { SpinnerProps } from "../spinner";

export interface ButtonProps extends EnhancedElementProps<HTMLButtonElement> {
  direction?: GenericProperty<"row" | "rowReverse">;
  isDisabled?: GenericProperty<boolean>;
  hoverHelp?: GenericProperty<boolean>;
  isLoading?: GenericProperty<boolean>;
  hoverText?: GenericProperty<string>;
  iconType?: GenericProperty<Ticon>;
  hoverTextProps?: GenericProperty<{
    containerProps?: FlexProps;
    textProps?: SpanProps;
  }>;
  spinnerProps?: SpinnerProps;
  textProps?: SpanProps;
  iconProps?: IconProps;
}

export interface ButtonPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLButtonElement> {
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
