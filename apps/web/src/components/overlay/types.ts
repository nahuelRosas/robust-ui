import {
  EnhancedElementProps,
  EnhancedElementPropsNoGeneric,
  GenericProperty,
} from "@robust-ui/nextjs-components";
import { ButtonProps } from "../button";
import { CardProps } from "../card/types";

export interface OverlayProps extends EnhancedElementProps<HTMLDivElement> {
  closeOnOverlayClick?: GenericProperty<boolean>;
  iconCloseProps?: ButtonProps["iconProps"];
  iconOpenProps?: ButtonProps["iconProps"];
  paragraphCard?: CardProps["paragraph"];
  isDisabled?: GenericProperty<boolean>;
  labelCard?: CardProps["label"];
  buttonCloseProps?: ButtonProps;
  buttonOpenProps?: ButtonProps;
  cardProps?: CardProps;
}

export interface OverlayPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  closeOnOverlayClick?: boolean;
  isDisabled?: boolean;
}
