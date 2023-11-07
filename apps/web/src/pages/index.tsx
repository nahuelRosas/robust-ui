import { Flex, Cover, NextLink, Card } from "@robust-ui/nextjs-components";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Nahuel Rosas | Portfolio</title>
        <meta
          name="description"
          content="Nahuel Rosas | Portfolio | Full Stack Developer | React | TypeScript | Next.js | NestJS | Recoil | Redux | Docker | Linux | JavaScript | AWS | Google Cloud | GitHub | Java | Python | MongoDB | PostgreSQL"
        />
        <meta
          name="keywords"
          content="Nahuel Rosas | Portfolio | Full Stack Developer | React | TypeScript | Next.js | NestJS | Recoil | Redux | Docker | Linux | JavaScript | AWS | Google Cloud | GitHub | Java | Python | MongoDB | PostgreSQL"
        />
        <meta name="author" content="Nahuel Rosas" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <Cover
        heading={{
          es: "¡Hola! me llamo |Nahuel Rosas|",
          en: "Hi! my name is |Nahuel Rosas|",
        }}
        subHeading={{
          es: "Soy un |Desarrollador Full Stack| apasionado por las tecnologías web. Mi especialidad es |React y TypeScript|, con los que puedo crear aplicaciones web innovadoras y de alta calidad. Si tienes un proyecto digital que quieres hacer realidad, ¡cuenta conmigo! Juntos podemos crear soluciones precisas y creativas para tus necesidades.",
          en: "I am a |Full Stack Developer| passionate about web technologies. My specialty is |React and TypeScript|, with which I can create innovative and high-quality web applications. If you have a digital project that you want to make happen, count on me! Together we can create precise and creative solutions for your needs.",
        }}
      />

      <Card
        backgroundRaw="rgba(0,0,0,0.6)"
        mt="5vh"
        data={[
          {
            title: {
              en: "Robust: | Reinventing development with React|",
              es: "Robust: | Reinventando el desarrollo con React|",
            },
            images: [
              "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693166009/portfolio/Robust/1_aqqep8.webp",
            ],
            href: "/projects/robust",
          },
          {
            title: {
              en: "SkyQuick: | The Fastest Messaging App Ever|",
              es: "SkyQuick: | La Aplicación de Mensajería Más Rápida|",
            },

            images: [
              "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1671989003/Logos/SkyQuick/bluewings_1_v4vqqw.webp",
            ],
            href: "/projects/skyquick",
          },
          {
            title: {
              es: "PyTicketMaster: | Desatando oportunidades con Python Scraping para eventos masivos",
              en: "PyTicketMaster: | Unleashing opportunities with Python Scraping for mass events",
            },

            images: [
              "https://res.cloudinary.com/dlcilp6vw/image/upload/v1692752323/Screenshot/Screenshot_from_2023-08-22_21-56-02_uuuttk.webp",
            ],
            href: "/projects/pyticketmaster",
          },
          {
            title: {
              en: "Kalo: | The Ultimate Online Sneaker Destination|",
              es: "Kalo: | El Destino Definitivo de Zapatillas Online|",
            },

            images: [
              "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935733/Screenshot/1675935206665_gx68ax.webp",
            ],
            href: "/projects/kalo",
          },
        ]}
        header={{
          title: {
            en: "My Projects",
            es: "Mis Proyectos",
          },
          url: "/projects#cover",
        }}
      />
      <Card
        backgroundRaw="rgba(0,0,0,0.6)"
        mt="5vh"
        data={[
          {
            title: {
              en: "Solving the EACCES Error: | How to Install Libraries on Linux Easily|",
              es: "Solucionando el Error EACCES: | Cómo Instalar Librerías en Linux Fácilmente|",
            },
            images: [
              "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684810747172_bguk3p.webp",
            ],
            href: "/articles/eacces-error",
          },
          {
            title: {
              en: "Deconstructing Robust: | How to Build Your Own React Component Library (Advanced TypeScript)|",
              es: "Descomponiendo Robust: | Cómo Construir tu Propia Librería de Componentes React (TypeScript Avanzado)|",
            },
            images: [
              "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169733/portfolio/Articles/Breaking%20down%20Robust:%20How%20to%20create%20your%20own%20React%20component%20library%20inspired%20by%20Styled%20Components%2C%20Tailwind%2C%20and%20Chakra%20UI%20%28Advanced%20TypeScript%29/1685386733005_l48rgz.png",
            ],
            href: "/articles/breaking-robust",
          },
        ]}
        header={{
          title: {
            en: "My Articles",
            es: "Mis Artículos",
          },
          url: "/articles#cover",
        }}
      />
      <Card
        backgroundRaw="rgba(0,0,0,0.6)"
        mt="5vh"
        label={{
          title: {
            es: "Desarrollo web integral con tecnologías de punta",
            en: "Comprehensive web development with cutting-edge technologies",
          },
        }}
        text={{
          text: {
            es: "Mi pasión es crear |aplicaciones web asombrosas| que superen tus expectativas digitales. Te ofrezco un servicio integral de desarrollo web, desde el diseño hasta la implementación, utilizando |TypeScript|, |Next.js|, |Nest| y otras |herramientas poderosas|. ¿Estás listo para iniciar el viaje hacia tu solución web ideal?",
            en: "My passion is to create |amazing web applications| that exceed your digital expectations. I offer you a comprehensive web development service, from design to implementation, using |TypeScript|, |Next.js|, |Nest| and other |powerful tools|. Are you ready to start the journey towards your ideal web solution?",
          },
        }}
        data={[
          {
            title: {
              es: "Estrategia web con visión profunda",
              en: "Web strategy with deep vision",
            },
            text: {
              es: "Antes de programar, me dedico a entender tu proyecto a fondo. Mi proceso incluye |investigar el mercado|, |analizar la competencia|, |definir los objetivos| y |explorar las opciones|. Así, puedo formular las |preguntas clave| y los |retos estratégicos| que guiarán el desarrollo de tu |aplicación web ideal|.",
              en: "Before programming, I dedicate myself to understanding your project in depth. My process includes |researching the market|, |analyzing the competition|, |defining the objectives| and |exploring the options|. Thus, I can formulate the |key questions| and |strategic challenges| that will guide the development of your |ideal web application|.",
            },
          },
          {
            title: {
              es: "Experiencias web inmersivas",
              en: "Immersive web experiences",
            },
            text: {
              es: "Mi trabajo es crear |aplicaciones web| que te cautiven con su |diseño visual|. Te acompaño desde la |idea inicial| hasta el |producto final|, creando una |historia visual| que te haga vivir la |experiencia del usuario|. Con los |prototipos| que diseño, podrás ver y probar tu |aplicación web| antes de pasar al |desarrollo completo|.",
              en: "My job is to create |web applications| that captivate you with their |visual design|. I accompany you from the |initial idea| to the |final product|, creating a |visual story| that makes you live the |user experience|. With the |prototypes| I design, you will be able to see and test your |web application| before moving on to |full development|.",
            },
          },
          {
            title: { es: "Creando Soluciones", en: "Creating Solutions" },
            text: {
              es: "Transformo tus |Ideas en Realidad|. Soy un experto en toda la |tecnología web|, y combino la |innovación del diseño| con la |calidad del código|. Trabajo en equipo con los profesionales de |diseño| y |desarrollo| en cada fase del proyecto. En mis creaciones web, no solo me ocupo de la |experiencia del usuario|, sino que también aseguro la |fiabilidad del backend|, integrando ambos aspectos de forma |fluida para un resultado óptimo y completo.|",
              en: "I transform your |Ideas into Reality|. I am an expert in all |web technology|, and I combine |design innovation| with |code quality|. I work as a team with the |design| and |development| professionals in each phase of the project. In my web creations, I not only take care of the |user experience|, but also ensure the |reliability of the backend|, integrating both aspects |smoothly for an optimal and complete result.|",
            },
          },
          {
            title: {
              es: "Garantizando la Calidad",
              en: "Ensuring Quality",
            },
            text: {
              es: "Te mantengo informado del avance del desarrollo con reuniones frecuentes. Luego de las |primeras fases de diseño y código|, mi dedicación a la |calidad| se muestra en |testeos de usuario a medida|. Esto asegura soluciones eficientes que no solo |satisfacen, sino que superan tus expectativas|, atendiendo las |demandas particulares de tu proyecto|.",
              en: "I keep you informed of the progress of the development with frequent meetings. After the |first phases of design and code|, my dedication to |quality| is shown in |custom user testing|. This ensures efficient solutions that not only |satisfy, but exceed your expectations|, addressing the |particular demands of your project|.",
            },
          },
        ]}
      />
      <Card
        backgroundRaw="rgba(0,0,0,0.6)"
        my="5vh"
        label={{
          title: {
            en: "Hi there, I'm Nahuel",
            es: "Hola, soy Nahuel",
          },
        }}
        header={{
          title: {
            en: "Pleasure Meeting You!",
            es: "¡Un Placer Conocerte!",
          },
          url: "/about-me#cover",
        }}
        text={{
          text: {
            es: `Soy un |desarrollador web full stack| apasionado por la tecnología y la innovación. Creo código |limpio, reutilizable y eficiente|, y soluciones innovadoras como Robust-UI. Me he formado en bootcamps y aprendizaje autodirigido. He trabajado en una startup y dirijo un emprendimiento. Estoy comprometido en evolucionar y hacer un impacto en proyectos desafiantes. Mi objetivo es que Robust-UI sea adoptado por la comunidad de código abierto y el desarrollo web.`,
            en: `I am a |full stack web developer| passionate about technology and innovation. I create |clean, reusable and efficient| code, and innovative solutions like Robust-UI. I have trained in bootcamps and self-directed learning. I have worked in a startup and run an entrepreneurship. I am committed to evolving and making an impact on challenging projects. My goal is for Robust-UI to be adopted by the open source community and web development.`,
          },
        }}>
        <Flex
          gap="2vh"
          flexWrap="wrap"
          minW="70vw"
          mx="auto"
          mt="3vh"
          justifyContent="center">
          <NextLink
            textShadow={{
              x: "0.3vh",
              y: "-0.2vh",
              blur: "0.2vh",
              color: "black",
            }}
            href="/projects#cover"
            fontSizeRaw={{
              base: "2vh",
              md: "4vh",
            }}
            iconProps={{
              iconPosition: "left",
              iconType: "linkedinFill",
            }}>
            LinkedIn
          </NextLink>
          <NextLink
            textShadow={{
              x: "0.3vh",
              y: "-0.2vh",
              blur: "0.2vh",
              color: "black",
            }}
            fontSizeRaw={{
              base: "2vh",
              md: "4vh",
            }}
            href="https://twitter.com/_rosasnahuel_"
            iconProps={{
              iconPosition: "left",
              iconType: "twitterXFill",
            }}>
            Twitter
          </NextLink>
          <NextLink
            textShadow={{
              x: "0.3vh",
              y: "-0.2vh",
              blur: "0.2vh",
              color: "black",
            }}
            fontSizeRaw={{
              base: "2vh",
              md: "4vh",
            }}
            href="https://github.com/nahuelrosas/"
            iconProps={{
              iconPosition: "left",
              iconType: "githubFill",
            }}>
            Github
          </NextLink>
        </Flex>
      </Card>
    </>
  );
}

export default Index;
