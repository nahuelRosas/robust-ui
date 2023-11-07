import { Analytics } from "@vercel/analytics/react";
import React, { lazy, Suspense } from "react";
import type { AppProps } from "next/app";
import {
  StyledText,
  TextArea,
  Provider,
  NextLink,
  Overlay,
  Footer,
  Button,
  Input,
  Flex,
} from "@robust-ui/nextjs-components";
import Nav from "@/components/nav";

const Background = lazy(() => import("@/components/background"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Suspense>
        <Background />
      </Suspense>
      <Provider alignItems="center" bg="transparent" overflowY="auto">
        <Nav />
        <Component {...pageProps} />
        <Footer flexDirection="column" bg="black">
          <StyledText
            fontSizeRaw="3vh"
            textColors={["white"]}
            fontWeights={["400"]}
            textAlign="center"
            multiLanguageSupport={{
              en: "Get in touch",
              es: "Contacto",
            }}
          />
          <StyledText
            fontSizeRaw={{
              base: "4vh",
              md: "7vh",
            }}
            textColors={["white"]}
            fontWeights={["900"]}
            textAlign="center"
            multiLanguageSupport={{
              en: "Let’s work together",
              es: "Trabajemos juntos",
            }}
          />
          <StyledText
            fontSizeRaw={{
              base: "2vh",
              md: "3vh",
            }}
            px="6vw"
            textColors={["white", "mulberry"]}
            fontWeights={["400", "900"]}
            textAlign="center"
            multiLanguageSupport={{
              en: `Do you have an idea for a website or mobile app? Do you need product design advice? As a |full stack web developer|, I can help you turn your idea into reality. I have experience in multiple technologies and I will be happy to listen to your ideas and work with you on your project. Contact me now!`,
              es: `¿Tienes una idea para un sitio web o una aplicación móvil? ¿Necesitas asesoramiento sobre diseño de productos? Como |desarrollador web full stack|, puedo ayudarte a convertir tu idea en realidad. Tengo experiencia en múltiples tecnologías y estaré encantado de escuchar tus ideas y trabajar contigo en tu proyecto. ¡Contáctame ahora!`,
            }}
          />
          <Overlay
            bg="black"
            my="3vh"
            buttonProps={{
              multiLanguageSupport: {
                en: "Contact me",
                es: "Contactame",
              },
              fontWeight: "700",
              fontSize: "2.5vh",
              textTransform: "uppercase",
            }}
            iconProps={{
              iconPosition: "left",
              iconType: "message2Fill",
            }}
            label={{
              title: {
                es: "Enviame un mensaje",
                en: "Send me a message",
              },
            }}
            text={{
              text: {
                es: "Puedes enviarme un mail, o contactarme por mis redes sociales.",
                en: "You can send me an email, or contact me through my social networks.",
              },
            }}>
            <Input
              placeHolder="Name"
              fontSizeRaw={{
                base: "2vh",
                md: "3vh",
              }}
              optimizedWidth
              mx="3vw"
              mt="3vh"
              value="Nahuel Rosas"
            />
            <TextArea
              fontSizeRaw={{
                base: "2vh",
                md: "3vh",
              }}
              placeHolder="Email"
              minH={{ base: "30vw", md: "20vw" }}
              optimizedWidth
              mx="3vw"
              mt="3vh"
            />
            <Flex
              gap="2vh"
              flexWrap="wrap"
              minW="70vw"
              mx="auto"
              mt="3vh"
              justifyContent="center">
              <NextLink
                href="/projects#cover"
                fontSizeRaw={{
                  base: "2vh",
                  md: "2.5vh",
                }}
                iconProps={{
                  iconPosition: "left",
                  iconType: "linkedinFill",
                }}>
                LinkedIn
              </NextLink>
              <NextLink
                fontSizeRaw={{
                  base: "2vh",
                  md: "2.5vh",
                }}
                href="https://twitter.com/_rosasnahuel_"
                iconProps={{
                  iconPosition: "left",
                  iconType: "twitterXFill",
                }}>
                Twitter
              </NextLink>
              <NextLink
                fontSizeRaw={{
                  base: "2vh",
                  md: "2.5vh",
                }}
                href="https://github.com/nahuelrosas/"
                iconProps={{
                  iconPosition: "left",
                  iconType: "githubFill",
                }}>
                Github
              </NextLink>
              <Button
                fontSizeRaw={{
                  base: "2.5vh",
                  md: "3vh",
                }}
                mx={{
                  base: "0",
                  md: "auto",
                }}
                variant="link"
                iconProps={{
                  iconPosition: "right",
                  iconType: "mailSendFill",
                }}
                onClick={async () => {
                  const res = await fetch("/api/send", {
                    method: "POST",
                    body: JSON.stringify({
                      name: "Nahuel",
                      email: "",
                    }),
                  });
                }}
                multiLanguageSupport={{
                  es: "Enviar",
                  en: "Send",
                }}
              />
            </Flex>
          </Overlay>

          <StyledText
            fontSizeRaw={{
              base: "1.5vh",
              md: "2.5vh",
            }}
            textAlign="center"
            textColors={["white", "mulberry"]}
            fontWeights={["400", "900"]}
            multiLanguageSupport={{
              en: `© ${new Date().getFullYear()} All rights reserved. Designed and coded by |Nahuel Rosas| using the Robust framework.`,
              es: `© ${new Date().getFullYear()} Todos los derechos reservados. Diseñado y codificado por |Nahuel Rosas| utilizando el framework Robust.`,
            }}
          />
        </Footer>
      </Provider>
    </>
  );
}
