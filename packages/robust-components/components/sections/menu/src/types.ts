import { EnhancedElementProps, GenericProperty } from "@robust-ui/constructor";
import { Ticon } from "@robust-ui/icon";
import { defaultTheme, sizes, colors } from "@robust-ui/theme";
export interface MenuProps extends EnhancedElementProps<HTMLElement> {
  propsButton?: {
    heading?:
      | GenericProperty<{
          [key: string]: string;
        }>
      | GenericProperty<string>;
    iconMenu?: GenericProperty<Ticon>;
    sizeIcon?: GenericProperty<keyof typeof sizes>;
    fontSize?: GenericProperty<keyof (typeof defaultTheme)["fontSize"]>;
    fontSizeRaw?: GenericProperty<string>;
    color?: GenericProperty<keyof typeof colors>;
    colorRaw?: GenericProperty<string>;
    backgroundColor?: GenericProperty<keyof typeof colors>;
    backgroundColorRaw?: GenericProperty<string>;
    fontWeight?: GenericProperty<keyof (typeof defaultTheme)["fontWeight"]>;
    fontWeightRaw?: GenericProperty<string>;
    textTransform?: GenericProperty<
      keyof (typeof defaultTheme)["textTransform"]
    >;
    textTransformRaw?: GenericProperty<string>;
  };
}
export interface MenuPropsClean extends EnhancedElementProps<HTMLElement> {
  propsButton?: {
    heading?: { [key: string]: string } | string;
    iconMenu?: Ticon;
    sizeIcon?: keyof typeof sizes;
    fontSize?: keyof (typeof defaultTheme)["fontSize"];
    fontSizeRaw?: string;
    color?: keyof typeof colors;
    colorRaw?: string;
    backgroundColor?: keyof typeof colors;
    backgroundColorRaw?: string;
    fontWeight?: keyof (typeof defaultTheme)["fontWeight"];
    fontWeightRaw?: string;
    textTransform?: keyof (typeof defaultTheme)["textTransform"];
    textTransformRaw?: string;
  };
}

export type ForwardRefExoticMenu = Omit<MenuProps, "ref"> &
  React.RefAttributes<unknown> &
  MenuProps;
