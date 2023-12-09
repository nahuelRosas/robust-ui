import { Cover, Card } from "@robust-ui/nextjs-components";

import HeadNext from "@/components/headNext";

export default function Index() {
  return (
    <>
      <HeadNext
        title={{
          en: "Articles | Nahuel Rosas",
          es: "Articulos | Nahuel Rosas",
        }}
      />
      <Cover
        label={{
          en: "Exploring the Tech World with |In-Depth Articles|",
          es: "Explorando el Mundo de la Tecnología con |Artículos en Profundidad|",
        }}
        paragraph={{
          en: "Join me on a journey through the latest trends, insights, and discoveries in the tech world. From coding tips to industry analysis, my articles serve as a valuable resource for both newcomers and seasoned professionals. Let's dive into the realm of knowledge together.",
          es: "Acompáñame en un viaje a través de las últimas tendencias, perspicacias y descubrimientos en el mundo de la tecnología. Desde consejos de codificación hasta análisis de la industria, mis artículos son un recurso valioso tanto para principiantes como para profesionales experimentados. Sumergámonos juntos en el mundo del conocimiento.",
        }}
      />
      <Card
        my="10dvh"
        header={{
          en: "Discover My Articles",
          es: "Descubre Mis Artículos",
        }}
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
      />
    </>
  );
}
