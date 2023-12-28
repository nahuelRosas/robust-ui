/* eslint-disable @next/next/no-css-tags */
import React, { forwardRef, useEffect, useMemo, useRef } from "react";
import { generateUniqueClassName, propsSplitter } from "@robust-ui/css-utils";
import { EnhancedElementProps, ComponentConstructorProps } from "./types";
import { useGlobalContext } from "@robust-ui/use-global-context";
import { useInjectStyle } from "@robust-ui/use-inject-style";
import { useSSR } from "@robust-ui/use-ssr";
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
          children,
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
        const { isServer } = useSSR();

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

        const computedStyle = useRef<{
          [x: string]:
            | {
                styledCSSMap: Map<string, string[]>;
                inputProps: Record<string, unknown>;
              }
            | undefined;
        }>();

        const styleInjected = useInjectStyle({
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
          isServer,
        });

        computedStyle.current = {
          ...computedStyle.current,
          [globalContext.currentBreakpoint as string]: styleInjected,
        };

        useEffect(() => {
          if (!globalContext.isProviderActive) {
            throw new Error(
              `The Provider is not currently active or initialized. Please ensure it is properly mounted before use.`
            );
          }
        }, [globalContext.isProviderActive]);

        // if (!isCSSInjected || !isServer) return null;

        return (
          <ElementType
            className={combinedClassName.current}
            ref={ref}
            style={style}
            {...htmlProps}>
            {children}
          </ElementType>
        );
      }),
    [componentType]
  );
}
