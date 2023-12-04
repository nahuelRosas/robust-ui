import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { TextAreaPropsNoGeneric, TextAreaProps } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { ExtractStrings } from "@robust-ui/utils";
import { Label } from "@robust-ui/label";
import { Flex } from "@robust-ui/flex";
import {
  generateContrastingColor,
  generateColorScheme,
  addOpacity,
} from "@robust-ui/css-utils";
import React, {
  startTransition,
  useCallback,
  forwardRef,
  useEffect,
  useState,
  useMemo,
} from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<
  ForwardRefExotic<TextAreaProps>
> = forwardRef(function TextAreaComponent(
  { labelProps, children, ...props },
  ref,
): React.JSX.Element {
  const Component = CreateComponent<HTMLTextAreaElement>({
    componentType: "textarea",
  });

  const {
    multiLanguageSupport,
    colorSchemeProperty,
    colorSchemeRaw,
    colorScheme,
    placeholder,
    isDisabled,
    resetValue,
    isRequired,
    isInvalid,
    isLoading,
    onChange,
    isValid,
    variant,
    value,
    id,
    ...cleanedProps
  } = useCleanValue({
    props,
  }) as TextAreaPropsNoGeneric;

  const [inputValue, setInputValue] = useState(value || "");
  const [isFocus, setFocus] = useState(false);
  const [isHover, setHover] = useState(false);

  const structureStyle = useMemo(() => {
    return generateColorScheme({
      isDisabled,
      isInvalid,
      isValid,
      baseColor: colorSchemeRaw || colorScheme || "teal",
      variant: variant
        ? variant
        : isDisabled
          ? "solid"
          : (value && value.length) || (inputValue && inputValue.length)
            ? "solid"
            : "outline",
      ...colorSchemeProperty,
    });
  }, [
    isDisabled,
    isInvalid,
    isValid,
    colorSchemeRaw,
    colorScheme,
    variant,
    value,
    inputValue,
    colorSchemeProperty,
  ]);

  const { otherComponents, strings } = ExtractStrings({
    multiLanguageSupport,
    children,
  });

  const colorWithOpacity = useMemo(
    () =>
      addOpacity({
        color: colorSchemeRaw || colorScheme || "teal",
        opacity: 0.9,
      }),
    [colorSchemeRaw, colorScheme],
  );

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(event);
      }
      setInputValue(event.target.value);
    },
    [onChange],
  );

  const idString = id ? id : strings.length ? strings.join(" ") : placeholder;
  useEffect(() => {
    if (resetValue) {
      setInputValue("");
    }
    if (value !== inputValue) {
      setInputValue(value || "");
    }
  }, [inputValue, resetValue, value]);
  return (
    <Flex
      cursor={isDisabled ? "notAllowed" : isLoading ? "wait" : "text"}
      elementName="TextAreaContainer"
      justifyContent="center"
      position="relative"
      alignItems="center"
      width="fitContent"
      {...cleanedProps}
    >
      <Component
        id={idString}
        pointerEvents={isLoading || isDisabled ? "none" : "inherit"}
        onMouseEnter={() => startTransition(() => setHover(true))}
        onMouseLeave={() => startTransition(() => setHover(false))}
        onBlur={() => startTransition(() => setFocus(false))}
        onFocus={() => startTransition(() => setFocus(true))}
        webkitScrollbar={{
          backgroundColorRaw: addOpacity({
            color: colorSchemeRaw || colorScheme || "teal",
            opacity: 0.5,
          }),
          zIndexRaw: 99999,
          width: "0.5vw",
          height: "100%",
          cursor: "auto",
        }}
        webkitScrollbarThumb={{
          backgroundColorRaw: generateContrastingColor(colorWithOpacity),
          borderRadius: "0.5vh",
          zIndexRaw: 99999,
          cursor: "auto",
        }}
        scrollbarColorRaw={colorWithOpacity}
        scrollbarWidth="thin"
        boxSizing="borderBox"
        position="relative"
        borderRadius="1vh"
        spellCheck={false}
        fontSize="inherit"
        value={onChange && value ? value : inputValue}
        onChange={handleOnChange}
        elementName="TextArea"
        fontWeight="500"
        cursor="inherit"
        height="100%"
        width="100%"
        minH="20vh"
        ref={ref}
        {...structureStyle}
        {...cleanedProps}
        pt={strings.length || placeholder ? "3vh" : "2vh"}
        pb="2vh"
        px="2vw"
        m="0"
      />
      {otherComponents}
      {(strings.length || placeholder) && (
        <Label
          isRequired={isRequired}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isValid={isValid}
          elementName="TextAreaLabel"
          isFocus={isFocus}
          isHover={isHover}
          htmlFor={idString}
          text={onChange ? value : inputValue}
          id={idString}
          {...labelProps}
        >
          {strings.length ? strings : placeholder}
        </Label>
      )}
    </Flex>
  );
});
export const TextArea = React.memo(Factory);
