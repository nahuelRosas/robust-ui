import { ForwardRefExoticImage, ImageProps } from "./types";
import { Constructor } from "@robust-ui/constructor";
import { defaultTheme } from "@robust-ui/theme";
import React, { Ref, forwardRef } from "react";
import { useImage } from "@robust-ui/hooks";
import { Icon, Spinner } from "..";
import { Flex } from "@/layout";

const Component = Constructor({
  Component: "img",
});

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticImage> =
  forwardRef<unknown, ImageProps>(function FlexComponent(
    {
      children,
      src,
      alt,
      isLoading,
      size = "10rem",
      ratio = "auto",
      isRounded = false,
      objectFit = "cover",
      borderRadius,
      ...props
    },
    ref: Ref<unknown>
  ): React.JSX.Element {
    const status = useImage({ src: src as string });

    let adjustedSize: {
      adjustedHeight?: keyof typeof defaultTheme.sizes | string;
      adjustedWidth?: keyof typeof defaultTheme.sizes | string;
    } = {
      adjustedHeight: size,
      adjustedWidth: size,
    };
    let adjustedRatio = ratio;

    const [width, height] = adjustedRatio.split(":").map(Number);

    if (width && height) {
      if (width > height) {
        const adjustedHeight =
          (Number(String(size).replace("rem", "")) * height) / width;
        adjustedSize = {
          adjustedHeight: `${adjustedHeight}rem`,
          adjustedWidth: size,
        };
      } else if (width < height) {
        const adjustedWidth =
          (Number(String(size).replace("rem", "")) * width) / height;
        adjustedSize = {
          adjustedWidth: `${adjustedWidth}rem`,
          adjustedHeight: size,
        };
      }
    }

    return (
      <Flex
        componentName="ContainerImage"
        mx="auto"
        widthRaw={ratio !== "auto" ? adjustedSize.adjustedWidth : undefined}
        heightRaw={ratio !== "auto" ? adjustedSize.adjustedHeight : size}
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        borderRadius={borderRadius}
        {...props}>
        {(isLoading || status === "loading" || status === "pending") && (
          <Spinner model="C" />
        )}
        {status === "loaded" && (
          <Component
            src={status === "loaded" && src}
            componentName="Image"
            width="100%"
            height="100%"
            objectFit={objectFit}
            borderRadiusRaw={isRounded ? "9999px" : undefined}
            objectPosition="center"
            alt={alt || "Image"}
            borderRadius={borderRadius}
            ref={ref}
          />
        )}
        {status === "failed" && (
          <Icon
            height={size}
            width={size}
            name="image"
            borderRadiusRaw={isRounded ? "9999px" : undefined}
            type="error"
            color="red"
          />
        )}
      </Flex>
    );
  });

export const Image = React.memo(Factory);
