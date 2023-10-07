import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { EnhancedElementProps, ComponentConstructorProps } from "./types";
import { useGlobalContext } from "@robust-ui/use-global-context";
import {
  generateUniqueClassName,
  propsSplitter,
  attributeCompleter,
  injectCSS,
} from "@robust-ui/css-utils";
export * from "./types";

export function CreateComponent<T>({
  ComponentType,
}: ComponentConstructorProps<T>) {
  return useMemo(
    function () {
      return forwardRef<unknown, EnhancedElementProps<T> & T>(
        function GeneratedComponent(
          {
            elementName = ComponentType
              ? ComponentType.toString()
              : "UnknownComponent",
            ElementType = ComponentType as React.ElementType,
            ...props
          }: EnhancedElementProps<T> & T,
          ref
        ): JSX.Element | null {
          const uniqueClassName = useMemo(
            () =>
              generateUniqueClassName({
                object: {
                  elementName,
                  ...props,
                },
              }),
            [elementName, props]
          );

          const combinedClassName = useRef<string>(
            [uniqueClassName, props.className].join(" ").trim()
          );

          const globalContext = useGlobalContext({
            key: "devData",
          });

          const completedProps = useMemo(
            () =>
              attributeCompleter({
                inputAttributes: props,
                mediaBreakpoints: globalContext.mediaBreakpoints,
              }) as Record<string, unknown>,
            [globalContext.mediaBreakpoints, props]
          );

          const { htmlProps, styleProps } = useMemo(
            () =>
              propsSplitter({
                props: completedProps,
                commands: {
                  ...globalContext.selectors,
                },
              }),
            [completedProps, globalContext.selectors]
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

          if (
            typeof props.multiLanguageSupport !== "undefined" &&
            props.multiLanguageSupport[globalContext.currentGlobalLanguage]
          ) {
            return (
              <ElementType className={combinedClassName.current} {...htmlProps}>
                {
                  props.multiLanguageSupport[
                    globalContext.currentGlobalLanguage
                  ]
                }
              </ElementType>
            );
          }

          if (!isCSSInjected) return null;

          return (
            <ElementType className={combinedClassName.current} {...htmlProps}>
              {props.children}
            </ElementType>
          );
        }
      );
    },
    [ComponentType]
  );
}
