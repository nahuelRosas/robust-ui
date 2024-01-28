import {
  EnhancedProps,
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
} from "@robust-ui/constructor";
import { LabelProps } from "@robust-ui/label";

export interface InputProps extends EnhancedProps<HTMLInputElement> {
  resetValue?: PartialOrNestedPartial<boolean>;
  placeholder?: PartialOrNestedPartial<string>;
  isDisabled?: PartialOrNestedPartial<boolean>;
  isRequired?: PartialOrNestedPartial<boolean>;
  isInvalid?: PartialOrNestedPartial<boolean>;
  isValid?: PartialOrNestedPartial<boolean>;
  labelProps?: LabelProps;
}

export interface InputPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLInputElement> {
  resetValue?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isLoading?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
