import { EnhancedElementProps, GenericProperty } from "@robust-ui/constructor";
import { colors } from "@robust-ui/theme";
import { IconProps } from "@robust-ui/icon";

export interface AsideProps extends EnhancedElementProps<HTMLElement> {
  placement?: GenericProperty<"left" | "right" | "top" | "bottom">;
  size?: GenericProperty<"sm" | "md" | "lg" | "xl" | "full">;
  colorScheme?: GenericProperty<keyof typeof colors>;
  variant?: GenericProperty<"solid" | "outline" | "ghost">;
  propsIcon?: IconProps;
  closeOnOverlayClick?: boolean;
}
export interface AsidePropsClean extends EnhancedElementProps<HTMLElement> {
  placement?: "left" | "right" | "top" | "bottom";
  size?: "base" | "sm" | "md" | "lg" | "xl" | "full";
  colorScheme?: keyof typeof colors;
  variant?: "solid" | "outline" | "ghost";
  propsIcon?: IconProps;
  closeOnOverlayClick?: boolean;
}

export type ForwardRefExoticAside = Omit<AsideProps, "ref"> &
  React.RefAttributes<unknown> &
  AsideProps;
