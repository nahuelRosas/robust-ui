import { Ticon, IconProps } from "@robust-ui/icon";
import { SpinnerProps } from "@robust-ui/spinner";
import { SpanProps } from "@robust-ui/span";
import { FlexProps } from "@robust-ui/flex";
import { LinkProps } from "next/link";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";


export interface NextLinkProps extends EnhancedElementProps<LinkProps> {
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

export interface NextLinkPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<LinkProps> {
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
