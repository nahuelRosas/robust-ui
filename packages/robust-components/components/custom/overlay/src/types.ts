import { StyledTextProps } from "@robust-ui/nested-styled-text";
import { ButtonProps } from "@robust-ui/button";
import { CardProps } from "@robust-ui/card";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";

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
  labelCard?:
    | string
    | {
        text?: string;
        labelProps?: StyledTextProps;
      };
}
