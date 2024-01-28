import { selectors, defaultTheme, colors } from "@robust-ui/theme";

export type CssPropertyNameWithRawOrHtml<T extends string> =
  | `${T}Raw`
  | `${T}Html`;

export type CssPropertyNameWithoutRawOrHtml<T extends string> = T extends
  | `${infer U}Raw`
  | `${infer U}Html`
  ? U
  : T;

export type ThemeType = typeof defaultTheme;

type NestedRecordPartial<T> = Partial<Record<Partial<string>, T>>;
type NestedRecord<T> = Partial<
  Record<Partial<string>, T | NestedRecordPartial<T>>
>;
export type PartialOrNestedPartial<T> = Partial<T> | NestedRecord<T>;

export type PartialOrNestedPartialArray<T> =
  | T[]
  | PartialOrNestedPartial<T>
  | PartialOrNestedPartial<T>[];

export type MappedCssProperties<T extends keyof ThemeType = keyof ThemeType> = {
  [Selector in keyof typeof selectors]?: Selector extends T
    ?
        | PartialOrNestedPartial<keyof ThemeType[Selector & keyof ThemeType]>
        | PartialOrNestedPartialArray<
            keyof ThemeType[Selector & keyof ThemeType]
          >
    : unknown;
};

export type MappedHTMLPropertiesWithRawOrHtml<T> = {
  [Property in keyof React.HTMLAttributes<T> as CssPropertyNameWithRawOrHtml<
    Extract<Property, string>
  >]?: unknown;
};

export type MappedCSSPropertiesWithRawOrHtml = {
  [Property in keyof typeof selectors as CssPropertyNameWithRawOrHtml<Property>]?:
    | string
    | boolean
    | object
    | number
    | unknown
    | PartialOrNestedPartial<string | boolean | object | number | unknown>
    | PartialOrNestedPartialArray<string | boolean | object | number | unknown>;
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

export type CustomHTMLAttributes<T> = {
  [K in keyof Omit<ElementPropertiesSubType<T>, keyof FullCSSProperties>]?:
    | PartialOrNestedPartial<ElementPropertiesSubType<T>[K]>
    | ElementPropertiesSubType<T>[K];
} & {
  [K in keyof FullCSSProperties]?: FullCSSProperties[K];
};

export type CustomHTMLAttributesNoGeneric<T> = {
  [K in keyof Omit<
    ElementPropertiesSubType<T>,
    keyof FullCSSProperties
  >]?: ElementPropertiesSubType<T>[K];
} & {
  [K in keyof FullCSSProperties]?: FullCSSProperties[K];
};

export type EnhancedProps<T> = CustomHTMLAttributes<T> & {
  multiLanguageSupport?: PartialOrNestedPartial<React.ReactNode>;
  ElementType?: React.ElementType | keyof JSX.IntrinsicElements;
  colorScheme?: PartialOrNestedPartial<keyof typeof colors>;
  colorSchemeRaw?: PartialOrNestedPartial<string>;
  variant?: PartialOrNestedPartial<
    | "solid"
    | "solidLight"
    | "solidDark"
    | "outline"
    | "outlineLight"
    | "outlineDark"
    | "ghost"
    | "link"
    | "linkLight"
    | "linkDark"
  >;
  colorSchemeProperty?: PartialOrNestedPartial<{
    variant?:
      | "solid"
      | "solidLight"
      | "solidDark"
      | "outline"
      | "outlineLight"
      | "outlineDark"
      | "ghost"
      | "link"
      | "linkLight"
      | "linkDark";
    baseColor?: keyof typeof colors | string;
    baseColorRaw?: string;
    opacity?: number;
    props?: {
      monochromeText?: boolean;
      highContrast?: boolean;
      border?: boolean;
      hover?: boolean;
      focus?: boolean;
      active?: boolean;
      background?: boolean;
    };
    isDisabled?: boolean;
    isInvalid?: boolean;
    isValid?: boolean;
    isActivated?: boolean;
    complementaryColor?: boolean;
  }>;
  children?: React.ReactNode;
};

export type EnhancedPropsNoGeneric<T> = CustomHTMLAttributesNoGeneric<T> & {
  ElementType?: React.ElementType | keyof JSX.IntrinsicElements;
  colorScheme?: keyof typeof colors;
  multiLanguageSupport?: React.ReactNode;
  colorSchemeRaw?: string;
  variant?:
    | "solid"
    | "solidLight"
    | "solidDark"
    | "outline"
    | "outlineLight"
    | "outlineDark"
    | "ghost"
    | "link"
    | "linkLight"
    | "linkDark";
  colorSchemeProperty?: {
    variant?:
      | "solid"
      | "solidLight"
      | "solidDark"
      | "outline"
      | "outlineLight"
      | "outlineDark"
      | "ghost"
      | "link"
      | "linkLight"
      | "linkDark";
    baseColor?: keyof typeof colors | string;
    baseColorRaw?: string;
    opacity?: number;
    props?: {
      monochromeText?: boolean;
      highContrast?: boolean;
      border?: boolean;
      hover?: boolean;
      focus?: boolean;
      active?: boolean;
      background?: boolean;
    };
    isDisabled?: boolean;
    isInvalid?: boolean;
    isValid?: boolean;
    isActivated?: boolean;
    complementaryColor?: boolean;
  };
  children?: React.ReactNode;
};

export interface ComponentConstructorProps<T> {
  componentType: keyof JSX.IntrinsicElements | React.ComponentType<T>;
}

export type ForwardRefExotic<T> = Omit<
  {
    [K in keyof T]?: T[K];
  },
  "ref"
> &
  React.RefAttributes<unknown>;
