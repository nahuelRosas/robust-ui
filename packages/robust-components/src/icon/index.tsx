import React from "react";
import { Constructor } from "@robust-ui/constructor";
import { IconProps } from "./types";
import { icons } from "./icons";
import { RecoveryBreakPointValue } from "@robust-ui/tools";
import { completeBreakpoints } from "@robust-ui/functions";

const Component = Constructor({
  Component: "svg",
});

function Factory({
  children,
  ref,
  focusable,
  viewBox,
  unit,
  type,
  size = "1.5rem",
  typeRaw,
  ...props
}: IconProps): React.JSX.Element {
  const breakPoint = RecoveryBreakPointValue();

  const completedSize = completeBreakpoints({ inputObject: size });

  const _size =
    typeof size === "object"
      ? completedSize[breakPoint as keyof typeof completedSize]
      : size;

  const typeRawValue = typeRaw || type;

  const _children =
    children ??
    (typeRawValue &&
      icons[typeRawValue as keyof typeof icons] &&
      icons[typeRawValue as keyof typeof icons].path) ??
    icons.fallbackIcon.path;

  return (
    <Component
      display={focusable ? "inlineBlock" : "inlineFlex"}
      componentName="Icon-SVG"
      cursor="pointer"
      flexShrink={0}
      lineHeight="1rem"
      ref={ref}
      focusable={focusable}
      viewBox={
        (typeRawValue && icons[typeRawValue as keyof typeof icons].viewBox) ||
        viewBox ||
        "0 0 24 24"
      }
      width={_size}
      height={_size}
      {...props}>
      {_children}
    </Component>
  );
}

export const Icon = React.memo(Factory);
