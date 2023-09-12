import { Ref } from "react";
// Importing the "Ref" type from "react"

import {
  CssPropertyMappings,
  defaultTheme,
  cssGenerators,
  Language,
  ArgumentMappings,
} from "@robust-ui/theme";
// Importing "CssPropertyMappings" and "Theme" from "@robust-ui/theme"

export type ThemeType = typeof defaultTheme;
// Creating a type alias "ThemeType" that represents the type of "Theme"

export type ConstructorProps<T> = {
  [key: string]: T;
};
// Defining a type "ConstructorProps" that represents constructor properties of a generic type "T"

type CssPropertyMapping = {
  [Key in keyof typeof CssPropertyMappings]?: (typeof CssPropertyMappings)[Key] extends keyof ThemeType
    ?
        | keyof ThemeType[(typeof CssPropertyMappings)[Key]]
        | ConstructorProps<keyof ThemeType[(typeof CssPropertyMappings)[Key]]>
    :
        | string
        | boolean
        | object
        | number
        | ConstructorProps<string | boolean | object | number>;
};
// Defining a type "CssPropertyMapping" that maps CSS property names to their corresponding values in the theme

type GetArgumentByKey<Key extends keyof typeof CssPropertyMappings> =
  ArgumentMappings[Key];

type CssGeneratorMapping = {
  [Key in keyof typeof CssPropertyMappings]?: GetArgumentByKey<Key>;
};

type MergeCssMappings<A, B> = Omit<A, keyof B> & B;

type CustomHTMLAttributes<T> = React.HTMLAttributes<T> &
  MergeCssMappings<CssPropertyMapping, CssGeneratorMapping>;

// Defining a type "CustomHTMLAttributes" that extends the standard HTML attributes with CSS property mappings

export interface BaseProps extends CustomHTMLAttributes<HTMLElement> {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  componentName?: string;
  ref?: Ref<unknown> | undefined;
  isDraggable?: boolean | undefined;
  multiLanguage?: Partial<Record<keyof typeof Language, React.ReactNode>>;
  [key: string]: unknown;
}
// Defining an interface "BaseProps" that extends the custom HTML attributes and includes additional props for the base component
