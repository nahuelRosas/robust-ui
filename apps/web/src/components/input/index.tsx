import { generateColorScheme, addOpacity } from "@robust-ui/css-utils";
import { extractStrings } from "@robust-ui/utils";
export * from "./types";
import {
  ForwardRefExoticInput,
  InputPropsNoGeneric,
  InputProps,
} from "./types";
import React, {
  startTransition,
  forwardRef,
  Suspense,
  useState,
  useMemo,
  lazy,
  Ref,
  FormEvent,
  useCallback,
  useRef,
  FormEventHandler,
} from "react";
import {
  Button,
  CreateComponent,
  Flex,
  Label,
  useCleanValue,
} from "@robust-ui/nextjs-components";

const InputComponent: React.ForwardRefExoticComponent<ForwardRefExoticInput> =
  forwardRef<unknown, InputProps>(function InputComponent(
    { ...props },
    ref: Ref<unknown>
  ): React.JSX.Element {
    const cleanedProps = useCleanValue({ props });
    const {
      colorScheme = "mulberry",
      multiLanguageSupport,
      opacityColorScheme,
      variant = "outline",
      altColor = true,
      buttonIconProps,
      colorSchemeRaw,
      placeHolder,
      buttonProps,
      isDisabled,
      fontWeight,
      isRequired,
      buttonIcon,
      buttonText,
      textProps,
      isLoading,
      isInvalid,
      children,
      isValid,
      value,
      type,
      ...rest
    } = cleanedProps as InputPropsNoGeneric;
    const Input = CreateComponent({
      ComponentType: "input",
    });

    const [inputValue, setInputValue] = useState(value || "");
    const [isFocused, setFocused] = useState(false);
    const [isHover, setHover] = useState(false);

    // function handleInputChange(e: FormEvent<InputPropsNoGeneric>) {
    //   // startTransition(() => setInputValue(e.target.value));
    // }

    const handleInputChange: FormEventHandler<HTMLInputElement> | undefined = (
      event
    ) => {
      // setInputValue(e.target.value);
    };

    const structureStyle = useMemo(
      () =>
        generateColorScheme({
          baseColor: colorSchemeRaw || colorScheme,
          opacity: opacityColorScheme,
          variant: variant,
          altColor,
        }),
      [colorSchemeRaw, colorScheme, opacityColorScheme, variant, altColor]
    );

    const { otherComponents, strings } = useMemo(
      () =>
        extractStrings({
          children,
          multiLanguageSupport,
        }),
      [children, multiLanguageSupport]
    );

    return (
      <Suspense>
        <Flex position="relative" elementName="Input" {...rest}>
          {(strings.length || placeHolder) && (
            <Suspense>
              <Label
                opacityColorScheme={opacityColorScheme}
                colorSchemeRaw={colorSchemeRaw}
                colorScheme={colorScheme}
                elementName="InputLabel"
                isFocused={isFocused}
                isHovered={isHover}
                variant={variant}
                text={inputValue}>
                {strings.length ? strings : placeHolder}
              </Label>
            </Suspense>
          )}
          <Input
            elementName="Input"
            onMouseEnter={() => startTransition(() => setHover(true))}
            onMouseLeave={() => startTransition(() => setHover(false))}
            onFocus={() => startTransition(() => setFocused(true))}
            onBlur={() => startTransition(() => setFocused(false))}
            boxSizing="borderBox"
            position="relative"
            borderRadius="1vh"
            spellCheck={false}
            fontSize="inherit"
            value=""
            fontWeight="500"
            cursor="text"
            height="100%"
            width="100%"
            px="2vw"
            py="3vh"
            ref={ref}
            disabled={isLoading || isDisabled}
            onChange={handleInputChange}
            {...structureStyle}
          />
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
        </Flex>
      </Suspense>
    );
  });
export const Input = React.memo(InputComponent);
