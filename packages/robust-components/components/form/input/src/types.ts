import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericProperty,
} from "@robust-ui/constructor";
import { LabelProps } from "@robust-ui/label";

export interface InputProps extends EnhancedElementProps<HTMLInputElement> {
  resetValue?: GenericProperty<boolean>;
  placeholder?: GenericProperty<string>;
  isDisabled?: GenericProperty<boolean>;
  isRequired?: GenericProperty<boolean>;
  isInvalid?: GenericProperty<boolean>;
  isValid?: GenericProperty<boolean>;
  labelProps?: LabelProps;
}

export interface InputPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLInputElement> {
  resetValue?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isLoading?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
