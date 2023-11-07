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

export type FullCSSProperties = {
  [K in keyof MappedCssProperties]?: MappedCssProperties[K];
} & {
  [K in keyof MappedCSSPropertiesWithRawOrHtml]?: MappedCSSPropertiesWithRawOrHtml[K];
};

export type ElementPropertiesSubType<T> = {
  [K in keyof React.HTMLAttributes<T>]?: React.HTMLAttributes<T>[K];
} & {
  [K in keyof Omit<T, keyof React.HTMLAttributes<T>>]?: T[K];
} & {
  [K in keyof MappedHTMLPropertiesWithRawOrHtml<T>]?: MappedHTMLPropertiesWithRawOrHtml<T>[K];
};

export type CustomHTMLAttributes<T> = Pick<
  FullCSSProperties,
  Exclude<keyof FullCSSProperties, ElementPropertiesSubType<T>>
>;

type A = CustomHTMLAttributes<HTMLDivElement>[""];

//  & FullCSSProperties;

export type EnhancedElementProps<T> = CustomHTMLAttributes<T> & {
  multiLanguageSupport?: Partial<Record<string, React.ReactNode>> | string;
  ElementType?: React.ElementType | keyof JSX.IntrinsicElements;
  elementName?: string;
};

export type EnhancedElementPropsNoGeneric<T> = CustomHTMLAttributes<T> & {
  ElementType?: React.ElementType | keyof JSX.IntrinsicElements;
  multiLanguageSupport?: string;
  elementName?: string;
};

export interface ComponentConstructorProps<T> {
  componentType: keyof JSX.IntrinsicElements | React.ComponentType<T>;
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

export type ForwardRefExotic<T> = Omit<
  {
    [K in keyof T]?: T[K];
  },
  "ref"
> &
  React.RefAttributes<unknown>;
