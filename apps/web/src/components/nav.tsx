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
    <Header zIndex="1">
      <NextLink href="/#cover">
        <StyledText
          fontWeights={["400", "700"]}
          textColors={["white", "mulberry"]}
          fontSizeRaw="3vh">
          Nahuel|Rosas
        </StyledText>
      </NextLink>
      <Flex
        display={{
          base: "none",
          md: "flex",
        }}
        mx="6vw"
        justifyContent="spaceBetween"
        optimizedWidth>
        <NextLink
          href="/projects#cover"
          multiLanguageSupport={{
            en: "Projects",
            es: "Proyectos",
          }}
        />
        <NextLink
          href="/about-me#cover"
          multiLanguageSupport={{
            en: "About",
            es: "Sobre mí",
          }}
        />
        <NextLink
          href="/articles#cover"
          multiLanguageSupport={{
            en: "Articles",
            es: "Artículos",
          }}
        />
        <Menu
          propsButton={{
            multiLanguageSupport: {
              en: language.fullnameLanguage,
              es: language.fullnameLanguage,
            },
            fontWeight: "700",
            textTransform: "uppercase",
          }}
          flexDirection="row"
          gap="2vh">
          <Button
            variant="link"
            onClick={() => setLanguage("en")}
            fontWeight="900"
            px="2vw">
            ENGLISH
          </Button>
          <Button
            variant="link"
            onClick={() => setLanguage("es")}
            fontWeight="900"
            px="2vw">
            ESPAÑOL
          </Button>
        </Menu>
      </Flex>
      <Aside
        placement="right"
        size="lg"
        display={{
          base: "flex",
          md: "none",
        }}
        iconProps={{
          iconPosition: "left",
          iconType: "menu",
        }}
        childrenWithOutPropagation={
          <Menu
            propsButton={{
              multiLanguageSupport: {
                en: language.fullnameLanguage,
                es: language.fullnameLanguage,
              },
              fontWeight: "700",
              textTransform: "uppercase",
            }}
            flexDirection="column">
            <Button
              variant="link"
              onClick={() => setLanguage("en")}
              fontWeight="900"
              px="2vw">
              ENGLISH
            </Button>
            <Button
              variant="link"
              onClick={() => setLanguage("es")}
              fontWeight="900"
              px="2vw">
              ESPAÑOL
            </Button>
          </Menu>
        }>
        <NextLink
          href="/#cover"
          multiLanguageSupport={{
            en: "Home",
            es: "Inicio",
          }}
        />
        <NextLink
          href="/projects#cover"
          multiLanguageSupport={{
            en: "Projects",
            es: "Proyectos",
          }}
        />
        <NextLink
          href="/about-me#cover"
          multiLanguageSupport={{
            en: "About",
            es: "Sobre mí",
          }}
        />
        <NextLink
          href="/articles#cover"
          multiLanguageSupport={{
            en: "Articles",
            es: "Artículos",
          }}
        />
      </Aside>
    </Header>
  );
}
