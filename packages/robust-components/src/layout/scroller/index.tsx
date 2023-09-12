import { Constructor } from "@robust-ui/constructor";
import {
  useElementDimensions,
  useIsomorphicLayoutEffect,
} from "@robust-ui/hooks";
import React, { forwardRef, useCallback, useRef, useMemo } from "react";
import { ScrollerInner } from "./scrollerInner";
import { ScrollerProps, ForwardRefExoticFlex } from "./types";
import { RecoveryBreakPointValue } from "@robust-ui/tools";
import { completeBreakpoints } from "@robust-ui/functions";

// Create a dynamic styles component using the "div" tag
const Component = Constructor({
  Component: "div",
});

/**
 * Scroller Component
 *
 * A flexible container component that displays its children in a scrollable container.
 *
 * Render the Scroller component as a parent to any number of children. The Scroller component will
 * automatically scroll to the next child when the user scrolls the mouse wheel up or down.
 *
 * @param {ScrollerProps} props - Props for the Scroller component
 * @param {React.Ref<unknown>} ref - Ref forwarded to the underlying div element
 * @returns {React.JSX.Element} - Rendered Scroller component
 */
const ScrollerComponent: React.ForwardRefExoticComponent<ForwardRefExoticFlex> =
  forwardRef<unknown, ScrollerProps>(function ScrollerComponent(
    {
      children,
      scrollOption = "smooth",
      disableScroll = false,
      cinematicDirections = [],
      scrollDirection = "vertical",
      fullScreen = false,
      sensitivityFactor = 0.5,
      disableOrientation = "none",
      propsItems,
      ...otherProps
    },
    ref
  ) {
    const breakPoints = RecoveryBreakPointValue();

    const touchPositionRef = useRef<{
      startX: number;
      startY: number;
      deltaX: number;
      deltaY: number;
    }>({
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
    });

    const childrenArray: React.ReactNode[] = useMemo(
      () => React.Children.toArray(children),
      [children]
    );
    const childRefs = useRef<(HTMLDivElement | null)[]>(
      childrenArray.map(() => null)
    );

    const handleMouseScroll = useCallback(
      (event: React.WheelEvent<HTMLDivElement>) => {
        if (!disableScroll) {
          const { deltaX, deltaY } = event;

          const adjustedDeltaX = deltaX * sensitivityFactor;
          const adjustedDeltaY = deltaY * sensitivityFactor;

          const currentIndex = childRefs.current.findIndex(
            (ref) =>
              ref &&
              ref.getBoundingClientRect().top >= 0 &&
              ref.getBoundingClientRect().left >= 0
          );
          let targetIndex = -1;

          if (Math.abs(adjustedDeltaX) > Math.abs(adjustedDeltaY)) {
            if (disableOrientation === "horizontal") return;

            if (adjustedDeltaX < 0 && currentIndex > 0) {
              targetIndex = currentIndex - 1;
            } else if (
              adjustedDeltaX > 0 &&
              currentIndex < childrenArray.length - 1
            ) {
              targetIndex = currentIndex + 1;
            }
          } else {
            if (disableOrientation === "vertical") return;
            if (adjustedDeltaY < 0 && currentIndex > 0) {
              targetIndex = currentIndex - 1;
            } else if (
              adjustedDeltaY > 0 &&
              currentIndex < childrenArray.length - 1
            ) {
              targetIndex = currentIndex + 1;
            }
          }

          if (targetIndex !== -1) {
            const targetElement = childRefs.current[targetIndex];
            targetElement?.scrollIntoView({
              behavior: scrollOption,
              inline: "start",
            });
          }
        }
      },
      [
        childrenArray.length,
        disableOrientation,
        disableScroll,
        scrollOption,
        sensitivityFactor,
      ]
    );

    const handleTouchScroll = useCallback(
      (event: React.TouchEvent<HTMLDivElement>) => {
        if (!disableScroll) {
          const { deltaX, deltaY } = touchPositionRef.current;

          const adjustedDeltaX = deltaX * sensitivityFactor;
          const adjustedDeltaY = deltaY * sensitivityFactor;

          const currentIndex = childRefs.current.findIndex(
            (ref) =>
              ref &&
              ref.getBoundingClientRect().top >= 0 &&
              ref.getBoundingClientRect().left >= 0
          );
          let targetIndex = -1;

          if (Math.abs(adjustedDeltaX) > Math.abs(adjustedDeltaY)) {
            if (disableOrientation === "horizontal") return;
            else if (adjustedDeltaX < 0 && currentIndex > 0) {
              targetIndex = currentIndex - 1;
            } else if (
              adjustedDeltaX > 0 &&
              currentIndex < childrenArray.length - 1
            ) {
              targetIndex = currentIndex + 1;
            }
          } else {
            if (disableOrientation === "vertical") return;
            else if (adjustedDeltaY < 0 && currentIndex > 0) {
              targetIndex = currentIndex - 1;
            } else if (
              adjustedDeltaY > 0 &&
              currentIndex < childrenArray.length - 1
            ) {
              targetIndex = currentIndex + 1;
            }
          }

          if (targetIndex !== -1) {
            const targetElement = childRefs.current[targetIndex];
            targetElement?.scrollIntoView({
              behavior: scrollOption,
              inline: "start",
            });
          }
        }
      },
      [
        childrenArray.length,
        disableOrientation,
        disableScroll,
        scrollOption,
        sensitivityFactor,
      ]
    );

    const handleTouchMove = useCallback(
      ({ touches }: React.TouchEvent<HTMLDivElement>) => {
        const touch = touches[0];

        if (touch) {
          const { startX, startY } = touchPositionRef.current;
          const { clientX: currentX, clientY: currentY } = touch;

          touchPositionRef.current = {
            startX,
            startY,
            deltaX: currentX - startX,
            deltaY: startY - currentY,
          };
        }
      },
      []
    );

    const handleTouchStart = useCallback(
      ({ touches }: React.TouchEvent<HTMLDivElement>) => {
        const touch = touches[0];
        if (touch) {
          touchPositionRef.current = {
            startX: touch.clientX,
            startY: touch.clientY,
            deltaX: 0,
            deltaY: 0,
          };
        }
      },
      []
    );

    const MemoizedScrollerChild = React.memo(function ScrollerChild({
      child,
      index,
    }: {
      child: React.ReactNode;
      index: number;
    }): React.JSX.Element {
      return (
        <Component
          display="flex"
          componentName={`ScrollerChild-${index}`}
          flex="0 0 auto"
          ref={(el: HTMLDivElement | null) => {
            childRefs.current[index] = el;
          }}
          heightRaw={fullScreen ? "100%" : "fit-content"}
          widthRaw={fullScreen ? "100%" : "fit-content"}
          {...propsItems}>
          {child}
        </Component>
      );
    });

    const cloneChildren = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      const { display } = child.props;

      if (typeof display === "undefined") {
        return child;
      }

      const completeDisplay =
        typeof display === "string"
          ? display
          : completeBreakpoints({ inputObject: display });

      const shouldRenderChild =
        display !== "none" &&
        (typeof display !== "object" ||
          completeDisplay[breakPoints as keyof typeof completeDisplay] !==
            "none");

      if (shouldRenderChild) {
        return child;
      }

      return null;
    });

    return (
      <Component
        componentName="Scroller"
        height={fullScreen ? "100%" : "fitContent"}
        width={fullScreen ? "100%" : "inherit"}
        overflow="hidden"
        whiteSpace={scrollDirection === "vertical" ? "normal" : "nowrap"}>
        <ScrollerInner
          onWheel={handleMouseScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchScroll}
          scrollDirection={scrollDirection}
          whiteSpace="normal"
          ref={ref}
          {...otherProps}>
          {React.Children.map(cloneChildren, (child, index) => {
            return <MemoizedScrollerChild child={child} index={index} />;
          })}
        </ScrollerInner>
      </Component>
    );
  });

export const Scroller = React.memo(ScrollerComponent);
