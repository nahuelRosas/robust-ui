import { Ref } from "react";
// Importing the "Ref" type from "react"

import {
  cssGenerators,
  CssPropertyMappings,
  defaultTheme,
  Language,
} from "@robust-ui/theme";
// Importing "CssPropertyMappings" and "Theme" from "@robust-ui/theme"

export type ThemeType = typeof defaultTheme;
// Creating a type alias "ThemeType" that represents the type of "Theme"

type Props<T> = {
  [key: string]: T;
};
// Defining a type "ConstructorProps" that represents constructor properties of a generic type "T"
type CssPropertyMapping = {
  [Key in keyof typeof CssPropertyMappings]?: (typeof CssPropertyMappings)[Key] extends keyof ThemeType
    ?
        | keyof ThemeType[(typeof CssPropertyMappings)[Key]]
        | Props<keyof ThemeType[(typeof CssPropertyMappings)[Key]]>
    : string | Props<string>;
};
// Defining a type "CssPropertyMapping" that maps CSS property names to their corresponding values in the theme

type CssGeneratorMapping = {
  [Key in keyof typeof cssGenerators]?:
    | string
    | boolean
    | object
    | number
    | unknown
    | undefined
    | Props<string | boolean | object | number | unknown | undefined>;
};

type MergeCssMappings<A, B> = Omit<A, keyof B> & B;

type CustomHTMLAttributes<T> = React.HTMLAttributes<T> &
  MergeCssMappings<CssGeneratorMapping, CssPropertyMapping>;

export interface BaseProps extends CustomHTMLAttributes<HTMLElement> {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  componentName?: string;
  ref?: Ref<unknown> | undefined;
  isDraggable?: boolean | undefined;
  multiLanguage?: Partial<Record<keyof typeof Language, React.ReactNode>>;
  variant?: boolean;
  autoHeight?: boolean;
  autoWidth?: boolean;
  [key: string]: unknown;
}
// Defining an interface "BaseProps" that extends the custom HTML attributes and includes additional props for the base component

export interface ConstructorProps<T> {
  Component: keyof JSX.IntrinsicElements | React.ComponentType<T>;
  OmitProvider?: boolean;
}
// Defining an interface "Constructor" that represents the props for the Constructor component, including the wrapped component type
