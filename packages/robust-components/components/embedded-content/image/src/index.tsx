import { useGlobalContext } from "@robust-ui/use-global-context";
import { useImageStatus } from "@robust-ui/use-image-status";
import { ImageProps, ForwardRefExoticImage, ImagePropsClean } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent } from "@robust-ui/constructor";
import React, { Ref, forwardRef } from "react";
import { Icon } from "@robust-ui/icon";
import { Flex } from "@robust-ui/flex";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticImage> =
  forwardRef<unknown, ImageProps>(function ImageComponent(
    { ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent<ImageProps>({
      ComponentType: "img",
    });

    const cleanedProps = useCleanValue({ props });
    const globalContextData = useGlobalContext({ key: "devData" });
    const {
      objectFit = "cover",
      ignoreFallback,
      alt = "Image",
      borderRadius,
      crossOrigin,
      isLoading,
      isRounded,
      children,
      sizeRaw,
      onError,
      isLazy,
      onLoad,
      srcSet,
      ratio,
      delay,
      size,
      src,
      ...rest
    } = cleanedProps as ImagePropsClean;

    const newSizesEvaluated = sizeRaw
      ? sizeRaw
      : typeof size === "object"
      ? size[globalContextData.currentBreakpoint as string]
      : size;

    const status = useImageStatus({
      sizes: newSizesEvaluated,
      ignoreFallback,
      crossOrigin,
      onError,
      onLoad,
      srcSet,
      delay,
      src,
    });

    if (!src || status === "failed") {
      return (
        <Flex
          elementName="ContainerImage"
          mx="auto"
          widthRaw={ratio !== "auto" ? newSizesEvaluated : undefined}
          heightRaw={ratio !== "auto" ? newSizesEvaluated : size}
          borderRadius={borderRadius}
          borderRadiusRaw={isRounded ? "9999px" : undefined}
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          {...rest}
        >
          <Icon
            borderRadiusRaw={isRounded ? "9999px" : undefined}
            sizeRaw={newSizesEvaluated}
            elementName="Image-Error"
            icon="errorWarningFill"
            color="red"
            ref={ref}
            {...rest}
          />
        </Flex>
      );
    }
    return (
      <Flex
        elementName="ContainerImage"
        mx="auto"
        widthRaw={ratio !== "auto" ? newSizesEvaluated : undefined}
        heightRaw={ratio !== "auto" ? newSizesEvaluated : size}
        borderRadius={borderRadius}
        borderRadiusRaw={isRounded ? "9999px" : undefined}
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        {...rest}
      >
        <Component
          borderRadius={borderRadius}
          borderRadiusRaw={isRounded ? "9999px" : undefined}
          objectPosition="center"
          objectFit={objectFit}
          alt={alt || "Image"}
          elementName="Image"
          height="100%"
          width="100%"
          src={src}
          ref={ref}
        >
          {children}
        </Component>
      </Flex>
    );
  });
export const Image = React.memo(Factory);
