import { AsideProps, AsidePropsClean, ForwardRefExoticAside } from "./types";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import React, { Ref, forwardRef, useState } from "react";
import { CreateComponent } from "@robust-ui/constructor";
import { Icon } from "@robust-ui/icon";
import { Flex } from "@robust-ui/flex";
export * from "./types";

export const Heights = {
  full: "100vh",
  xl: "80vh",
  lg: "60vh",
  md: "40vh",
  sm: "20vh",
  base: "10vh",
};
export const Widths = {
  full: "100vw",
  xl: "80vw",
  lg: "60vw",
  md: "40vw",
  sm: "20vw",
  base: "10vw",
};

export const Placement = {
  top: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "auto",
  },
  right: {
    top: "0",
    right: "0",
    bottom: "0",
    left: "auto",
  },
  bottom: {
    top: "auto",
    right: "0",
    bottom: "0",
    left: "0",
  },
  left: {
    top: "0",
    right: "auto",
    bottom: "0",
    left: "0",
  },
};

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticAside> =
  forwardRef<unknown, AsideProps>(function AsideComponent(
    { ...props }: AsideProps,
    ref: Ref<unknown>
  ): React.JSX.Element {
    const Component = CreateComponent({
      ComponentType: "aside",
    });

    const {
      colorScheme = "mulberry",
      variant = "outline",
      placement = "right",
      size = "lg",
      propsIcon,
      display,
      closeOnOverlayClick,
      background,
      ...rest
    } = useCleanValue({ props }) as AsidePropsClean;
    const [isOpen, setIsOpen] = useState(false);

    const transformDirection = {
      top: `translateY(calc(-100% - 5rem))`,
      bottom: `translateY(calc(100% + 5rem))`,
      left: `translateX(calc(-100% - 5rem))`,
      right: `translateX(calc(100% + 5rem))`,
    };

    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        <Icon
          icon="menuFill"
          onClick={toggleDrawer}
          cursor="pointer"
          borderRadius="5px"
          display={display}
          {...generateColorScheme({ color: colorScheme, variant })}
          {...propsIcon}
        />
        <Flex
          zIndex="0"
          display={isOpen ? "flex" : "none"}
          width="100vw"
          height="100vh"
          onClick={toggleDrawer}
          position="absolute"
          top="0"
          left="0"
          backdropFilter="blur(5px)"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          transition={isOpen ? "background-color 0.25s ease-in-out" : "none"}
        />
        <Component
          zIndex="100"
          elementName="Aside"
          display="flex"
          position="fixed"
          zIndexRaw="100"
          flexDirection="column"
          background={background ? background : "black"}
          height={
            size && !(placement === "top" || placement === "bottom")
              ? "100vh"
              : `${Heights[size]}`
          }
          width={
            (placement === "left" || placement === "right") && size
              ? `${Widths[size]}`
              : "0"
          }
          ref={ref}
          overflow="hidden"
          onClick={closeOnOverlayClick ? toggleDrawer : undefined}
          transition={isOpen ? "transform 0.25s ease-in-out" : "none"}
          transform={isOpen ? "none" : transformDirection[placement]}
          {...Placement[placement]}>
          <Flex optimizedWidth p="1rem" justifyContent="flexEnd">
            <Icon
              icon="closeFill"
              top="0"
              right="0"
              size="1.5rem"
              onClick={toggleDrawer}
              cursor="pointer"
              borderRadius="5px"
              {...generateColorScheme({ color: colorScheme, variant })}
              {...propsIcon}
            />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            optimizedWidth
            height="100%"
            gap="1rem"
            p="1rem"
            {...rest}>
            {rest.children}
          </Flex>
        </Component>
      </>
    );
  });

export const Aside = React.memo(Factory);
