import { BaseProps } from "../../types";

export interface FormControlProps extends BaseProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  label?: string;
}
