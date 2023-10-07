import { EnhancedElementProps, GenericProperty } from "@robust-ui/constructor";
import { ReactEventHandler } from "react";
import { colors, sizes } from "@robust-ui/theme";

export type ImageLoadEvent = React.SyntheticEvent<HTMLImageElement, Event>;

export interface ImageProps extends EnhancedElementProps<HTMLImageElement> {
  crossOrigin?: "anonymous" | "use-credentials" | "";
  onError?: ReactEventHandler<HTMLImageElement>;
  size?: GenericProperty<keyof typeof sizes>;
  onLoad?: (event: ImageLoadEvent) => void;
  sizeRaw?: GenericProperty<string>;
  ratio?: GenericProperty<string>;
  ignoreFallback?: boolean;
  isSlider?: boolean;
  colors?: {
    primary: GenericProperty<keyof typeof colors>;
    secondary: GenericProperty<keyof typeof colors>;
  };
  imgProp?: GenericProperty<ImageProps>;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  modelSpinner?: "A" | "B" | "C";
  isLoading?: boolean;
  isRounded?: boolean;
  isLazy?: boolean;
  delay?: number;
  src?: string | string[];
  alt?: string | string[];
  srcSet?: {
    url: string;
    size: string;
  }[];
}

export interface ImagePropsClean
  extends EnhancedElementProps<HTMLImageElement> {
  crossOrigin?: "anonymous" | "use-credentials" | "";
  onError?: ReactEventHandler<HTMLImageElement>;
  onLoad?: (event: ImageLoadEvent) => void;
  size?: keyof typeof sizes;
  ignoreFallback?: boolean;
  colors?: {
    primary: keyof typeof colors;
    secondary: keyof typeof colors;
  };
  isSlider?: boolean;
  imgProp?: ImageProps;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  modelSpinner?: "A" | "B" | "C";
  isLoading?: boolean;
  isRounded?: boolean;
  sizeRaw?: string;
  isLazy?: boolean;
  ratio?: string;
  delay?: number;
  src?: string | string[];
  alt?: string | string[];
  srcSet?: {
    url: string;
    size: string;
  }[];
}

export type ForwardRefExoticImage = Omit<ImageProps, "ref"> &
  React.RefAttributes<unknown> &
  ImageProps;
