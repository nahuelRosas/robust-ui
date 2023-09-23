import { useGlobalContext } from "@robust-ui/use-global-context";
import { useImageStatus } from "@robust-ui/use-image-status";
import { SliderProps, ForwardRefExoticSlider, SliderPropsClean } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import React, {
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Image } from "@robust-ui/image";
import { Icon } from "@robust-ui/icon";
import { Flex } from "@robust-ui/flex";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticSlider> =
  forwardRef<unknown, SliderProps>(function SliderComponent(
    { ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const cleanedProps = useCleanValue({ props });

    const globalContextData = useGlobalContext({ key: "devData" });
    const {
      objectFit = "cover",
      ignoreFallback,
      alt = "Image",
      borderRadius,
      crossOrigin,
      fullScreen,
      isLoading,
      isRounded,
      prevIcon,
      nextIcon,
      children,
      sizeRaw,
      onError,
      imgProp,
      isLazy,
      onLoad,
      srcSet,
      ratio,
      delay,
      size,
      src,
      ...rest
    } = cleanedProps as SliderPropsClean;
    const [current, setCurrent] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);

    const length: number = src?.length || 0;

    const newSizesEvaluated = sizeRaw
      ? sizeRaw
      : typeof size === "object"
      ? size[globalContextData.currentBreakpoint as string]
      : size;

    const status = useImageStatus({
      src: src[current] as string,
      sizes: newSizesEvaluated,
      ignoreFallback,
      crossOrigin,
      onError,
      onLoad,
      srcSet,
      delay,
    });

    const previewImage = useRef(
      status === "loaded" ? src?.[Math.floor(Math.random() * length)] : "",
    );

    const changeImage = useCallback(
      (newIndex: number) => {
        setCurrent((newIndex + length) % length);
      },
      [length],
    );

    useEffect(() => {
      const autoChangeImage = setInterval(() => {
        if (visible) changeImage(current + 1);
      }, 10000);

      return () => {
        clearInterval(autoChangeImage);
      };
    }, [changeImage, current, length, visible]);

    const closeSlider = () => {
      setVisible(false);
    };
    return (
      <>
        <Image
          src={previewImage.current as string}
          onClick={() => fullScreen && !visible && setVisible(true)}
          cursor={fullScreen && !visible ? "pointer" : "auto"}
          borderRadius={borderRadius}
          isLoading={isLoading}
          isRounded={isRounded}
          alt={"preview"}
          ratio={ratio}
          size={size}
          ref={ref}
          userSelect
          {...rest}
        />
        {visible && (
          <Flex
            elementName="ContainerSlider"
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
              top="1rem"
              right="1rem"
              p="0.2rem"
              onClick={closeSlider}
              // active={{
              //   ...templateButton.outline,
              // }}
              cursor="pointer"
              borderRadius="8px"
              boxShadow="0 0.7em 1.5em -0.5em #000000"
              // {...templateButton.normal}
              color="black"
              zIndexRaw="2"
            />
            <Icon
              elementName="prevIcon"
              position="absolute"
              left="0"
              p="0.2rem"
              ml="1rem"
              borderRadius="8px"
              icon="arrowLeftFill"
              display={src.length > 1 ? "flex" : "none"}
              boxShadow="0 0.7em 1.5em -0.5em #000000"
              onClick={() => changeImage(current - 1)}
              cursor="pointer"
              // active={{
              //   ...templateButton.outline,
              // }}
              // {...templateButton.normal}
              color="black"
              zIndexRaw="2"
            >
              {prevIcon}
            </Icon>
            <Image
              src={src[current] as string}
              alt={alt && Array.isArray(alt) ? alt[current] : alt}
              elementName="ImageBackground"
              position="absolute"
              widthRaw="120%"
              heightRaw="120%"
              topRaw="-10%"
              leftRaw="-10%"
              filter="blur(50px)"
              transform="translate3d(0, 0, 0)"
              opacity="0.9"
              zIndexRaw="-100"
              userSelect
            />
            <Image
              src={src[current] as string}
              alt={alt && Array.isArray(alt) ? alt[current] : alt}
              isLoading={isLoading}
              ratio={ratio}
              isRounded={isRounded}
              size="90vh"
              userSelect
              p={{
                base: "1rem",
                md: "5rem",
                lg: "10rem",
              }}
              // transform={`scale(${zoomLevel})`}
              transition="transform 0.2s ease-in-out"
              cursor="default"
              zIndexRaw="1"
              objectFit="contain"
              borderRadius={borderRadius}
              {...imgProp}
            />
            <Icon
              elementName="nextIcon"
              position="absolute"
              right="0"
              p="0.2rem"
              mr="1rem"
              borderRadius="8px"
              icon="arrowRightFill"
              display={src.length > 1 ? "flex" : "none"}
              boxShadow="0 0.7em 1.5em -0.5em #000000"
              onClick={() => changeImage(current + 1)}
              cursor="pointer"
              // active={{
              //   ...templateButton.outline,
              // }}
              // {...templateButton.normal}
              color="black"
              zIndexRaw="2"
            >
              {nextIcon}
            </Icon>
          </Flex>
        )}
      </>
    );
  });

export const Slider = React.memo(Factory);
