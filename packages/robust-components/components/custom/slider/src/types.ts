import { EnhancedElementProps, GenericProperty } from "@robust-ui/constructor";
import { ReactEventHandler } from "react";
import { sizes, colorSchema } from "@robust-ui/theme";
import { ImageProps } from "@robust-ui/image";

export type SliderLoadEvent = React.SyntheticEvent<HTMLImageElement, Event>;
type StringWithRawHtml<T extends string> = `${T}Raw` | `${T}Html`;

export interface SliderProps extends EnhancedElementProps<HTMLImageElement> {
  colorSchema?: GenericProperty<keyof typeof colorSchema>;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  onError?: ReactEventHandler<HTMLImageElement>;
  onLoad?: (event: SliderLoadEvent) => void;
  size?: GenericProperty<keyof typeof sizes>;
  previewImgProp?: GenericProperty<ImageProps>;
  imgProp?: GenericProperty<ImageProps>;
  fullScreen?: GenericProperty<boolean>;
  sizeRaw?: GenericProperty<string>;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  ignoreFallback?: boolean;
  alt?: string[] | string;
  src: string[] | URL[];
  isLoading?: boolean;
  isRounded?: boolean;
  isLazy?: boolean;
  ratio?: string;
  delay?: number;
  srcSet?: {
    url: string;
    size: string;
  }[];
}

export interface SliderPropsClean
  extends EnhancedElementProps<HTMLImageElement> {
  colorSchema?: keyof typeof colorSchema;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  onError?: ReactEventHandler<HTMLImageElement>;
  onLoad?: (event: SliderLoadEvent) => void;
  size?: keyof typeof sizes;
  previewImgProp?: ImageProps;
  imgProp?: ImageProps;
  fullScreen?: boolean;
  sizeRaw?: string;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  ignoreFallback?: boolean;
  alt?: string[] | string;
  src: string[] | URL[];
  isLoading?: boolean;
  isRounded?: boolean;
  isLazy?: boolean;
  ratio?: string;
  delay?: number;
  srcSet?: {
    url: string;
    size: string;
  }[];
}

export type ForwardRefExoticSlider = Omit<SliderProps, "ref"> &
  React.RefAttributes<unknown> &
  SliderProps;
