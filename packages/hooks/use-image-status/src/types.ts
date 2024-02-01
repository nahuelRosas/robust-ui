import { ReactEventHandler, SyntheticEvent } from "react";

/**
 * Represents an event that is triggered when an image is loaded.
 * @template TTarget - The type of the event target.
 * @template TEvent - The type of the event.
 */
export type ImageLoadEvent = SyntheticEvent<HTMLImageElement, Event>;
/**
 * Represents an error event that occurs when an image fails to load.
 */
export type ImageErrorEvent = SyntheticEvent<HTMLImageElement, Event>;

/**
 * Props for the ImageLoader component.
 */
export type ImageLoaderProps = {
  crossOrigin?: string | null;
  onError?: ReactEventHandler<HTMLImageElement>;
  /**
   * Callback function called when the image has finished loading.
   * @param event The ImageLoadEvent object.
   */
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
