import { generateColorScheme } from "@robust-ui/css-utils";
import { ExtractStrings } from "@robust-ui/utils";
export * from "./types";
import { InputPropsNoGeneric, InputProps } from "./types";
import React, {
  startTransition,
  forwardRef,
  useState,
  useMemo,
  useEffect,
  Ref,
  useCallback,
} from "react";
import {
  CreateComponent,
  ForwardRefExotic,
  useCleanValue,
} from "@robust-ui/nextjs-components";
import { Label } from "@/components/label";
import { Flex } from "../flex";
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<InputProps>> =
  forwardRef(function InputComponent(
    { labelProps, children, ...props },
    ref: Ref<unknown>
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLInputElement>({
      componentType: "input",
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
      isLoading,
      isInvalid,
      onChange,
      isValid,
      variant,
      value,
      id,
      ...cleanedProps
    } = useCleanValue({
      props,
    }) as InputPropsNoGeneric;

    const [inputValue, setInputValue] = useState<string>(value || "");
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
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      isDisabled,
      inputValue,
      isInvalid,
      isValid,
      variant,
      value,
    ]);

    const { otherComponents, strings } = ExtractStrings({
      children,
      multiLanguageSupport,
    });

    const handleOnChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
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
        elementName="InputContainer"
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
          boxSizing="borderBox"
          position="relative"
          borderRadius="1vh"
          spellCheck={false}
          fontSize="inherit"
          value={onChange && value ? value : inputValue}
          onChange={handleOnChange}
          elementName="Input"
          fontWeight="500"
          cursor="inherit"
          height="100%"
          width="100%"
          ref={ref}
          {...structureStyle}
          {...cleanedProps}
          pt={strings.length || placeholder ? "3vh" : "2vh"}
          pb="2vh"
          px="2vw"
          m="0"
        />
        {(strings.length || placeholder) && (
          <Label
            isRequired={isRequired}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isValid={isValid}
            elementName="InputLabel"
            isFocus={isFocus}
            isHover={isHover}
            htmlFor={idString}
            text={onChange && value ? value : inputValue}
            id={idString}
            {...labelProps}>
            {strings.length ? strings : placeholder}
          </Label>
        )}

        {/* {(buttonText || buttonIcon) && (
          <Suspense>
            <Button
              elementName="InputButton"
              // iconProps={
              //   !isLoading && buttonIcon
              //     ? {
              //         iconPosition: "left",
              //         iconType: buttonIcon,
              //         ...buttonIconProps,
              //       }
              //     : undefined
              // }
              // loadingProps={{
              //   spinnerProps: {
              //     opacityColorScheme,
              //     colorSchemeRaw,
              //     colorScheme,
              //     altColor,
              //     variant,
              //   },
              //   spinnerPosition: "left",
              // }}
              // isLoading={isLoading}
              // {...buttonProps}
            ></Button>
          </Suspense>
        )} */}
        {otherComponents}
      </Flex>
    );
  });
export const Input = React.memo(Factory);

{
  /*  
          {(buttonText || buttonIcon) && (
            <Suspense>
              <Button
                elementName="InputButton"
                iconProps={
                  !isLoading && buttonIcon
                    ? {
                        iconPosition: "left",
                        iconType: buttonIcon,
                        ...buttonIconProps,
                      }
                    : undefined
                }
                loadingProps={{
                  spinnerProps: {
                    opacityColorScheme,
                    colorSchemeRaw,
                    colorScheme,
                    altColor,
                    variant,
                  },
                  spinnerPosition: "left",
                }}
                isLoading={isLoading}
                {...buttonProps}>
                {buttonText}
              </Button>
            </Suspense>
          )}
          {otherComponents}
        </Flex> */
}
