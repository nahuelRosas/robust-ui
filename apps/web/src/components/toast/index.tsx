import { generateColorScheme } from "@robust-ui/css-utils";
import { ToastProps, ToastPropsNoGeneric } from "./types";
import React, { forwardRef, useMemo } from "react";
import { ForwardRefExotic, useCleanValue } from "@robust-ui/nextjs-components";
import { Flex } from "../flex";
import { Span } from "../span";
import { Button } from "../button";

export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<ToastProps>> =
  forwardRef(function ToastComponent(
    { children, ...props },
    ref
  ): React.JSX.Element {
    const {
      status = "default",
      variant = "outline",
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      description,
      isClosable,
      onClose,
      label,
      ...cleanedProps
    } = useCleanValue({
      props,
    }) as ToastPropsNoGeneric;

    const structureStyle = useMemo(() => {
      return generateColorScheme({
        baseColor: colorSchemeRaw || colorScheme || "teal",
        opacity: 0.8,
        variant: "outline",
        ...colorSchemeProperty,
      });
    }, [colorSchemeRaw, colorScheme, colorSchemeProperty]);

    return (
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="spaceBetween"
        position="relative"
        width="fitContent"
        height="fitContent"
        borderRadius="2.5vh"
        gap="2vh"
        p="1.5vh"
        cursor="pointer"
        zIndexRaw="9999"
        ref={ref}
        {...structureStyle}
        {...cleanedProps}>
        {(label || description) && (
          <Flex flexDirection="column">
            {label && (
              <Span fontWeight="bold" fontSize="2vh">
                {label}
              </Span>
            )}
            {description && (
              <Span fontSize="1.5vh" fontWeightRaw="regular">
                {description}
              </Span>
            )}
          </Flex>
        )}
        {isClosable && (
          <Button
            onClick={onClose}
            iconProps={{
              iconType: "closeCircleFill",
            }}
            colorSchemeProperty={{
              baseColorRaw: colorSchemeRaw || colorScheme || "teal",
              opacity: 1,
              variant: "solid",
              props: {
                hover: true,
              },
              ...colorSchemeProperty,
            }}
          />
        )}
      </Flex>
    );
  });

export const Toast = React.memo(Factory);
