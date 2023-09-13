import { BaseProps } from "@/types";
import { defaultTheme } from "@robust-ui/theme";

export interface ImageProps extends BaseProps {
  src?: URL | string;
  alt?: string;
  size?: keyof typeof defaultTheme.sizes;
  isLoading?: boolean;
  ratio?: string;
  isRounded?: boolean;
}

export type ForwardRefExoticImage = Omit<ImageProps, "ref"> &
  React.RefAttributes<unknown> &
  ImageProps;
