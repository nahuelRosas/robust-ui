/* eslint-disable no-redeclare */
import { useCleanValue } from "@robust-ui/use-clean-value";
import { ForwardRefExotic } from "@robust-ui/constructor";
import { CardProps, CardPropsNoGeneric } from "./types";
import { StyledText } from "@robust-ui/styled-text";
import { NextLink } from "@robust-ui/next-link";
import { forwardRef, memo } from "react";
import { Image } from "@robust-ui/image";
import { Flex } from "@robust-ui/flex";

export * from "./types";

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<CardProps>> =
  forwardRef(function CardComponent(
    { children, ...props },
    ref
  ): React.JSX.Element {
    const {
      colorSchemeProperty,
      colorSchemeRaw,
      colorScheme,
      paragraph,
      variant,
      header,
      images,
      label,
      data,
      ...cleanedProps
    } = useCleanValue({ props }) as CardPropsNoGeneric;
    return (
      <Flex
        widthRaw={{
          base: "calc(100dvw - 12dvw)",
          md: "calc(100dvw - 6dvw)",
        }}
        colorSchemeProperty={{
          opacity: 0.8,
          props: {
            hover: false,
            active: false,
            focus: false,
          },
          variant,
          baseColorRaw:
            colorSchemeProperty?.baseColor ||
            colorSchemeProperty?.baseColorRaw ||
            colorSchemeRaw ||
            colorScheme ||
            "black",
          ...colorSchemeProperty,
        }}
        flexDirection="column"
        alignItems="flexStart"
        justifyContent="left"
        borderRadius="2.5dvh"
        position="relative"
        mx={{
          base: "6dvw",
          md: "3dvw",
        }}
        pb="3dvh"
        ref={ref}
        {...cleanedProps}
      >
        {header && (
          <NextLink
            href={(typeof header !== "string" && header.href) || "#"}
            fontSizeRaw={{
              base: "2.5dvh",
              md: "3dvh",
            }}
            fontWeight="500"
            color="white"
            mx="3dvh"
            mt="2dvh"
            p="0"
            {...(typeof header !== "string" && header.headerProps)}
          >
            {typeof header === "string" ? header : header.text}
          </NextLink>
        )}
        {label && (
          <StyledText
            optimizedWidth
            fontWeights={["900"]}
            fontSizeRaw={{
              base: "4dvh",
              md: "6dvh",
            }}
            colors={["white", "teal", "white", "indigo"]}
            my="2dvh"
            mx="5dvw"
            {...(typeof label !== "string" && label.labelProps)}
          >
            {typeof label === "string" ? label : label.text}
          </StyledText>
        )}
        {paragraph && (
          <StyledText
            optimizedWidth
            fontWeights={["500", "900"]}
            fontSizeRaw={{
              base: "2.5dvh",
              md: "3dvh",
            }}
            colors={["white", "teal", "white", "indigo"]}
            mx="5dvw"
            {...(typeof paragraph !== "string" && paragraph.paragraphProps)}
          >
            {typeof paragraph === "string" ? paragraph : paragraph.text}
          </StyledText>
        )}
        {images && (
          <Image
            alt={
              typeof label === "string" ? label : label ? label.text : "Image"
            }
            borderRadius="2.5dvh"
            alignSelf="center"
            height="50dvh"
            mx="5dvw"
            my="3dvh"
            src={Array.isArray(images) ? images[0] : images.src[0]}
            srcArray={Array.isArray(images) ? images : images.src}
            p="0"
            {...(!Array.isArray(images) && images["imagesProps"])}
          />
        )}
        {data && (
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="spaceAround"
            alignItems="flexEnd"
            position="relative"
            flexWrap="wrap"
            optimizedWidth
            gap="5dvh"
            mx="5dvw"
            mt="3dvh"
          >
            {data.map(({ href, images, label, paragraph }, index) => {
              return (
                <NextLink
                  cursor={href ? "pointer" : "default"}
                  colorSchemeProperty={{
                    baseColor: "teal900",
                    opacity: 0.8,
                    isActivated: href ? true : false,
                    variant: "solid",
                  }}
                  animationRaw={!href && "none"}
                  boxShadow="unset"
                  background="transparent"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  href={href || "#"}
                  optimizedWidth
                  maxW={{
                    base: "100%",
                    md: "40%",
                  }}
                  key={index}
                  gap="2dvh"
                >
                  {label && (
                    <StyledText
                      colors={["white", "teal", "white", "indigo"]}
                      fontWeights={["900"]}
                      alignSelf="center"
                      textAlign="left"
                      optimizedWidth
                      fontSizeRaw={{
                        base: "3dvh",
                        md: "4dvh",
                      }}
                      {...(typeof label !== "string" && label.labelProps)}
                    >
                      {typeof label === "string" ? label : label.text}
                    </StyledText>
                  )}
                  {images && (
                    <Image
                      alt={
                        typeof label === "string"
                          ? label
                          : label
                            ? label.text
                            : "Image"
                      }
                      borderRadius="2.5dvh"
                      optimizedWidth
                      height="50dvh"
                      src={Array.isArray(images) ? images[0] : images.src[0]}
                      srcArray={Array.isArray(images) ? images : images.src}
                      p="0"
                      {...(!Array.isArray(images) && images["imagesProps"])}
                    />
                  )}

                  {paragraph && (
                    <StyledText
                      colors={["white", "teal", "white", "indigo"]}
                      fontWeights={["400", "900", "400", "900"]}
                      alignSelf="center"
                      textAlign="left"
                      optimizedWidth
                      fontSizeRaw={{
                        base: "2.5dvh",
                        md: "2.5dvh",
                      }}
                      {...(typeof paragraph !== "string" &&
                        paragraph.paragraphProps)}
                    >
                      {typeof paragraph === "string"
                        ? paragraph
                        : paragraph.text}
                    </StyledText>
                  )}
                </NextLink>
              );
            })}
          </Flex>
        )}
        {children}
      </Flex>
    );
  });
/**
 * A custom card component.
 *
 * @component
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader text="Header" />
 *   <CardBody>
 *     <CardLabel text="Label" />
 *     <CardParagraph text="Paragraph" />
 *     <CardImage src="image.jpg" alt="Image" />
 *   </CardBody>
 * </Card>
 * ```
 */
export const Card = memo(Factory);
