import {
  EnhancedElementProps,
  GenericProperty,
  SpanProps,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/nextjs-components";
import { LinkProps } from "next/link";
import { FlexProps } from "../flex";
import { IconProps, Ticon } from "../icon";

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
