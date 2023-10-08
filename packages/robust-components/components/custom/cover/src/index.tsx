import { useCleanValue } from "@robust-ui/use-clean-value";
import { StyledText } from "@robust-ui/nested-styled-text";
import React, { Ref, forwardRef } from "react";
import { Flex } from "@robust-ui/flex";
import { Icon } from "@robust-ui/icon";
import {
  CoverProps,
  CoverPropsNoGeneric,
  ForwardRefExoticCover,
} from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExoticCover> =
  forwardRef<unknown, CoverProps>(function CoverComponent(
    { ...props },
    ref: Ref<unknown>,
  ): React.JSX.Element {
    const cleanedProps = useCleanValue({ props });
    const {
      heading,
      subHeading,
      icons,
      headingProps,
      subHeadingProps,
      iconProps,
      ...rest
    } = cleanedProps as CoverPropsNoGeneric;
    return (
      <Flex
        tabIndex={-1}
        id="cover"
        widthRaw={{ base: "calc(100vw - 12vw)", md: "calc(100vw - 6vw)" }}
        backgroundRaw="rgba(0,0,0,0.6)"
        borderRadius="16px"
        minH="100vh"
        justifyContent="center"
        mx={{
          base: "6vw",
          md: "3vw",
        }}
        overflow="hidden"
        flexDirection="column"
        ref={ref}
        {...rest}
      >
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
          fontWeights={["400", "900"]}
          multiLanguageSupport={heading}
          {...headingProps}
        />
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
          fontWeights={["400", "700"]}
          multiLanguageSupport={subHeading}
          {...subHeadingProps}
        />
        {icons && (
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
            alignItems="center"
          >
            {icons.map((icon, index) => (
              <Icon
                key={index}
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
            ))}
          </Flex>
        )}
      </Flex>
    );
  });

export const Cover = React.memo(Factory);
