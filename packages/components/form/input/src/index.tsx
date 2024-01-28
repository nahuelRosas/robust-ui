import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { InputPropsNoGeneric, InputProps } from "./types";
import { useExtractString } from "@robust-ui/use-extract-string";
import { Label } from "@robust-ui/label";
import { Flex } from "@robust-ui/flex";
import {
  startTransition,
  useCallback,
  forwardRef,
  useEffect,
  useState,
  useMemo,
  memo,
  Ref,
} from "react";
export * from "./types";

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
            ? "solidDark"
            : (value && value.length) || (inputValue && inputValue.length)
              ? "solid"
              : "outlineLight",
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

    const { otherComponents, strings } = useExtractString({
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
          boxSizing="borderBox"
          position="relative"
          borderRadius="1dvh"
          spellCheck={false}
          fontSize="inherit"
          value={onChange && value ? value : inputValue}
          onChange={handleOnChange}
          fontWeight="500"
          cursor="inherit"
          height="100%"
          width="100%"
          ref={ref}
          {...structureStyle}
          {...cleanedProps}
          pt={strings.length || placeholder ? "3dvh" : "2dvh"}
          pb="2dvh"
          px="2dvw"
          m="0"
        />
        {(strings.length || placeholder) && (
          <Label
            isRequired={isRequired}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isValid={isValid}
            isFocus={isFocus}
            isHover={isHover}
            htmlFor={idString}
            text={onChange && value ? value : inputValue}
            id={idString}
            {...labelProps}
          >
            {strings.length ? strings : placeholder}
          </Label>
        )}

        {otherComponents}
      </Flex>
    );
  });
/**
 * Input Component
 *
 * This component provides an input field with various customizable features such as multi-language support, color scheme, placeholder, disabled state, required validation, loading state, and more.
 *
 * @component
 * @example
 * ```tsx
 * import { Input } from "@robust-ui/input";
 *
 * const MyComponent = () => {
 *   return (
 *     <Input
 *       placeholder="Enter your name"
 *       isRequired
 *       colorScheme="blue"
 *       onChange={(e) => console.log(e.target.value)}
 *     />
 *   );
 * };
 * ```
 *
 * @param {InputProps} props - The input component props.
 * @param {React.Ref<unknown>} ref - The ref for the input component.
 * @returns {React.JSX.Element} The rendered input component.
 */
export const Input = memo(Factory);
