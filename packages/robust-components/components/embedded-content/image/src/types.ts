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

  // iconCloseProps?: GenericProperty<ButtonProps["iconProps"]>;
  // buttonCloseProps?: GenericProperty<ButtonProps>;
  // errorProps?: GenericProperty<IconProps>;
  // colorScheme?: GenericProperty<keyof typeof colors>;
  // opacityColorScheme?: GenericProperty<number>;
  // colorSchemeRaw?: GenericProperty<string>;
  // altColor?: GenericProperty<boolean>;
  // size?: GenericProperty<keyof typeof sizes>;
  // sizeRaw?: GenericProperty<string>;
  // ratio?: GenericProperty<string>;
  // ignoreFallback?: GenericProperty<boolean>;
  // isSlider?: GenericProperty<boolean>;
  // colors?: GenericProperty<{
  //   primary: GenericProperty<keyof typeof colors>;
  //   secondary: GenericProperty<keyof typeof colors>;
  // }>;
  // imgProp?: GenericProperty<ImageProps>;
  // prevIcon?: GenericProperty<React.ReactNode>;
  // nextIcon?: GenericProperty<React.ReactNode>;
  // isLoading?: GenericProperty<boolean>;
  // isRounded?: GenericProperty<boolean>;
  // isLazy?: GenericProperty<boolean>;
  // delay?: GenericProperty<number>;
  // srcSet?: GenericPropertyArray<{
  //   url: string;
  //   size: string;
  // }>;
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

  // iconCloseProps?: IconProps;
  // buttonCloseProps?: ButtonProps;
  // size?: keyof typeof sizes;
  // sizeRaw?: string;
  // errorProps?: IconProps;
  // colorScheme?: keyof typeof colors;
  // opacityColorScheme?: number;
  // colorSchemeRaw?: string;
  // altColor?: boolean;
  // ratio?: string;
  // ignoreFallback?: boolean;
  // isSlider?: boolean;
  // colors?: {
  //   primary: keyof typeof colors;
  //   secondary: keyof typeof colors;
  // };
  // spinnerProps?: SpinnerProps;
  // imgProp?: ImageProps;
  // prevIcon?: React.ReactNode;
  // nextIcon?: React.ReactNode;
  // isLoading?: boolean;
  // isRounded?: boolean;
  // isLazy?: boolean;
  // delay?: number;
  // srcSet?: {
  //   url: string;
  //   size: string;
  // }[];
}
