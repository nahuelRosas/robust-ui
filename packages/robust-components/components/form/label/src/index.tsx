import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { LabelPropsNoGeneric, LabelProps } from "./types";
import { forwardRef, useMemo } from "react";
import { ExtractStrings } from "@robust-ui/utils";
import { Span } from "@robust-ui/span";
import { Flex } from "@robust-ui/flex";
import React from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<LabelProps>
> = forwardRef(function LabelComponent(
  { textProps, children, ...props },
  ref
): React.JSX.Element {
  const Component = CreateComponent<HTMLLabelElement>({
    componentType: "label",
  });

  const {
    multiLanguageSupport,
    colorSchemeProperty,
    placement = "top",
    colorSchemeRaw,
    colorScheme,
    placeholder,
    isRequired,
    isDisabled,
    isInvalid,
    isHover,
    isFocus,
    variant,
    isValid,
    text,
    id,
    ...cleanedProps
  } = useCleanValue({
    props,
  }) as LabelPropsNoGeneric;

  const structureStyle = useMemo(() => {
    return generateColorScheme({
      isDisabled,
      isInvalid,
      isValid,
      opacity: 1,
      baseColor: colorSchemeRaw || colorScheme || "teal",
      variant: variant
        ? variant
        : isFocus || text
          ? "solid"
          : isHover
            ? "linkLight"
            : "ghost",
      ...colorSchemeProperty,
    });
  }, [
    isDisabled,
    isInvalid,
    isValid,
    colorSchemeRaw,
    colorScheme,
    variant,
    isFocus,
    text,
    isHover,
    colorSchemeProperty,
  ]);

  const { otherComponents, strings } = ExtractStrings({
    multiLanguageSupport,
    children,
  });

  const arialLabel = cleanedProps["aria-label"]
    ? cleanedProps["aria-label"]
    : `Label with text: ${strings}`;

  const transform = {
    top: "translate(8%, -50%) scale(0.8)",
    bottom: "translate(8%, 150%) scale(0.8)",
  };
  return (
    <Component
      transitionRaw="transform 0.75s cubic-bezier(1, 0.43, 0, 1.04), height 0.1s ease-out"
      height={isFocus || text ? "fitContent" : "auto"}
      transformRaw={
        isFocus || text
          ? transform[placement as keyof typeof transform]
          : "translate(0, 0) scale(1)"
      }
      backgroundColor="transparent"
      aria-labelledby={arialLabel}
      aria-label={arialLabel}
      pointerEventsRaw="none"
      borderRadius="1.5vh"
      width="fitContent"
      position="absolute"
      elementName="Label"
      alignItems="center"
      fontSize="inherit"
      id={`${id}-label`}
      cursor="inherit"
      display="flex"
      zIndex="1"
      bottom="0"
      right="0"
      px="2vw"
      left="0"
      top="0"
      ref={ref}
      {...structureStyle}
      {...cleanedProps}>
      <Flex borderRadius="1.5vh">
        <Span
          fontWeight={isFocus || text ? "900" : "500"}
          aria-labelledby={arialLabel}
          elementName="LabelSpan"
          aria-label={arialLabel}
          fontSize="inherit"
          {...textProps}>
          {strings.length ? strings : placeholder}
        </Span>
        {isRequired && (
          <Span
            elementName="RequiredSpan"
            aria-label="Required"
            aria-labelledby="Required"
            fontSize="inherit"
            color={colorSchemeProperty?.baseColorRaw === "red" ? "blue" : "red"}
            fontWeight="900">
            *
          </Span>
        )}
      </Flex>
      {otherComponents}
    </Component>
  );
});
export const Label = React.memo(Factory);
