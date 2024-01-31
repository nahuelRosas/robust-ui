import {
  TIcons,
  Block,
  Flex,
  Image,
  NextLink,
  StyledText,
  Icon,
} from "@robust-ui/nextjs-components";

export function Project({
  id,
  title,
  description,
  primaryMotivation,
  keyFeatures,
  resume,
  url,
  salesDistribution,
  technologies,
  images,
}: {
  id: string;
  title: {
    [key: string]: string;
  };
  description?: {
    [key: string]: string;
  };
  primaryMotivation?: {
    [key: string]: string;
  };
  keyFeatures?: {
    [key: string]: string;
  }[];
  resume?: {
    [key: string]: string;
  };
  url?: {
    github?: string;
    website?: string;
    npm?: string;
  };
  salesDistribution?: {
    [key: string]: string;
  };
  technologies?: {
    text: {
      [key: string]: string;
    };
    iconType: keyof TIcons;
  }[];
  images?: string[];
}) {
  return (
    <Block mt="15dvh" mb="10dvh" tabIndex={-1} id={id}>
      <Flex
        widthRaw={{ base: "calc(100dvw - 12dvw)", md: "calc(100dvw - 6dvw)" }}
        colorSchemeProperty={{
          opacity: 0.8,
          props: {
            hover: false,
            active: false,
            focus: false,
          },
          baseColorRaw: "black",
        }}
        borderRadius="2.5dvh"
        justifyContent="center"
        mx={{
          base: "6dvw",
          md: "3dvw",
        }}
        pb="3dvh"
        overflow="hidden"
        flexDirection="column"
      >
        <NextLink
          href="/projects"
          px={{
            base: "6dvw",
            md: "3dvw",
          }}
          pt="3dvh"
          cursor="pointer"
          alignSelf="flexStart"
        >
          <StyledText
            p="0"
            optimizedWidth
            alignSelf="center"
            fontSizeRaw={{
              base: "2.5dvh",
              md: "3dvh",
            }}
            textAlign={{
              base: "left",
              md: "left",
            }}
            colors={["white", "teal"]}
            fontWeights={["500", "900"]}
            multiLanguageSupport={{
              en: "Projects",
              es: "Proyectos",
            }}
          />
        </NextLink>

        <StyledText
          mt="3dvh"
          p="0"
          optimizedWidth
          alignSelf="center"
          fontSizeRaw={{
            base: "4dvh",
            md: "6dvh",
          }}
          textAlign={{
            base: "left",
            md: "left",
          }}
          colors={["white", "teal", "white", "indigo"]}
          fontWeights={["900"]}
          px={{
            base: "6dvw",
            md: "3dvw",
          }}
          multiLanguageSupport={title}
        />

        <Flex flexDirection="column" mt="1dvh">
          {description && (
            <>
              <StyledText
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "3dvh",
                  md: "4dvh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["teal", "white", "indigo"]}
                fontWeights={["900"]}
                px={{
                  base: "6dvw",
                  md: "3dvw",
                }}
                multiLanguageSupport={{
                  en: "Description:",
                  es: "Descripción:",
                }}
              />
              <StyledText
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["white", "teal", "white", "indigo"]}
                fontWeights={["400", "900", "400", "900"]}
                px={{
                  base: "6dvw",
                  md: "3dvw",
                }}
                multiLanguageSupport={description}
              />
            </>
          )}
          {primaryMotivation && (
            <>
              <StyledText
                mt="3dvh"
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "3dvh",
                  md: "4dvh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["teal", "white", "indigo"]}
                fontWeights={["900"]}
                px={{
                  base: "6dvw",
                  md: "3dvw",
                }}
                multiLanguageSupport={{
                  en: "Primary Motivation:",
                  es: "Motivación principal:",
                }}
              />
              <StyledText
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["white", "teal", "white", "indigo"]}
                fontWeights={["400", "900", "400", "900"]}
                px={{
                  base: "6dvw",
                  md: "3dvw",
                }}
                multiLanguageSupport={primaryMotivation}
              />
            </>
          )}
          {salesDistribution && (
            <>
              <StyledText
                mt="3dvh"
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "3dvh",
                  md: "4dvh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["teal", "white", "indigo"]}
                fontWeights={["900"]}
                px={{
                  base: "6dvw",
                  md: "3dvw",
                }}
                multiLanguageSupport={{
                  en: "Sales and Distribution:",
                  es: "Ventas y Distribución:",
                }}
              />
              <StyledText
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["white", "teal", "white", "indigo"]}
                fontWeights={["400", "900", "400", "900"]}
                px={{
                  base: "6dvw",
                  md: "3dvw",
                }}
                multiLanguageSupport={salesDistribution}
              />
            </>
          )}
          {images && (
            <Image
              isSlider
              srcArray={images}
              height="50dvh"
              alt="image"
              borderRadius="2.5dvh"
              minW={{
                base: "90%",
                md: "50%",
              }}
              m="6dvh"
              p="0"
            />
          )}
          {keyFeatures && (
            <>
              <StyledText
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "3dvh",
                  md: "4dvh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["teal", "white", "indigo"]}
                fontWeights={["900"]}
                px={{
                  base: "6dvw",
                  md: "3dvw",
                }}
                multiLanguageSupport={{
                  en: "Key Features:",
                  es: "Características principales:",
                }}
              />
              {keyFeatures.map((feature, index) => {
                const color = index % 2 === 0 ? "white" : "teal";

                return (
                  <Flex
                    key={index}
                    my="0.5dvh"
                    mx="6dvw"
                    gap="2dvh"
                    optimizedWidth
                  >
                    <Icon
                      key={index}
                      color={color}
                      iconType="starFill"
                      sizeRaw={{
                        base: "2dvh",
                        md: "3dvh",
                      }}
                    />
                    <StyledText
                      p="0"
                      optimizedWidth
                      alignSelf="center"
                      fontSizeRaw={{
                        base: "2.5dvh",
                        md: "3dvh",
                      }}
                      textAlign={{
                        base: "left",
                        md: "left",
                      }}
                      fontWeights={["400", "900", "400", "900"]}
                      px={{
                        base: "6dvw",
                        md: "3dvw",
                      }}
                      colors={[color]}
                      multiLanguageSupport={feature}
                    />
                  </Flex>
                );
              })}
            </>
          )}
        </Flex>

        {resume && (
          <StyledText
            p="0"
            optimizedWidth
            alignSelf="center"
            mt="3dvh"
            fontSizeRaw={{
              base: "2.5dvh",
              md: "3dvh",
            }}
            fontWeights={["400", "900", "400", "900"]}
            colors={["white", "teal", "white", "indigo"]}
            px={{
              base: "6dvw",
              md: "3dvw",
            }}
            textAlign={{
              base: "left",
              md: "left",
            }}
            multiLanguageSupport={resume}
          />
        )}
        {technologies && (
          <>
            <Flex
              optimizedWidth
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
              mt="3dvh"
              gap="3dvh"
            >
              {technologies.map((technology, index) => {
                return (
                  <Flex
                    key={index}
                    flexDirection="column"
                    flexWrap="wrap"
                    alignItems="center"
                  >
                    {technology.iconType && (
                      <Icon
                        iconType={technology.iconType}
                        color="white"
                        size={{
                          base: "5dvh",
                          md: "4dvh",
                        }}
                      />
                    )}
                    <StyledText
                      p="0"
                      alignSelf="center"
                      fontSizeRaw={{
                        base: "2.5dvh",
                        md: "3dvh",
                      }}
                      textAlign={{
                        base: "left",
                        md: "left",
                      }}
                      colors={["white", "teal", "white", "indigo"]}
                      fontWeights={["400", "900", "400", "900"]}
                      multiLanguageSupport={technology.text}
                    />
                  </Flex>
                );
              })}
            </Flex>
          </>
        )}

        <Flex
          justifyContent="spaceAround"
          flexDirection="row"
          mt="4dvh"
          flexWrap="wrap"
          optimizedWidth
        >
          {url?.npm && (
            <NextLink
              fontSizeRaw={{
                base: "3dvh",
                md: "4dvh",
              }}
              href={url.npm}
              iconType="brandNpm"
              multiLanguageSupport={{ en: "View on NPM", es: "Ver en NPM" }}
            />
          )}
          {url?.github && (
            <NextLink
              fontSizeRaw={{
                base: "3dvh",
                md: "4dvh",
              }}
              href={url.github}
              iconType="brandGithub"
              multiLanguageSupport={{
                en: "View code on GitHub",
                es: "Ver código en GitHub",
              }}
            />
          )}
          {url?.website && (
            <NextLink
              fontSizeRaw={{
                base: "3dvh",
                md: "4dvh",
              }}
              href={url.website}
              iconType="network"
              multiLanguageSupport={{
                en: "Visit the project",
                es: "Visitar el proyecto",
              }}
            />
          )}
        </Flex>
      </Flex>
    </Block>
  );
}
