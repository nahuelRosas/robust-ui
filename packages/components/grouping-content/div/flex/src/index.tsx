import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { FlexProps, FlexPropsNoGeneric } from "./types";
import { forwardRef, useMemo, memo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<FlexProps>> =
  forwardRef(function FlexComponent(
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
      variant,
      ...cleanedProps
    } = useCleanValue({ props }) as FlexPropsNoGeneric;

    const structureStyle = useMemo(() => {
      if (!colorSchemeProperty && !colorSchemeRaw && !colorScheme) return {};
      return generateColorScheme({
        variant: variant || colorSchemeProperty?.variant || "solid",
        opacity: 0.9,
        props: {
          hover: false,
          focus: false,
          active: false,
          ...colorSchemeProperty?.props,
        },
        baseColor:
          colorSchemeProperty?.baseColor ||
          colorSchemeProperty?.baseColorRaw ||
          colorSchemeRaw ||
          colorScheme ||
          "black",
        ...colorSchemeProperty,
      });
    }, [colorSchemeProperty, colorSchemeRaw, colorScheme, variant]);

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
        justifyContent="flexStart"
        pointerEvents="inherit"
        flexDirection="row"
        alignItems="center"
        display="flex"
        {...structureStyle}
        {...cleanedProps}
      >
        {composeChildren}
      </Component>
    );
  });
/**
 * A flexible container component that arranges its children in a row.
 *
 * @component
 * @example
 * ```tsx
 * import { Flex } from "@robust-ui/flex";
 *
 * const App = () => {
 *   return (
 *     <Flex>
 *       <div>Child 1</div>
 *       <div>Child 2</div>
 *       <div>Child 3</div>
 *     </Flex>
 *   );
 * };
 * ```
 */
export const Flex = memo(Factory);
