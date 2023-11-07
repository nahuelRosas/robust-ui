import React, { forwardRef, lazy, Ref, Suspense, useMemo } from "react";
import { extractStrings } from "@robust-ui/utils";
import { generateColorScheme } from "@robust-ui/css-utils";
import {
  ForwardRefExoticCodeText,
  CodeTextProps,
  CodeTextPropsNoGeneric,
} from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { useToast } from "@robust-ui/use-toast";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);
const Button = lazy(() =>
  import("@robust-ui/button").then((module) => ({ default: module.Button }))
);

const Span = lazy(() =>
  import("@robust-ui/span").then((module) => ({ default: module.Span }))
);

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticCodeText> =
  forwardRef<unknown, CodeTextProps>(function CodeTextComponent(
    { ...props },
    ref
  ): React.JSX.Element {
    const cleanedProps = useCleanValue({ props });
    const toast = useToast();
    const {
      colorScheme = "mulberry",
      copyButton = true,
      copyButtonProps,
      multiLanguageSupport,
      opacityColorScheme,
      variant = "solid",
      altColor = true,
      colorSchemeRaw,
      isDisabled,
      textProps,
      children,
      ...rest
    } = cleanedProps as CodeTextPropsNoGeneric;

    const structureStyle = useMemo(
      () =>
        generateColorScheme({
          baseColor: colorSchemeRaw || colorScheme,
          opacity: opacityColorScheme,
          isDisabled,
          altColor,
          variant,
        }),
      [
        altColor,
        colorScheme,
        colorSchemeRaw,
        isDisabled,
        opacityColorScheme,
        variant,
      ]
    );

    const { otherComponents, strings } = useMemo(() => {
      return extractStrings({
        children,
        multiLanguageSupport,
      });
    }, [children, multiLanguageSupport]);

    return (
      <Suspense>
        <Flex
          justifyContent="spaceBetween"
          borderRadius="2.5vh"
          alignItems="center"
          position="relative"
          height="fitContent"
          cursor="pointer"
          optimizedWidth
          gap="2vw"
          px="2vw"
          py="1vh"
          ref={ref}
          {...structureStyle}
          {...rest}>
          <Suspense>
            <Span
              userSelect="text"
              textAlign="left"
              fontSize="2.5vh"
              overflow="auto"
              optimizedWidth
              cursor="text"
              py="1vh"
              px="2vw"
              {...textProps}>
              {strings}
            </Span>
          </Suspense>
          {copyButton && (
            <Suspense>
              <Button
                onClick={() => {
                  navigator.clipboard
                    .writeText(strings.join(" "))
                    .then(() => {
                      toast({
                        label: {
                          en: "Copied to clipboard",
                          es: "Copiado al portapapeles",
                        },
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      });
                    })
                    .catch((err) => {
                      toast({
                        label: "Error",
                        description: err,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                      });
                    });
                }}
                iconProps={{
                  iconType: "clipboardCopy",
                  iconPosition: "left",
                }}
              />
            </Suspense>
          )}
          {otherComponents}
        </Flex>
      </Suspense>
    );
  });

export const CodeText = React.memo(Factory);
