import { useExtractString } from "@robust-ui/use-extract-string";
import { OverlayPropsNoGeneric, OverlayProps } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { ForwardRefExotic } from "@robust-ui/constructor";
import { stopPropagation } from "@robust-ui/tools";
import { Button } from "@robust-ui/button";
import { Card } from "@robust-ui/card";
import { Flex } from "@robust-ui/flex";
import {
  startTransition,
  forwardRef,
  useEffect,
  useState,
  useMemo,
  memo,
} from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<OverlayProps>> =
  forwardRef(function OverlayComponent(
    {
      buttonCloseProps,
      buttonOpenProps,
      iconCloseProps,
      iconOpenProps,
      paragraphCard,
      cardProps,
      children,
      ...props
    },
    ref
  ): React.JSX.Element {
    const {
      closeOnOverlayClick = true,
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      isDisabled,
      labelCard,
      ...cleanedProps
    } = useCleanValue({ props }) as OverlayPropsNoGeneric;
    const [isOpen, setIsOpen] = useState(false);

    const { otherComponents, strings } = useExtractString({
      multiLanguageSupport,
      children,
    });

    useEffect(() => {
      const handleKeyDown = (event: { keyCode: number }) => {
        if (event.keyCode === 27) startTransition(() => setIsOpen(false));
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    const stopProgationChildren = useMemo(
      () =>
        stopPropagation({
          children: (
            <Card
              pointerEvents="inherit"
              colorSchemeProperty={{
                opacity: 1,
                baseColorRaw:
                  colorSchemeProperty?.baseColor ||
                  colorSchemeProperty?.baseColorRaw ||
                  colorSchemeRaw ||
                  colorScheme ||
                  "black",
              }}
              paragraph={paragraphCard}
              label={{
                text:
                  typeof labelCard === "string" ? labelCard : labelCard?.text,
                labelProps: {
                  widthRaw: {
                    base: "80%",
                    md: "100%",
                  },

                  ...(typeof labelCard === "object" && labelCard?.labelProps),
                },
              }}
              {...cleanedProps}
              {...cardProps}
            >
              <Button
                pointerEvents="inherit"
                onClick={
                  !isDisabled
                    ? () => startTransition(() => setIsOpen(false))
                    : undefined
                }
                colorSchemeProperty={{
                  baseColorRaw:
                    colorSchemeProperty?.baseColor ||
                    colorSchemeProperty?.baseColorRaw ||
                    colorSchemeRaw ||
                    colorScheme ||
                    "teal",
                  variant: isDisabled ? "linkDark" : "linkLight",
                  isDisabled,
                  ...colorSchemeProperty,
                }}
                isDisabled={isDisabled}
                iconProps={{
                  iconType: "closeCircleFill",
                  ...iconCloseProps,
                }}
                position="absolute"
                borderRadius="2dvh"
                width="fitContent"
                zIndexRaw="10001"
                cursor="pointer"
                right="0"
                mx="2dvw"
                my="2dvh"
                top="0"
                {...buttonCloseProps}
              />
              {otherComponents}
            </Card>
          ),
        }),
      [
        colorSchemeProperty,
        colorSchemeRaw,
        colorScheme,
        paragraphCard,
        labelCard,
        cleanedProps,
        cardProps,
        isDisabled,
        iconCloseProps,
        buttonCloseProps,
        otherComponents,
      ]
    );

    return (
      <Flex ref={ref}>
        <Button
          onClick={() => startTransition(() => setIsOpen(true))}
          colorSchemeProperty={{
            baseColorRaw:
              colorSchemeProperty?.baseColor ||
              colorSchemeProperty?.baseColorRaw ||
              colorSchemeRaw ||
              colorScheme ||
              "teal",
            variant: "linkLight",
            ...colorSchemeProperty,
          }}
          iconProps={{
            iconType: buttonOpenProps?.iconType || "menuFill",
            ...iconOpenProps,
          }}
          borderRadius="2dvh"
          cursor="pointer"
          my="1dvh"
          multiLanguageSupport={strings}
          {...buttonOpenProps}
        />
        <Flex display={isOpen ? "flex" : "none"}>
          <Flex
            display="flex"
            onClick={
              closeOnOverlayClick && !isDisabled
                ? () => startTransition(() => setIsOpen(false))
                : undefined
            }
            colorSchemeProperty={{
              opacity: 0.2,
              baseColorRaw:
                colorSchemeProperty?.baseColor ||
                colorSchemeProperty?.baseColorRaw ||
                colorSchemeRaw ||
                colorScheme ||
                "gray",
              props: {
                hover: false,
                focus: false,
                active: false,
              },
            }}
            keyframesRaw={{
              visibleoverlay: {
                "0%": {
                  opacity: 0,
                },
                "50%": {
                  opacity: 0,
                },
                "100%": {
                  opacity: 1,
                },
              },
              hiddenoverlay: {
                "0%": {
                  opacity: 1,
                },
                "50%": {
                  opacity: 1,
                },
                "100%": {
                  opacity: 0,
                },
              },
            }}
            pointerEvents={isOpen ? "inherit" : "none"}
            animationRaw={
              !isOpen
                ? "hiddenoverlay 0.5s ease-in-out forwards"
                : "visibleoverlay 0.5s ease-out forwards"
            }
            backdropFilterRaw="blur(0.5dvh)"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            position="fixed"
            zIndexRaw="9999"
            height="100dvh"
            width="100dvw"
            left="0"
            top="0"
          >
            {stopProgationChildren}
          </Flex>
        </Flex>
      </Flex>
    );
  });
/**
 * Overlay component that displays a button and a card when clicked.
 * @component
 * @example
 * <Overlay
 *   buttonOpenProps={{ iconType: "menuFill" }}
 *   buttonCloseProps={{ iconType: "closeCircleFill" }}
 *   paragraphCard="Lorem ipsum dolor sit amet"
 *   labelCard={{ text: "Overlay Card" }}
 *   cardProps={{ backgroundColor: "white" }}
 * >
 *  <Button>Button</Button>
 * </Overlay>
 * @param {OverlayProps} props
 * @returns {React.JSX.Element}
 */
export const Overlay = memo(Factory);
