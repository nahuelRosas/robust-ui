import {
  useLanguage,
  StyledText,
  NextLink,
  Header,
  Button,
  Aside,
  Flex,
  Menu,
} from "@robust-ui/nextjs-components";

export default function Nav() {
  const [language, setLanguage] = useLanguage();
  return (
    <Header
      p={{
        base: "0.5dvh",
        md: "2.5dvh",
      }}
      colorScheme="black"
      zIndex="2"
      boxShadowRaw="0 0 1.5dvh 0 rgba(255, 255, 255, 0.3)"
    >
      <NextLink direction="rowReverse" href="/">
        <StyledText
          fontWeights={["400", "700"]}
          colors={["white", "teal"]}
          fontSizeRaw="3dvh"
        >
          Nahuel|Rosas
        </StyledText>
      </NextLink>
      <Flex
        display={{
          base: "none",
          md: "flex",
        }}
        mx="6dvw"
        justifyContent="spaceBetween"
        optimizedWidth
      >
        <NextLink
          href="/projects"
          multiLanguageSupport={{
            en: "Projects",
            es: "Proyectos",
          }}
        />
        <NextLink
          href="/about-me"
          multiLanguageSupport={{
            en: "About",
            es: "Sobre mí",
          }}
        />
        <NextLink
          href="/articles"
          multiLanguageSupport={{
            en: "Articles",
            es: "Artículos",
          }}
        />
        <NextLink href="/cv" multiLanguageSupport="Curriculum Vitae" />
        <Menu
          buttonProps={{
            multiLanguageSupport: language.fullnameLanguage,
            textTransform: "uppercase",
            fontWeight: "700",
            variant: "linkLight",
          }}
          gap="2dvh"
        >
          <Button
            variant="linkLight"
            onClick={() => setLanguage("en")}
            fontWeight="900"
            px="2dvw"
          >
            ENGLISH
          </Button>
          <Button
            variant="linkLight"
            onClick={() => setLanguage("es")}
            fontWeight="900"
            px="2dvw"
          >
            ESPAÑOL
          </Button>
        </Menu>
      </Flex>
      <Aside
        size="lg"
        buttonOpenProps={{
          display: {
            base: "flex",
            md: "none",
          },
        }}
        childrenWithOutPropagation={
          <Menu
            buttonProps={{
              multiLanguageSupport: {
                en: language.fullnameLanguage,
                es: language.fullnameLanguage,
              },
              fontWeight: "700",
              textTransform: "uppercase",
              variant: "linkLight",
            }}
            flexDirection="column"
          >
            <Button
              variant="linkLight"
              onClick={() => setLanguage("en")}
              fontWeight="900"
            >
              ENGLISH
            </Button>
            <Button
              variant="linkLight"
              onClick={() => setLanguage("es")}
              fontWeight="900"
            >
              ESPAÑOL
            </Button>
          </Menu>
        }
      >
        <NextLink
          href="/"
          multiLanguageSupport={{
            en: "Home",
            es: "Inicio",
          }}
        />
        <NextLink
          href="/projects"
          multiLanguageSupport={{
            en: "Projects",
            es: "Proyectos",
          }}
        />
        <NextLink
          href="/about-me"
          multiLanguageSupport={{
            en: "About",
            es: "Sobre mí",
          }}
        />
        <NextLink
          href="/articles"
          multiLanguageSupport={{
            en: "Articles",
            es: "Artículos",
          }}
        />
        <NextLink href="/cv" multiLanguageSupport="Curriculum Vitae" />
      </Aside>
    </Header>
  );
}
