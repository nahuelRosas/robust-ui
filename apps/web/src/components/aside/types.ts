import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
} from "@robust-ui/nextjs-components";
import { ButtonProps } from "../button";

export interface AsideProps extends EnhancedElementProps<HTMLElement> {
  size?: GenericProperty<"full" | "xl" | "lg" | "md" | "sm" | "xs">;
  placement?: GenericProperty<"left" | "right" | "top" | "bottom">;
  closeOnOverlayClick?: GenericProperty<boolean>;
  childrenWithOutPropagation?: React.ReactNode;
  iconCloseProps?: ButtonProps["iconProps"];
  iconOpenProps?: ButtonProps["iconProps"];
  buttonCloseProps?: ButtonProps;
  buttonOpenProps?: ButtonProps;
}

export interface AsidePropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLElement> {
  size?: "full" | "xl" | "lg" | "md" | "sm" | "xs";
  placement?: "left" | "right" | "top" | "bottom";
  closeOnOverlayClick?: boolean;
}
