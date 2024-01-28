import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useExtractString } from "@robust-ui/use-extract-string";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { AsideProps, AsidePropsNoGeneric } from "./types";
import { generateStructure } from "./generate-structure";
import { propagation } from "@robust-ui/tools";
import { Button } from "@robust-ui/button";
import { Flex } from "@robust-ui/flex";
export * from "./types";
import {
  startTransition,
  forwardRef,
  useEffect,
  useState,
  useMemo,
  memo,
} from "react";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<AsideProps>> =
  forwardRef(function AsideComponent(
    {
      childrenWithOutPropagation,
      buttonCloseProps,
      buttonOpenProps,
      iconCloseProps,
      iconOpenProps,
      children,
      ...props
    },
    ref
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLElement>({
      componentType: "aside",
    });

    const {
      closeOnOverlayClick = true,
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      placement,
      variant,
      size,
      ...cleanedProps
    } = useCleanValue({ props }) as AsidePropsNoGeneric;

    const structureStyle = useMemo(() => {
      return generateColorScheme({
        variant: variant || colorSchemeProperty?.variant || "solid",
        opacity: 1,
        props: {
          hover: false,
          active: false,
          focus: false,
        },
        baseColor:
          colorSchemeProperty?.baseColor ||
          colorSchemeProperty?.baseColorRaw ||
          colorSchemeRaw ||
          colorScheme ||
          "black",
        ...colorSchemeProperty,
      });
    }, [variant, colorSchemeProperty, colorSchemeRaw, colorScheme]);

    const [isOpen, setIsOpen] = useState(false);

    const { otherComponents, strings } = useExtractString({
      multiLanguageSupport,
      children,
    });

    const layout = useMemo(
      () =>
        generateStructure({
          size,
          placement,
          isOpen,
        }),
      [size, placement, isOpen]
    );

    const childrenPropagation = useMemo(
      () =>
        propagation({
          children: otherComponents,
          props: { onClick: () => setIsOpen(false) },
        }),
      [otherComponents]
    );

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
      <Flex>
        <Button
          onClick={() => startTransition(() => setIsOpen(true))}
          borderRadius="2dvh"
          cursor="pointer"
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
            iconType: "menu5Fill",
            ...iconOpenProps,
          }}
          {...buttonOpenProps}
        />
        <Flex
          onClick={
            closeOnOverlayClick
              ? () => startTransition(() => setIsOpen(false))
              : undefined
          }
          colorSchemeProperty={{
            opacity: 0.2,
            props: {
              hover: false,
              active: false,
              focus: false,
            },
            baseColorRaw:
              colorSchemeProperty?.baseColor ||
              colorSchemeProperty?.baseColorRaw ||
              colorSchemeRaw ||
              colorScheme ||
              "gray",
          }}
          display={isOpen ? "flex" : "none"}
          backdropFilterRaw="blur(0.5dvh)"
          flexDirection="column"
          overflow="hidden"
          position="fixed"
          zIndexRaw="9999"
          height="100dvh"
          width="100dvw"
          left="0"
          top="0"
        />
        <Component
          flexDirection={
            placement === "left" || placement === "right" ? "row" : "column"
          }
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          zIndexRaw="10000"
          position="fixed"
          display="flex"
          ref={ref}
          {...layout}
          {...structureStyle}
          {...cleanedProps}
        >
          <Button
            onClick={() => startTransition(() => setIsOpen(false))}
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
          {strings}
          {childrenPropagation}
          {childrenWithOutPropagation}
        </Component>
      </Flex>
    );
  });
/**
 * Renders an aside component with customizable props.
 *
 * @component
 * @example
 * ```tsx
 * import { Aside } from "@robust-ui/aside";
 *
 * const App = () => {
 *   return (
 *     <Aside placement="left" variant="solid" size="md">
 *       <h1>Hello, World!</h1>
 *     </Aside>
 *   );
 * };
 * ```
 *
 * @param {AsideProps} props - The props for the Aside component.
 * @returns {JSX.Element} The rendered Aside component.
 */
export const Aside = memo(Factory);
