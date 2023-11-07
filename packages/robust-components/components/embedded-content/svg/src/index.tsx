import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import React, { Suspense, forwardRef, lazy } from "react";
import { IconProps, IconPropsNoGeneric } from "./types";
import { isSVGElement } from "./is-svg-element";
import { Icons } from "@robust-ui/icons";
import { FlexProps } from "@robust-ui/flex";
export * from "./types";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);
const Path = lazy(() =>
  import("./path").then((module) => ({ default: module.Path }))
);
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<IconProps>> =
  forwardRef(function IconComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent({
      componentType: "svg",
    });

    const cleanedProps = useCleanValue({ props });
    const {
      children,
      focusable,
      viewBox,
      sizeRaw,
      icon,
      size = "1.5rem",
      ...rest
    } = cleanedProps as IconPropsNoGeneric;

    const IconEvaluated =
      Icons[icon as keyof typeof Icons] || Icons["errorWarningFill"];

    const includeFillLine =
      !icon?.toString().includes("Fill") && !icon?.toString().includes("Line");

    const childrenEvaluated = children ? isSVGElement(children) : false;

    if (childrenEvaluated) {
      return (
        <Suspense>
          <Flex
            elementName="Icon-Flex"
            display={focusable ? "inlineBlock" : "inlineFlex"}
            minHeightRaw={sizeRaw || size}
            minWidthRaw={sizeRaw || size}
            heightRaw={sizeRaw || size}
            widthRaw={sizeRaw || size}
            lineHeight="1rem">
            {children}
          </Flex>
        </Suspense>
      );
    } else
      return (
        <Component
          elementName="Icon-SVG"
          display={focusable ? "inlineBlock" : "inlineFlex"}
          viewBox={viewBox || "0 0 24 24"}
          heightRaw={sizeRaw || size}
          widthRaw={sizeRaw || size}
          minHeightRaw={sizeRaw || size}
          minWidthRaw={sizeRaw || size}
          strokeWidth={includeFillLine ? "1" : "0"}
          strokeLinecap="round"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          ref={ref}
          {...props}>
          {includeFillLine ? (
            <Suspense>
              <Path
                elementName="Icon-Path"
                d="M0 0h24v24H0z"
                fill="none"
                stroke="none"
              />
              <Path elementName="Icon-Path" fill="none" d={IconEvaluated} />
            </Suspense>
          ) : (
            <Suspense>
              <Path elementName="Icon-Path" d={IconEvaluated} />
            </Suspense>
          )}
        </Component>
      );
  });

export const Icon = React.memo(Factory);
