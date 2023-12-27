import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Footer,
  Input,
  NextLink,
  Overlay,
  StyledText,
  TextArea,
  useToast,
} from "@robust-ui/nextjs-components";

export default function Sub() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [validEmail, setValidEmail] = useState(true);
  const [hidden, setHidden] = useState<boolean>(true);

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
    } else if (res.status === 200 || !res) {
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHidden(false);
    }
  }, [hidden]);

  return (
    <Footer
      boxShadowRaw="0 0 1.5dvh 0 rgba(255, 255, 255, 0.3)"
      flexDirection="column"
      colorScheme="black"
    >
      <StyledText
        fontSizeRaw="3dvh"
        colors={["white"]}
        fontWeights={["400"]}
        textAlign="center"
        px="6dvw"
        multiLanguageSupport={{
          en: "Get in touch",
          es: "Contacto",
        }}
      />
      <StyledText
        fontSizeRaw={{
          base: "4dvh",
          md: "7dvh",
        }}
        colors={["white"]}
        fontWeights={["900"]}
        px="6dvw"
        textAlign="center"
        multiLanguageSupport={{
          en: "Let’s work together",
          es: "Trabajemos juntos",
        }}
      />
      <StyledText
        fontSizeRaw={{
          base: "2dvh",
          md: "3dvh",
        }}
        px="6dvw"
        colors={["white", "teal"]}
        fontWeights={["400", "900"]}
        textAlign="center"
        multiLanguageSupport={{
          en: `Do you have an idea for a website or mobile app? Do you need product design advice? As a |full stack web developer|, I can help you turn your idea into reality. I have experience in multiple technologies and I will be happy to listen to your ideas and work with you on your project. Contact me now!`,
          es: `¿Tienes una idea para un sitio web o una aplicación móvil? ¿Necesitas asesoramiento sobre diseño de productos? Como |desarrollador web full stack|, puedo ayudarte a convertir tu idea en realidad. Tengo experiencia en múltiples tecnologías y estaré encantado de escuchar tus ideas y trabajar contigo en tu proyecto. ¡Contáctame ahora!`,
        }}
      />
      <Overlay
        display={hidden ? "none" : "flex"}
        my="3dvh"
        isDisabled={isLoading}
        buttonOpenProps={{
          multiLanguageSupport: {
            en: "Contact me",
            es: "Contactame",
          },
          fontWeight: "700",
          fontSize: "2.5dvh",
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
        }}
      >
        <Input
          placeholder={{
            es: "Nombre",
            en: "Name",
          }}
          fontSizeRaw={{
            base: "2dvh",
            md: "3dvh",
          }}
          optimizedWidth
          mx="3dvw"
          mt="5dvh"
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
            base: "2dvh",
            md: "3dvh",
          }}
          optimizedWidth
          isInvalid={!validEmail}
          isDisabled={isLoading}
          mx="3dvw"
          mt="5dvh"
          value={email}
          onChange={handleChange}
        />
        <TextArea
          placeholder={{
            es: "Mensaje",
            en: "Message",
          }}
          fontSizeRaw={{
            base: "2dvh",
            md: "3dvh",
          }}
          optimizedWidth
          isDisabled={isLoading}
          mx="3dvw"
          mt="5dvh"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
        />
        <Flex
          gap="2dvh"
          flexWrap="wrap"
          minW="70dvw"
          mx="auto"
          mt="3dvh"
          justifyContent="center"
        >
          <NextLink
            href="/projects"
            isDisabled={isLoading}
            fontSizeRaw={{
              base: "2dvh",
              md: "2.5dvh",
            }}
            iconType="linkedinFill"
          >
            LinkedIn
          </NextLink>
          <NextLink
            isDisabled={isLoading}
            fontSizeRaw={{
              base: "2dvh",
              md: "2.5dvh",
            }}
            href="https://twitter.com/_rosasnahuel_"
            iconType="twitterXFill"
          >
            Twitter
          </NextLink>
          <NextLink
            isDisabled={isLoading}
            fontSizeRaw={{
              base: "2dvh",
              md: "2.5dvh",
            }}
            href="https://github.com/nahuelrosas/"
            iconType="githubFill"
          >
            Github
          </NextLink>
          <Button
            fontSizeRaw={{
              base: "2.5dvh",
              md: "3dvh",
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
          base: "1.5dvh",
          md: "2.5dvh",
        }}
        textAlign="center"
        px="6dvw"
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
