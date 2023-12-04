import { ButtonProps } from "@robust-ui/button";
import {
  GenericProperty,
  EnhancedElementProps,
  GenericPropertyArray,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/constructor";
import { SpinnerProps } from "@robust-ui/spinner";
import { sizes } from "@robust-ui/theme";

export interface ImageProps extends EnhancedElementProps<HTMLImageElement> {
  ignoreFallback?: GenericProperty<boolean>;
  srcArray?: GenericPropertyArray<string>;
  altArray?: GenericPropertyArray<string>;
  isRounded?: GenericProperty<boolean>;
  isSlider?: GenericProperty<boolean>;
  sizeRaw?: GenericProperty<string>;
  ratio?: GenericProperty<string>;
  srcSet?: GenericPropertyArray<{
    url: string;
    size: string;
  }>;
  delay?: GenericProperty<number>;
  spinnerProps?: SpinnerProps;
  iconCloseProps?: ButtonProps["iconProps"];
  iconOpenProps?: ButtonProps["iconProps"];
  buttonCloseProps?: ButtonProps;
  buttonOpenProps?: ButtonProps;
}

export interface ImagePropNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLImageElement> {
  size?: keyof typeof sizes;
  ignoreFallback?: boolean;
  isRounded?: boolean;
  srcArray?: string[];
  altArray?: string[];
  isSlider?: boolean;
  sizeRaw?: string;
  ratio?: string;
  srcSet?: {
    url: string;
    size: string;
  }[];
  delay?: number;
}
