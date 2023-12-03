import { Cover } from "@/components/cover";
import { Card } from "@/components/card";
import HeadNext from "@/components/headNext";

export default function Index() {
  return (
    <>
      <HeadNext
        title={{
          en: "Projects | Nahuel Rosas",
          es: "Proyectos | Nahuel Rosas",
        }}
      />
      <Cover
        label={{
          en: "Some Things I’ve | Built",
          es: "Algunas cosas que he | construido",
        }}
        paragraph={{
          es: "En este portfolio encontrarás |mis proyectos| más destacados, |código| de calidad, |archivos fuente| y |herramientas| que uso como Full Stack Web developer. Todo lo que ves aquí lo he creado yo mismo con |React|, |Typescript| y otras tecnologías relacionadas. Mi objetivo es que disfrutes y aprendas con mi trabajo.",
          en: "In this portfolio you will find my most outstanding |projects|, |quality| code, |source files| and |tools| that I use as a Full Stack Web developer. Everything you see here I have created myself with |React|, |Typescript| and other related technologies. My goal is for you to enjoy and learn from my work.",
        }}
        icons={[
          { color: "indigo", type: "brandNextjs" },
          { color: "white", type: "brandAzure" },
          { color: "indigo", type: "brandNodejs" },
          { color: "white", type: "brandNpm" },
          { color: "indigo", type: "brandTypescript" },
          { color: "white", type: "brandJavascript" },
          { color: "indigo", type: "brandGit" },
          { color: "white", type: "brandFirebase" },
          { color: "indigo", type: "brandVscode" },
          { color: "white", type: "brandRedux" },
          { color: "indigo", type: "brandTailwind" },
          { color: "white", type: "brandHtml5" },
          { color: "indigo", type: "brandPython" },
          { color: "white", type: "brandPrisma" },
        ]}
      />

      <Card
        my="10vh"
        header={{
          en: "My Projects",
          es: "Mis Proyectos",
        }}
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
      />
    </>
  );
}
