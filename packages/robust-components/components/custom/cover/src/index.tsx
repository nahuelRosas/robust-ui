import React, { Ref, forwardRef, lazy, Suspense } from "react";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { StyledText } from "@robust-ui/nested-styled-text";
import { CoverPropsNoGeneric, CoverProps } from "./types";
import { ForwardRefExotic } from "@robust-ui/constructor";
import { ExtractStrings } from "@robust-ui/utils";
import { Block } from "@robust-ui/block";
import { Flex } from "@robust-ui/flex";
import { Icon } from "@robust-ui/icon";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<CoverProps>> =
  forwardRef(function CoverComponent(
    { labelProps, iconProps, paragraphProps, children, ...props },
    ref,
  ): React.JSX.Element {
    const {
      multiLanguageSupport,
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      paragraph,
      icons,
      label,
      ...cleanedProps
    } = useCleanValue({ props }) as CoverPropsNoGeneric;

    const { otherComponents, strings } = ExtractStrings({
      multiLanguageSupport,
      children,
    });

    return (
      <Flex
        widthRaw={{ base: "calc(100vw - 12vw)", md: "calc(100vw - 6vw)" }}
        colorSchemeProperty={{
          opacity: 0.8,
          baseColorRaw:
            colorSchemeProperty?.baseColor ||
            colorSchemeProperty?.baseColorRaw ||
            colorSchemeRaw ||
            colorScheme ||
            "black",
          ...colorSchemeProperty,
        }}
        justifyContent="center"
        flexDirection="column"
        borderRadius="2.5vh"
        position="relative"
        overflow="hidden"
        tabIndex={-1}
        mt={{
          base: "10vh",
          md: "15vh",
        }}
        minH="82vh"
        id="cover"
        mx={{
          base: "6vw",
          md: "3vw",
        }}
        ref={ref}
        {...cleanedProps}
      >
        <Block my="auto" gap="1vh">
          {(label || strings) && (
            <StyledText
              multiLanguageSupport={label || strings}
              fontWeights={["500", "900"]}
              colors={["white", "teal"]}
              textAlign="center"
              alignSelf="center"
              optimizedWidth
              my="2vh"
              fontSize={{
                base: "5vh",
                md: "7vh",
              }}
              px="2vw"
              py="1vh"
              {...labelProps}
            />
          )}
          {paragraph && (
            <StyledText
              colors={["white", "indigo", "white", "teal"]}
              multiLanguageSupport={paragraph}
              fontWeights={["500", "700"]}
              alignSelf="center"
              textAlign="center"
              fontSize={{
                base: "2.5vh",
                md: "3vh",
              }}
              optimizedWidth
              px="2vw"
              py="1vh"
              {...paragraphProps}
            />
          )}
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
                  colorRaw={
                    typeof icon === "object"
                      ? icon.colorRaw
                        ? icon.colorRaw
                        : icon.color
                      : "white"
                  }
                  iconType={typeof icon === "object" ? icon.type : icon}
                  {...iconProps}
                />
              ))}
            </Flex>
          )}
        </Block>

        {otherComponents}
      </Flex>
    );
  });

export const Cover = React.memo(Factory);
