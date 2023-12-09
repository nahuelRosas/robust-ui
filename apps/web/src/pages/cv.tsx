import HeadNext from "@/components/headNext";
import { Flex, StyledText, NextLink, Icon } from "@robust-ui/nextjs-components";

export default function Index() {
  return (
    <>
      <HeadNext
        title={{
          en: "Curriculum Vitae | Nahuel Rosas",
          es: "Curriculum Vitae | Nahuel Rosas",
        }}
      />
      <Flex
        mt="15dvh"
        mb="10dvh"
        gap="5dvh"
        tabIndex={-1}
        id="Curriculum Vitae"
        flexDirection="column">
        <Flex
          widthRaw={{ base: "calc(100dvw - 12dvw)", md: "calc(100dvw - 6dvw)" }}
          colorSchemeProperty={{
            opacity: 0.8,
            props: {
              hover: false,
              active: false,
              focus: false,
            },
            baseColorRaw: "black",
          }}
          borderRadius="2.5dvh"
          justifyContent="center"
          mx={{
            base: "6dvw",
            md: "3dvw",
          }}
          pb="3dvh"
          overflow="hidden"
          flexDirection="column">
          <StyledText
            optimizedWidth
            textAlign="center"
            fontWeights={["900"]}
            fontSizeRaw={{
              base: "4dvh",
              md: "6dvh",
            }}
            colors={["white", "teal", "white", "indigo"]}
            my="2dvh"
            mx="5dvw">
            Nahuel | Rosas
          </StyledText>
          <Flex flexWrap="wrap" optimizedWidth justifyContent="center">
            <NextLink
              href="https://api.whatsapp.com/send?phone=543835433924&text=Hola%2C%20te%20hablo%20porque%20vi%20tu%20portafolio%2C%20%C2%BFpodemos%20concertar%20una%20reuni%C3%B3n%3F"
              fontSizeRaw={{
                base: "2.5dvh",
                md: "3dvh",
              }}
              fontWeight="500"
              color="white"
              mx="3dvh"
              mt="2dvh"
              iconType="whatsappFill"
              p="0">
              (+54) 9 3835 433924
            </NextLink>
            <NextLink
              href="mailto:rosasnahuel.dev@gmail.com"
              fontSizeRaw={{
                base: "2.5dvh",
                md: "3dvh",
              }}
              fontWeight="500"
              color="white"
              mx="3dvh"
              mt="2dvh"
              iconType="mailFill"
              p="0">
              rosasnahuel.dev@gmail.com
            </NextLink>
            <NextLink
              href="https://github.com/nahuelrosas/"
              fontSizeRaw={{
                base: "2.5dvh",
                md: "3dvh",
              }}
              fontWeight="500"
              color="white"
              mx="3dvh"
              iconType="githubFill"
              mt="2dvh"
              p="0">
              nahuelRosas
            </NextLink>
            <NextLink
              href="https://www.linkedin.com/in/nahuelrosas/"
              iconType="linkedinFill"
              fontSizeRaw={{
                base: "2.5dvh",
                md: "3dvh",
              }}
              fontWeight="500"
              color="white"
              mx="3dvh"
              mt="2dvh"
              p="0">
              nahuelrosas
            </NextLink>
            <NextLink
              href="https://drive.google.com/uc?id=1VYH9em_yWQia7aklgPHS9YI-sGP6wCTE&export=download"
              iconType="download2Fill"
              height="fitContent"
              fontSizeRaw={{
                base: "2.5dvh",
                md: "3dvh",
              }}
              fontWeight="500"
              color="white"
              multiLanguageSupport={{
                en: "Download CV",
                es: "Descargar CV",
              }}
              mx="3dvh"
              mt="2dvh"
              p="0"
            />
          </Flex>
          <Flex gap="0.5dvw" my="2dvh">
            <Icon iconType="location" height="fitContent" />
            <StyledText
              height="fitContent"
              textAlign="center"
              elementName="CVLabel"
              fontWeights={["500"]}
              fontSizeRaw={{
                base: "2.5dvh",
                md: "3dvh",
              }}
              colors={["white", "teal", "white", "indigo"]}>
              Córdoba, CBA X5000 - Argentina
            </StyledText>
          </Flex>
        </Flex>
        <Flex
          widthRaw={{ base: "calc(100dvw - 12dvw)", md: "calc(100dvw - 6dvw)" }}
          colorSchemeProperty={{
            opacity: 0.8,
            props: {
              hover: false,
              active: false,
              focus: false,
            },
            baseColorRaw: "black",
          }}
          borderRadius="2.5dvh"
          justifyContent="center"
          mx={{
            base: "6dvw",
            md: "3dvw",
          }}
          pb="3dvh"
          overflow="hidden"
          flexDirection="column">
          <StyledText
            optimizedWidth
            textAlign="left"
            fontWeights={["900"]}
            fontSizeRaw={{
              base: "4dvh",
              md: "5dvh",
            }}
            colors={["white", "teal", "white", "indigo"]}
            my="2dvh"
            mx="5dvw"
            multiLanguageSupport={{
              es: "Educación",
              en: "Education",
            }}
          />
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex optimizedWidth justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "4dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}>
                Oracle - Alura
              </StyledText>
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}>
                Online
              </StyledText>
            </Flex>
            <Flex optimizedWidth justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Backend developer, specialty in Java and Spring boot, Bootcamp",
                  es: "Desarrollador backend, especialidad en Java y Spring boot, Bootcamp",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "05/2023 - Present",
                  es: "05/2023 - Presente",
                }}
              />
            </Flex>
          </Flex>
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex optimizedWidth justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "4dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}>
                Soy Henry
              </StyledText>
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}>
                Online
              </StyledText>
            </Flex>
            <Flex optimizedWidth justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Full Stack Web Developer, Bootcamp",
                  es: "Desarrollador web Full Stack, Bootcamp",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport="05/2022 - 11/2022"
              />
            </Flex>
          </Flex>
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex optimizedWidth justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "4dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "National Technological University",
                  es: "Universidad Tecnológica Nacional",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}>
                Córdoba
              </StyledText>
            </Flex>
            <Flex optimizedWidth justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Electronics, Engineering",
                  es: "Electrónica, Ingeniería",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "01/2020 - Present",
                  es: "01/2020 - Presente",
                }}
              />
            </Flex>
          </Flex>
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex optimizedWidth justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "4dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "National University of Córdoba",
                  es: "Universidad Nacional de Córdoba",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}>
                Córdoba
              </StyledText>
            </Flex>
            <Flex optimizedWidth justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Economics, Bachelor's degree",
                  es: "Economía, Licenciatura",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "01/2020 - Present",
                  es: "01/2020 - Presente",
                }}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          widthRaw={{ base: "calc(100dvw - 12dvw)", md: "calc(100dvw - 6dvw)" }}
          colorSchemeProperty={{
            opacity: 0.8,
            props: {
              hover: false,
              active: false,
              focus: false,
            },
            baseColorRaw: "black",
          }}
          borderRadius="2.5dvh"
          justifyContent="center"
          mx={{
            base: "6dvw",
            md: "3dvw",
          }}
          pb="3dvh"
          overflow="hidden"
          flexDirection="column">
          <StyledText
            optimizedWidth
            textAlign="left"
            fontWeights={["900"]}
            fontSizeRaw={{
              base: "4dvh",
              md: "5dvh",
            }}
            colors={["white", "teal", "white", "indigo"]}
            my="2dvh"
            mx="5dvw"
            multiLanguageSupport={{
              en: "Professional Experience",
              es: "Experiencia Profesional",
            }}
          />
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            gap="2dvh"
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex
              width="100%"
              mb="2dvh"
              justifyContent="spaceBetween"
              flexDirection="row">
              <Flex flexDirection="column">
                <StyledText
                  optimizedWidth
                  textAlign="left"
                  fontWeights={["900"]}
                  fontSizeRaw={{
                    base: "2.5dvh",
                    md: "4dvh",
                  }}
                  colors={["white", "teal", "white", "indigo"]}
                  multiLanguageSupport={{
                    en: "Full Stack Web Developer Intern",
                    es: "Desarrollador web Full Stack, Interno",
                  }}
                />
                <StyledText
                  optimizedWidth
                  textAlign="left"
                  fontWeights={["500"]}
                  fontSizeRaw={{
                    base: "2.5dvh",
                    md: "3dvh",
                  }}
                  colors={["white", "teal", "white", "indigo"]}>
                  Uils
                </StyledText>
              </Flex>
              <StyledText
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}>
                01/2023 - 04/2023
              </StyledText>
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Developed and execute a dynamic CSS system that boosted component creation speed by 30% and slashed code weight by 40%, resulting in a 15% faster loading time during tests.",
                  es: "Desarrollé y ejecuté un sistema CSS dinámico que aumentó la velocidad de creación de componentes en un 30% y redujo el peso del código en un 40%, lo que resultó en un tiempo de carga un 15% más rápido durante las pruebas.",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Designed and implemented the complete system architecture, utilizing modern technologies such as Prisma, tRPC, and Next.js to ensure optimal performance and scalability. Developed a secure authentication system using JWT and implemented best practices for data privacy and security throughout the system. Additionally, conducted thorough testing and optimization to ensure seamless functionality and user experience.",
                  es: "Diseñé e implementé la arquitectura completa del sistema, utilizando tecnologías modernas como Prisma, tRPC y Next.js para garantizar un rendimiento y una escalabilidad óptimos. Desarrollé un sistema de autenticación seguro utilizando JWT e implementé las mejores prácticas para la privacidad y seguridad de los datos en todo el sistema. Además, realicé pruebas y optimizaciones exhaustivas para garantizar una funcionalidad y una experiencia de usuario perfectas.",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Conducted rigorous system testing to identify and resolve 15+ bugs prior to release; collaborated closely with the design team and stakeholders to ensure the system met the company's standards for performance and user experience.",
                  es: "Realicé pruebas rigurosas del sistema para identificar y resolver más de 15 errores antes del lanzamiento; colaboré estrechamente con el equipo de diseño y las partes interesadas para garantizar que el sistema cumpliera con los estándares de rendimiento y experiencia del usuario de la empresa.",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Maintained detailed and easily accessible documentation for the entire development team, ensuring that all team members had access to necessary information and resources. Actively participated in regular meetings to plan and prioritize future tasks, providing valuable input and insights based on project status and technical requirements. Additionally, worked closely with stakeholders and other teams to ensure seamless integration and alignment of project goals and objectives.",
                  es: "Mantuve documentación detallada y de fácil acceso para todo el equipo de desarrollo, asegurando que todos los miembros del equipo tuvieran acceso a la información y los recursos necesarios. Participé activamente en reuniones periódicas para planificar y priorizar las tareas futuras, aportando información valiosa y conocimientos basados en el estado del proyecto y los requisitos técnicos. Además, trabajé en estrecha colaboración con las partes interesadas y otros equipos para garantizar una integración perfecta y la alineación de los objetivos y objetivos del proyecto.",
                }}
              />
            </Flex>
          </Flex>

          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            gap="2dvh"
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex
              width="100%"
              mb="2dvh"
              justifyContent="spaceBetween"
              flexDirection="row">
              <Flex flexDirection="column">
                <StyledText
                  optimizedWidth
                  textAlign="left"
                  fontWeights={["900"]}
                  fontSizeRaw={{
                    base: "2.5dvh",
                    md: "4dvh",
                  }}
                  colors={["white", "teal", "white", "indigo"]}
                  multiLanguageSupport={{
                    en: "JavaScript Instructor",
                    es: "Instructor de JavaScript",
                  }}
                />
                <StyledText
                  optimizedWidth
                  textAlign="left"
                  fontWeights={["500"]}
                  fontSizeRaw={{
                    base: "2.5dvh",
                    md: "3dvh",
                  }}
                  colors={["white", "teal", "white", "indigo"]}>
                  Soy Henry
                </StyledText>
              </Flex>
              <StyledText
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}>
                09/2022 - 12/2022
              </StyledText>
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Created and delivered a personalized curriculum that effectively taught web development and JavaScript skills to students.",
                  es: "Creado y entregado un plan de estudios personalizado que enseñó de manera efectiva el desarrollo web y las habilidades de JavaScript a los estudiantes.",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Provided personalized feedback to students, helping them apply their knowledge and enhance their skills, resulting in improved course retention rates.",
                  es: "Proporcioné comentarios personalizados a los estudiantes, ayudándolos a aplicar sus conocimientos y mejorar sus habilidades, lo que resultó en una mejor tasa de retención del curso.",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Fostered active participation and teamwork to facilitate a collaborative learning environment, resulting in increased collaboration and teamwork among students.",
                  es: "Fomenté la participación activa y el trabajo en equipo para facilitar un entorno de aprendizaje colaborativo, lo que resultó en una mayor colaboración y trabajo en equipo entre los estudiantes.",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Ensured instruction aligned with industry standards and best practices to provide current and relevant knowledge, resulting in an average course rating of 90% by students.",
                  es: "Aseguró que la instrucción se alineara con los estándares de la industria y las mejores prácticas para proporcionar conocimientos actuales y relevantes, lo que resultó en una calificación promedio del curso del 90% por parte de los estudiantes.",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Leveraged my expertise in JavaScript and web development to provide a high-quality learning experience, preparing students for success in their careers. This approach resulted in a 95% success rate among students seeking web development and JavaScript-related employment.",
                  es: "Aproveché mi experiencia en JavaScript y desarrollo web para proporcionar una experiencia de aprendizaje de alta calidad, preparando a los estudiantes para el éxito en sus carreras. Este enfoque dio como resultado una tasa de éxito del 95% entre los estudiantes que buscan empleo relacionado con el desarrollo web y JavaScript.",
                }}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          widthRaw={{ base: "calc(100dvw - 12dvw)", md: "calc(100dvw - 6dvw)" }}
          colorSchemeProperty={{
            opacity: 0.8,
            props: {
              hover: false,
              active: false,
              focus: false,
            },
            baseColorRaw: "black",
          }}
          borderRadius="2.5dvh"
          justifyContent="center"
          mx={{
            base: "6dvw",
            md: "3dvw",
          }}
          pb="3dvh"
          overflow="hidden"
          flexDirection="column">
          <StyledText
            optimizedWidth
            textAlign="left"
            fontWeights={["900"]}
            fontSizeRaw={{
              base: "4dvh",
              md: "5dvh",
            }}
            colors={["white", "teal", "white", "indigo"]}
            my="2dvh"
            mx="5dvw"
            multiLanguageSupport={{
              en: "Personal Project",
              es: "Proyecto Personal",
            }}
          />
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            gap="2dvh"
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex width="100%" mb="2dvh" justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "4dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport="Robust Ui"
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "04/2023 - Present",
                  es: "04/2023 - Presente",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Robust is an innovative project that offers an efficient and flexible solution for injecting CSS as props into React components. Developed in TypeScript, this project stems from a deep curiosity to understand the inner workings of a styling processor in the React environment. Drawing inspiration from the best practices of Chakra UI and Styled Components, Robust aims to provide a robust and standalone alternative.",
                  es: "Robust es un proyecto innovador que ofrece una solución eficiente y flexible para inyectar CSS como props en los componentes React. Desarrollado en TypeScript, este proyecto surge de una profunda curiosidad por comprender el funcionamiento interno de un procesador de estilos en el entorno React. Inspirándose en las mejores prácticas de Chakra UI y Styled Components, Robust tiene como objetivo proporcionar una alternativa sólida e independiente.",
                }}
              />
            </Flex>
          </Flex>
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            gap="2dvh"
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex width="100%" mb="2dvh" justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "4dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport="PyTicketMaster"
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "06/2023 - Present",
                  es: "06/2023 - Presente",
                }}
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "PyTicketMaster is a closed-source application crafted with Python, Selenium, and Chrome. It serves as a robust tool for accessing websites that employ virtual queue systems like Queue-it. This exceptional application streamlines the process of securing a spot in online queues, making it a valuable asset for users aiming to increase their chances of obtaining sought-after positions.",
                  es: "PyTicketMaster es una aplicación de código cerrado creada con Python, Selenium y Chrome. Sirve como una herramienta robusta para acceder a sitios web que emplean sistemas de cola virtual como Queue-it. Esta aplicación excepcional agiliza el proceso de asegurar un lugar en las colas en línea, lo que la convierte en un activo valioso para los usuarios que buscan aumentar sus posibilidades de obtener posiciones buscadas.",
                }}
              />
            </Flex>
          </Flex>
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            gap="2dvh"
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex width="100%" mb="2dvh" justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "4dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport="Skyquick"
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport="01/2023 - 02/2023"
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "The primary motivation behind the creation of SkyQuick was to explore the possibilities of modern web development while addressing the fundamental need for quick and effective communication. This experimental project aims to simplify the messaging experience without the clutter of unnecessary features, making it an ideal choice for users who value simplicity and efficiency in their messaging apps.",
                  es: "La motivación principal detrás de la creación de SkyQuick fue explorar las posibilidades del desarrollo web moderno mientras se aborda la necesidad fundamental de una comunicación rápida y efectiva. Este proyecto experimental tiene como objetivo simplificar la experiencia de mensajería sin el desorden de funciones innecesarias, por lo que es una opción ideal para los usuarios que valoran la simplicidad y la eficiencia en sus aplicaciones de mensajería.",
                }}
              />
            </Flex>
          </Flex>
          <Flex
            my="2dvh"
            mx="2dvw"
            p="4dvh"
            borderRadius="2.5dvh"
            flexDirection="column"
            optimizedWidth
            gap="2dvh"
            borderRaw="1px solid white"
            keyframesRaw={{
              scaleUp: {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1.025)",
                },
              },
              scaleDown: {
                "0%": {
                  transform: "scale(1.025)",
                },
                "50%": {
                  transform: "scale(1.025)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
            hover={{
              animationRaw: "scaleUp 0.1s ease-in-out forwards",
            }}
            animationRaw="scaleDown 0.1s ease-in-out forwards">
            <Flex width="100%" mb="2dvh" justifyContent="spaceBetween">
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["900"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "4dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport="Kalo"
              />
              <StyledText
                optimizedWidth
                textAlign="right"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport="11/2022 - 01/2023"
              />
            </Flex>
            <Flex optimizedWidth gap="2dvw">
              <Icon
                iconType="starFill"
                sizeRaw={{
                  base: "2dvh",
                  md: "3dvh",
                }}
              />
              <StyledText
                optimizedWidth
                textAlign="left"
                fontWeights={["500"]}
                fontSizeRaw={{
                  base: "2.5dvh",
                  md: "3dvh",
                }}
                colors={["white", "teal", "white", "indigo"]}
                multiLanguageSupport={{
                  en: "Kalo is a creative and dynamic online footwear emporium tailored to meet all your shoe-shopping desires. This fictional establishment is equipped with an intuitive admin panel, an extensive showcase of products, sophisticated filtering options, image storage capabilities, a seamless shopping cart, integrated payment processing, and even a wishlist feature. Crafted with TypeScript, ReactJS, Chakra UI, Firebase, and Cloudinary, Kalo delivers a distinctive and captivating shopping experience for avid shoe enthusiasts.",
                  es: "Kalo es un emporio de calzado en línea creativo y dinámico diseñado para satisfacer todos sus deseos de compras de zapatos. Este establecimiento ficticio está equipado con un panel de administración intuitivo, una amplia muestra de productos, sofisticadas opciones de filtrado, capacidades de almacenamiento de imágenes, un carrito de compras perfecto, procesamiento de pagos integrado e incluso una función de lista de deseos. Creado con TypeScript, ReactJS, Chakra UI, Firebase y Cloudinary, Kalo ofrece una experiencia de compra distintiva y cautivadora para los entusiastas de los zapatos.",
                }}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
