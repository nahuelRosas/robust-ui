import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { BlockProps, BlockPropsNoGeneric } from "./types";
import { forwardRef, useMemo, memo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<BlockProps>> =
  forwardRef(function BlockComponent(
    { children, ...props },
    ref,
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLDivElement>({
      componentType: "div",
    });
    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      ...cleanedProps
    } = useCleanValue({ props }) as BlockPropsNoGeneric;

    const structureStyle = useMemo(() => {
      if (!colorSchemeProperty && !colorSchemeRaw && !colorScheme) return {};
      return generateColorScheme({
        variant: colorSchemeProperty?.variant || "solid",
        opacity: 0.9,
        props: { hover: false, active: false, focus: false },
        baseColor:
          colorSchemeProperty?.baseColor ||
          colorSchemeProperty?.baseColorRaw ||
          colorSchemeRaw ||
          colorScheme ||
          "black",
        ...colorSchemeProperty,
      });
    }, [colorSchemeRaw, colorScheme, colorSchemeProperty]);

    const composeChildren = useMemo(() => {
      if (multiLanguageSupport && children)
        console.error(
          "Warning: multiLanguageSupport and children are not compatible, please use one or the other",
        );
      return multiLanguageSupport || children;
    }, [multiLanguageSupport, children]);
    return (
      <Component
        ref={ref}
        display="block"
        {...structureStyle}
        {...cleanedProps}
      >
        {composeChildren}
      </Component>
    );
  });

/**
 * Renders a block component.
 *
 * @component
 * @example
 * ```tsx
 * import { Block } from "@robust-ui/nextjs-components";
 *
 * function App() {
 *   return (
 *     <Block>
 *       This is a block component.
 *     </Block>
 *   );
 * }
 * ```
 */
export const Block = memo(Factory);
