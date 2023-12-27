import React, { useState, useEffect } from "react";
import HeadNext from "../components/headNext";
import {
  Flex,
  StyledText,
  Icon,
  Cover,
  Card,
  NextLink,
} from "@robust-ui/nextjs-components";
function Index() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeadNext />
      <Flex
        color="white"
        zIndexRaw="1"
        position="fixed"
        bottom="10"
        pointerEvents={!isVisible ? "none" : "inherit"}
        width="100dvw"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        transitionRaw="all 0.5s ease-in-out"
        keyframesRaw={{
          animation: {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.1)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
          hidden: {
            "0%": {
              opacity: 1,
            },
            "100%": {
              opacity: 0,
            },
          },
        }}
        animationRaw={
          isVisible ? "animation 2s infinite" : "hidden 2s ease-in-out forwards"
        }
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          padding="1dvh"
          colorSchemeProperty={{
            baseColor: "indigo600",
            opacity: 0.4,
            props: { hover: true },
          }}
          borderRadius="2dvh"
          justifyContent="center"
        >
          <StyledText
            multiLanguageSupport={{
              es: "Haz scroll para más contenido",
              en: "Scroll for more content",
            }}
            fontWeights={["900"]}
            fontSize="2.5dvh"
          />
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Icon iconType="mouseFill" size="4dvh" />
            <Icon iconType="arrowBigDownFilled" size="2dvh" />
          </Flex>
        </Flex>
      </Flex>
      <Cover
        label={{
          es: "¡Hola! me llamo |Nahuel Rosas|",
          en: "Hi! my name is |Nahuel Rosas|",
        }}
        paragraph={{
          es: "Soy un |Desarrollador Full Stack| apasionado por las tecnologías web. Mi especialidad es |React y TypeScript|, con los que puedo crear aplicaciones web innovadoras y de alta calidad. Si tienes un proyecto digital que quieres hacer realidad, ¡cuenta conmigo! Juntos podemos crear soluciones precisas y creativas para tus necesidades.",
          en: "I am a |Full Stack Developer| passionate about web technologies. My specialty is |React and TypeScript|, with which I can create innovative and high-quality web applications. If you have a digital project that you want to make happen, count on me! Together we can create precise and creative solutions for your needs.",
        }}
      />
      <Card
        mt="10dvh"
        data={[
          {
            label: {
              en: "Robust: | Revolutionizing React Web Development",
              es: "Robust: | Revolucionando el desarrollo web de React",
            },
            images: [
              "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/pa1klz9kgmgukgtszrm8",
            ],
            href: "/projects/robust",
          },
          {
            label: {
              en: "|SkyQuick:| Instant messaging, simple and fast",
              es: "|SkyQuick:| Mensajería instantánea, simple y rápida",
            },
            images: [
              "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1671989003/Logos/SkyQuick/bluewings_1_v4vqqw.webp",
            ],
            href: "/projects/skyquick",
          },
          {
            label: {
              en: "PyTicketMaster: | Unleashing Opportunities with Python Scraping for Mass Events",
              es: "PyTicketMaster: | Desatando oportunidades con Python Scraping para eventos masivos",
            },

            images: [
              "https://res.cloudinary.com/dlcilp6vw/image/upload/v1692752323/Screenshot/Screenshot_from_2023-08-22_21-56-02_uuuttk.webp",
            ],
            href: "/projects/pyticketmaster",
          },
          {
            label: {
              en: "Kalo: | Your Ultimate Online Sneaker Destination",
              es: "Kalo: | Tu Destino Definitivo de Zapatillas en Línea",
            },

            images: [
              "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935733/Screenshot/1675935206665_gx68ax.webp",
            ],
            href: "/projects/kalo",
          },
        ]}
        header={{
          text: {
            en: "My Projects",
            es: "Mis Proyectos",
          },
          href: "/projects",
        }}
      />
      <Card
        mt="10dvh"
        label={{
          text: {
            es: "Desarrollo web integral con tecnologías de punta",
            en: "Comprehensive web development with cutting-edge technologies",
          },
        }}
        paragraph={{
          text: {
            es: "Mi pasión es crear |aplicaciones web asombrosas| que superen tus expectativas digitales. Te ofrezco un servicio integral de desarrollo web, desde el diseño hasta la implementación, utilizando |TypeScript|, |Next.js|, |Nest| y otras |herramientas poderosas|. ¿Estás listo para iniciar el viaje hacia tu solución web ideal?",
            en: "My passion is to create |amazing web applications| that exceed your digital expectations. I offer you a comprehensive web development service, from design to implementation, using |TypeScript|, |Next.js|, |Nest| and other |powerful tools|. Are you ready to start the journey towards your ideal web solution?",
          },
        }}
        data={[
          {
            label: {
              es: "Estrategia web con visión profunda",
              en: "Web strategy with deep vision",
            },
            paragraph: {
              es: "Antes de programar, me dedico a entender tu proyecto a fondo. Mi proceso incluye |investigar el mercado|, |analizar la competencia|, |definir los objetivos| y |explorar las opciones|. Así, puedo formular las |preguntas clave| y los |retos estratégicos| que guiarán el desarrollo de tu |aplicación web ideal|.",
              en: "Before programming, I dedicate myself to understanding your project in depth. My process includes |researching the market|, |analyzing the competition|, |defining the objectives| and |exploring the options|. Thus, I can formulate the |key questions| and |strategic challenges| that will guide the development of your |ideal web application|.",
            },
          },
          {
            label: {
              es: "Experiencias web inmersivas",
              en: "Immersive web experiences",
            },
            paragraph: {
              es: "Mi trabajo es crear |aplicaciones web| que te cautiven con su |diseño visual|. Te acompaño desde la |idea inicial| hasta el |producto final|, creando una |historia visual| que te haga vivir la |experiencia del usuario|. Con los |prototipos| que diseño, podrás ver y probar tu |aplicación web| antes de pasar al |desarrollo completo|.",
              en: "My job is to create |web applications| that captivate you with their |visual design|. I accompany you from the |initial idea| to the |final product|, creating a |visual story| that makes you live the |user experience|. With the |prototypes| I design, you will be able to see and test your |web application| before moving on to |full development|.",
            },
          },
          {
            label: { es: "Creando Soluciones", en: "Creating Solutions" },
            paragraph: {
              es: "Transformo tus |Ideas en Realidad|. Soy un experto en toda la |tecnología web|, y combino la |innovación del diseño| con la |calidad del código|. Trabajo en equipo con los profesionales de |diseño| y |desarrollo| en cada fase del proyecto. En mis creaciones web, no solo me ocupo de la |experiencia del usuario|, sino que también aseguro la |fiabilidad del backend|, integrando ambos aspectos de forma |fluida para un resultado óptimo y completo.|",
              en: "I transform your |Ideas into Reality|. I am an expert in all |web technology|, and I combine |design innovation| with |code quality|. I work as a team with the |design| and |development| professionals in each phase of the project. In my web creations, I not only take care of the |user experience|, but also ensure the |reliability of the backend|, integrating both aspects |smoothly for an optimal and complete result.|",
            },
          },
          {
            label: {
              es: "Garantizando la Calidad",
              en: "Ensuring Quality",
            },
            paragraph: {
              es: "Te mantengo informado del avance del desarrollo con reuniones frecuentes. Luego de las |primeras fases de diseño y código|, mi dedicación a la |calidad| se muestra en |testeos de usuario a medida|. Esto asegura soluciones eficientes que no solo |satisfacen, sino que superan tus expectativas|, atendiendo las |demandas particulares de tu proyecto|.",
              en: "I keep you informed of the progress of the development with frequent meetings. After the |first phases of design and code|, my dedication to |quality| is shown in |custom user testing|. This ensures efficient solutions that not only |satisfy, but exceed your expectations|, addressing the |particular demands of your project|.",
            },
          },
        ]}
      />
      <Card
        mt="10dvh"
        data={[
          {
            label: {
              en: "Conquering the EACCES Error: | Installing Libraries on Linux Made Easy",
              es: "Venciendo el Error EACCES: | Instalación de Bibliotecas en Linux de Forma Sencilla",
            },
            images: [
              "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684810747172_bguk3p.webp",
            ],
            href: "/articles/eacces-error",
          },
          {
            label: {
              en: "Building a Robust React Component Library with | Advanced TypeScript",
              es: "Construyendo una Biblioteca de Componentes Robusta con | TypeScript Avanzado",
            },
            images: [
              "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169733/portfolio/Articles/Breaking%20down%20Robust:%20How%20to%20create%20your%20own%20React%20component%20library%20inspired%20by%20Styled%20Components%2C%20Tailwind%2C%20and%20Chakra%20UI%20%28Advanced%20TypeScript%29/1685386733005_l48rgz.png",
            ],
            href: "/articles/breaking-robust",
          },
        ]}
        header={{
          text: {
            en: "My Articles",
            es: "Mis Artículos",
          },
          href: "/articles",
        }}
      />
      <Card
        my="10dvh"
        label={{
          text: {
            en: "Hi there, I'm Nahuel",
            es: "Hola, soy Nahuel",
          },
        }}
        header={{
          text: {
            en: "Pleasure Meeting You!",
            es: "¡Un Placer Conocerte!",
          },
          href: "/about-me",
        }}
        paragraph={{
          text: {
            es: `Soy un |desarrollador web full stack| apasionado por la tecnología y la innovación. Creo código |limpio, reutilizable y eficiente|, y soluciones innovadoras como Robust-UI. Me he formado en bootcamps y aprendizaje autodirigido. He trabajado en una startup y dirijo un emprendimiento. Estoy comprometido en evolucionar y hacer un impacto en proyectos desafiantes. Mi objetivo es que Robust-UI sea adoptado por la comunidad de código abierto y el desarrollo web.`,
            en: `I am a |full stack web developer| passionate about technology and innovation. I create |clean, reusable and efficient| code, and innovative solutions like Robust-UI. I have trained in bootcamps and self-directed learning. I have worked in a startup and run an entrepreneurship. I am committed to evolving and making an impact on challenging projects. My goal is for Robust-UI to be adopted by the open source community and web development.`,
          },
        }}
      >
        <Flex
          gap="2dvh"
          flexWrap="wrap"
          minW="70dvw"
          mx="auto"
          mt="3dvh"
          justifyContent="center"
        >
          <NextLink
            href="https://www.linkedin.com/in/nahuelrosas/"
            fontSizeRaw={{
              base: "3dvh",
              md: "4dvh",
            }}
            iconType="linkedinFill"
          >
            LinkedIn
          </NextLink>
          <NextLink
            fontSizeRaw={{
              base: "3dvh",
              md: "4dvh",
            }}
            href="https://twitter.com/_rosasnahuel_"
            iconType="twitterXFill"
          >
            Twitter
          </NextLink>
          <NextLink
            fontSizeRaw={{
              base: "3dvh",
              md: "4dvh",
            }}
            href="https://github.com/nahuelrosas/"
            iconType="githubFill"
          >
            Github
          </NextLink>
        </Flex>
      </Card>
    </>
  );
}

export default Index;
