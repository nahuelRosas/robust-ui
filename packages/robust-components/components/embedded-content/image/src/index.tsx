import { ImageProps, ImagePropNoGeneric } from "./types";
import { useImageStatus } from "@robust-ui/use-image-status";
import React, {
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useState,
  useRef,
  TouchEventHandler,
  startTransition,
  lazy,
  Suspense,
  useMemo,
} from "react";
import { stopPropagation } from "@robust-ui/utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
export * from "./types";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({
    default: module.Flex,
  }))
);
const Icon = lazy(() =>
  import("@robust-ui/icon").then((module) => ({
    default: module.Icon,
  }))
);

const Spinner = lazy(() =>
  import("@robust-ui/spinner").then((module) => ({
    default: module.Spinner,
  }))
);

const Button = lazy(() =>
  import("@robust-ui/button").then((module) => ({
    default: module.Button,
  }))
);

const ImageComponent: React.ForwardRefExoticComponent<
  ForwardRefExotic<ImageProps>
> = forwardRef(function ImageComponent({ ...props }, ref): React.JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isSliderVisible, setIsSliderVisible] = useState<boolean>(false);
  const [generalStatus, setGeneralStatus] = useState<string>("loading");
  const touchStartX = useRef<number | null>(null);

  const cleanedProps = useCleanValue({ props });
  const {
    colorScheme,
    errorProps,
    objectFit = "cover",
    ignoreFallback,
    iconCloseProps,
    borderRadius,
    borderRadiusRaw,
    buttonCloseProps,
    colorSchemeRaw,
    opacityColorScheme,
    crossOrigin,
    spinnerProps,
    altColor,
    prevIcon,
    nextIcon,
    sizeRaw,
    imgProp,
    isSlider,
    delay = 100,
    isRounded,
    children,
    onError,
    onLoad,
    srcSet,
    ratio,
    size,
    src,
    alt,
    ...rest
  } = cleanedProps as ImagePropNoGeneric;

  const Component = CreateComponent({
    componentType: "img",
  });
  const currentImageSrc: string = Array.isArray(src)
    ? (src[currentImageIndex] as string)
    : (src as string);

  const currentAlt = Array.isArray(alt)
    ? alt[currentImageIndex]
    : alt || "Image";
  const imageStatus = useImageStatus({
    sizes: sizeRaw || size,
    ignoreFallback,
    crossOrigin,
    onError,
    onLoad,
    srcSet,
    delay,
    src: currentImageSrc,
  });

  const imageCount: number = Array.isArray(src) ? src.length : 0;

  const changeImageIndex = useCallback(
    (newIndex: number) => {
      startTransition(() =>
        setCurrentImageIndex((newIndex + imageCount) % imageCount)
      );
    },
    [imageCount]
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isSliderVisible && imageCount > 1) {
        if (e.key === "ArrowLeft") {
          changeImageIndex(currentImageIndex - 1);
        } else if (e.key === "ArrowRight") {
          changeImageIndex(currentImageIndex + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [changeImageIndex, currentImageIndex, imageCount, isSliderVisible]);

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX.current = e.touches[0]?.clientX || null;
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    if (isSliderVisible && imageCount > 1 && touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0]?.clientX;
      const deltaX = touchEndX ? touchEndX - touchStartX.current : 0;
      if (deltaX > 50) {
        changeImageIndex(currentImageIndex - 1);
      } else if (deltaX < -50) {
        changeImageIndex(currentImageIndex + 1);
      }
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    if (imageStatus === "loaded") {
      startTransition(() => setGeneralStatus("loaded"));
    } else if (imageStatus === "failed") {
      startTransition(() => setGeneralStatus("failed"));
    }
  }, [imageStatus]);

  const stopProgationChildren = useMemo(
    () =>
      stopPropagation({
        children: (
          <Flex
            backgroundRaw="rgba(0,0,0,0.9)"
            flexDirection="column"
            alignItems="flexStart"
            justifyContent="left"
            borderRadius={borderRadiusRaw || borderRadius}
            elementName="ContainerImageSlider"
            height={{
              base: "fitContent",
              md: "90%",
            }}
            width={{
              base: "90%",
              md: "fitContent",
            }}
            m="0"
            p="0">
            <Button
              onClick={() => startTransition(() => setIsSliderVisible(false))}
              elementName="ButtonClose"
              position="absolute"
              width="fitContent"
              cursor="pointer"
              variant="link"
              zIndex="10001"
              right="0"
              mx="2vw"
              my="2vh"
              top="0"
              iconProps={{
                iconPosition: "left",
                iconType: "closeFill",
                ...iconCloseProps,
              }}
              {...buttonCloseProps}
            />
            {Array.isArray(src) && src.length > 1 && (
              <Suspense>
                <Button
                  onClick={() => changeImageIndex(currentImageIndex - 1)}
                  elementName="ButtonPrev"
                  position="absolute"
                  width="fitContent"
                  cursor="pointer"
                  variant="link"
                  zIndex="10001"
                  top="50%"
                  left="0"
                  mx="2vw"
                  my="2vh"
                  iconProps={{
                    iconPosition: "left",
                    iconType: "arrowLeftFill",
                    ...iconCloseProps,
                  }}
                  {...buttonCloseProps}
                />
                <Button
                  onClick={() => changeImageIndex(currentImageIndex + 1)}
                  elementName="ButtonNext"
                  position="absolute"
                  width="fitContent"
                  cursor="pointer"
                  variant="link"
                  zIndex="10001"
                  right="0"
                  top="50%"
                  mx="2vw"
                  my="2vh"
                  iconProps={{
                    iconPosition: "left",
                    iconType: "arrowRightFill",
                    ...iconCloseProps,
                  }}
                  {...buttonCloseProps}
                />
              </Suspense>
            )}
            {generalStatus === "loading" && (
              <Suspense>
                <Spinner
                  colorSchemeRaw={colorSchemeRaw || colorScheme}
                  opacityColorScheme={opacityColorScheme}
                  elementName="ImageSpinner"
                  altColor={altColor}
                  sizeRaw={
                    sizeRaw || size ? `calc(${sizeRaw || size} / 3)` : "7.5vh"
                  }
                  {...spinnerProps}
                />
              </Suspense>
            )}
            {generalStatus === "loaded" && (
              <Component
                // src={currentImageSrc}
                // alt={currentAlt}
                borderRadiusRaw={isRounded ? "9999px" : undefined}
                transition="transform 0.2s ease-in-out"
                objectFit="contain"
                borderRadius={borderRadiusRaw || borderRadius}
                // ratio={ratio}
                cursor="default"
                heightRaw="100%"
                widthRaw="100%"
                zIndexRaw="1"
                userSelect
                ref={ref}
              />
            )}
          </Flex>
        ),
      }),
    [Component, altColor, borderRadius, borderRadiusRaw, buttonCloseProps, changeImageIndex, colorScheme, colorSchemeRaw, currentImageIndex, generalStatus, iconCloseProps, isRounded, opacityColorScheme, ref, size, sizeRaw, spinnerProps, src]
  );
  return (
    <>
      <Suspense>
        <Flex
          onClick={
            isSlider && generalStatus === "loaded"
              ? () => startTransition(() => setIsSliderVisible(true))
              : undefined
          }
          widthRaw={ratio !== "auto" ? sizeRaw || size : undefined}
          heightRaw={ratio !== "auto" ? sizeRaw || size : size}
          borderRadiusRaw={isRounded ? "9999px" : undefined}
          cursor={
            isSlider && generalStatus === "loaded" ? "pointer" : undefined
          }
          elementName="ContainerImage"
          justifyContent="center"
          alignItems="center"
          mx="auto"
          {...rest}>
          {generalStatus === "loading" && (
            <Suspense>
              <Spinner
                colorSchemeRaw={colorSchemeRaw || colorScheme}
                opacityColorScheme={opacityColorScheme}
                elementName="ImageSpinner"
                altColor={altColor}
                sizeRaw={
                  sizeRaw || size ? `calc(${sizeRaw || size} / 3)` : "7.5vh"
                }
                {...spinnerProps}
              />
            </Suspense>
          )}
          {generalStatus === "failed" && (
            <Suspense>
              <Icon
                sizeRaw={
                  sizeRaw || size ? `calc(${sizeRaw || size} / 3)` : "7.5vh"
                }
                borderRadiusRaw={isRounded ? "9999px" : undefined}
                elementName="Image-Error"
                icon="errorWarningFill"
                color="red"
                {...errorProps}
              />
            </Suspense>
          )}
          {generalStatus === "loaded" && (
            <Component
              // src={Array.isArray(src) && src[0] ? src[0] : src}
              // alt={currentAlt}
              userSelect="none"
              borderRadiusRaw={isRounded ? "9999px" : undefined}
              objectPosition="center"
              objectFit={objectFit}
              borderRadius={borderRadiusRaw || borderRadius}
              elementName="Image"
              height="100%"
              width="100%"
              ref={ref}
            />
          )}
        </Flex>
      </Suspense>
      {isSliderVisible && isSlider && currentImageSrc && (
        <Suspense>
          <Flex
            display={isSliderVisible ? "flex" : "none"}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            elementName="ContainerSlider"
            backdropFilter="blur(0.5vh)"
            bgRaw="rgba(0, 0, 0, 0.7)"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            onClick={
              isSlider && generalStatus === "loaded"
                ? () => startTransition(() => setIsSliderVisible(false))
                : undefined
            }
            overflow="hidden"
            position="fixed"
            height="100vh"
            width="100vw"
            zIndex="9999"
            left="0"
            top="0">
            {stopProgationChildren}
          </Flex>
        </Suspense>
      )}
    </>
  );
});
export const Image = React.memo(ImageComponent);
