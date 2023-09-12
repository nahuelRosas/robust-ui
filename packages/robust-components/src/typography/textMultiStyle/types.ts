import { BaseProps } from "@/types";
import { defaultTheme } from "@robust-ui/theme";

export interface TextMultiStyleProps extends BaseProps {
  selectorMultiStyles?: string;
  colors?: Partial<keyof typeof defaultTheme.colors>[];
  weights?: Partial<keyof typeof defaultTheme.fontWeight>[];
  randomColors?: boolean;
  active?: boolean;
  multiline?: boolean;
}
