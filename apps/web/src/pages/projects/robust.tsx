import { Project } from "@/components/project";
import HeadNext from "@/components/headNext";

export default function index() {
  return (
    <>
      <HeadNext
        title={{
          en: "Robust | Projects | Nahuel Rosas",
          es: "Robust | Proyectos | Nahuel Rosas",
        }}
      />
      <Project
        id={"robust"}
        title={{
          en: "Robust: | Revolutionizing React Web Development",
          es: "Robust: | Revolucionando el desarrollo web de React",
        }}
        description={{
          en: `Robust is an innovative project that offers an efficient and flexible solution for injecting CSS as props into React components. Developed in TypeScript, this project stems from a deep curiosity to understand the inner workings of a styling processor in the React environment. Drawing inspiration from the best practices of Chakra UI and Styled Components, Robust aims to provide a robust and standalone alternative.`,
          es: `Robust es un proyecto innovador que ofrece una solución eficiente y flexible para inyectar CSS como props en componentes de React. Desarrollado en TypeScript, este proyecto surge de una profunda curiosidad por comprender en detalle cómo funciona un procesador de estilos en el entorno de React. Tomando inspiración de las mejores prácticas de Chakra UI y Styled Components, Robust tiene como objetivo proporcionar una alternativa sólida e independiente.`,
        }}
        primaryMotivation={{
          en: `The primary motivation behind the Robust project was twofold. Firstly, it sought to delve deep into the inner workings of a styling processor in the context of React. This desire to thoroughly comprehend the styling process and how it integrates with React components served as a constant source of inspiration.
          Secondly, the aim was to offer a robust and self-contained tool for injecting CSS into React components, with a focus on simplicity and flexibility. Robust was developed to be a viable and effective alternative to existing solutions, without aiming to compete with them but rather to complement and enrich the React development ecosystem.`,
          es: `La motivación principal detrás del proyecto Robust fue doble. En primer lugar, buscó profundizar en el funcionamiento interno de un procesador de estilos en el contexto de React. Este deseo de comprender a fondo el proceso de estilización y cómo se integra con los componentes React sirvió como una fuente constante de inspiración.
          En segundo lugar, el objetivo era ofrecer una herramienta sólida y autónoma para inyectar CSS en los componentes React, con un enfoque en la simplicidad y la flexibilidad. Robust se desarrolló para ser una alternativa viable y efectiva a las soluciones existentes, sin pretender competir con ellas, sino para complementar y enriquecer el ecosistema de desarrollo React.`,
        }}
        keyFeatures={[
          {
            en: `Inject CSS as props into React components in a simple and flexible manner.`,
            es: `Inyecte CSS como props en componentes React de una manera simple y flexible.`,
          },
          {
            en: `Developed in TypeScript to ensure code safety and quality.`,
            es: `Desarrollado en TypeScript para garantizar la seguridad y calidad del código.`,
          },
          {
            en: `Inspired by the best practices of Chakra UI and Styled Components for a familiar development experience.`,
            es: `Inspirado en las mejores prácticas de Chakra UI y Styled Components para una experiencia de desarrollo familiar.`,
          },
          {
            en: `Independent and free from unnecessary dependencies, with React and TypeScript as the only requirements.`,
            es: `Independiente y libre de dependencias innecesarias, con React y TypeScript como los únicos requisitos.`,
          },
          {
            en: `Complements the React development ecosystem, offering a reliable and robust option for handling styles.`,
            es: `Complementa el ecosistema de desarrollo React, ofreciendo una opción confiable y robusta para manejar estilos.`,
          },
        ]}
        resume={{
          en: `Robust does not aim to be in competition with other existing solutions but rather as a valuable addition to the toolkit of React developers. With a focus on simplicity, efficiency, and independence, Robust presents itself as a robust and dependable alternative for managing styles in React applications, fostering innovation and creativity in modern web development.`,
          es: `Robust no pretende competir con otras soluciones existentes, sino como una valiosa adición al kit de herramientas de los desarrolladores de React. Con un enfoque en la simplicidad, la eficiencia y la independencia, Robust se presenta como una alternativa sólida y confiable para administrar estilos en aplicaciones React, fomentando la innovación y la creatividad en el desarrollo web moderno.`,
        }}
        url={{
          github: "https://github.com/nahuelrosas/robust-ui",
          npm: "https://www.npmjs.com/package/@robust-ui/nextjs-components",
        }}
        technologies={[
          {
            text: {
              en: "Typescript",
              es: "Typescript",
            },
            iconType: "brandTypescript",
          },
          {
            text: {
              en: "React",
              es: "React",
            },
            iconType: "brandReact",
          },
          {
            text: {
              en: "Next.js",
              es: "Next.js",
            },
            iconType: "brandNextjs",
          },
        ]}
        images={[
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/pa1klz9kgmgukgtszrm8",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/ozwod4j133grbumtiu25",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/iapylgcfibflgir5c8v5",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/d1lpuj9bmtf3o11upbe6",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/gtekwip2pqtfceqbm6dz",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/o5ku3zy8tujfbfsbshep",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/ykg7zsllckeuqpud1w4l",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/io5qcpv4nl3csaippndk",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/jq8dy4nn0hmzoyfaqypm",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/jdh1nny7ghuuduq9wu3a",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/v8t4vlwwurwnm7pd2g1b",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/if3juora9edoogqkf56n",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/snxbpc8q3hufrno3dkxz",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/uzrqdsnwvkvxnqsdj1uo",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/y6gr7s4tnkn2zjrejhns",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/unbom3we7rhq05rfqvsg",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/f_auto,q_auto/v1/portfolio/robust/jh6ha0qcctstxcb1myum",
        ]}
      />
    </>
  );
}
