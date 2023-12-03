import { Ticon, IconProps } from "@robust-ui/icon";
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
  hoverHelp?: boolean;
  isLoading?: boolean;
  hoverText?: string;
  iconType?: Ticon;
}
