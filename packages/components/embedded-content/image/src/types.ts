import { ButtonProps } from "@robust-ui/button";
import {
  EnhancedPropsNoGeneric,
  PartialOrNestedPartial,
  PartialOrNestedPartialArray,
  EnhancedProps,
} from "@robust-ui/constructor";
import { SpinnerProps } from "@robust-ui/spinner";
import { sizes } from "@robust-ui/theme";

export interface ImageProps extends EnhancedProps<HTMLImageElement> {
  ignoreFallback?: PartialOrNestedPartial<boolean>;
  srcArray?: PartialOrNestedPartialArray<string>;
  altArray?: PartialOrNestedPartialArray<string>;
  isRounded?: PartialOrNestedPartial<boolean>;
  isSlider?: PartialOrNestedPartial<boolean>;
  sizeRaw?: PartialOrNestedPartial<string>;
  ratio?: PartialOrNestedPartial<string>;
  srcSet?: PartialOrNestedPartialArray<{
    url: string;
    size: string;
  }>;
  delay?: PartialOrNestedPartial<number>;
  spinnerProps?: SpinnerProps;
  iconCloseProps?: ButtonProps["iconProps"];
  iconOpenProps?: ButtonProps["iconProps"];
  buttonCloseProps?: ButtonProps;
  buttonOpenProps?: ButtonProps;
}

export interface ImagePropNoGeneric
  extends EnhancedPropsNoGeneric<HTMLImageElement> {
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
