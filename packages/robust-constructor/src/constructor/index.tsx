import {
  RecoveryBreakPointValue,
  RecoveryActiveProvider,
  InjectCSSStyles,
  GetRecoveryLanguage,
} from "@robust-ui/tools";
// Importing dependencies from "@robust-ui/tools"

import { generateId, convertRawProp } from "@robust-ui/functions";
// Importing dependencies from "@robust-ui/functions"

import React, { forwardRef, useRef, useMemo, useInsertionEffect, useEffect } from "react";
// Importing React, "forwardRef", "useRef", and "useInsertionEffect" from "react"

import { cssGenerators, CssPropertyMappings, RulesCSS } from "@robust-ui/theme";

// Importing "CssPropertyMappings" from "@robust-ui/theme"

import { BaseProps, ConstructorProps } from "./types";
// Importing "BaseProps" from a local file called "types"

/**
 * A higher-order component that dynamically generates CSS styles based on props and injects them into the DOM.
 * @param Component - The component to wrap with dynamic styles.
 * @returns A wrapped component with dynamically generated styles.
 */

function Factory<T>({ Component, OmitProvider }: ConstructorProps<T>) {
  // Create a forwardRef component that wraps the original component

  const Constructor: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<BaseProps & T> & React.RefAttributes<unknown>
  > = forwardRef<unknown, BaseProps & T>(function Constructor(
    {
      as: Element = Component,
      className,
      componentName = Component as string,
      children,
      multiLanguage,
      variant,

      ...props
    },
    ref
  ): JSX.Element | null {
    const classNameRef = useRef<string | null>(null);
    const styleProcessed = useRef<{
      style: Map<string, string[]> | undefined;
      breakPoint: string;
    }>({
      style: undefined,
      breakPoint: "base",
    });

    const styleProcessedBreakPoint = useRef<
      Record<string, Map<string, string[]>>
    >({});

    // Reference to hold the generated className

    const currentPropsRef =
      useRef<
        Omit<
          BaseProps & T,
          | "as"
          | "componentName"
          | "children"
          | "multiLanguage"
          | "className"
          | "variant"
        >
      >(props);

    // Reference to hold the previous props of the component

    const breakPoint = RecoveryBreakPointValue();
    // Retrieve the current breakpoint value using a recovery mechanism

    const activeProvider = RecoveryActiveProvider();
    // Retrieve the current active provider using a recovery mechanism

    const language = GetRecoveryLanguage();
    // Generate a unique className based on the component and props

    const memoizedChildren = useMemo(() => {
      const memoizedChildrenObj: Partial<React.ReactElement> = {};

      React.Children.forEach(children, (c) => {
        if (!React.isValidElement(c)) return;

        const { props, key } = c as React.ReactElement;

        if (!memoizedChildrenObj[key as keyof typeof memoizedChildrenObj]) {
          memoizedChildrenObj[key as keyof typeof memoizedChildrenObj] = {
            props,
            key,
          };
        }
      });

      return memoizedChildrenObj.toString();
    }, [children]);

    const memorizedClassName = useMemo(() => {
      function generateClassName(): string {
        try {
          return generateId({
            object: {
              Component,
              className,
              componentName,
              props,
              childrenLength: React.Children.count(children),
              breakPoint,
              language,
              memoizedChildren,
              variant,
            },
            prefix: `Robust-CSS-${componentName}`,
          });
        } catch (error) {
          throw new Error(error as string, {
            cause: `${error} -- Location: Constructor/generateClassName`,
          });
        }
      }
      return generateClassName();
    }, [
      breakPoint,
      children,
      className,
      componentName,
      language,
      memoizedChildren,
      props,
      variant,
    ]);

    const classNameGenerated = classNameRef.current || memorizedClassName;

    // Get the current className or generate a new one if it doesn't exist
    classNameRef.current = classNameGenerated;

    const previousProps = currentPropsRef.current;
    currentPropsRef.current = props;
    // Update the previousProps reference with the current props

    // Filter out props that are not valid CSS properties or have "str" or "string" suffix
    const domProps = Object.entries(props).reduce((acc, [key, value]) => {
      const { prop: correctedProp, isKeywordPresent } = convertRawProp({
        inputKey: key,
      });
      // Convert the key into kebab-case format

      if (
        correctedProp in CssPropertyMappings ||
        key in RulesCSS["PseudoElements"] ||
        key in RulesCSS["PseudoClasses"] ||
        correctedProp in cssGenerators ||
        key in CssPropertyMappings ||
        key in RulesCSS["AtRules"] ||
        key in cssGenerators ||
        isKeywordPresent
      ) {
        return acc;
      }
      return { ...acc, [key]: value };
      // Include the prop in the filtered domProps object
    }, {});

    // useInsertionEffect that handles the injection of CSS styles
    useEffect(() => {
      try {
        if (
          styleProcessedBreakPoint.current[breakPoint as string] !==
            styleProcessed.current.style &&
          (breakPoint as string) !== styleProcessed.current.breakPoint
        ) {
          InjectCSSStyles({
            classSelector: classNameRef.current as string,
            componentProps: props as Record<string, string> | string,
            breakPoint,
            generatedStyles:
              styleProcessedBreakPoint.current[breakPoint as string],
          });
        } else if (
          !styleProcessed.current.style ||
          (breakPoint as string) !== styleProcessed.current.breakPoint
        ) {
          const response = InjectCSSStyles({
            classSelector: classNameRef.current as string,
            componentProps: props as Record<string, string> | string,
            breakPoint,
          });
          if (response) {
            styleProcessed.current = {
              breakPoint: breakPoint as string,
              style: response,
            };
            styleProcessedBreakPoint.current[breakPoint as string] = response;
          }
        }
      } catch (error) {
        throw new Error(error as string, {
          cause: `${error} -- Location: Constructor/useInsertionEffect`,
        });
      }
    }, [
      previousProps,
      currentPropsRef,
      props,
      breakPoint,
      memorizedClassName,
      classNameGenerated,
      className,
    ]);

    // useInsertionEffect that checks if the component is mounted and sets the mounted state
    useInsertionEffect(() => {
      try {
        if (activeProvider || OmitProvider) {
          // The component is mounted
        } else {
          throw new Error(`The component "${componentName}" is not mounted.`);

          // Handle the case when the component is not mounted
        }
      } catch (error) {
        throw new Error(error as string, {
          cause: `${error} -- Location: Constructor/useInsertionEffect`,
        });

        // Handle any error that occurs during the check
      }
    }, [componentName, activeProvider]);

    // If the component is not mounted, return null
    if (!activeProvider && !OmitProvider) return null;

    // Render the wrapped component with the generated className and other props

    const classNameJoined = [classNameRef.current, className].join(" ");

    const childrenMultiLanguage =
      typeof multiLanguage !== "undefined" &&
      multiLanguage[language as keyof typeof multiLanguage];

    if (childrenMultiLanguage) {
      return (
        <Element className={classNameJoined} ref={ref} {...domProps}>
          {childrenMultiLanguage}
        </Element>
      );
    }

    return (
      <Element className={classNameJoined} ref={ref} {...domProps}>
        {children}
      </Element>
    );
  });

  return Constructor;
  // Return the StyleComponent as the result of the Constructor function
}

export const Constructor = Factory;
