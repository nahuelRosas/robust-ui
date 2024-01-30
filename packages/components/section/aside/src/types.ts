import {
  EnhancedProps,
  PartialOrNestedPartial,
  EnhancedPropsNoGeneric,
} from "@robust-ui/constructor";
import { ButtonProps } from "@robust-ui/button";

export interface AsideProps extends EnhancedProps<HTMLElement> {
  size?: PartialOrNestedPartial<"100%" | "xl" | "lg" | "md" | "sm" | "xs">;
  placement?: PartialOrNestedPartial<"left" | "right" | "top" | "bottom">;
  closeOnOverlayClick?: PartialOrNestedPartial<boolean>;
  childrenWithOutPropagation?: React.ReactNode;
  iconCloseProps?: ButtonProps["iconProps"];
  iconOpenProps?: ButtonProps["iconProps"];
  buttonCloseProps?: ButtonProps;
  buttonOpenProps?: ButtonProps;
}

export interface AsidePropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLElement> {
  size?: "100%" | "xl" | "lg" | "md" | "sm" | "xs";
  placement?: "left" | "right" | "top" | "bottom";
  closeOnOverlayClick?: boolean;
}
