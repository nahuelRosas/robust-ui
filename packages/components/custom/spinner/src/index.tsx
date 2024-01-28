import { CreateComponent, ForwardRefExotic } from "@robust-ui/constructor";
import { SpinnerProps, SpinnerPropsNoGeneric } from "./types";
import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { forwardRef, useMemo, memo } from "react";
import { Flex } from "@robust-ui/flex";
import { models } from "./models";
export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<SpinnerProps>> =
  forwardRef(function SpinnerComponent({ ...props }, ref): React.JSX.Element {
    const Component = CreateComponent<HTMLSpanElement>({
      componentType: "span",
    });
    const {
      colorSchemeProperty,
      complementaryColor = false,
      invertedColors,
      colorSchemeRaw,
      colorScheme,
      model = "A",
      colorsRaw,
      sizeRaw,
      variant,
      colors,
      height,
      width,
      size,
      ...cleanedProps
    } = useCleanValue({ props }) as SpinnerPropsNoGeneric;

    const structureStyle = useMemo(() => {
      return generateColorScheme({
        baseColor: colorSchemeRaw || colorScheme || "teal",
        variant: variant || "solidLight",
        opacity: 0.9,
        complementaryColor: complementaryColor || false,
        ...colorSchemeProperty,
      }) as {
        backgroundRaw: string;
        colorRaw: string;
        [key: string]: string;
      };
    }, [
      colorSchemeProperty,
      complementaryColor,
      colorSchemeRaw,
      colorScheme,
      variant,
    ]);

    const modelSelected = useMemo(
      () =>
        models({
          colorsRaw: {
            primary:
              colors && colors.primary
                ? colors.primary
                : colorsRaw && colorsRaw.primary
                  ? colorsRaw.primary
                  : invertedColors
                    ? structureStyle.complementaryColor ||
                      structureStyle.colorRaw
                    : structureStyle.backgroundRaw,
            secondary:
              colors && colors.secondary
                ? colors.secondary
                : colorsRaw && colorsRaw.secondary
                  ? colorsRaw.secondary
                  : invertedColors
                    ? structureStyle.backgroundRaw
                    : structureStyle.complementaryColor ||
                      structureStyle.colorRaw,
          },
          model,
        }),
      [
        structureStyle.complementaryColor,
        structureStyle.backgroundRaw,
        structureStyle.colorRaw,
        invertedColors,
        colorsRaw,
        colors,
        model,
      ],
    );

    return (
      <Flex
        justifyContent="center"
        position="relative"
        alignItems="center"
        height="fitContent"
        width="fitContent"
        {...cleanedProps}
      >
        <Component
          heightRaw={sizeRaw || size || height || "2.5dvh"}
          widthRaw={sizeRaw || size || width || "2.5dvh"}
          ref={ref}
          {...modelSelected}
        />
      </Flex>
    );
  });
/**
 * Renders a spinner component.
 *
 * @component
 * @example
 * ```tsx
 * import Spinner from './Spinner';
 *
 * function App() {
 *   return (
 *     <div>
 *       <Spinner />
 *     </div>
 *   );
 * }
 * ```
 */

export const Spinner = memo(Factory);
