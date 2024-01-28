import { ButtonProps } from "@robust-ui/button";
import { SpanProps } from "@robust-ui/span";
import {
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
  EnhancedProps,
} from "@robust-ui/constructor";
export interface CodeTextProps extends EnhancedProps<HTMLDivElement> {
  copyButton?: PartialOrNestedPartial<boolean>;
  copyButtonProps?: PartialOrNestedPartial<ButtonProps>;
  textProps?: PartialOrNestedPartial<SpanProps>;
  isDisabled?: PartialOrNestedPartial<boolean>;
}

export interface CodeTextPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLDivElement> {
  copyButton?: boolean;
  isDisabled?: boolean;
}
