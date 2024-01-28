/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
import { ForwardRefExotic, CreateComponent } from "@robust-ui/constructor";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { useImageStatus } from "@robust-ui/use-image-status";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { ImageProps, ImagePropNoGeneric } from "./types";
import { stopPropagation } from "@robust-ui/tools";
import { Spinner } from "@robust-ui/spinner";
import { Button } from "@robust-ui/button";
import { Flex } from "@robust-ui/flex";
import { Icon } from "@robust-ui/icon";
import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  startTransition,
  TouchEventHandler,
  useEffect,
  useMemo,
  memo,
} from "react";

export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<ImageProps>> =
  forwardRef(function ImageComponent(
    {
      buttonCloseProps,
      buttonOpenProps,
      iconCloseProps,
      iconOpenProps,
      spinnerProps,
      ...props
    },
    ref,
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLImageElement>({
      componentType: "img",
    });
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isSliderVisible, setIsSliderVisible] = useState<boolean>(false);
    const [generalStatus, setGeneralStatus] = useState<string>("loading");
    const touchStartX = useRef<number | null>(null);

    const {
      multiLanguageSupport,
      objectFit = "cover",
      colorSchemeProperty,
      borderRadiusRaw,
      colorSchemeRaw,
      ignoreFallback,
      borderRadius,
      crossOrigin,
      colorScheme,
      isRounded,
      isSlider,
      srcArray,
      altArray,
      onError,
      variant,
      sizeRaw,
      onLoad,
      srcSet,
      delay,
      ratio,
      size,
      src,
      alt,
      ...cleanedProps
    } = useCleanValue({
      props,
    }) as ImagePropNoGeneric;

    const srcRaw = srcArray || src;

    const { currentBreakpoint } = useGlobalContext({ key: "devData" });

    const currentImageSrc: string = Array.isArray(srcRaw)
      ? (srcRaw[currentImageIndex] as string)
      : (srcRaw as string);

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

    const imageCount: number = Array.isArray(srcRaw) ? srcRaw.length : 0;

    const changeImageIndex = useCallback(
      (newIndex: number) => {
        startTransition(() =>
          setCurrentImageIndex((newIndex + imageCount) % imageCount),
        );
      },
      [imageCount],
    );

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
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === "Escape")
          startTransition(() => setIsSliderVisible(false));
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

    useEffect(() => {
      if (imageStatus === "loaded") {
        startTransition(() => setGeneralStatus("loaded"));
      } else if (imageStatus === "failed") {
        startTransition(() => setGeneralStatus("failed"));
      }
    }, [imageStatus]);

    const [zoom, setZoom] = useState<number>(1);

    const [zoomPrev, setZoomPrev] = useState<number>(1);

    const [mousePosition, setMousePosition] = useState<{
      x: number;
      y: number;
    }>({
      x: 0,
      y: 0,
    });
    const [isZoomActive, setIsZoomActive] = useState<boolean>(false);

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        e.preventDefault();
        if (
          currentBreakpoint === "base" ||
          currentBreakpoint === "sm" ||
          currentBreakpoint === "xs"
        )
          return;
        setMousePosition({ x: e.clientX, y: e.clientY });
      },
      [currentBreakpoint],
    );

    const handleWheel = useCallback(
      (e: WheelEvent) => {
        if (
          currentBreakpoint === "base" ||
          currentBreakpoint === "sm" ||
          currentBreakpoint === "xs"
        )
          return;
        const delta = e.deltaY;
        setZoomPrev(zoom);
        setZoom((prevZoom) =>
          Math.max(0.1, Math.min(10, prevZoom + delta * 0.001)),
        );
      },
      [currentBreakpoint, zoom],
    );

    const handleDivClick = useCallback(() => {
      if (
        currentBreakpoint === "base" ||
        currentBreakpoint === "sm" ||
        currentBreakpoint === "xs"
      )
        return;
      setIsZoomActive((prevIsZoomActive) => !prevIsZoomActive);
    }, [currentBreakpoint]);

    const handleClick = useCallback(() => {
      if (
        currentBreakpoint === "base" ||
        currentBreakpoint === "sm" ||
        currentBreakpoint === "xs"
      )
        return;
      if (isZoomActive) {
        if (zoom === 1) {
          setZoomPrev(zoom);
          setZoom(1.5);
        } else {
          setZoomPrev(zoom);
          setZoom(1);
          setIsZoomActive(false);
        }
      }
    }, [currentBreakpoint, isZoomActive, zoom]);

    const handleWheelActivate = useCallback(() => {
      if (isSliderVisible) setIsZoomActive(true);
    }, [isSliderVisible]);

    useEffect(() => {
      if (isZoomActive) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("wheel", handleWheel);
      } else {
        window.addEventListener("mousemove", handleWheelActivate);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("wheel", handleWheel);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("mousemove", handleWheelActivate);
      };
    }, [isZoomActive, handleMouseMove, handleWheel, handleWheelActivate]);

    const calcCursorZoom = useMemo(() => {
      if (zoom > zoomPrev) {
        return "zoomIn";
      }
      if (zoom < zoomPrev) {
        return "zoomOut";
      }
      if (isZoomActive) return "zoomIn";
    }, [isZoomActive, zoom, zoomPrev]);

    useEffect(() => {
      if (!isSliderVisible) {
        setZoom(1);
        setIsZoomActive(false);
      }
    }, [isSliderVisible]);

    const stopProgationChildren = useMemo(
      () =>
        stopPropagation({
          children: (
            <Flex
              backgroundColor="transparent"
              flexDirection="column"
              alignItems="flexStart"
              justifyContent="left"
              borderRadius={borderRadiusRaw || borderRadius}
              height={{
                base: "fitContent",
                md: "90%",
              }}
              width={{
                base: "90%",
                md: "fitContent",
              }}
              maxWidth="80dvw"
              m="0"
              p="0"
            >
              {
                <Flex
                  p="2dvh"
                  m="2dvh"
                  bg="black"
                  display={{
                    base: "none",
                    md: "flex",
                  }}
                  borderRadius="2dvh"
                  zIndexRaw="10005"
                  position="absolute"
                  bottom="0"
                  left="0"
                  multiLanguageSupport={{
                    en: "Zoom level: " + (zoom * 100).toFixed(2) + "%",
                    es: "Nivel de zoom: " + (zoom * 100).toFixed(2) + "%",
                  }}
                />
              }
              <Button
                onClick={() => startTransition(() => setIsSliderVisible(false))}
                colorSchemeProperty={{
                  baseColorRaw:
                    colorSchemeProperty?.baseColor ||
                    colorSchemeProperty?.baseColorRaw ||
                    colorSchemeRaw ||
                    colorScheme ||
                    "teal",
                  variant: "linkLight",
                  ...colorSchemeProperty,
                }}
                iconProps={{
                  iconType: "closeCircleFill",
                  ...iconCloseProps,
                }}
                position="absolute"
                borderRadius="2dvh"
                width="fitContent"
                zIndexRaw="10001"
                cursor="pointer"
                right="0"
                mx="2dvw"
                my="2dvh"
                top="0"
                {...buttonCloseProps}
              />
              {Array.isArray(srcArray) && srcArray.length > 1 && (
                <>
                  <Button
                    display={{
                      base: "none",
                      md: "flex",
                    }}
                    onClick={() => changeImageIndex(currentImageIndex - 1)}
                    colorSchemeProperty={{
                      baseColorRaw:
                        colorSchemeProperty?.baseColor ||
                        colorSchemeProperty?.baseColorRaw ||
                        colorSchemeRaw ||
                        colorScheme ||
                        "teal",
                      variant: "linkLight",
                      ...colorSchemeProperty,
                    }}
                    position="absolute"
                    width="fitContent"
                    cursor="pointer"
                    variant="link"
                    zIndexRaw="10001"
                    top="50%"
                    left="0"
                    mx="2dvw"
                    my="2dvh"
                    iconProps={{
                      iconType: "arrowLeftFill",
                    }}
                  />
                  <Button
                    display={{
                      base: "none",
                      md: "flex",
                    }}
                    onClick={() => changeImageIndex(currentImageIndex + 1)}
                    colorSchemeProperty={{
                      baseColorRaw:
                        colorSchemeProperty?.baseColor ||
                        colorSchemeProperty?.baseColorRaw ||
                        colorSchemeRaw ||
                        colorScheme ||
                        "teal",
                      variant: "linkLight",
                      ...colorSchemeProperty,
                    }}
                    position="absolute"
                    width="fitContent"
                    cursor="pointer"
                    variant="link"
                    zIndexRaw="10001"
                    right="0"
                    top="50%"
                    mx="2dvw"
                    my="2dvh"
                    iconProps={{
                      iconType: "arrowRightFill",
                    }}
                  />
                </>
              )}
              {generalStatus === "loading" && (
                <Spinner
                  colorSchemeRaw={colorSchemeRaw || colorScheme}
                  sizeRaw={
                    sizeRaw || size ? `calc(${sizeRaw || size} / 3)` : "7.5dvh"
                  }
                  {...spinnerProps}
                />
              )}

              {generalStatus === "loaded" && (
                <Flex
                  width="100%"
                  height="100%"
                  overflow="hidden"
                  position="relative"
                  onClick={handleDivClick}
                  cursorRaw={calcCursorZoom}
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: isZoomActive
                      ? `${mousePosition.x * 0.5}px ${mousePosition.y}px`
                      : "center center",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  <Component
                    src={currentImageSrc}
                    alt={currentAlt}
                    borderRadiusRaw={isRounded ? "9999px" : undefined}
                    objectFit="contain"
                    borderRadius={borderRadiusRaw || borderRadius}
                    heightRaw="100%"
                    widthRaw="100%"
                    onClick={handleClick}
                    zIndexRaw="1"
                    userSelect="none"
                    transformOriginRaw="center center"
                    transitionRaw="transform 0.2s ease-out"
                    ref={ref}
                  />
                </Flex>
              )}
            </Flex>
          ),
        }),
      [
        Component,
        borderRadius,
        borderRadiusRaw,
        buttonCloseProps,
        calcCursorZoom,
        changeImageIndex,
        colorScheme,
        colorSchemeProperty,
        colorSchemeRaw,
        currentAlt,
        currentImageIndex,
        currentImageSrc,
        generalStatus,
        handleClick,
        handleDivClick,
        iconCloseProps,
        isRounded,
        isZoomActive,
        mousePosition.x,
        mousePosition.y,
        ref,
        size,
        sizeRaw,
        spinnerProps,
        srcArray,
        zoom,
      ],
    );

    return (
      <Flex
        onClick={
          isSlider && generalStatus === "loaded"
            ? () => startTransition(() => setIsSliderVisible(!isSliderVisible))
            : undefined
        }
        widthRaw={ratio !== "auto" ? sizeRaw || size : undefined}
        heightRaw={ratio !== "auto" ? sizeRaw || size : size}
        borderRadiusRaw={isRounded ? "9999px" : undefined}
        cursor={isSlider && generalStatus === "loaded" ? "pointer" : undefined}
        justifyContent="center"
        alignItems="center"
        mx="auto"
        {...cleanedProps}
      >
        {generalStatus === "failed" && (
          <Icon
            sizeRaw={
              sizeRaw || size ? `calc(${sizeRaw || size} / 3)` : "7.5dvh"
            }
            borderRadiusRaw={isRounded ? "9999px" : undefined}
            iconType="errorWarningFill"
            color="red"
          />
        )}
        {generalStatus === "loaded" && (
          <Component
            src={
              Array.isArray(srcRaw) && srcRaw[0]
                ? srcRaw[0]
                : typeof srcRaw === "string"
                  ? srcRaw
                  : ""
            }
            alt={currentAlt}
            userSelect="none"
            borderRadiusRaw={
              isRounded ? "9999px" : borderRadiusRaw || borderRadius
            }
            objectPosition="center"
            objectFit={objectFit}
            height="100%"
            width="100%"
            ref={ref}
          />
        )}
        {/* {generalStatus === "loading" && (
          <Spinner
            colorSchemeRaw={colorSchemeRaw || colorScheme}
            sizeRaw={
              sizeRaw || size ? `calc(${sizeRaw || size} / 3)` : "7.5dvh"
            }
            {...spinnerProps}
          />
        )} */}

        {isSliderVisible && isSlider && currentImageSrc && (
          <Flex
            display="flex"
            keyframesRaw={{
              visibleImage: {
                "0%": {
                  opacity: 0,
                },
                "50%": {
                  opacity: 0,
                },
                "100%": {
                  opacity: 1,
                },
              },
              hiddenImage: {
                "0%": {
                  opacity: 1,
                },
                "50%": {
                  opacity: 1,
                },
                "100%": {
                  opacity: 0,
                },
              },
            }}
            pointerEvents={isSliderVisible ? "inherit" : "none"}
            animationRaw={
              isSliderVisible
                ? "visibleImage 0.5s ease-out forwards"
                : "hiddenImage 0.5s ease-in-out forwards"
            }
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            backdropFilterRaw="blur(0.5dvh)"
            cursor="auto"
            colorSchemeProperty={{
              opacity: 0.2,
              baseColorRaw:
                colorSchemeProperty?.baseColor ||
                colorSchemeProperty?.baseColorRaw ||
                colorSchemeRaw ||
                colorScheme ||
                "gray",
              props: {
                hover: false,
                focus: false,
                active: false,
              },
            }}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            onClick={() =>
              startTransition(() => setIsSliderVisible(!isSliderVisible))
            }
            overflow="hidden"
            position="fixed"
            height="100dvh"
            width="100dvw"
            zIndexRaw="9999"
            left="0"
            top="0"
          >
            {stopProgationChildren}
          </Flex>
        )}
      </Flex>
    );
  });
/**
 * Renders an image component with various features such as zoom, slider, and multi-language support.
 *
 * @component
 * @example
 * ```tsx
 * <Image src="/path/to/image.jpg" alt="Image" />
 * ```
 *
 * @param {ImageProps} props - The props for the ImageComponent.
 * @param {React.Ref} ref - The ref for the ImageComponent.
 * @returns {React.JSX.Element} The rendered ImageComponent.
 */

export const Image = memo(Factory);
