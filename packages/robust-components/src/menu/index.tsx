/**
 * The Menu component is a dynamic menu that can be toggled open and closed, and it renders a list of
 * children components.
 * @param {MenuProps}  - - `children`: The content to be displayed inside the menu.
 * @returns The `Menu` component is being returned.
 */
import React, { useState } from "react";
import { Constructor } from "@robust-ui/constructor";
import { processChildren } from "@robust-ui/functions";
import { MenuProps } from "./types";
import { Span } from "@/typography";
import { Flex, Icon } from "..";
import { useIsomorphicLayoutEffect } from "@robust-ui/hooks";

const MenuComponent = Constructor({
  Component: "menu",
});

export function Menu({
  children,
  ref,
  open,
  onClose,
  icon,
  iconType,
  title,
  buttonPersistence,
  size = "1em",
  ...props
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(open || false);

  useIsomorphicLayoutEffect(() => {
    setIsOpen(open || false);
  }, [open]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clonedChildren = processChildren({
    children,
    passAction: true,
    onAction: {
      onClick: () => {
        setIsOpen(false);
        onClose && onClose();
      },
    },
  });

  const shouldDisplay = buttonPersistence || !isOpen ? "flex" : "none";

  return (
    <>
      {(icon || title) && (
        <Flex
          display={shouldDisplay}
          onClick={handleToggleMenu}
          flexDirection="row"
          cursor="pointer"
          {...props}
        >
          {title && (
            <Span
              pr="0"
              fontWeight="inherit"
              fontSize="inherit"
              multiLanguage={typeof title === "object" ? title : undefined}
            >
              {typeof title === "string" && title}
            </Span>
          )}
          {iconType && (
            <Icon pl="0" size={size} type={iconType || "expandMore"} />
          )}
          {icon && (
            <Flex display="inlineFlex" pl="0" alignItems="center">
              {icon}
            </Flex>
          )}
        </Flex>
      )}
      {!title && !icon && (
        <Flex
          display={shouldDisplay}
          onClick={handleToggleMenu}
          flexDirection="row"
          cursor="pointer"
          {...props}
        >
          <Span cursor="pointer" fontSize="inherit" pr="0" fontWeight="inherit">
            Menu
          </Span>
          <Icon size={size} pl="0" type="expandMore" />
        </Flex>
      )}
      <MenuComponent
        componentName="Menu"
        optimizedWidth
        gap="0.5em"
        m="0"
        flexDirection="column"
        display={isOpen ? "flex" : "none"}
        ref={ref}
        zIndexRaw="100"
        {...props}
      >
        {clonedChildren}
      </MenuComponent>
    </>
  );
}
