import { BaseProps } from "@/types";
import { LinkProps as NextLinkProps } from "next/link";
import { Ref } from "react";
import { defaultTheme } from "@robust-ui/theme";
/**
 * Props for the Link component.
 */

export type LinkProps = BaseProps &
  Omit<BaseProps, keyof NextLinkProps> &
  NextLinkProps & {
    ref?: Ref<unknown> | undefined;
    colors?: Partial<
      Record<"primary" | "secondary", keyof typeof defaultTheme.colors>
    >;
    backgroundColors?: Partial<
      Record<"primary" | "secondary", keyof typeof defaultTheme.colors>
    >;
    useColors?: boolean;
  };
