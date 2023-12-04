import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { ForwardRefExotic } from "@robust-ui/constructor";
import { ToastProps, ToastPropsNoGeneric } from "./types";
import React, { forwardRef, useMemo } from "react";
import { Button } from "@robust-ui/button";
import { Flex } from "@robust-ui/flex";
import { Span } from "@robust-ui/span";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<ToastProps>> =
  forwardRef(function ToastComponent(
    { children, ...props },
    ref,
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
      subkey,
      ...cleanedProps
    } = useCleanValue({
      props,
    }) as ToastPropsNoGeneric;

    const colorStatus = useMemo(
      () => ({
        info: "blue",
        warning: "yellow",
        success: "green",
        error: "red",
        default: "teal",
      }),
      [],
    );

    const structureStyle = useMemo(() => {
      return generateColorScheme({
        baseColor:
          colorStatus[status] || colorSchemeRaw || colorScheme || "teal",
        opacity: 0.8,
        variant: "outlineLight",
        ...colorSchemeProperty,
      });
    }, [colorStatus, status, colorSchemeRaw, colorScheme, colorSchemeProperty]);

    return (
      <Flex
        elementName={`Toast${subkey ? `-${subkey}` : ""}`}
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
        {...cleanedProps}
      >
        {(label || description) && (
          <Flex
            flexDirection="column"
            elementName={`ToastContent${subkey ? `-${subkey}` : ""}`}
          >
            {label && (
              <Span
                fontWeight="bold"
                fontSize="2vh"
                elementName={`ToastLabel${subkey ? `-${subkey}` : ""}`}
              >
                {label}
              </Span>
            )}
            {description && (
              <Span
                fontSize="1.5vh"
                fontWeightRaw="regular"
                elementName={`ToastDescription${subkey ? `-${subkey}` : ""}`}
              >
                {description}
              </Span>
            )}
          </Flex>
        )}
        {isClosable && (
          <Button
            elementName={`ToastCloseButton${subkey ? `-${subkey}` : ""}`}
            onClick={onClose}
            iconProps={{
              iconType: "closeCircleFill",
            }}
            colorSchemeProperty={{
              baseColor:
                colorStatus[status] || colorSchemeRaw || colorScheme || "teal",
              opacity: 1,
              variant: "solidLight",
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
