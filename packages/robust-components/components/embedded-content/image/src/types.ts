import {
  GenericProperty,
  EnhancedElementProps,
  GenericPropertyArray,
  EnhancedElementPropsNoGeneric,
} from "@robust-ui/constructor";
import { ButtonProps } from "@robust-ui/button";
import { SpinnerProps } from "@robust-ui/spinner";
import { IconProps } from "@robust-ui/icon";
import { colors, sizes } from "@robust-ui/theme";

export interface ImageProps extends EnhancedElementProps<HTMLImageElement> {
  iconCloseProps?: GenericProperty<ButtonProps["iconProps"]>;
  spinnerProps?: GenericProperty<SpinnerProps>;
  buttonCloseProps?: GenericProperty<ButtonProps>;

  errorProps?: GenericProperty<IconProps>;
  colorScheme?: GenericProperty<keyof typeof colors>;
  opacityColorScheme?: GenericProperty<number>;
  colorSchemeRaw?: GenericProperty<string>;
  altColor?: GenericProperty<boolean>;
  size?: GenericProperty<keyof typeof sizes>;
  sizeRaw?: GenericProperty<string>;
  ratio?: GenericProperty<string>;
  ignoreFallback?: GenericProperty<boolean>;
  isSlider?: GenericProperty<boolean>;
  colors?: GenericProperty<{
    primary: GenericProperty<keyof typeof colors>;
    secondary: GenericProperty<keyof typeof colors>;
  }>;
  imgProp?: GenericProperty<ImageProps>;
  prevIcon?: GenericProperty<React.ReactNode>;
  nextIcon?: GenericProperty<React.ReactNode>;
  isLoading?: GenericProperty<boolean>;
  isRounded?: GenericProperty<boolean>;
  isLazy?: GenericProperty<boolean>;
  delay?: GenericProperty<number>;
  srcSet?: GenericPropertyArray<{
    url: string;
    size: string;
  }>;
}

export interface ImagePropNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLImageElement> {
  iconCloseProps?: IconProps;
  buttonCloseProps?: ButtonProps;
  size?: keyof typeof sizes;
  sizeRaw?: string;
  errorProps?: IconProps;
  colorScheme?: keyof typeof colors;
  opacityColorScheme?: number;
  colorSchemeRaw?: string;
  altColor?: boolean;
  ratio?: string;
  ignoreFallback?: boolean;
  isSlider?: boolean;
  colors?: {
    primary: keyof typeof colors;
    secondary: keyof typeof colors;
  };
  spinnerProps?: SpinnerProps;
  imgProp?: ImageProps;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  isLoading?: boolean;
  isRounded?: boolean;
  isLazy?: boolean;
  delay?: number;
  srcSet?: {
    url: string;
    size: string;
  }[];
}
