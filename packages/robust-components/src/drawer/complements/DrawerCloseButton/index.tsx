import React from "react";
import { Icon } from "@/icon";
import { DrawerCloseButtonProps } from "./types";

function Factory({ children, toggleOpen, ...props }: DrawerCloseButtonProps) {
  return (
    <Icon
      componentName="DrawerCloseButton"
      type="close"
      onClick={toggleOpen}
      alignSelf="flexEnd"
      position="fixed"
      {...props}>
      {children}
    </Icon>
  );
}

export const DrawerCloseButton = React.memo(Factory);
