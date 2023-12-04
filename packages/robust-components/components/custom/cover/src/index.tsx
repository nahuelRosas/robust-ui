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
        widthRaw={{
          base: "calc(100dvw - 12dvw)",
          md: "calc(100dvw - 6dvw)",
        }}
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
        borderRadius="2.5dvh"
        position="relative"
        overflow="hidden"
        tabIndex={-1}
        mt={{
          base: "10dvh",
          md: "15dvh",
        }}
        minH="82dvh"
        id="cover"
        mx={{
          base: "6dvw",
          md: "3dvw",
        }}
        ref={ref}
        {...cleanedProps}
      >
        <Block my="auto" gap="1dvh">
          {(label || strings) && (
            <StyledText
              multiLanguageSupport={label || strings}
              fontWeights={["500", "900"]}
              colors={["white", "teal"]}
              textAlign="center"
              alignSelf="center"
              optimizedWidth
              my="2dvh"
              fontSize={{
                base: "5dvh",
                md: "7dvh",
              }}
              px="2dvw"
              py="1dvh"
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
                base: "2.5dvh",
                md: "3dvh",
              }}
              optimizedWidth
              px="2dvw"
              py="1dvh"
              {...paragraphProps}
            />
          )}
          {icons && (
            <Flex
              mt="2dvh"
              px="2dvw"
              gap={{
                base: "0.5dvh",
                md: "1dvh",
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
                    base: "5dvh",
                    md: "7dvh",
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
