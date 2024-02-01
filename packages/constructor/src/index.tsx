import { forwardRef, useEffect, useMemo } from "react";
import { EnhancedProps, ComponentConstructorProps } from "./types";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { generateUniqueClassName, injectStyle } from "@robust-ui/css-utils";
import { propsSplitter } from "@robust-ui/tools";
export * from "./types";
/**
 * Creates a component with enhanced props and styling capabilities.
 *
 * @template T - The type of component.
 * @param {ComponentConstructorProps<T>} componentType - The component type.
 * @returns {React.MemoExoticComponent<React.ForwardRefExoticComponent<EnhancedProps<T> & React.RefAttributes<unknown>>>} The generated component.
 */

export function CreateComponent<T>({
  componentType,
}: ComponentConstructorProps<T>) {
  return useMemo(
    () =>
      forwardRef(function GeneratedComponent(
        {
          ElementType = componentType as React.ElementType,
          style,
          ...props
        }: EnhancedProps<T>,
        ref,
      ): JSX.Element | null {
        const {
          currentBreakpoint,
          isProviderActive,
          isDarkModeActive,
          mediaBreakpoints,
          selectors,
          commands,
          cssReset,
          isServer,
          pathname,
          theme,
        } = useGlobalContext({
          key: "devData",
        });

        const { htmlProps, styleProps } = useMemo(
          () =>
            propsSplitter({
              props,
              commands: {
                ...selectors,
              },
            }),
          [selectors, props],
        );

        const uniqueClassName = useMemo(
          () =>
            generateUniqueClassName({
              object: {
                style,
                ...styleProps,
              },
            }),
          [styleProps, style],
        );

        const combinedClassName = [uniqueClassName, props.className]
          .join(" ")
          .trim();

        useMemo(() => {
          injectStyle({
            breakPoints: {
              current: currentBreakpoint as string,
              context: mediaBreakpoints,
            },
            classNameSelector: combinedClassName,
            darkMode: isDarkModeActive,
            inputProps: styleProps,
            commands,
            cssReset,
            isServer,
            pathname,
            theme,
          });
        }, [
          commands,
          pathname,
          isServer,
          cssReset,
          combinedClassName,
          currentBreakpoint,
          isDarkModeActive,
          mediaBreakpoints,
          theme,
          styleProps,
        ]);

        useEffect(() => {
          if (!isProviderActive) {
            throw new Error(
              `The Provider is not currently active or initialized. Please ensure it is properly mounted before use.`,
            );
          }
        }, [isProviderActive]);

        return (
          <ElementType
            className={combinedClassName}
            {...htmlProps}
            style={style}
            ref={ref}
          >
            {props.children}
          </ElementType>
        );
      }),
    [componentType],
  );
}
