import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { EnhancedElementProps, ComponentConstructorProps } from "./types";
import { useGlobalContext } from "@robust-ui/use-global-context";
import {
  generateUniqueClassName,
  propsSplitter,
  injectCSS,
} from "@robust-ui/css-utils";
export * from "./types";

export function CreateComponent<T>({
  componentType,
}: ComponentConstructorProps<T>) {
  return useMemo(
    () =>
      forwardRef(function GeneratedComponent(
        {
          elementName = componentType
            ? componentType.toString()
            : "UnknownComponent",
          ElementType = componentType as React.ElementType,
          style,
          ...props
        }: EnhancedElementProps<T>,
        ref
      ): JSX.Element | null {
        const uniqueClassName = useMemo(
          () =>
            generateUniqueClassName({
              object: {
                elementName,
                style,
                ...props,
              },
            }),
          [elementName, props, style]
        );

        const combinedClassName = useRef<string>(
          [uniqueClassName, props.className].join(" ").trim()
        );

        const globalContext = useGlobalContext({
          key: "devData",
        });

        const { htmlProps, styleProps } = useMemo(
          () =>
            propsSplitter({
              props,
              commands: {
                ...globalContext.selectors,
              },
            }),
          [globalContext.selectors, props]
        );
        const [isCSSInjected, setCSSInjected] = useState(false);

        useEffect(() => {
          if (!isCSSInjected) {
            injectCSS({
              breakPoints: {
                current: globalContext.currentBreakpoint as string,
                context: globalContext.mediaBreakpoints,
              },
              inputProps: styleProps,
              classNameSelector: combinedClassName.current,
              commands: globalContext.commands,
              darkMode: globalContext.isDarkModeActive,
              theme: globalContext.theme,
              cssReset: globalContext.cssReset,
            });
            setCSSInjected(true);
          }
        }, [
          globalContext.commands,
          globalContext.cssReset,
          globalContext.currentBreakpoint,
          globalContext.isDarkModeActive,
          globalContext.mediaBreakpoints,
          globalContext.theme,
          isCSSInjected,
          styleProps,
        ]);

        const computedStyle = useRef<{
          [x: string]:
            | {
                styledCSSMap: Map<string, string[]>;
                inputProps: Record<string, unknown>;
              }
            | undefined;
        }>();

        computedStyle.current = {
          ...computedStyle.current,
          [globalContext.currentBreakpoint as string]: useMemo(
            () =>
              injectCSS({
                breakPoints: {
                  current: globalContext.currentBreakpoint as string,
                  context: globalContext.mediaBreakpoints,
                },
                inputProps: styleProps,
                classNameSelector: combinedClassName.current,
                commands: globalContext.commands,
                darkMode: globalContext.isDarkModeActive,
                theme: globalContext.theme,
                partialComputedStyles: computedStyle.current,
                cssReset: globalContext.cssReset,
              }),
            [
              globalContext.commands,
              globalContext.cssReset,
              globalContext.currentBreakpoint,
              globalContext.isDarkModeActive,
              globalContext.mediaBreakpoints,
              globalContext.theme,
              styleProps,
            ]
          ),
        };

        useEffect(() => {
          if (!globalContext.isProviderActive) {
            throw new Error(
              `The Provider is not currently active or initialized. Please ensure it is properly mounted before use.`
            );
          }
        }, [globalContext.isProviderActive]);

        if (!isCSSInjected) return null;

        return (
          <ElementType
            className={combinedClassName.current}
            ref={ref}
            style={style}
            {...htmlProps}>
            {props.children}
          </ElementType>
        );
      }),
    [componentType]
  );
}
