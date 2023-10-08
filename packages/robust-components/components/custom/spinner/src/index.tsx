import { CreateComponent } from "@robust-ui/constructor";
import { useCleanValue } from "@robust-ui/use-clean-value";
import React, { Ref, forwardRef } from "react";
import { models } from "./models";
import { useGlobalContext } from "@robust-ui/use-global-context";
import {
  ForwardRefExoticSpinner,
  SpinnerProps,
  SpinnerPropsClean,
} from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticSpinner> =
  forwardRef<unknown, SpinnerProps>(function SpinnerComponent(
    { ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const DefaultComponent = CreateComponent({
      ComponentType: "div",
    });
    const globalContextData = useGlobalContext({ key: "devData" });

    const cleanedProps = useCleanValue({ props });
    const { size, width, height, sizeRaw, colors, model, ...rest } =
      cleanedProps as SpinnerPropsClean;

    const newSizesEvaluated = sizeRaw
      ? sizeRaw
      : typeof size === "object"
      ? size[globalContextData.currentBreakpoint as string]
      : size;

    const modelSelected = models({
      colors,
      model,
    });

    return (
      <DefaultComponent
        elementName="Wrap"
        backgroundColor="transparent"
        justifyContent="center"
        alignItems="center"
        widthRaw={newSizesEvaluated}
        heightRaw={newSizesEvaluated}
        ref={ref}
      >
        <DefaultComponent
          elementName="Spinner"
          width="inherit"
          height="inherit"
          {...modelSelected}
          {...rest}
        />
      </DefaultComponent>
    );
  });

export const Spinner = React.memo(Factory);
