import { StyledTextProps } from "@robust-ui/styled-text";
import { ButtonProps } from "@robust-ui/button";
import { CardProps } from "@robust-ui/card";
import {
  PartialOrNestedPartial,
  EnhancedPropsNoGeneric,
  EnhancedProps,
} from "@robust-ui/constructor";

export interface OverlayProps extends EnhancedProps<HTMLDivElement> {
  closeOnOverlayClick?: PartialOrNestedPartial<boolean>;
  iconCloseProps?: ButtonProps["iconProps"];
  iconOpenProps?: ButtonProps["iconProps"];
  paragraphCard?: CardProps["paragraph"];
  isDisabled?: PartialOrNestedPartial<boolean>;
  labelCard?: CardProps["label"];
  buttonCloseProps?: ButtonProps;
  buttonOpenProps?: ButtonProps;
  cardProps?: CardProps;
}

export interface OverlayPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLDivElement> {
  closeOnOverlayClick?: boolean;
  isDisabled?: boolean;
  labelCard?:
    | string
    | {
        text?: string;
        labelProps?: StyledTextProps;
      };
}
