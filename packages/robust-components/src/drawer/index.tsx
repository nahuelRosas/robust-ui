import React, { forwardRef } from "react";
import { Constructor } from "@robust-ui/constructor";
import { DrawerProps, ForwardRefExoticDrawer } from "./types";
import { height, width } from "./options/size";
import { Placement } from "./options/placement";
import { DrawerCloseButton } from "./complements";
export * from "./complements";

const Component = Constructor({
  Component: "div",
});

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticDrawer> =
  forwardRef<unknown, DrawerProps>(function Drawer(
    {
      children,
      open,
      toggleOpen,
      placement = "right",
      size = "full",
      passClose = false,
      ...props
    },
    ref
  ) {
    const condition = placement === "top" || placement === "bottom" ? "Y" : "X";

    const Transform = {
      top: `translateY(calc(-100% - 5rem))`,
      bottom: `translateY(calc(100% + 5rem))`,
      left: `translateX(calc(-100% - 5rem))`,
      right: `translateX(calc(100% + 5rem))`,
    };

    function handleChildClick(event: React.MouseEvent) {
      event.stopPropagation();
    }

    function mergedOnClick({
      existingOnClick,
      newOnClick,
    }: {
      existingOnClick: (() => void) | undefined;
      newOnClick: (() => void) | undefined;
    }): void {
      if (existingOnClick) {
        existingOnClick();
      }
      if (newOnClick) {
        newOnClick();
      }
    }

    function cloneElementWithCloseFunction({
      child,
    }: {
      child: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    }) {
      const newOnClick = toggleOpen;
      const existingOnClick = child.props.onClick;
      return React.cloneElement(child, {
        onClick: () => mergedOnClick({ existingOnClick, newOnClick }),
        onClose: handleChildClick,
      });
    }

    const clonedChildren = React.Children.map(children, (child) => {
      if (passClose && React.isValidElement(child)) {
        if (child.type.toString().includes("DrawerBody")) {
          const children = React.Children.toArray(
            child.props.children
          ) as React.ReactElement<
            any,
            string | React.JSXElementConstructor<any>
          >[];
          const newChildren = children.map((child) =>
            cloneElementWithCloseFunction({ child })
          );

          return React.cloneElement(child, {}, newChildren);
        }
      }
      return child;
    });

    return (
      <Component
        display="flex"
        componentName="Drawer"
        position="fixed"
        zIndexRaw="100"
        backgroundColor="black"
        flexDirection="column"
        height={condition === "X" ? "optimizedHeight" : `${height[size]}`}
        width={condition === "X" ? `${width[size]}` : "none"}
        transform={!open ? Transform[placement] : "none"}
        ref={ref}
        p="1rem"
        transition={
          open ? `transform 300ms ease-out` : `transform 300ms ease-in`
        }
        {...Placement[placement]}
        {...props}>
        {toggleOpen && <DrawerCloseButton toggleOpen={toggleOpen} />}
        {clonedChildren}
      </Component>
    );
  });

export const Drawer = React.memo(Factory);
