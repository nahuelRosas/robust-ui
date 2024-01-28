import { StyledTextProps } from "@robust-ui/styled-text";
import { NextLinkProps } from "@robust-ui/next-link";
import { ImageProps } from "@robust-ui/image";
import {
  EnhancedProps,
  EnhancedPropsNoGeneric,
  PartialOrNestedPartialArray,
  PartialOrNestedPartial,
} from "@robust-ui/constructor";

export interface CardProps extends EnhancedProps<HTMLDivElement> {
  label?: PartialOrNestedPartial<
    | {
        text: PartialOrNestedPartial<string>;
        labelProps?: StyledTextProps;
      }
    | string
  >;
  paragraph?: PartialOrNestedPartial<
    | {
        paragraphProps?: StyledTextProps;
        text: PartialOrNestedPartial<string>;
      }
    | string
  >;
  header?: PartialOrNestedPartial<
    | {
        headerProps?: NextLinkProps;
        text: PartialOrNestedPartial<string>;
        href?: PartialOrNestedPartial<string>;
      }
    | string
  >;
  images?: PartialOrNestedPartial<
    | {
        src: PartialOrNestedPartialArray<string>;
        imagesProps?: ImageProps;
      }
    | string[]
  >;

  data?: PartialOrNestedPartialArray<{
    images?: PartialOrNestedPartial<
      | {
          src: PartialOrNestedPartialArray<string>;
          imagesProps?: ImageProps;
        }
      | string[]
    >;
    label?: PartialOrNestedPartial<
      | {
          labelProps?: StyledTextProps;
          text: PartialOrNestedPartial<string>;
        }
      | string
    >;
    paragraph?: PartialOrNestedPartial<
      | {
          paragraphProps?: StyledTextProps;
          text: PartialOrNestedPartial<string>;
        }
      | string
    >;
    href?: PartialOrNestedPartial<string>;
  }>;
}
export interface CardPropsNoGeneric
  extends EnhancedPropsNoGeneric<HTMLDivElement> {
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
