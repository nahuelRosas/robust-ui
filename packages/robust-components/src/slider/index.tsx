import { Flex, Icon, Image } from "..";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { SliderProps } from "./types";
import { defaultTheme } from "@robust-ui/theme";

function Factory({
  src,
  alt,
  isLoading,
  size = "10rem",
  ratio = "auto",
  isRounded,
  fullScreen = true,
  prevIcon,
  nextIcon,
  colorSchema = "mulberry",
  variant,
  imgProp,
  previewImgProp,
  borderRadius,
  ...props
}: SliderProps) {
  const [current, setCurrent] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const length: number = src.length;

  const previewImage = useRef(src[Math.floor(Math.random() * length)]);

  const changeImage = useCallback(
    (newIndex: number) => {
      setCurrent((newIndex + length) % length);
    },
    [length]
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

  const templateButton = defaultTheme.colorSchemaTheme[colorSchema];

  return (
    <>
      <Image
        src={previewImage.current}
        alt={"preview"}
        isLoading={isLoading}
        ratio={ratio}
        isRounded={isRounded}
        userSelect
        size={size}
        variant
        onClick={() => fullScreen && !visible && setVisible(true)}
        cursor={fullScreen && !visible ? "pointer" : "auto"}
        borderRadius={borderRadius}
        {...props}
      />
      {visible && (
        <Flex
          componentName="ContainerSlider"
          display="flex"
          position="fixed"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          backgroundRaw="rgba(0,0,0,0.9)"
          top="0"
          left="0"
          zIndexRaw="999999">
          <Icon
            componentName="closeIcon"
            type="close"
            position="absolute"
            top="1rem"
            right="1rem"
            p="0.2rem"
            onClick={closeSlider}
            active={{
              ...templateButton.outline,
            }}
            cursor="pointer"
            borderRadius="8px"
            boxShadow="0 0.7em 1.5em -0.5em #000000"
            {...templateButton.normal}
            color="black"
            zIndexRaw="2"
          />
          <Icon
            componentName="prevIcon"
            position="absolute"
            left="0"
            p="0.2rem"
            ml="1rem"
            borderRadius="8px"
            type="arrowLeftFill"
            display={src.length > 1 ? "flex" : "none"}
            boxShadow="0 0.7em 1.5em -0.5em #000000"
            onClick={() => changeImage(current - 1)}
            cursor="pointer"
            active={{
              ...templateButton.outline,
            }}
            {...templateButton.normal}
            color="black"
            zIndexRaw="2">
            {prevIcon}
          </Icon>
          <Image
            src={src[current]}
            alt={alt && Array.isArray(alt) ? alt[current] : alt}
            componentName="ImageBackground"
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
            src={src[current]}
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
            transform={`scale(${zoomLevel})`}
            transition="transform 0.2s ease-in-out"
            cursor="default"
            zIndexRaw="1"
            objectFit="contain"
            borderRadius={borderRadius}
            {...imgProp}
          />
          <Icon
            componentName="nextIcon"
            position="absolute"
            right="0"
            p="0.2rem"
            mr="1rem"
            borderRadius="8px"
            type="arrowRightFill"
            display={src.length > 1 ? "flex" : "none"}
            boxShadow="0 0.7em 1.5em -0.5em #000000"
            onClick={() => changeImage(current + 1)}
            cursor="pointer"
            active={{
              ...templateButton.outline,
            }}
            {...templateButton.normal}
            color="black"
            zIndexRaw="2">
            {nextIcon}
          </Icon>
        </Flex>
      )}
    </>
  );
}

export const Slider = React.memo(Factory);
