import { defaultTheme } from "@robust-ui/theme";

export interface MultiStyleStringProps {
  children: React.ReactNode;
  multiStyles?: {
    state: boolean;
    selectorMultiStyles?: string;
    colors?: Partial<keyof typeof defaultTheme.colors>[];
    weights?: Partial<keyof typeof defaultTheme.fontWeight>[];
    randomColors?: boolean;
  };
}
