import { selectors, defaultTheme } from "@robust-ui/theme";

export type ThemeType = typeof defaultTheme;

export type CssPropertyNameWithRawOrHtml<T extends string> =
  | `${T}Raw`
  | `${T}Html`;
export type CssPropertyNameWithoutRawOrHtml<T extends string> = T extends
  | `${infer U}Raw`
  | `${infer U}Html`
  ? U
  : T;

export type MappedCssProperties<T extends keyof ThemeType = keyof ThemeType> = {
  [Selector in keyof typeof selectors]?: Selector extends T
    ?
        | keyof ThemeType[Selector & keyof ThemeType]
        | GenericProperty<keyof ThemeType[Selector & keyof ThemeType]>
        | GenericPropertyArray<keyof ThemeType[Selector & keyof ThemeType]>
        | GenericProperty<string | boolean | object | number | unknown>
        | GenericPropertyArray<string | boolean | object | number | unknown>
        | string
        | boolean
        | object
        | number
        | unknown
    : string | boolean | object | number | unknown;
};

export type MappedHTMLPropertiesWithRawOrHtml<T> = {
  [Property in keyof React.HTMLAttributes<T> as CssPropertyNameWithRawOrHtml<
    Extract<Property, string>
  >]?: unknown;
};

export type MappedCSSPropertiesWithRawOrHtml = {
  [Property in keyof typeof selectors as CssPropertyNameWithRawOrHtml<Property>]?: unknown;
};

export type CustomHTMLAttributes<T> = React.HTMLAttributes<T> &
  MappedCssProperties &
  MappedHTMLPropertiesWithRawOrHtml<T> &
  MappedCSSPropertiesWithRawOrHtml;

export type EnhancedElementProps<T> = CustomHTMLAttributes<T> & {
  multiLanguageSupport?: Partial<Record<string, React.ReactNode>>;
  ElementType?: React.ElementType | keyof JSX.IntrinsicElements;
  elementName?: string;
};

export interface ComponentConstructorProps<T> {
  ComponentType: keyof JSX.IntrinsicElements | React.ComponentType<T>;
}

export type GenericProperty<T> =
  | T
  | Partial<T>
  | Record<string, T>
  | Record<string, Partial<T>>
  | Record<string, Record<string, T>>
  | Record<string, Record<string, Partial<T>>>;

export type GenericPropertyArray<T> =
  | GenericProperty<T>[]
  | GenericProperty<T>
  | T[];
