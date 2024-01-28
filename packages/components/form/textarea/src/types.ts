import { LabelProps } from "@robust-ui/label";
import {
  EnhancedProps,
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
} from "@robust-ui/constructor";

export interface TextAreaProps extends EnhancedProps<HTMLTextAreaElement> {
  resetValue?: PartialOrNestedPartial<boolean>;
  isDisabled?: PartialOrNestedPartial<boolean>;
  isRequired?: PartialOrNestedPartial<boolean>;
  isInvalid?: PartialOrNestedPartial<boolean>;
  isLoading?: PartialOrNestedPartial<boolean>;
  isValid?: PartialOrNestedPartial<boolean>;
  value?: PartialOrNestedPartial<string>;
  labelProps?: LabelProps;
}

export interface TextAreaPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLTextAreaElement> {
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
  resetValue?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  isLoading?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  value?: string;
  id?: string;
}
