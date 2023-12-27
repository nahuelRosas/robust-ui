import { useLanguage } from "@robust-ui/nextjs-components";
import Head from "next/head";

export default function HeadNext({
  title = {
    es: "Portafolio | Nahuel Rosas",
    en: "Portfolio | Nahuel Rosas",
  },
}: {
  title?: {
    es: string;
    en: string;
  };
}) {
  const [language] = useLanguage();

  const descriptionEs =
    "Nahuel Rosas es un desarrollador full stack especializado en TypeScript y React. En este portafolio, podrás encontrar sus proyectos, habilidades y experiencia.";
  const descriptionEn =
    "Nahuel Rosas is a full stack developer specialized in TypeScript and React. In this portfolio, you will find his projects, skills and experience.";
  const keywords = [
    "Nahuel Rosas",
    "Salta",
    "Argentina",
    "portafolio",
    "developer",
    "desarrollador",
    "full stack",
    "TypeScript",
    "React",
    "Next.js",
    "Nest",
    "Node.js",
    "Python",
    "Django",
    "Flask",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Chakra UI",
    "Styled Components",
    "Material UI",
    "Bootstrap",
    "Figma",
    "Adobe XD",
    "Robust UI",
  ];
  const author = "Nahuel Rosas";
  const robots = "index, follow";
  const themeColor = "#000000";
  const msapplicationTileColor = "#000000";
  const twitter = "https://twitter.com/_rosasnahuel_";
  const github = "https://github.com/nahuelrosas";
  const linkedin = "https://www.linkedin.com/in/nahuelrosas/";

  return (
    <Head>
      <title>{language.currentLanguage === "es" ? title.es : title.en}</title>
      <meta
        name="description"
        content={
          language.currentLanguage === "es" ? descriptionEs : descriptionEn
        }
      />
      <link rel="canonical" href="https://nahuelrosas.ar/" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="keywords" content={keywords.join(" ")} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={msapplicationTileColor} />
      {twitter && <meta name="twitter:card" content="summary" />}
      {twitter && <meta name="twitter:site" content={twitter} />}
      {twitter && (
        <meta
          name="twitter:title"
          content={language.currentLanguage === "es" ? title.es : title.en}
        />
      )}
      {twitter && (
        <meta
          name="twitter:description"
          content={
            language.currentLanguage === "es" ? descriptionEs : descriptionEn
          }
        />
      )}
      {twitter && <meta name="twitter:image" content={twitter} />}
      {github && <link rel="icon" href={github} />}
      {github && <meta name="github:card" content="summary" />}
      {github && <meta name="github:site" content={github} />}
      {github && (
        <meta
          name="github:title"
          content={language.currentLanguage === "es" ? title.es : title.en}
        />
      )}
      {github && (
        <meta
          name="github:description"
          content={
            language.currentLanguage === "es" ? descriptionEs : descriptionEn
          }
        />
      )}
      {linkedin && <meta name="linkedin:profile" content={linkedin} />}
      {linkedin && <meta name="linkedin:card" content="summary" />}
      {linkedin && <meta name="linkedin:site" content={linkedin} />}
      {linkedin && (
        <meta
          name="linkedin:title"
          content={language.currentLanguage === "es" ? title.es : title.en}
        />
      )}
    </Head>
  );
}
