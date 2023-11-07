import { ButtonProps } from "@robust-ui/button";
import { colors, sizes } from "@robust-ui/theme";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";

export interface AsideProps extends EnhancedElementProps<HTMLElement> {
  variant?: GenericProperty<"ghost" | "solid" | "outline" | "link">;
  placement?: GenericProperty<"left" | "right" | "top" | "bottom">;
  childrenWithOutPropagation?: GenericProperty<React.ReactNode>;
  loadingProps?: GenericProperty<ButtonProps["loadingProps"]>;
  iconCloseProps?: GenericProperty<ButtonProps["iconProps"]>;
  iconProps?: GenericProperty<ButtonProps["iconProps"]>;
  colorScheme?: GenericProperty<keyof typeof colors>;
  buttonCloseProps?: GenericProperty<ButtonProps>;
  closeOnOverlayClick?: GenericProperty<boolean>;
  opacityColorScheme?: GenericProperty<number>;
  size?: GenericProperty<keyof typeof sizes>;
  buttonProps?: GenericProperty<ButtonProps>;
  colorSchemeRaw?: GenericProperty<string>;
  altColor?: GenericProperty<boolean>;
  sizeRaw?: GenericProperty<string>;
}
export interface AsidePropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLElement> {
  variant?: "ghost" | "solid" | "outline" | "link";
  placement?: "left" | "right" | "top" | "bottom";
  childrenWithOutPropagation?: React.ReactNode;
  loadingProps?: ButtonProps["loadingProps"];
  iconCloseProps?: ButtonProps["iconProps"];
  iconProps?: ButtonProps["iconProps"];
  colorScheme?: keyof typeof colors;
  buttonCloseProps?: ButtonProps;
  closeOnOverlayClick?: boolean;
  opacityColorScheme?: number;
  size?: keyof typeof sizes;
  buttonProps?: ButtonProps;
  colorSchemeRaw?: string;
  altColor?: boolean;
  sizeRaw?: string;
}
