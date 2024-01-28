import { ReactEventHandler, SyntheticEvent } from "react";

export type ImageLoadEvent = SyntheticEvent<HTMLImageElement, Event>;
export type ImageErrorEvent = SyntheticEvent<HTMLImageElement, Event>;

export type ImageLoaderProps = {
  crossOrigin?: string | null;
  onError?: ReactEventHandler<HTMLImageElement>;
  // eslint-disable-next-line no-unused-vars
  onLoad?: (event: ImageLoadEvent) => void;
  ignoreFallback?: boolean;
  sizes?: string;
  delay?: number;
  src?: string;
  srcSet?: {
    url: string;
    size: string;
  }[];
};
