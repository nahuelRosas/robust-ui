import { Cover, Card } from "@robust-ui/nextjs-components";

export default function Index() {
  return (
    <>
      <Cover
        heading={{
          en: "Some Things I’ve | Built",
          es: "Algunas cosas que he | construido",
        }}
        subHeading={{
          es: "En este portfolio encontrarás |mis proyectos| más destacados, |código| de calidad, |archivos fuente| y |herramientas| que uso como Full Stack Web developer. Todo lo que ves aquí lo he creado yo mismo con |React|, |Typescript| y otras tecnologías relacionadas. Mi objetivo es que disfrutes y aprendas con mi trabajo.",
          en: "In this portfolio you will find my most outstanding |projects|, |quality| code, |source files| and |tools| that I use as a Full Stack Web developer. Everything you see here I have created myself with |React|, |Typescript| and other related technologies. My goal is for you to enjoy and learn from my work.",
        }}
        icons={[
          { color: "mulberry", type: "brandNextjs" },
          { color: "white", type: "brandAzure" },
          { color: "mulberry", type: "brandNodejs" },
          { color: "white", type: "brandNpm" },
          { color: "mulberry", type: "brandTypescript" },
          { color: "white", type: "brandJavascript" },
          { color: "mulberry", type: "brandGit" },
          { color: "white", type: "brandFirebase" },
          { color: "mulberry", type: "brandVscode" },
          { color: "white", type: "brandRedux" },
          { color: "mulberry", type: "brandTailwind" },
          { color: "white", type: "brandHtml5" },
          { color: "mulberry", type: "brandPython" },
          { color: "white", type: "brandPrisma" },
        ]}
      />

      <Card
        backgroundRaw="rgba(0,0,0,0.6)"
        my="5vh"
        header={{
          title: { en: "My Projects", es: "Mis Proyectos" },
        }}
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
      />
    </>
  );
}
