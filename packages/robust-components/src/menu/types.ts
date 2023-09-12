import { IconType } from "@/icon/types";
import { defaultTheme } from "@robust-ui/theme";
import { BaseProps } from "../types";

export interface MenuPropsWithoutBase extends Omit<BaseProps, "title"> {
  open?: boolean;
  onClose?: () => void;
  title?: Record<string, string> | string;
  icon?: React.ReactNode;
  buttonPersistence?: boolean;
  iconType?: IconType;
  size?: keyof typeof defaultTheme.sizes;
}

export type MenuProps = MenuPropsWithoutBase & BaseProps;
