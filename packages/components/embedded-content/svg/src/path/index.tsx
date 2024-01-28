import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { PathProps, PathPropsNoGeneric } from "./types";
import { forwardRef, memo } from "react";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<PathProps>> =
  forwardRef(function PathComponent({ ...props }, ref): React.JSX.Element {
    const ComponentPath = CreateComponent<SVGPathElement>({
      componentType: "path",
    });

    const { children, ...cleanedProps } = useCleanValue({
      props,
    }) as PathPropsNoGeneric;

    return (
      <ComponentPath ref={ref} {...cleanedProps}>
        {children}
      </ComponentPath>
    );
  });
/**
 * Represents a SVG path component.
 * @component
 * @example
 * ```tsx
 * import { Path } from "./path";
 *
 * function App() {
 *   return (
 *     <svg>
 *       <Path d="M10 10" />
 *     </svg>
 *   );
 * }
 * ```
 */
export const Path = memo(Factory);
