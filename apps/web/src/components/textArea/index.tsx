import {
  CreateComponent,
  ForwardRefExotic,
  useCleanValue,
} from "@robust-ui/nextjs-components";
import {
  Suspense,
  forwardRef,
  startTransition,
  useMemo,
  useEffect,
  useCallback,
  useState,
} from "react";
import { generateColorScheme } from "@robust-ui/css-utils";
import { TextAreaProps, TextAreaPropsNoGeneric } from "./types";
import { ExtractStrings } from "@robust-ui/utils";
import { Label } from "../label";
import React from "react";
import { addOpacity, getTextColorHighContrast } from "@robust-ui/css-utils";
import { Spinner } from "../spinner";
import { Flex } from "../flex";

const TextAreaComponent: React.ForwardRefExoticComponent<
  ForwardRefExotic<TextAreaProps>
> = forwardRef(function TextAreaComponent(
  { labelProps, children, ...props },
  ref
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
    [colorSchemeRaw, colorScheme]
  );

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(event);
      }
      setInputValue(event.target.value);
    },
    [onChange]
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
      {...cleanedProps}>
      <Component
        id={idString}
        pointerEventsRaw={isLoading || isDisabled ? "none" : undefined}
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
          backgroundColorRaw: getTextColorHighContrast(colorWithOpacity),
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
          {...labelProps}>
          {strings.length ? strings : placeholder}
        </Label>
      )}
      {/*{cleanedProps.isLoading && (
          <Flex
            colorSchemeProperty={{
              isDisabled: cleanedProps.isDisabled,
              isInvalid: cleanedProps.isInvalid,
              isValid: cleanedProps.isValid,
              baseColorRaw:
                cleanedProps.colorSchemeRaw ||
                cleanedProps.colorScheme ||
                "teal",
              altColor: true,
              opacity: 1,
              variant: "solid",
              ...colorSchemeProperty,
            }}
            borderRadius="1.5vh"
            position="absolute"
            bottom="0%"
            right="0%"
            gap="1vw"
            px="1vw"
            py="1vh"
            mx="1vw"
            my="1vh">
            <Spinner />
            <Span
              fontWeight="500"
              fontSize="2vh"
              multiLanguageSupport={{
                en: "Loading...",
                es: "Cargando...",
              }}
            />
          </Flex>
        )}*/}
    </Flex>
  );
});
export const TextArea = React.memo(TextAreaComponent);
