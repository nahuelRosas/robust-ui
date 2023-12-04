import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { MenuProps, MenuPropsNoGeneric } from "./types";
import { ExtractStrings } from "@robust-ui/utils";
import { Button } from "@robust-ui/button";
import { Flex } from "@robust-ui/flex";
export * from "./types";
import React, {
  startTransition,
  forwardRef,
  useState,
  useEffect,
  useMemo,
} from "react";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<MenuProps>> =
  forwardRef(function MenuComponent(
    { children, ...props },
    ref
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLMenuElement>({
      componentType: "menu",
    });

    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      buttonProps,
      ...cleanedProps
    } = useCleanValue({ props }) as MenuPropsNoGeneric;

    const structureStyle = useMemo(() => {
      return generateColorScheme({
        variant: colorSchemeProperty?.variant || "solid",
        opacity: 1,

        baseColor:
          colorSchemeProperty?.baseColor ||
          colorSchemeProperty?.baseColorRaw ||
          colorSchemeRaw ||
          colorScheme ||
          "black",
        ...colorSchemeProperty,
      });
    }, [colorSchemeRaw, colorScheme, colorSchemeProperty]);

    const [isOpen, setIsOpen] = useState(false);

    const { otherComponents, strings } = ExtractStrings({
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

    return (
      <Flex position="relative" justifyContent="center">
        <Button
          onClick={() => startTransition(() => setIsOpen(!isOpen))}
          display="flex"
          pointerEvents={isOpen ? "none" : "inherit"}
          colorSchemeProperty={{
            baseColor: "teal",
            ...colorSchemeProperty,
          }}
          elementName="MenuButton"
          position="relative"
          fontSizeRaw="3vh"
          cursor="pointer"
          multiLanguageSupport={{
            en: "Menu",
            es: "Menú",
          }}
          {...buttonProps}>
          {strings}
        </Button>
        <Component
          pointerEvents={isOpen ? "inherit" : "none"}
          onClick={() => startTransition(() => setIsOpen(!isOpen))}
          opacityRaw={isOpen ? "1" : "0"}
          transformRaw="translate(0%, 35%)"
          transitionRaw="opacity 0.25s cubic-bezier(1, 0.43, 0, 1.04)"
          boxShadowRaw="0 0 1.5vh 0 rgba(255, 255, 255, 0.3)"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          position="absolute"
          elementName="Menu"
          borderRadius="2vh"
          cursor="pointer"
          display="flex"
          p="2vh"
          m="0"
          ref={ref}
          {...structureStyle}
          {...cleanedProps}>
          {otherComponents}
        </Component>
      </Flex>
    );
  });

export const Menu = React.memo(Factory);
