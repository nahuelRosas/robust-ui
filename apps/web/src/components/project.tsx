import {
  Ticon,
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
    iconType: Ticon;
  }[];
  images?: string[];
}) {
  return (
    <Block mt="15vh" mb="10vh" tabIndex={-1} id={id}>
      <Flex
        widthRaw={{ base: "calc(100vw - 12vw)", md: "calc(100vw - 6vw)" }}
        colorSchemeProperty={{
          opacity: 0.8,
          props: {
            hover: false,
            active: false,
            focus: false,
          },
          baseColorRaw: "black",
        }}
        borderRadius="2.5vh"
        justifyContent="center"
        mx={{
          base: "6vw",
          md: "3vw",
        }}
        pb="3vh"
        overflow="hidden"
        flexDirection="column">
        <NextLink
          href="/projects"
          px={{
            base: "6vw",
            md: "3vw",
          }}
          pt="3vh"
          cursor="pointer"
          alignSelf="flexStart">
          <StyledText
            p="0"
            optimizedWidth
            alignSelf="center"
            fontSizeRaw={{
              base: "2.5vh",
              md: "3vh",
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
          mt="3vh"
          p="0"
          optimizedWidth
          alignSelf="center"
          fontSizeRaw={{
            base: "4vh",
            md: "6vh",
          }}
          textAlign={{
            base: "left",
            md: "left",
          }}
          colors={["white", "teal", "white", "indigo"]}
          fontWeights={["900"]}
          px={{
            base: "6vw",
            md: "3vw",
          }}
          multiLanguageSupport={title}
        />

        <Flex flexDirection="column" mt="1vh">
          {description && (
            <>
              <StyledText
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "3vh",
                  md: "4vh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["teal", "white", "indigo"]}
                fontWeights={["900"]}
                px={{
                  base: "6vw",
                  md: "3vw",
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
                  base: "2.5vh",
                  md: "3vh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["white", "teal", "white", "indigo"]}
                fontWeights={["400", "900", "400", "900"]}
                px={{
                  base: "6vw",
                  md: "3vw",
                }}
                multiLanguageSupport={description}
              />
            </>
          )}
          {primaryMotivation && (
            <>
              <StyledText
                mt="3vh"
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "3vh",
                  md: "4vh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["teal", "white", "indigo"]}
                fontWeights={["900"]}
                px={{
                  base: "6vw",
                  md: "3vw",
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
                  base: "2.5vh",
                  md: "3vh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["white", "teal", "white", "indigo"]}
                fontWeights={["400", "900", "400", "900"]}
                px={{
                  base: "6vw",
                  md: "3vw",
                }}
                multiLanguageSupport={primaryMotivation}
              />
            </>
          )}
          {salesDistribution && (
            <>
              <StyledText
                mt="3vh"
                p="0"
                optimizedWidth
                alignSelf="center"
                fontSizeRaw={{
                  base: "3vh",
                  md: "4vh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["teal", "white", "indigo"]}
                fontWeights={["900"]}
                px={{
                  base: "6vw",
                  md: "3vw",
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
                  base: "2.5vh",
                  md: "3vh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["white", "teal", "white", "indigo"]}
                fontWeights={["400", "900", "400", "900"]}
                px={{
                  base: "6vw",
                  md: "3vw",
                }}
                multiLanguageSupport={salesDistribution}
              />
            </>
          )}
          {images && (
            <Image
              isSlider
              srcArray={images}
              height="50vh"
              alt="image"
              borderRadius="2.5vh"
              minW={{
                base: "90%",
                md: "50%",
              }}
              m="6vh"
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
                  base: "3vh",
                  md: "4vh",
                }}
                textAlign={{
                  base: "left",
                  md: "left",
                }}
                colors={["teal", "white", "indigo"]}
                fontWeights={["900"]}
                px={{
                  base: "6vw",
                  md: "3vw",
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
                    my="0.5vh"
                    mx="6vw"
                    gap="2vh"
                    optimizedWidth>
                    <Icon
                      key={index}
                      color={color}
                      iconType="starFill"
                      sizeRaw={{
                        base: "2vh",
                        md: "3vh",
                      }}
                    />
                    <StyledText
                      p="0"
                      optimizedWidth
                      alignSelf="center"
                      fontSizeRaw={{
                        base: "2.5vh",
                        md: "3vh",
                      }}
                      textAlign={{
                        base: "left",
                        md: "left",
                      }}
                      fontWeights={["400", "900", "400", "900"]}
                      px={{
                        base: "6vw",
                        md: "3vw",
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
            mt="3vh"
            fontSizeRaw={{
              base: "2.5vh",
              md: "3vh",
            }}
            fontWeights={["400", "900", "400", "900"]}
            colors={["white", "teal", "white", "indigo"]}
            px={{
              base: "6vw",
              md: "3vw",
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
              mt="3vh"
              gap="3vh">
              {technologies.map((technology, index) => {
                return (
                  <Flex
                    key={index}
                    flexDirection="column"
                    flexWrap="wrap"
                    alignItems="center">
                    {technology.iconType && (
                      <Icon
                        iconType={technology.iconType}
                        color="white"
                        size={{
                          base: "5vh",
                          md: "4vh",
                        }}
                      />
                    )}
                    <StyledText
                      p="0"
                      alignSelf="center"
                      fontSizeRaw={{
                        base: "2.5vh",
                        md: "3vh",
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
          mt="4vh"
          flexWrap="wrap"
          optimizedWidth>
          {url?.npm && (
            <NextLink
              fontSizeRaw={{
                base: "3vh",
                md: "4vh",
              }}
              href={url.npm}
              iconType="brandNpm"
              multiLanguageSupport={{ en: "View on NPM", es: "Ver en NPM" }}
            />
          )}
          {url?.github && (
            <NextLink
              fontSizeRaw={{
                base: "3vh",
                md: "4vh",
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
                base: "3vh",
                md: "4vh",
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
