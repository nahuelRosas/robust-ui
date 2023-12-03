import React, { forwardRef, lazy, useMemo } from "react";
import { IconProps, IconPropsNoGeneric } from "./types";
import { isSVGElement } from "./is-svg-element";
export * from "./types";

import { Flex } from "../flex";
import {
  ForwardRefExotic,
  CreateComponent,
  useCleanValue,
  Icons,
} from "@robust-ui/nextjs-components";
import { generateColorScheme } from "@robust-ui/css-utils";

const Path = lazy(() =>
  import("./path").then((module) => ({ default: module.Path })),
);
const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<IconProps>> =
  forwardRef(function IconComponent(
    { children, ...props },
    ref,
  ): React.JSX.Element {
    const Component = CreateComponent<SVGElement>({
      componentType: "svg",
    });

    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      focusable,
      iconType,
      sizeRaw,
      size,
      ...cleanedProps
    } = useCleanValue({ props }) as IconPropsNoGeneric;

    const structureStyle = useMemo(() => {
      if (!colorSchemeProperty && !colorSchemeRaw && !colorScheme) return {};
      return generateColorScheme({
        variant: colorSchemeProperty?.variant || "solid",
        opacity: 0.9,

        baseColor:
          colorSchemeProperty?.baseColor ||
          colorSchemeProperty?.baseColorRaw ||
          colorSchemeRaw ||
          colorScheme ||
          "black",
        ...colorSchemeProperty,
      });
    }, [colorSchemeRaw, colorScheme, colorSchemeProperty]);

    const IconEvaluated =
      Icons[iconType as keyof typeof Icons] || Icons["errorWarningFill"];

    const includeFillLine =
      !iconType?.toString().includes("Fill") &&
      !iconType?.toString().includes("Line");
    const childrenEvaluated = children ? isSVGElement(children) : false;

    const composeSize = sizeRaw || size || "3vh";

    if (childrenEvaluated) {
      return (
        <Flex
          elementName="Icon-Flex"
          display={focusable ? "inlineBlock" : "inlineFlex"}
          minHeightRaw={composeSize}
          minWidthRaw={composeSize}
          heightRaw={composeSize}
          widthRaw={composeSize}
          lineHeight="1rem"
          ref={ref}
          {...structureStyle}
          {...cleanedProps}
        >
          {children}
        </Flex>
      );
    } else
      return (
        <Component
          display={focusable ? "inlineBlock" : "inlineFlex"}
          minHeightRaw={composeSize}
          minWidthRaw={composeSize}
          heightRaw={composeSize}
          widthRaw={composeSize}
          elementName="Icon-SVG"
          viewBox="0 0 24 24"
          ref={ref}
          {...structureStyle}
          {...cleanedProps}
        >
          {includeFillLine ? (
            <>
              <Path
                elementName="Icon-Path"
                strokeLinecap="round"
                d="M0 0h24v24H0z"
                strokeWidth="1"
                stroke="none"
                fill="none"
              />
              <Path
                elementName="Icon-Path"
                strokeLinecap="round"
                stroke="currentColor"
                d={IconEvaluated}
                strokeWidth="1.5"
                fill="none"
              />
            </>
          ) : (
            <Path
              elementName="Icon-Path"
              strokeLinecap="round"
              stroke="currentColor"
              fill="currentColor"
              d={IconEvaluated}
              strokeWidth="0"
            />
          )}
        </Component>
      );
  });

export const Icon = React.memo(Factory);
