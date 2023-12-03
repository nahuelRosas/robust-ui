import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { LabelProps } from "@robust-ui/label";

export interface TextAreaProps
  extends EnhancedElementProps<HTMLTextAreaElement> {
  resetValue?: GenericProperty<boolean>;
  isDisabled?: GenericProperty<boolean>;
  isRequired?: GenericProperty<boolean>;
  isInvalid?: GenericProperty<boolean>;
  isLoading?: GenericProperty<boolean>;
  isValid?: GenericProperty<boolean>;
  value?: GenericProperty<string>;
  labelProps?: LabelProps;
}

export interface TextAreaPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLTextAreaElement> {
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
