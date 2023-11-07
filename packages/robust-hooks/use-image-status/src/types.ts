import React, { ReactEventHandler } from "react";

export type ImageLoadEvent = React.SyntheticEvent<HTMLImageElement, Event>;
export type ImageErrorEvent = React.SyntheticEvent<HTMLImageElement, Event>;

export type ImageLoaderProps = {
  crossOrigin?: string | null;
  onError?: ReactEventHandler<HTMLImageElement>;
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
