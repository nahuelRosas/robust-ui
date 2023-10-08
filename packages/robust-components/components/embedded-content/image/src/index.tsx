import { useGlobalContext } from "@robust-ui/use-global-context";
import { useImageStatus } from "@robust-ui/use-image-status";
import { ImageProps, ForwardRefExoticImage, ImagePropsClean } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent } from "@robust-ui/constructor";
import { StyledText } from "@robust-ui/nested-styled-text";
import React, {
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useState,
  useRef,
  TouchEventHandler,
} from "react";
import { Icon } from "@robust-ui/icon";
import { Flex } from "@robust-ui/flex";
import { Spinner } from "@robust-ui/spinner";
export * from "./types";

const ImageComponent: React.ForwardRefExoticComponent<ForwardRefExoticImage> =
  forwardRef<unknown, ImageProps>(function ImageComponent(
    { ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const globalContextData = useGlobalContext({ key: "devData" });
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isSliderVisible, setIsSliderVisible] = useState<boolean>(false);
    const [generalStatus, setGeneralStatus] = useState<string>("loading");
    const cleanedProps = useCleanValue({ props });
    const {
      objectFit = "cover",
      ignoreFallback,
      colors = {
        primary: "mulberry",
        secondary: "gray700",
      },
      modelSpinner = "C",
      borderRadius,
      crossOrigin,
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
    } = cleanedProps as ImagePropsClean;

    const Component = CreateComponent<ImagePropsClean>({
      ComponentType: "img",
    });

    const evaluatedSize = sizeRaw
      ? sizeRaw
      : typeof size === "object"
      ? size[globalContextData.currentBreakpoint as string]
      : size;

    const imageCount: number = src?.length || 0;
    const currentImageSource =
      typeof src === "object" ? src[currentImageIndex] : src;

    const imageStatus = useImageStatus({
      sizes: evaluatedSize,
      ignoreFallback,
      crossOrigin,
      onError,
      onLoad,
      srcSet,
      delay,
      src: currentImageSource,
    });

    const closeSlider = () => {
      setIsSliderVisible(false);
    };

    const changeImageIndex = useCallback(
      (newIndex: number) => {
        setCurrentImageIndex((newIndex + imageCount) % imageCount);
      },
      [imageCount],
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

    const touchStartX = useRef<number | null>(null);

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
        setGeneralStatus("loaded");
      } else if (imageStatus === "failed") {
        setGeneralStatus("failed");
      }
    }, [imageStatus]);

    return (
      <>
        <Flex
          onClick={isSlider ? () => setIsSliderVisible(true) : undefined}
          widthRaw={ratio !== "auto" ? evaluatedSize : undefined}
          heightRaw={ratio !== "auto" ? evaluatedSize : size}
          borderRadiusRaw={isRounded ? "9999px" : undefined}
          cursor={isSlider ? "pointer" : undefined}
          elementName="ContainerImage"
          borderRadius={borderRadius}
          justifyContent="center"
          alignItems="center"
          mx="auto"
          {...rest}
        >
          {!src || generalStatus === "failed" ? (
            <Icon
              sizeRaw={evaluatedSize ? `calc(${evaluatedSize} / 2)` : "7.5vh"}
              borderRadiusRaw={isRounded ? "9999px" : undefined}
              elementName="Image-Error"
              icon="errorWarningFill"
              color="red"
              ref={ref}
            />
          ) : imageStatus === "loading" ? (
            <Spinner
              sizeRaw={evaluatedSize ? `calc(${evaluatedSize} / 3)` : "4.5vh"}
              elementName="Image-Spinner"
              colors={colors}
              model={modelSpinner}
            />
          ) : (
            <Component
              src={
                src && Array.isArray(src) && src.length > 0
                  ? src[currentImageIndex]
                  : src
              }
              alt={
                alt && Array.isArray(alt)
                  ? alt[currentImageIndex]
                  : alt || "Image"
              }
              borderRadiusRaw={isRounded ? "9999px" : undefined}
              borderRadius={borderRadius}
              objectPosition="center"
              objectFit={objectFit}
              elementName="Image"
              height="100%"
              width="100%"
              ref={ref}
            />
          )}
        </Flex>
        {isSliderVisible && isSlider && src?.[currentImageIndex] && (
          <Flex
            elementName="ContainerSlider"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            flexDirection="column"
            display="flex"
            position="fixed"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="100vh"
            backgroundRaw="rgba(0,0,0,0.9)"
            top="0"
            left="0"
            p="0"
            zIndexRaw="999999"
          >
            <Icon
              elementName="closeIcon"
              icon="closeFill"
              position="absolute"
              top="2vh"
              sizeRaw={{
                base: "4vh",
                md: "4vh",
              }}
              borderRadius="1.5vh"
              right="2vh"
              p="0.3vh"
              onClick={closeSlider}
              cursor="pointer"
              boxShadow="0 0.7em 1.5em -0.5em #000000"
              color={colors.secondary}
              background={colors.primary}
              zIndexRaw="2"
            />
            <Component
              src={currentImageSource}
              alt={
                alt && Array.isArray(alt)
                  ? alt[currentImageIndex]
                  : alt || "Image"
              }
              elementName="ImageBackground"
              position="absolute"
              widthRaw="120%"
              heightRaw="120%"
              topRaw="-10%"
              leftRaw="-10%"
              filter="blur(6vh)"
              transform="translate3d(0, 0, 0)"
              opacity="0.9"
              zIndexRaw="-100"
              userSelect
            />
            <Component
              elementName="ImageSlider"
              alt={
                alt && Array.isArray(alt)
                  ? alt[currentImageIndex]
                  : alt || "Image"
              }
              src={currentImageSource}
              borderRadiusRaw={isRounded ? "9999px" : undefined}
              ratio={ratio}
              widthRaw="90%"
              heightRaw="90%"
              userSelect
              p={{
                base: "2vh",
                md: "6vh",
              }}
              transition="transform 0.2s ease-in-out"
              cursor="default"
              zIndexRaw="1"
              objectFit="contain"
              borderRadius={borderRadius}
            />

            {Array.isArray(src) && src.length > 1 && (
              <>
                <Icon
                  elementName="prevIcon"
                  position="absolute"
                  left="0"
                  p="0.3vh"
                  ml="2vh"
                  icon="arrowLeftFill"
                  sizeRaw={{
                    base: "4vh",
                    md: "4vh",
                  }}
                  borderRadius="1.5vh"
                  display={src.length > 1 ? "flex" : "none"}
                  boxShadow="0 0.7em 1.5em -0.5em #000000"
                  onClick={() => changeImageIndex(currentImageIndex - 1)}
                  cursor="pointer"
                  color={colors.secondary}
                  background={colors.primary}
                  zIndexRaw="2"
                >
                  {prevIcon}
                </Icon>
                <Icon
                  elementName="nextIcon"
                  position="absolute"
                  right="0"
                  p="0.3vh"
                  mr="2vh"
                  sizeRaw={{
                    base: "4vh",
                    md: "4vh",
                  }}
                  borderRadius="1.5vh"
                  icon="arrowRightFill"
                  display={src.length > 1 ? "flex" : "none"}
                  boxShadow="0 0.7em 1.5em -0.5em #000000"
                  onClick={() => changeImageIndex(currentImageIndex + 1)}
                  cursor="pointer"
                  color={colors.secondary}
                  background={colors.primary}
                  zIndexRaw="2"
                >
                  {nextIcon}
                </Icon>
              </>
            )}
          </Flex>
        )}
      </>
    );
  });
export const Image = React.memo(ImageComponent);
