import { useGlobalContext } from "@robust-ui/use-global-context";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { IconProps, ForwardRefExoticIcon } from "./types";
import { CreateComponent } from "@robust-ui/constructor";
import { isSVGElement } from "./is-svg-element";
import React, { Ref, forwardRef } from "react";
import { Path } from "./path";
import { Icons } from "@robust-ui/icons";
import { Flex } from "@robust-ui/flex";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticIcon> =
  forwardRef<unknown, IconProps>(function IconComponent(
    { ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const Component = CreateComponent<IconProps>({
      ComponentType: "svg",
    });

    const globalContextData = useGlobalContext({ key: "devData" });
    const cleanedProps = useCleanValue({ props });
    const {
      children,
      focusable,
      viewBox,
      sizeRaw,
      icon,
      size = "1.5rem",
    } = cleanedProps as IconProps;

    const newSizesEvaluated = sizeRaw
      ? sizeRaw
      : typeof size === "object"
      ? size[globalContextData.currentBreakpoint as string]
      : size;

    const IconEvaluated =
      Icons[icon as keyof typeof Icons] || Icons["errorWarningFill"];

    const includeFillLine =
      !icon?.toString().includes("Fill") && !icon?.toString().includes("Line");

    const childrenEvaluated = children ? isSVGElement(children) : false;

    if (childrenEvaluated) {
      return (
        <Flex
          elementName="Icon-Flex"
          display={focusable ? "inlineBlock" : "inlineFlex"}
          viewBox={viewBox || "0 0 24 24"}
          minHeightRaw={newSizesEvaluated}
          minWidthRaw={newSizesEvaluated}
          heightRaw={newSizesEvaluated}
          widthRaw={newSizesEvaluated}
          lineHeight="1rem"
          {...props}
        >
          {children}
        </Flex>
      );
    } else
      return (
        <Component
          elementName="Icon-SVG"
          display={focusable ? "inlineBlock" : "inlineFlex"}
          viewBox={viewBox || "0 0 24 24"}
          heightRaw={newSizesEvaluated}
          widthRaw={newSizesEvaluated}
          minHeightRaw={newSizesEvaluated}
          minWidthRaw={newSizesEvaluated}
          strokeWidth={includeFillLine ? "1" : "0"}
          strokeLinecap="round"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          ref={ref}
          {...props}
        >
          {includeFillLine ? (
            <>
              <Path
                elementName="Icon-Path"
                d="M0 0h24v24H0z"
                fill="none"
                stroke="none"
              />
              <Path elementName="Icon-Path" fill="none" d={IconEvaluated} />
            </>
          ) : (
            <Path elementName="Icon-Path" d={IconEvaluated} />
          )}
        </Component>
      );
  });

export const Icon = React.memo(Factory);
