import { ImageErrorEvent, ImageLoadEvent, ImageLoaderProps } from "./types";
import { useGlobalState } from "@robust-ui/use-global-state";
import {
  startTransition,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
export * from "./types";

/**
 * Custom hook that tracks the loading status of an image.
 *
 * @param options - The options for the image loader.
 * @returns The current status of the image loading process.
 */
export function useImageStatus({
  ignoreFallback = false,
  crossOrigin,
  delay = 0,
  onError,
  srcSet,
  onLoad,
  sizes,
  src,
}: ImageLoaderProps): "failed" | "loaded" | "loading" | "pending" {
  const [imagesLoadedState, setImagesLoadedState] = useGlobalState<string[]>({
    defaultValue: [],
    key: "imagesLoaded",
    isDev: true,
  });
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [status, setStatus] = useState<
    "failed" | "loaded" | "loading" | "pending"
  >("pending");
  const [isDelayed, setIsDelayed] = useState<boolean>(true);
  const [shouldIgnoreFallback, setShouldIgnoreFallback] =
    useState<boolean>(ignoreFallback);

  useEffect(() => {
    if (!src && !isDelayed) {
      startTransition(() => setStatus("failed"));
      return;
    } else if (imagesLoadedState.includes(src as string)) {
      startTransition(() => setShouldIgnoreFallback(true));
      return;
    } else {
      startTransition(() => setStatus("loading"));
    }
  }, [src, imagesLoadedState, shouldIgnoreFallback, isDelayed]);

  const cleanupImage = useCallback(() => {
    const image = imageRef.current;
    if (image) {
      image.onload = null;
      image.onerror = null;
      imageRef.current = null;
    }
  }, []);

  const load = useCallback(() => {
    if (!src) return;

    if (imagesLoadedState.includes(src as string)) {
      startTransition(() => setStatus("loaded"));
      return;
    }

    cleanupImage();

    // eslint-disable-next-line no-undef
    const image = new Image();
    image.src = src as string;

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    if (srcSet) {
      image.srcset = srcSet.join(", ");
    }

    if (sizes) {
      image.sizes = sizes;
    }

    image.onload = (event) => {
      startTransition(() => setStatus("loaded"));
      setImagesLoadedState((loadedImages: string[]) =>
        loadedImages.includes(src) ? loadedImages : [...loadedImages, src],
      );
      cleanupImage();
      if (onLoad) {
        onLoad(event as unknown as ImageLoadEvent);
      }
    };

    image.onerror = (error) => {
      cleanupImage();
      startTransition(() => setStatus("failed"));
      if (onError) {
        onError(error as unknown as ImageErrorEvent);
      }
    };

    imageRef.current = image;
  }, [
    src,
    imagesLoadedState,
    cleanupImage,
    crossOrigin,
    srcSet,
    sizes,
    setImagesLoadedState,
    onLoad,
    onError,
  ]);

  useEffect(() => {
    if (shouldIgnoreFallback) {
      return;
    }

    if (status === "loading") {
      const timeoutId = setTimeout(() => {
        startTransition(() => setIsDelayed(true));
        load();
      }, delay);

      return () => clearTimeout(timeoutId);
    }

    return cleanupImage;
  }, [status, load, delay, shouldIgnoreFallback, cleanupImage]);

  useEffect(() => {
    return () => {
      cleanupImage();
    };
  }, [cleanupImage]);

  return shouldIgnoreFallback ? "loaded" : isDelayed ? status : "loading";
}
