import { CodeTextProps, CodeTextPropsNoGeneric } from "./types";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { ForwardRefExotic } from "@robust-ui/constructor";
import React, { forwardRef, useMemo } from "react";
import { ExtractStrings } from "@robust-ui/utils";
import { useToast } from "@robust-ui/use-toast";
import { Button } from "@robust-ui/button";
import { Flex } from "@robust-ui/flex";
import { Span } from "@robust-ui/span";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<CodeTextProps>
> = forwardRef(function CodeTextComponent(
  { copyButtonProps, textProps, children, ...props },
  ref
): React.JSX.Element {
  const {
    multiLanguageSupport,
    colorSchemeProperty,
    copyButton = true,
    colorSchemeRaw,
    colorScheme,
    isDisabled,
    ...cleanedProps
  } = useCleanValue({ props }) as CodeTextPropsNoGeneric;
  const toast = useToast();
  const structureStyle = useMemo(() => {
    return generateColorScheme({
      baseColor: colorSchemeRaw || colorScheme || "teal",
      opacity: 0.8,
      isDisabled,
      variant: "outline",
      ...colorSchemeProperty,
    });
  }, [colorSchemeRaw, colorScheme, isDisabled, colorSchemeProperty]);

  const { otherComponents, strings } = ExtractStrings({
    children,
    multiLanguageSupport,
  });

  return (
    <Flex
      pointerEventsRaw={isDisabled ? "none" : "auto"}
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
      {...cleanedProps}>
      <Span
        userSelect="text"
        textAlign="left"
        fontSize="2.5vh"
        overflow="hidden"
        fontWeight="bold"
        optimizedWidth
        cursor="text"
        py="1vh"
        px="2vw">
        {strings}
      </Span>
      {copyButton && (
        <Button
          colorSchemeProperty={{
            baseColorRaw: colorSchemeRaw || colorScheme || "teal",
            variant: "solid",
            ...colorSchemeProperty,
          }}
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
          iconType="clipboardCopy"
        />
      )}
      {otherComponents}
    </Flex>
  );
});

export const CodeText = React.memo(Factory);
