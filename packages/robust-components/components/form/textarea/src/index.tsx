import { extractStrings } from "@robust-ui/utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
export * from "./types";
import React, {
  startTransition,
  forwardRef,
  Suspense,
  useState,
  useMemo,
  lazy,
} from "react";
import {
  generateColorScheme,
  getTextColor,
  addOpacity,
} from "@robust-ui/css-utils";
import { TextAreaPropsNoGeneric, TextAreaProps } from "./types";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);

const Label = lazy(() =>
  import("@robust-ui/label").then((module) => ({
    default: module.Label,
  }))
);

const Button = lazy(() =>
  import("@robust-ui/button").then((module) => ({
    default: module.Button,
  }))
);

const TextAreaComponent: React.ForwardRefExoticComponent<
  ForwardRefExotic<TextAreaProps>
> = forwardRef(function TextAreaComponent(
  { ...props },
  ref
): React.JSX.Element {
  const cleanedProps = useCleanValue({ props });
  const {
    colorScheme = "indigo",
    multiLanguageSupport,
    opacityColorScheme,
    variant = "outline",
    altColor = true,
    buttonIconProps,
    colorSchemeRaw,
    defaultValue,
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
    onChange,
    children,
    isValid,
    value,
    ...rest
  } = cleanedProps as TextAreaPropsNoGeneric;

  const TextArea = CreateComponent({
    componentType: "textarea",
  });

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setFocused] = useState(false);
  const [isHover, setHover] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    startTransition(() => setInputValue(e.target.value));
  }

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

  const colorWithOpacity = useMemo(
    () =>
      addOpacity({
        color: colorSchemeRaw || colorScheme,
        opacity: 1,
      }),
    [colorSchemeRaw, colorScheme]
  );

  return (
    <Suspense>
      <Flex position="relative" elementName="TextArea" {...rest}>
        {(strings.length || placeHolder) && (
          <Suspense>
            <Label
              opacityColorScheme={opacityColorScheme}
              colorSchemeRaw={colorSchemeRaw}
              colorScheme={colorScheme}
              elementName="TextAreaLabel"
              isFocused={isFocused}
              isHovered={isHover}
              variant={variant}
              text={inputValue}>
              {strings.length ? strings : placeHolder}
            </Label>
          </Suspense>
        )}
        <TextArea
          elementName="TextAreaInput"
          onMouseEnter={() => startTransition(() => setHover(true))}
          onMouseLeave={() => startTransition(() => setHover(false))}
          onFocus={() => startTransition(() => setFocused(true))}
          onBlur={() => startTransition(() => setFocused(false))}
          webkitScrollbar={{
            width: "0.5vw",
            height: "100%",
            cursor: "auto",
            backgroundColorRaw: addOpacity({
              color: colorSchemeRaw || colorScheme,
              opacity: 0.5,
            }),
            zIndexRaw: 99999,
          }}
          webkitScrollbarThumb={{
            backgroundColorRaw: getTextColor(colorWithOpacity, true),
            cursor: "auto",
            borderRadius: "0.5vh",
            zIndexRaw: 99999,
          }}
          scrollbarColorRaw={colorWithOpacity}
          scrollbarWidth="thin"
          boxSizing="borderBox"
          position="absolute"
          borderRadius="1vh"
          spellCheck={false}
          fontSize="inherit"
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
              elementName="TextAreaButton"
              iconProps={
                !isLoading && buttonIcon
                  ? {
                      iconPosition: "left",
                      iconType: buttonIcon,
                      ...buttonIconProps,
                    }
                  : undefined
              }
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
export const TextArea = React.memo(TextAreaComponent);
