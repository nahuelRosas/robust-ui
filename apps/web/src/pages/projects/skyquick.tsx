import { Project } from "@/components/project";
import HeadNext from "@/components/headNext";

export default function index() {
  return (
    <>
      <HeadNext
        title={{
          en: "SkyQuick | Projects | Nahuel Rosas",
          es: "SkyQuick | Proyectos | Nahuel Rosas",
        }}
      />
      <Project
        id={"skyquick"}
        title={{
          en: "|SkyQuick:| Instant messaging, simple and fast",
          es: "|SkyQuick:| Mensajería instantánea, simple y rápida",
        }}
        description={{
          en: `The primary motivation behind the creation of SkyQuick was to explore the possibilities of modern web development while addressing the fundamental need for quick and effective communication. This experimental project aims to simplify the messaging experience without the clutter of unnecessary features, making it an ideal choice for users who value simplicity and efficiency in their messaging apps.`,
          es: `La motivación principal detrás de la creación de SkyQuick fue explorar las posibilidades del desarrollo web moderno al tiempo que se aborda la necesidad fundamental de una comunicación rápida y efectiva. Este proyecto experimental tiene como objetivo simplificar la experiencia de mensajería sin el desorden de funciones innecesarias, lo que lo convierte en una opción ideal para los usuarios que valoran la simplicidad y la eficiencia en sus aplicaciones de mensajería.`,
        }}
        primaryMotivation={{
          en: `The primary motivation behind the Robust project was twofold. Firstly, it sought to delve deep into the inner workings of a styling processor in the context of React. This desire to thoroughly comprehend the styling process and how it integrates with React components served as a constant source of inspiration.
          Secondly, the aim was to offer a robust and self-contained tool for injecting CSS into React components, with a focus on simplicity and flexibility. Robust was developed to be a viable and effective alternative to existing solutions, without aiming to compete with them but rather to complement and enrich the React development ecosystem.`,
          es: `La motivación principal detrás del proyecto Robust fue doble. En primer lugar, buscó profundizar en el funcionamiento interno de un procesador de estilos en el contexto de React. Este deseo de comprender a fondo el proceso de estilización y cómo se integra con los componentes React sirvió como una fuente constante de inspiración.
          En segundo lugar, el objetivo era ofrecer una herramienta sólida y autónoma para inyectar CSS en los componentes React, con un enfoque en la simplicidad y la flexibilidad. Robust se desarrolló para ser una alternativa viable y efectiva a las soluciones existentes, sin pretender competir con ellas, sino para complementar y enriquecer el ecosistema de desarrollo React.`,
        }}
        keyFeatures={[
          {
            en: `Instant Messaging: SkyQuick allows users to send and receive text messages in real-time, promoting quick and effortless communication.`,
            es: `Mensajería instantánea: SkyQuick permite a los usuarios enviar y recibir mensajes de texto en tiempo real, promoviendo una comunicación rápida y sin esfuerzo.`,
          },
          {
            en: `Friendship Network: Users can easily add friends to their network, enabling them to stay connected and exchange messages effortlessly.`,
            es: `Red de amistad: los usuarios pueden agregar fácilmente amigos a su red, lo que les permite mantenerse conectados e intercambiar mensajes sin esfuerzo.`,
          },
          {
            en: `Cutting-Edge Technologies: Developed with Next.js, React, Recoil, Firebase, Chakra UI, and TypeScript, SkyQuick leverages a modern tech stack to ensure a smooth and responsive user experience.`,
            es: `Tecnologías de vanguardia: desarrollado con Next.js, React, Recoil, Firebase, Chakra UI y TypeScript, SkyQuick aprovecha una pila tecnológica moderna para garantizar una experiencia de usuario fluida y receptiva.`,
          },
          {
            en: `Experimental Approach: As an experimental project, SkyQuick is open to exploring new ideas and innovations in the world of instant messaging, paving the way for potential future enhancements.`,
            es: `Enfoque experimental: como proyecto experimental, SkyQuick está abierto a explorar nuevas ideas e innovaciones en el mundo de la mensajería instantánea, allanando el camino para posibles mejoras futuras.`,
          },
        ]}
        resume={{
          en: `SkyQuick may currently be in its development phase, but it holds the promise of becoming a user-friendly and efficient solution for instant communication. By focusing on simplicity, real-time messaging, and a streamlined feature set, SkyQuick seeks to redefine the way individuals connect and interact in the digital age.`,
          es: `SkyQuick puede estar actualmente en su fase de desarrollo, pero promete convertirse en una solución fácil de usar y eficiente para la comunicación instantánea. Al centrarse en la simplicidad, la mensajería en tiempo real y un conjunto de funciones simplificado, SkyQuick busca redefinir la forma en que las personas se conectan e interactúan en la era digital.`,
        }}
        url={{
          github: "https://github.com/nahuelRosas/SkyQuick",
          website: "https://sky-quick.vercel.app/",
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
          {
            text: {
              en: "Firebase",
              es: "Firebase",
            },
            iconType: "brandFirebase",
          },
          {
            text: {
              en: "Node",
              es: "Node",
            },
            iconType: "brandNodejs",
          },
          {
            text: {
              en: "Recoil",
              es: "Recoil",
            },
            iconType: "brandVercel",
          },
          {
            text: {
              en: "Algolia",
              es: "Algolia",
            },
            iconType: "brandAlgolia",
          },
        ]}
        images={[
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1671989003/Logos/SkyQuick/bluewings_1_v4vqqw.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693167863/portfolio/Skyquick/Screenshot_from_2023-08-27_17-23-23_aivcsl.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693167863/portfolio/Skyquick/Screenshot_from_2023-08-27_17-22-54_szhcop.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692056/portfolio/Skyquick/Screenshot_from_2023-01-25_20-34-40_a0gq2e.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692056/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-10_dzq3gt.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-40_rmp1si.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-22_yfgeqm.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-17_rrszow.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-31_xm04vc.webp",
          "https://res.cloudinary.com/dpd5v5wnr/image/upload/v1674692055/portfolio/Skyquick/Screenshot_from_2023-01-25_20-35-26_nbkx0z.webp",
        ]}
      />
    </>
  );
}
