import { CardProps, CardPropsNoGeneric } from "./types";
import React, { forwardRef, lazy, Suspense, useMemo, memo } from "react";
import { useCleanValue } from "@robust-ui/use-clean-value";
import { generateColorScheme } from "@robust-ui/css-utils";
import { ForwardRefExotic } from "@robust-ui/constructor";
export * from "./types";

const Flex = lazy(() =>
  import("@robust-ui/flex").then((module) => ({ default: module.Flex }))
);

const Image = lazy(() =>
  import("@robust-ui/image").then((module) => ({ default: module.Image }))
);

const NextLink = lazy(() =>
  import("@robust-ui/next-link").then((module) => ({
    default: module.NextLink,
  }))
);

const StyledText = lazy(() =>
  import("@robust-ui/nested-styled-text").then((module) => ({
    default: module.StyledText,
  }))
);

const Factory: React.ForwardRefExoticComponent<ForwardRefExotic<CardProps>> =
  forwardRef(function CardComponent({ ...props }, ref): React.JSX.Element {
    const cleanedProps = useCleanValue({ props });

    const {
      opacityColorScheme = 0.95,
      colorScheme = "mulberry",
      altColor = true,
      colorSchemeRaw,
      children,
      header,
      label,
      data,
      text,
      ...rest
    } = cleanedProps as CardPropsNoGeneric;

    const structureStyle = useMemo(
      () =>
        generateColorScheme({
          baseColor: colorSchemeRaw || colorScheme,
          opacity: opacityColorScheme,
          variant: "link",
          altColor,
        }),
      [colorSchemeRaw, colorScheme, opacityColorScheme, altColor]
    );

    return (
      <Suspense>
        <Flex
          widthRaw={{ base: "calc(100vw - 12vw)", md: "calc(100vw - 6vw)" }}
          backgroundRaw="rgba(0,0,0,0.9)"
          flexDirection="column"
          alignItems="flexStart"
          justifyContent="left"
          borderRadius="2.5vh"
          elementName="Card"
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          pb="3vh"
          ref={ref}
          {...rest}>
          {header &&
            (header.url ? (
              <Suspense>
                {/* <NextLink
                  elementName="CardHeader"
                  href={header.url}
                  fontSizeRaw={{
                    base: "2.5vh",
                    md: "3vh",
                  }}
                  textShadow={{
                    color: "black",
                    blur: "0.2vh",
                    y: "-0.2vh",
                    x: "0.3vh",
                  }}
                  fontWeight="500"
                  color="white"
                  mx="3vh"
                  mt="2vh"
                  p="0"
                  hover={structureStyle.hover}
                  {...header.propsHeader}>
                  {header.title}
                </NextLink> */}
              </Suspense>
            ) : (
              <Suspense>
                <StyledText
                  elementName="CardHeader"
                  fontWeights={["500"]}
                  fontSizeRaw={{
                    base: "2.5vh",
                    md: "3vh",
                  }}
                  textShadow={{
                    color: "black",
                    blur: "0.2vh",
                    y: "-0.2vh",
                    x: "0.3vh",
                  }}
                  color="white"
                  mx="3vh"
                  mt="2vh"
                  p="0"
                  {...header.propsHeader}>
                  {header.title}
                </StyledText>
              </Suspense>
            ))}
          {label && label.title && (
            <Suspense>
              <StyledText
                optimizedWidth
                elementName="CardLabel"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "5vh",
                  md: "5vh",
                }}
                textShadow={{
                  color: "black",
                  blur: "0.2vh",
                  y: "-0.2vh",
                  x: "0.3vh",
                }}
                color="white"
                mt="2vh"
                mx="5vw"
                {...label.propsLabel}>
                {label.title}
              </StyledText>
            </Suspense>
          )}
          {text && text.text && (
            <Suspense>
              <StyledText
                optimizedWidth
                elementName="CardText"
                fontWeights={["500", "900", "500", "900"]}
                fontSizeRaw={{
                  base: "2.5vh",
                  md: "3vh",
                }}
                textShadow={{
                  color: "black",
                  blur: "0.2vh",
                  y: "-0.2vh",
                  x: "0.3vh",
                }}
                textColors={["white", "mulberry", "white", "indigo"]}
                mx="5vw"
                {...text.propsText}>
                {text.text}
              </StyledText>
            </Suspense>
          )}
          {data && (
            <Suspense>
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="spaceAround"
                elementName="CardData"
                alignItems="flexEnd"
                flexWrap="wrap"
                optimizedWidth
                gap="5vh"
                mx="5vw"
                mt="5vh">
                {data.map((item, index) => {
                  if (!item.href)
                    return (
                      <Suspense key={index}>
                        <Flex
                          elementName="CardDataItem"
                          background="transparent"
                          justifyContent="center"
                          flexDirection="column"
                          alignItems="flexStart"
                          maxW={{
                            base: "100%",
                            md: "40%",
                          }}
                          gap="2vh">
                          {item.title && (
                            <Suspense>
                              <StyledText
                                elementName="CardDataItemTitle"
                                optimizedWidth
                                alignSelf="center"
                                fontSizeRaw={{
                                  base: "4vh",
                                  md: "4vh",
                                }}
                                textAlign="left"
                                textShadow={{
                                  x: "0.3vh",
                                  y: "-0.2vh",
                                  blur: "0.2vh",
                                  color: "black",
                                }}
                                textColors={[
                                  "white",
                                  "mulberry",
                                  "white",
                                  "indigo",
                                ]}
                                fontWeights={["900"]}
                                {...item.propsTitle}>
                                {item.title}
                              </StyledText>
                            </Suspense>
                          )}
                          {item.images && (
                            <Suspense>
                              <Image
                                elementName="CardDataItemImage"
                                borderRadius="2.5vh"
                                // src={item.images}
                                // alt={item.title}
                                optimizedWidth
                                maxH="25%"
                                p="0"
                              />
                            </Suspense>
                          )}
                          {item.text && (
                            <Suspense>
                              <StyledText
                                elementName="CardDataItemText"
                                optimizedWidth
                                alignSelf="center"
                                fontSizeRaw={{
                                  base: "2.5vh",
                                  md: "2.5vh",
                                }}
                                textAlign="left"
                                textShadow={{
                                  x: "0.3vh",
                                  y: "-0.2vh",
                                  blur: "0.2vh",
                                  color: "black",
                                }}
                                textColors={[
                                  "white",
                                  "mulberry",
                                  "white",
                                  "indigo",
                                ]}
                                fontWeights={["500", "900", "500", "900"]}
                                {...item.propsText}>
                                {item.text}
                              </StyledText>
                            </Suspense>
                          )}
                        </Flex>
                      </Suspense>
                    );
                  else
                    return (
                      <Suspense key={index}>
                        <NextLink
                          elementName="CardDataItem"
                          background="transparent"
                          justifyContent="flexEnd"
                          flexDirection="column"
                          alignItems="flexEnd"
                          cursor="pointer"
                          altColor={false}
                          href={item.href}
                          variant="ghost"
                          optimizedWidth
                          maxW={{
                            base: "100%",
                            md: "45%",
                          }}
                          gap="2vh"
                          // passHref
                          >
                          {item.title && (
                            <Suspense>
                              <StyledText
                                elementName="CardDataItemTitle"
                                optimizedWidth
                                alignSelf="center"
                                fontSizeRaw={{
                                  base: "2.5vh",
                                  md: "4vh",
                                }}
                                textAlign="left"
                                textShadow={{
                                  x: "0.3vh",
                                  y: "-0.2vh",
                                  blur: "0.2vh",
                                  color: "black",
                                }}
                                textColors={[
                                  "white",
                                  "mulberry",
                                  "white",
                                  "indigo",
                                ]}
                                fontWeights={["900"]}
                                {...item.propsTitle}>
                                {item.title}
                              </StyledText>
                            </Suspense>
                          )}
                          {item.images && (
                            <Suspense>
                              <Image
                                elementName="CardDataItemImage"
                                // src={item.images}
                                alt={item.title}
                                borderRadius="2.5vh"
                                optimizedWidth
                                // height="50vh"
                                p="0"
                              />
                            </Suspense>
                          )}
                          {item.text && (
                            <Suspense>
                              <StyledText
                                elementName="CardDataItemText"
                                optimizedWidth
                                alignSelf="center"
                                fontSizeRaw={{
                                  base: "2.5vh",
                                  md: "2.5vh",
                                }}
                                textAlign="left"
                                textShadow={{
                                  x: "0.3vh",
                                  y: "-0.2vh",
                                  blur: "0.2vh",
                                  color: "black",
                                }}
                                textColors={[
                                  "white",
                                  "mulberry",
                                  "white",
                                  "indigo",
                                ]}
                                fontWeights={["500", "900", "500", "900"]}
                                {...item.propsText}>
                                {item.text}
                              </StyledText>
                            </Suspense>
                          )}
                        </NextLink>
                      </Suspense>
                    );
                })}
              </Flex>
            </Suspense>
          )}
          {children}
        </Flex>
      </Suspense>
    );
  });
export const Card = memo(Factory);
