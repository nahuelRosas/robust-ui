import { NextLink } from "./nextLink";
import { StyledText } from "./nested-styled-text";
import { Flex } from "./flex";
import { Button } from "./button";
import React, { useState, useEffect } from "react";
import { Overlay } from "./overlay";
import { Footer } from "./footer";
import { TextArea } from "./textArea";
import { Input } from "./input";
import { useToast } from "@robust-ui/nextjs-components";

export default function Sub() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [validEmail, setValidEmail] = useState(true);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateEmail = (input: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(input);
  };

  const toast = useToast();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setIsLoading(true);
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        text,
      }),
    });
    if (res.status === 400) {
      toast({
        label: {
          es: "Error al enviar el mensaje",
          en: "Error sending message",
        },
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (res.status === 200) {
      setName("");
      setEmail("");
      setText("");
      toast({
        label: {
          es: "Mensaje enviado",
          en: "Message sent",
        },
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setValidEmail(validateEmail(inputValue));
  };

  return (
    <Footer
      boxShadowRaw="0 0 1.5vh 0 rgba(255, 255, 255, 0.3)"
      flexDirection="column"
      colorScheme="black">
      <StyledText
        fontSizeRaw="3vh"
        colors={["white"]}
        fontWeights={["400"]}
        textAlign="center"
        px="6vw"
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
        colors={["white"]}
        fontWeights={["900"]}
        px="6vw"
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
        colors={["white", "teal"]}
        fontWeights={["400", "900"]}
        textAlign="center"
        multiLanguageSupport={{
          en: `Do you have an idea for a website or mobile app? Do you need product design advice? As a |full stack web developer|, I can help you turn your idea into reality. I have experience in multiple technologies and I will be happy to listen to your ideas and work with you on your project. Contact me now!`,
          es: `¿Tienes una idea para un sitio web o una aplicación móvil? ¿Necesitas asesoramiento sobre diseño de productos? Como |desarrollador web full stack|, puedo ayudarte a convertir tu idea en realidad. Tengo experiencia en múltiples tecnologías y estaré encantado de escuchar tus ideas y trabajar contigo en tu proyecto. ¡Contáctame ahora!`,
        }}
      />
      <Overlay
        my="3vh"
        isDisabled={isLoading}
        buttonOpenProps={{
          multiLanguageSupport: {
            en: "Contact me",
            es: "Contactame",
          },
          fontWeight: "700",
          fontSize: "2.5vh",
          textTransform: "uppercase",
          iconType: "message2Fill",
        }}
        labelCard={{
          es: "Enviame un mensaje",
          en: "Send me a message",
        }}
        paragraphCard={{
          es: "Puedes enviarme un mail, o contactarme por mis redes sociales.",
          en: "You can send me an email, or contact me through my social networks.",
        }}>
        <Input
          placeholder={{
            es: "Nombre",
            en: "Name",
          }}
          fontSizeRaw={{
            base: "2vh",
            md: "3vh",
          }}
          optimizedWidth
          mx="3vw"
          mt="5vh"
          isDisabled={isLoading}
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <Input
          placeholder="Email"
          type="email"
          fontSizeRaw={{
            base: "2vh",
            md: "3vh",
          }}
          optimizedWidth
          isInvalid={!validEmail}
          isDisabled={isLoading}
          mx="3vw"
          mt="5vh"
          value={email}
          onChange={handleChange}
        />
        <TextArea
          placeholder={{
            es: "Mensaje",
            en: "Message",
          }}
          fontSizeRaw={{
            base: "2vh",
            md: "3vh",
          }}
          optimizedWidth
          isDisabled={isLoading}
          mx="3vw"
          mt="5vh"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
        />
        <Flex
          gap="2vh"
          flexWrap="wrap"
          minW="70vw"
          mx="auto"
          mt="3vh"
          justifyContent="center">
          <NextLink
            href="/projects"
            isDisabled={isLoading}
            fontSizeRaw={{
              base: "2vh",
              md: "2.5vh",
            }}
            iconType="linkedinFill">
            LinkedIn
          </NextLink>
          <NextLink
            isDisabled={isLoading}
            fontSizeRaw={{
              base: "2vh",
              md: "2.5vh",
            }}
            href="https://twitter.com/_rosasnahuel_"
            iconType="twitterXFill">
            Twitter
          </NextLink>
          <NextLink
            isDisabled={isLoading}
            fontSizeRaw={{
              base: "2vh",
              md: "2.5vh",
            }}
            href="https://github.com/nahuelrosas/"
            iconType="githubFill">
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
            isDisabled={
              name === "" || !validEmail || text === "" ? true : false
            }
            isLoading={isLoading}
            iconType="mailSendFill"
            onClick={handleClick}
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
        px="6vw"
        colors={["white", "teal"]}
        fontWeights={["400", "900"]}
        multiLanguageSupport={{
          en: `© ${new Date().getFullYear()} All rights reserved. Designed and coded by |Nahuel Rosas| using the Robust UI framework.`,
          es: `© ${new Date().getFullYear()} Todos los derechos reservados. Diseñado y codificado por |Nahuel Rosas| utilizando el framework Robust UI.`,
        }}
      />
    </Footer>
  );
}
