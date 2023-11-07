import { generateColorScheme } from "@robust-ui/css-utils";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { stopPropagation } from "@robust-ui/utils";
import React, {
  startTransition,
  forwardRef,
  Suspense,
  useState,
  useMemo,
  lazy,
  Ref,
} from "react";
import { OverlayPropsNoGeneric, OverlayProps } from "./types";
import { ButtonProps } from "@robust-ui/button";
import { ForwardRefExotic } from "@robust-ui/constructor";
export * from "./types";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);
const Card = lazy(() =>
  import("@robust-ui/card").then((module) => ({ default: module.Card }))
);

const Button = lazy(() =>
  import("@robust-ui/button").then((module) => ({ default: module.Button }))
);

const OverlayComponent: React.ForwardRefExoticComponent<
  ForwardRefExotic<OverlayProps>
> = forwardRef(function OverlayComponent({ ...props }, ref): React.JSX.Element {
  const cleanedProps = useCleanValue({ props });
  const {
    colorScheme = "mulberry",
    opacityColorScheme,
    buttonCloseProps,
    variant = "link",
    colorSchemeRaw,
    iconCloseProps,
    altColor = true,
    loadingProps,
    buttonProps,
    iconProps,
    children,
    header,
    label,
    text,
    data,
    ...rest
  } = cleanedProps as OverlayPropsNoGeneric;
  const [isOpen, setIsOpen] = useState(false);

  const structureStyle = useMemo(
    () =>
      generateColorScheme({
        baseColor: colorSchemeRaw || colorScheme,
        opacity: opacityColorScheme,
        altColor,
        variant,
      }),
    [colorSchemeRaw, colorScheme, opacityColorScheme, altColor, variant]
  );

  // const buttonPropsCompose: {
  //   main: ButtonProps;
  //   close: ButtonProps;
  // } = {
  //   main: { ...structureStyle, loadingProps, iconProps, ...buttonProps },
  //   close: {
  //     iconProps: {
  //       iconPosition: "left",
  //       iconType: "closeFill",
  //       ...iconCloseProps,
  //     },
  //     ...structureStyle,
  //     ...buttonCloseProps,
  //   },
  // };
  const stopProgationChildren = useMemo(
    () =>
      stopPropagation({
        children: (
          <Card
            header={header}
            // label={{
            //   propsLabel: {
            //     mr: "7%",
            //   },
            //   ...label,
            // }}
            // text={{
            //   propsText: {
            //     mr: "7%",
            //   },
            //   ...text,
            // }}
            data={data}
            ref={ref}
            {...rest}>
            <Suspense>
              <Button
                onClick={() => startTransition(() => setIsOpen(false))}
                position="absolute"
                borderRadius="2vh"
                width="fitContent"
                cursor="pointer"
                zIndex="10001"
                right="5%"
                mx="2vw"
                my="2vh"
                // {...buttonPropsCompose.close}
              />
            </Suspense>
            {children}
          </Card>
        ),
      }),
    [children, data, header, ref, rest]
  );

  function setOpen() {
    return startTransition(() => setIsOpen(!isOpen));
  }

  return (
    <>
      <Suspense>
        {/* <Button
          loadingProps={loadingProps}
          iconProps={iconProps}
          borderRadius="2vh"
          onClick={setOpen}
          cursor="pointer"
          my="2vh"
          {...structureStyle}
          {...buttonProps}
        /> */}
      </Suspense>
      <Suspense>
        <Flex
          display={isOpen ? "flex" : "none"}
          backdropFilter="blur(0.5vh)"
          bgRaw="rgba(0, 0, 0, 0.7)"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          onClick={setOpen}
          overflow="hidden"
          position="fixed"
          height="100vh"
          width="100vw"
          zIndex="9999"
          left="0"
          top="0">
          <Suspense>{stopProgationChildren}</Suspense>
        </Flex>
      </Suspense>
    </>
  );
});
export const Overlay = React.memo(OverlayComponent);
