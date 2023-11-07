import React, { Ref, Suspense, forwardRef, lazy, useMemo } from "react";
import { ToastProps, ToastPropsNoGeneric } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { ForwardRefExotic } from "@robust-ui/constructor";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);

const Span = lazy(() =>
  import("@robust-ui/span").then((module) => ({ default: module.Span }))
);

const Button = lazy(() =>
  import("@robust-ui/button").then((module) => ({ default: module.Button }))
);

export * from "./types";
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<ToastProps>> =
  forwardRef(function ToastComponent({ ...props }, ref): React.JSX.Element {
    const cleanedProps = useCleanValue({ props });
    const {
      opacityColorScheme = 0.9,
      variant = "solid",
      colorSchemeRaw,
      status = "default",
      children,
      multiLanguageSupport,
      isClosable,
      colorScheme,
      onClose,
      label,
      description,
      altColor = true,
      ...rest
    } = cleanedProps as ToastPropsNoGeneric;

    const structureStyle = useMemo(() => {
      const colorStatus = {
        info: "blue600",
        warning: "yellow600",
        success: "green600",
        error: "red600",
        default: "mulberry600",
      };

      return generateColorScheme({
        baseColor: colorSchemeRaw || colorScheme || colorStatus[status],
        opacity: opacityColorScheme,
        altColor,
        variant,
      });
    }, [
      altColor,
      colorScheme,
      colorSchemeRaw,
      opacityColorScheme,
      status,
      variant,
    ]);

    return (
      <Suspense>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="spaceBetween"
          position="relative"
          width="fitContent"
          height="fitContent"
          borderRadius="2vh"
          gap="2vh"
          p="2vh"
          cursor="pointer"
          zIndex="9999"
          ref={ref}
          {...structureStyle}
          {...rest}>
          {(label || description) && (
            <Suspense>
              <Flex flexDirection="column">
                {label && (
                  <Suspense>
                    <Span fontWeight="bold" fontSize="2vh">
                      {label}
                    </Span>
                  </Suspense>
                )}
                {description && (
                  <Suspense>
                    <Span fontSize="1.5vh" fontWeight="regular">
                      {description}
                    </Span>
                  </Suspense>
                )}
              </Flex>
            </Suspense>
          )}
          {isClosable && (
            <Suspense>
              {/* <Button
                onClick={onClose}
                iconProps={{
                  iconPosition: "left",
                  iconType: "closeCircleFill",
                }}
                {...structureStyle}
              /> */}
            </Suspense>
          )}
        </Flex>
      </Suspense>
    );
  });

export const Toast = React.memo(Factory);
