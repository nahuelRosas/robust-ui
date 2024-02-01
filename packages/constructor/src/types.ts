import { selectors, defaultTheme, colors } from "@robust-ui/theme";

/**
 * Represents a CSS property name with the option to include a raw or HTML version.
 * @template T - The type of the CSS property name.
 */
type CssPropertyNameWithRawOrHtml<T extends string> = `${T}Raw` | `${T}Html`;

/**
 * Represents the type of a theme object.
 */
type ThemeType = typeof defaultTheme;

/**
 * Represents a type that is a partial record with nested properties.
 * @template T - The type of the nested properties.
 */
type NestedRecordPartial<T> = Partial<Record<Partial<string>, T>>;
/**
 * Represents a nested record type.
 * @template T - The type of values in the record.
 */
export type NestedRecord<T> = Partial<
  Record<Partial<string>, T | NestedRecordPartial<T>>
>;

/**
 * Represents a type that can be either a partial object of type T or a nested record of type T.
 * @template T - The type of the object.
 */
type PartialOrNestedPartial<T> = Partial<T> | NestedRecord<T>;

/**
 * Represents an array that can contain either elements of type T, or nested partial objects of type T, or a combination of both.
 * @template T The type of elements in the array.
 */
export type PartialOrNestedPartialArray<T> =
  | T[]
  | PartialOrNestedPartial<T>
  | PartialOrNestedPartial<T>[];

/**
 * Represents a mapping of CSS properties for a specific theme type.
 * @template T - The key of the theme type.
 */
type MappedCssProperties<T extends keyof ThemeType = keyof ThemeType> = {
  [Selector in keyof typeof selectors]?: Selector extends T
    ?
        | PartialOrNestedPartial<keyof ThemeType[Selector & keyof ThemeType]>
        | PartialOrNestedPartialArray<
            keyof ThemeType[Selector & keyof ThemeType]
          >
    : unknown;
};

/**
 * Represents a type that maps HTML properties with raw or HTML values.
 * @template T - The type of the HTML element.
 */
type MappedHTMLPropertiesWithRawOrHtml<T> = {
  [Property in keyof React.HTMLAttributes<T> as CssPropertyNameWithRawOrHtml<
    Extract<Property, string>
  >]?: unknown;
};

/**
 * Represents a mapping of CSS properties with raw or HTML values.
 */
type MappedCSSPropertiesWithRawOrHtml = {
  [Property in keyof typeof selectors as CssPropertyNameWithRawOrHtml<Property>]?:
    | string
    | boolean
    | object
    | number
    | unknown
    | PartialOrNestedPartial<string | boolean | object | number | unknown>
    | PartialOrNestedPartialArray<string | boolean | object | number | unknown>;
};

/**
 * Represents a set of CSS properties with optional values.
 */
type FullCSSProperties = {
  [K in keyof MappedCssProperties]?: MappedCssProperties[K];
} & {
  [K in keyof MappedCSSPropertiesWithRawOrHtml]?: MappedCSSPropertiesWithRawOrHtml[K];
};

/**
 * Represents a subtype of element properties.
 * @template T - The type of the element.
 */
type ElementPropertiesSubType<T> = {
  [K in keyof React.HTMLAttributes<T>]?: React.HTMLAttributes<T>[K];
} & {
  [K in keyof Omit<T, keyof React.HTMLAttributes<T>>]?: T[K];
} & {
  [K in keyof MappedHTMLPropertiesWithRawOrHtml<T>]?: MappedHTMLPropertiesWithRawOrHtml<T>[K];
};

/**
 * Represents a type for custom HTML attributes.
 * @template T - The element type.
 */
type CustomHTMLAttributes<T> = {
  [K in keyof Omit<ElementPropertiesSubType<T>, keyof FullCSSProperties>]?:
    | PartialOrNestedPartial<ElementPropertiesSubType<T>[K]>
    | ElementPropertiesSubType<T>[K];
} & {
  [K in keyof FullCSSProperties]?: FullCSSProperties[K];
};

/**
 * Represents a set of custom HTML attributes without generics.
 * @template T - The type of the HTML element.
 */
type CustomHTMLAttributesNoGeneric<T> = {
  [K in keyof Omit<
    ElementPropertiesSubType<T>,
    keyof FullCSSProperties
  >]?: ElementPropertiesSubType<T>[K];
} & {
  [K in keyof FullCSSProperties]?: FullCSSProperties[K];
};

/**
 * Represents the type definition for enhanced props.
 * @template T - The type of the custom HTML attributes.
 */
export type EnhancedProps<T> = CustomHTMLAttributes<T> & {
  /**
   * Specifies the support for multi-language content.
   */
  multiLanguageSupport?: PartialOrNestedPartial<React.ReactNode>;
  /**
   * Specifies the element type.
   */
  ElementType?: React.ElementType | keyof JSX.IntrinsicElements;
  /**
   * Specifies the color scheme.
   */
  colorScheme?: PartialOrNestedPartial<keyof typeof colors>;
  /**
   * Specifies the raw color scheme.
   */
  colorSchemeRaw?: PartialOrNestedPartial<string>;
  /**
   * Specifies the variant.
   */
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
  /**
   * Specifies the color scheme property.
   */
  colorSchemeProperty?: PartialOrNestedPartial<{
    /**
     * Specifies the variant of the color scheme property.
     */
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
    /**
     * Specifies the base color of the color scheme property.
     */
    baseColor?: keyof typeof colors | string;
    /**
     * Specifies the raw base color of the color scheme property.
     */
    baseColorRaw?: string;
    /**
     * Specifies the opacity of the color scheme property.
     */
    opacity?: number;
    /**
     * Specifies additional properties of the color scheme property.
     */
    props?: {
      monochromeText?: boolean;
      highContrast?: boolean;
      border?: boolean;
      hover?: boolean;
      focus?: boolean;
      active?: boolean;
      background?: boolean;
    };
    /**
     * Specifies if the color scheme property is disabled.
     */
    isDisabled?: boolean;
    /**
     * Specifies if the color scheme property is invalid.
     */
    isInvalid?: boolean;
    /**
     * Specifies if the color scheme property is valid.
     */
    isValid?: boolean;
    /**
     * Specifies if the color scheme property is activated.
     */
    isActivated?: boolean;
    /**
     * Specifies if the color scheme property has a complementary color.
     */
    complementaryColor?: boolean;
  }>;
  /**
   * Specifies the children of the component.
   */
  children?: React.ReactNode;
};

/**
 * Represents the enhanced props for a component with no generic type.
 */
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

/**
 * Represents the props for a component constructor.
 * @template T The type of props for the component.
 */
export interface ComponentConstructorProps<T> {
  componentType: keyof JSX.IntrinsicElements | React.ComponentType<T>;
}

/**
 * Represents a type that is used to create a forward ref component.
 * It is an exotic type that omits the "ref" property from the original type
 * and includes React ref attributes.
 *
 * @template T - The original type.
 */
export type ForwardRefExotic<T> = Omit<
  {
    [K in keyof T]?: T[K];
  },
  "ref"
> &
  React.RefAttributes<unknown>;
