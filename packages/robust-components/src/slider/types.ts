import { BaseProps } from "@/types";
import { defaultTheme } from "@robust-ui/theme";
import { ImageProps } from "../image/types";
export interface SliderProps extends BaseProps {
  src: string[] | URL[];
  alt?: string[] | string;
  size?: keyof typeof defaultTheme.sizes;
  isLoading?: boolean;
  ratio?: string;
  isRounded?: boolean;
  fullScreen?: boolean;
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  colorSchema?: keyof typeof defaultTheme.colorSchemaTheme;
  variant?: string;
  imgProp?: ImageProps;
  previewImgProp?: ImageProps;
}

export type ForwardRefExoticSlider = Omit<SliderProps, "ref"> &
  React.RefAttributes<unknown> &
  SliderProps;
