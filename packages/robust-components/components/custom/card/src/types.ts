import { StyledTextProps } from "@robust-ui/nested-styled-text";
import { NextLinkProps } from "@robust-ui/next-link";
import { ImageProps } from "@robust-ui/image";
import {
  EnhancedElementPropsNoGeneric,
  EnhancedElementProps,
  GenericPropertyArray,
  GenericProperty,
} from "@robust-ui/constructor";

export interface CardProps extends EnhancedElementProps<HTMLDivElement> {
  label?: GenericProperty<
    | {
        text: GenericProperty<string>;
        labelProps?: StyledTextProps;
      }
    | string
  >;
  paragraph?: GenericProperty<
    | {
        paragraphProps?: StyledTextProps;
        text: GenericProperty<string>;
      }
    | string
  >;
  header?: GenericProperty<
    | {
        headerProps?: NextLinkProps;
        text: GenericProperty<string>;
        href?: GenericProperty<string>;
      }
    | string
  >;
  images?: GenericProperty<
    | {
        src: GenericPropertyArray<string>;
        imagesProps?: ImageProps;
      }
    | string[]
  >;

  data?: GenericPropertyArray<{
    images?: GenericProperty<
      | {
          src: GenericPropertyArray<string>;
          imagesProps?: ImageProps;
        }
      | string[]
    >;
    label?: GenericProperty<
      | {
          labelProps?: StyledTextProps;
          text: GenericProperty<string>;
        }
      | string
    >;
    paragraph?: GenericProperty<
      | {
          paragraphProps?: StyledTextProps;
          text: GenericProperty<string>;
        }
      | string
    >;
    href?: GenericProperty<string>;
  }>;
}
export interface CardPropsNoGeneric
  extends EnhancedElementPropsNoGeneric<HTMLDivElement> {
  label?:
    | {
        labelProps?: StyledTextProps;
        text: string;
      }
    | string;
  paragraph?:
    | {
        paragraphProps?: StyledTextProps;
        text: string;
      }
    | string;
  header?:
    | {
        headerProps?: NextLinkProps;
        text: string;
        href?: string;
      }
    | string;
  data?: {
    images?:
      | {
          src: string[];
          imagesProps?: ImageProps;
        }
      | string[];
    label?:
      | {
          labelProps?: StyledTextProps;
          text: string;
        }
      | string;
    paragraph?:
      | {
          paragraphProps?: StyledTextProps;
          text: string;
        }
      | string;
    href?: string;
  }[];
  images?:
    | {
        src: string[];
        imagesProps?: ImageProps;
      }
    | string[];
}
