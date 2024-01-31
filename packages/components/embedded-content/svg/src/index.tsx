import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { forwardRef, useMemo, memo, useState, useEffect } from "react";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { IconProps, IconPropsNoGeneric } from "./types";
import { isSVGElement } from "./is-svg-element";
import { importIcon } from "@robust-ui/icons";
import { Flex } from "@robust-ui/flex";
import { Path } from "./path";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<IconProps>> =
  forwardRef(function IconComponent(
    { children, ...props },
    ref,
  ): React.JSX.Element {
    const [icon, seTIcons] = useState<string | undefined>(undefined);

    const Component = CreateComponent<SVGElement>({
      componentType: "svg",
    });

    const {
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

    useEffect(() => {
      if (iconType) {
        importIcon({ key: iconType })
          .then((icon) => {
            seTIcons(icon);
          })
          .catch((error) => {
            console.error({ error });
          });
      }
    }, [iconType]);

    const includeFillLine =
      !iconType?.toString().includes("Fill") &&
      !iconType?.toString().includes("Line");

    const childrenEvaluated = children
      ? isSVGElement({ element: children })
      : false;

    const composeSize = sizeRaw || size || "3dvh";

    if (childrenEvaluated) {
      return (
        <Flex
          display={focusable ? "inlineBlock" : "inlineFlex"}
          minHeightRaw={composeSize}
          minWidthRaw={composeSize}
          heightRaw={composeSize}
          widthRaw={composeSize}
          lineHeight="2dvh"
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
          viewBox="0 0 24 24"
          ref={ref}
          {...structureStyle}
          {...cleanedProps}
        >
          {includeFillLine ? (
            <>
              <Path
                strokeLinecap="round"
                d="M0 0h24v24H0z"
                strokeWidth="1"
                stroke="none"
                fill="none"
              />
              <Path
                strokeLinecap="round"
                stroke="currentColor"
                d={icon}
                strokeWidth="1.5"
                fill="none"
              />
            </>
          ) : (
            <Path
              strokeLinecap="round"
              stroke="currentColor"
              fill="currentColor"
              d={icon}
              strokeWidth="0"
            />
          )}
        </Component>
      );
  });
/**
 * Renders an icon component.
 *
 * @component
 * @example
 * ```tsx
 * import { Icon } from "./Icon";
 *
 * function App() {
 *   return (
 *     <div>
 *       <Icon iconType="checkFill" size="24px" colorScheme="primary" />
 *       <Icon iconType="closeLine" size="16px" colorScheme="secondary" />
 *     </div>
 *   );
 * }
 * ```
 */
export const Icon = memo(Factory);
