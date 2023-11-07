import React, { Ref, forwardRef, lazy, Suspense } from "react";
import { useCleanValue } from "@robust-ui/use-clean-value";
import {
  ForwardRefExoticCover,
  CoverPropsNoGeneric,
  CoverProps,
} from "./types";
const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);

const StyledText = lazy(() =>
  import("@robust-ui/nested-styled-text").then((module) => ({
    default: module.StyledText,
  }))
);
const Icon = lazy(() =>
  import("@robust-ui/icon").then((module) => ({
    default: module.Icon,
  }))
);

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticCover> =
  forwardRef<unknown, CoverProps>(function CoverComponent(
    { ...props },
    ref
  ): React.JSX.Element {
    const cleanedProps = useCleanValue({ props });
    const {
      subHeadingProps,
      headingProps,
      subHeading,
      iconProps,
      heading,
      icons,
      ...rest
    } = cleanedProps as CoverPropsNoGeneric;

    return (
      <Suspense>
        <Flex
          widthRaw={{ base: "calc(100vw - 12vw)", md: "calc(100vw - 6vw)" }}
          backgroundRaw="rgba(0,0,0,0.6)"
          justifyContent="center"
          flexDirection="column"
          borderRadius="2.5vh"
          overflow="hidden"
          tabIndex={-1}
          minH="100vh"
          id="cover"
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          ref={ref}
          {...rest}>
          <Suspense>
            <StyledText
              p="0"
              px="2vw"
              optimizedWidth
              alignSelf="center"
              fontSizeRaw={{
                base: "6vh",
                md: "8vh",
              }}
              textAlign="center"
              textShadow={{
                x: "0.3vh",
                y: "-0.2vh",
                blur: "0.2vh",
                color: "black",
              }}
              textColors={["white", "indigo", "white", "mulberry"]}
              fontWeights={["500", "900"]}
              multiLanguageSupport={heading}
              {...headingProps}
            />
          </Suspense>
          <Suspense>
            <StyledText
              p="0"
              px="2vw"
              optimizedWidth
              alignSelf="center"
              fontSizeRaw={{
                base: "2.5vh",
                md: "4vh",
              }}
              textAlign="center"
              pt="0"
              textShadow={{
                x: "0.3vh",
                y: "-0.2vh",
                blur: "0.2vh",
                color: "black",
              }}
              textColors={["white", "indigo", "white", "mulberry"]}
              fontWeights={["500", "700"]}
              multiLanguageSupport={subHeading}
              {...subHeadingProps}
            />
          </Suspense>
          {icons && (
            <Suspense>
              <Flex
                mt="2vh"
                px="2vw"
                gap={{
                  base: "0.5vh",
                  md: "1vh",
                }}
                overflow="hidden"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center">
                {icons.map((icon, index) => (
                  <Suspense key={index}>
                    <Icon
                      sizeRaw={{
                        base: "5vh",
                        md: "7vh",
                      }}
                      textShadow={{
                        x: "0.3vh",
                        y: "-0.2vh",
                        blur: "0.2vh",
                        color: "black",
                      }}
                      color={icon.color}
                      icon={icon.type}
                      {...iconProps}
                    />
                  </Suspense>
                ))}
              </Flex>
            </Suspense>
          )}
        </Flex>
      </Suspense>
    );
  });

export const Cover = React.memo(Factory);
