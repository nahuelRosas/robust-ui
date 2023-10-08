import { ImageErrorEvent, ImageLoadEvent, ImageLoaderProps } from "./types";
import { useCallback, useEffect, useState, useRef } from "react";
import { useGlobalState } from "@robust-ui/use-global-state";
export * from "./types";

export function useImageStatus({
  ignoreFallback = false,
  crossOrigin,
  delay = 0,
  onError,
  srcSet,
  onLoad,
  sizes,
  src,
}: ImageLoaderProps) {
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
      setStatus("failed");
      return;
    } else if (imagesLoadedState.includes(src as string)) {
      setShouldIgnoreFallback(true);
      return;
    } else {
      setStatus("loading");
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
      setStatus("loaded");
      return;
    }

    cleanupImage();

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
      setStatus("loaded");
      setImagesLoadedState((loadedImages) =>
        loadedImages.includes(src) ? loadedImages : [...loadedImages, src],
      );
      cleanupImage();
      if (onLoad) {
        onLoad(event as unknown as ImageLoadEvent);
      }
    };

    image.onerror = (error) => {
      cleanupImage();
      setStatus("failed");
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
        setIsDelayed(true);
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
