import { useExtractString } from "@robust-ui/use-extract-string";
import { CodeTextProps, CodeTextPropsNoGeneric } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { ForwardRefExotic } from "@robust-ui/constructor";
import { forwardRef, useMemo, memo } from "react";
import { useToast } from "@robust-ui/use-toast";
import { Button } from "@robust-ui/button";
import { Flex } from "@robust-ui/flex";
import { Span } from "@robust-ui/span";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<CodeTextProps>
> = forwardRef(function CodeTextComponent(
  { copyButtonProps, textProps, children, ...props },
  ref,
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

  const { otherComponents, strings } = useExtractString({
    children,
    multiLanguageSupport,
  });

  return (
    <Flex
      pointerEvents={isDisabled ? "none" : "inherit"}
      justifyContent="spaceBetween"
      borderRadius="2.5dvh"
      alignItems="center"
      position="relative"
      height="fitContent"
      cursor="pointer"
      optimizedWidth
      gap="2dvw"
      px="2dvw"
      py="1dvh"
      ref={ref}
      {...structureStyle}
      {...cleanedProps}
    >
      <Span
        userSelect="text"
        textAlign="left"
        fontSize="2.5dvh"
        overflow="hidden"
        fontWeight="bold"
        optimizedWidth
        cursor="text"
        py="1dvh"
        px="2dvw"
        {...textProps}
      >
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
          {...copyButtonProps}
        />
      )}
      {otherComponents}
    </Flex>
  );
});

/**
 * Renders a code text component with optional copy button and multi-language support.
 *
 * @component
 * @example
 * ```tsx
 * <CodeText
 *   copyButtonProps={{ size: "sm" }}
 *   textProps={{ color: "blue" }}
 *   copyButton={true}
 *   multiLanguageSupport={true}
 *   colorSchemeRaw="teal"
 *   isDisabled={false}
 * >
 *   {["const", "x", "=", "10"]}
 * </CodeText>
 * ```
 *
 * @param {object} props - The component props.
 * @param {object} props.copyButtonProps - The props for the copy button component.
 * @param {object} props.textProps - The props for the text component.
 * @param {boolean} props.copyButton - Whether to show the copy button or not.
 * @param {boolean} props.multiLanguageSupport - Whether to enable multi-language support or not.
 * @param {string} props.colorSchemeRaw - The raw color scheme for the component.
 * @param {string} props.colorScheme - The color scheme for the component.
 * @param {boolean} props.isDisabled - Whether the component is disabled or not.
 * @returns {JSX.Element} The rendered code text component.
 */

export const CodeText = memo(Factory);
