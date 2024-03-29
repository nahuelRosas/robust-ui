import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { FooterProps, FooterPropsNoGeneric } from "./types";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { forwardRef, useMemo, memo } from "react";

export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<FooterProps>> =
  forwardRef(function FooterComponent(
    { children, ...props },
    ref,
  ): React.JSX.Element {
    const Component = CreateComponent<HTMLElement>({
      componentType: "footer",
    });

    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      ...cleanedProps
    } = useCleanValue({ props }) as FooterPropsNoGeneric;

    const structureStyle = useMemo(() => {
      if (!colorSchemeProperty && !colorSchemeRaw && !colorScheme) return {};
      return generateColorScheme({
        variant: colorSchemeProperty?.variant || "solid",
        opacity: 1,
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
        justifyContent="spaceBetween"
        height="fitContent"
        alignItems="center"
        flexDirection="row"
        position="relative"
        optimizedWidth
        display="flex"
        ref={ref}
        p="2dvh"
        {...structureStyle}
        {...cleanedProps}
      >
        {composeChildren}
      </Component>
    );
  });
/**
 * Renders a footer component.
 *
 * @component
 * @example
 * ```tsx
 * import { Footer } from "./index";
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <Footer>
 *         <p>This is the footer content</p>
 *       </Footer>
 *     </div>
 *   );
 * };
 * ```
 */
export const Footer = memo(Factory);
