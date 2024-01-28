import { SpanProps } from "@robust-ui/span";
import {
  EnhancedProps,
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
} from "@robust-ui/constructor";

export interface LabelProps extends EnhancedProps<HTMLLabelElement> {
  placement?: PartialOrNestedPartial<"top" | "bottom">;
  isRequired?: PartialOrNestedPartial<boolean>;
  isFocus?: PartialOrNestedPartial<boolean>;
  isHover?: PartialOrNestedPartial<boolean>;
  isDisabled?: PartialOrNestedPartial<boolean>;
  isInvalid?: PartialOrNestedPartial<boolean>;
  isValid?: PartialOrNestedPartial<boolean>;
  text?: PartialOrNestedPartial<string>;
  for?: PartialOrNestedPartial<string>;
  textProps?: SpanProps;
}

export interface LabelPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLLabelElement> {
  placement?: "top" | "bottom";
  placeholder?: string;
  isRequired?: boolean;
  isFocus?: boolean;
  isHover?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  text?: string;
  for?: string;
}
