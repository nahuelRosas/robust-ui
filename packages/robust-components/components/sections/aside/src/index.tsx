import React, { Suspense, forwardRef, lazy, useMemo, useState } from "react";
import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { AsidePropsNoGeneric, AsideProps } from "./types";
import { generateStructure } from "./generate-structure";
import { ButtonProps } from "@robust-ui/button";
import { propagation } from "@robust-ui/utils";
import { startTransition } from "react";
export * from "./types";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);

const Button = lazy(() =>
  import("@robust-ui/button").then((module) => ({ default: module.Button }))
);

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<AsideProps>> =
  forwardRef(function AsideComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "aside",
    });

    const cleanedProps = useCleanValue({ props });

    const {
      childrenWithOutPropagation,
      opacityColorScheme,
      variant = "link",
      buttonCloseProps,
      altColor = true,
      colorSchemeRaw,
      iconCloseProps,
      loadingProps,
      buttonProps,
      colorScheme,
      placement,
      iconProps,
      children,
      display,
      size,
      ...rest
    } = cleanedProps as AsidePropsNoGeneric;
    const [isOpen, setIsOpen] = useState(false);

    const structureStyle = useMemo(
      () =>
        generateColorScheme({
          baseColor: colorSchemeRaw || colorScheme,
          opacity: opacityColorScheme,
          altColor,
          variant,
        }),
      [colorSchemeRaw, colorScheme, opacityColorScheme, altColor, variant]
    );

    const buttonPropsCompose: {
      main: ButtonProps;
      close: ButtonProps;
    } = {
      main: {
        focus:{},
        loadingProps,
        iconProps,
        ...buttonProps,
      },
      close: {
        iconProps: {
          iconPosition: "left",
          iconType: "closeFill",
          ...iconCloseProps,
        },
        ...structureStyle,
        ...buttonCloseProps,
      },
    };
    const structure = useMemo(
      () => generateStructure({ size, placement, isOpen }),
      [size, placement, isOpen]
    );
    const childrenPropagation = useMemo(
      () =>
        propagation({
          children: children,
          props: { onClick: () => setIsOpen(false) },
        }),
      [children]
    );
    return (
      <>
        <Suspense>
          <Button
            onClick={() => startTransition(() => setIsOpen(true))}
            borderRadius="2vh"
            cursor="pointer"
            display={display}
            // {...buttonPropsCompose.main}
          />
        </Suspense>
        <Suspense>
          <Flex
            onClick={() => startTransition(() => setIsOpen(false))}
            display={isOpen ? "flex" : "none"}
            backdropFilter="blur(0.5vh)"
            bgRaw="rgba(0, 0, 0, 0.9)"
            flexDirection="column"
            overflow="hidden"
            position="fixed"
            height="100vh"
            zIndex="9999"
            width="100vw"
            left="0"
            top="0"
          />
        </Suspense>
        <Component
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          overflow="hidden"
          position="fixed"
          zIndexRaw="100"
          display="flex"
          zIndex="10000"
          bg="black"
          ref={ref}
          {...structure}
          {...rest}>
          <Suspense>
            <Button
              onClick={() => startTransition(() => setIsOpen(false))}
              position="absolute"
              borderRadius="2vh"
              width="fitContent"
              cursor="pointer"
              zIndex="10001"
              right="0"
              mx="2vw"
              my="2vh"
              top="0"
              // {...buttonPropsCompose.close}
            />
          </Suspense>
          {childrenPropagation}
          {childrenWithOutPropagation}
        </Component>
      </>
    );
  });

export const Aside = React.memo(Factory);
