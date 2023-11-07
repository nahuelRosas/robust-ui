import {
  Flex,
  Icon,
  StyledText,
  Image,
  Block,
  NextLink,
  StyledTextProps,
} from "@robust-ui/nextjs-components";

export default function BreakingRobust() {
  const commonTextStyle: StyledTextProps = {
    optimizedWidth: true,
    alignSelf: "center",
    py: "0",
    mb: "2vh",
    mt: "2vh",
    px: {
      base: "6vw",
      md: "3vw",
    },
    fontSizeRaw: {
      base: "2.5vh",
      md: "3vh",
    },
    textAlign: {
      base: "left",
      md: "justify",
    },
    textShadow: {
      x: "0.3vh",
      y: "-0.2vh",
      blur: "0.2vh",
      color: "black",
    },
    fontWeights: ["400", "900", "400", "900"],
    textColors: ["white", "mulberry", "white", "indigo"],
  };
  const titleTextStyle: StyledTextProps = {
    optimizedWidth: true,
    alignSelf: "center",
    py: "0",
    mb: "2vh",
    mt: "2vh",
    px: {
      base: "6vw",
      md: "3vw",
    },
    fontSizeRaw: {
      base: "3.5vh",
      md: "4vh",
    },
    textAlign: {
      base: "left",
      md: "justify",
    },
    textShadow: {
      x: "0.3vh",
      y: "-0.2vh",
      blur: "0.2vh",
      color: "black",
    },
    fontWeights: ["900"],
    textColors: ["white", "mulberry", "white", "indigo"],
  };
  const secondaryTitleTextStyle: StyledTextProps = {
    optimizedWidth: true,
    alignSelf: "center",
    py: "0",
    mb: "2vh",
    mt: "2vh",
    px: {
      base: "6vw",
      md: "3vw",
    },
    fontSizeRaw: {
      base: "2.5vh",
      md: "3vh",
    },
    textAlign: {
      base: "left",
      md: "justify",
    },
    textShadow: {
      x: "0.3vh",
      y: "-0.2vh",
      blur: "0.2vh",
      color: "black",
    },
    fontWeights: ["900"],
    textColors: ["mulberry", "white", "indigo"],
  };
  return (
    <Block pt="10vh" tabIndex={-1} id={"breaking-robust"}>
      <Flex
        justifyContent="center"
        backgroundRaw="rgba(0,0,0,0.6)"
        borderRadius="16px"
        py="1rem"
        widthRaw={{ base: "calc(100vw - 2rem)", md: "calc(100vw - 4rem)" }}
        mx={{
          base: "1rem",
          md: "2rem",
        }}
        overflow="hidden"
        flexDirection="column">
        <NextLink
          href="/articles"
          px={{
            base: "6vw",
            md: "3vw",
          }}
          pt="3vh"
          cursor="pointer"
          alignSelf="flexStart">
          <StyledText
            p="0"
            optimizedWidth
            alignSelf="center"
            fontSizeRaw={{
              base: "2.5vh",
              md: "3vh",
            }}
            textAlign={{
              base: "left",
              md: "left",
            }}
            textShadow={{
              x: "0.3vh",
              y: "-0.2vh",
              blur: "0.2vh",
              color: "black",
            }}
            textColors={["white", "mulberry"]}
            fontWeights={["500", "900"]}
            multiLanguageSupport={{
              en: "Articles",
              es: "Artículos",
            }}
          />
        </NextLink>
        <StyledText
          mt="3vh"
          p="0"
          optimizedWidth
          alignSelf="center"
          fontSizeRaw={{
            base: "4vh",
            md: "6vh",
          }}
          textAlign={{
            base: "left",
            md: "left",
          }}
          textShadow={{
            x: "0.3vh",
            y: "-0.2vh",
            blur: "0.2vh",
            color: "black",
          }}
          textColors={["white", "mulberry", "white", "indigo"]}
          fontWeights={["900"]}
          px={{
            base: "6vw",
            md: "3vw",
          }}
          multiLanguageSupport={{
            en: "Breaking down Robust: | How to create your own React component library inspired by Styled Components, Tailwind, and Chakra UI | (Advanced TypeScript - Spanish)",
            es: "Desglosando Robust: | Cómo crear tu propia biblioteca de componentes de React inspirada en Styled Components, Tailwind y Chakra UI | (TypeScript avanzado - Español)",
          }}
        />
        <Image
          isSlider
          alt="Eacces error"
          height="50vh"
          borderRadius="2.5vh"
          minW={{
            base: "90%",
            md: "50%",
          }}
          mt="6vh"
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          p="0"
          src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169733/portfolio/Articles/Breaking%20down%20Robust:%20How%20to%20create%20your%20own%20React%20component%20library%20inspired%20by%20Styled%20Components%2C%20Tailwind%2C%20and%20Chakra%20UI%20%28Advanced%20TypeScript%29/1685386733005_l48rgz.png"
        />

        <StyledText
          {...titleTextStyle}
          multiLanguageSupport={{
            es: "Capítulo 1: | La Importancia de los Hashes y su Utilidad en la Identificación de Componentes en el DOM |",
            en: "Chapter 1: | The Importance of Hashes and Their Usefulness in Identifying Components in the DOM |",
          }}
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "¡Bienvenidos al fascinante mundo de la creación de bibliotecas de componentes de React! En esta serie, nos sumergiremos en el desarrollo de Robust, una emocionante biblioteca en proceso que busca combinar lo mejor de herramientas populares como Styled Components, Tailwind y Chakra UI. En cada capítulo, exploraremos conceptos clave y enfoques para ayudarte a construir tu propia biblioteca personalizada de componentes en React. En este primer capítulo, nos centraremos en la importancia de los hashes y cómo pueden ser útiles para identificar de manera única los componentes en el DOM.",
            en: "Welcome to the fascinating world of React component library creation! In this series, we will dive into the development of Robust, an exciting work-in-progress library that seeks to combine the best of popular tools like Styled Components, Tailwind, and Chakra UI. In each chapter, we will explore key concepts and approaches to help you build your own custom React component library. In this first chapter, we will focus on the importance of hashes and how they can be useful in uniquely identifying components in the DOM.",
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "1.1 | La necesidad de identificar componentes en el DOM: |",
            en: "1.1 | The need to identify components in the DOM: |",
          }}
        />

        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Al desarrollar bibliotecas de componentes en React, es crucial asegurarse de que cada componente se pueda identificar de forma confiable en el DOM. Esto es especialmente importante cuando se trata de componentes reutilizables que pueden aparecer en diferentes partes de la aplicación. Sin una identificación adecuada, podríamos enfrentarnos a problemas de colisión de nombres y comportamientos inesperados.",
            en: "When developing React component libraries, it is crucial to ensure that each component can be reliably identified in the DOM. This is especially important when it comes to reusable components that may appear in different parts of the application. Without proper identification, we could face naming collision issues and unexpected behaviors.",
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "1.2 | ¿Qué son los hashes y cómo nos ayudan?|",
            en: "1.2 | What are hashes and how do they help us?|",
          }}
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Un hash es una cadena de caracteres única generada a partir de un texto o datos específicos utilizando un algoritmo criptográfico. En el contexto de las bibliotecas de componentes, los hashes nos permiten generar nombres dinámicos que aseguran la identificación única y diferenciación de cada componente en el DOM. Imaginemos que tenemos múltiples instancias del mismo componente en nuestra aplicación. Si utilizáramos nombres estáticos para los componentes, podríamos enfrentarnos a problemas de colisión de nombres, lo que resultaría en comportamientos inesperados y dificultades para depurar.",
            en: "A hash is a unique string of characters generated from a specific text or data using a cryptographic algorithm. In the context of component libraries, hashes allow us to generate dynamic names that ensure the unique identification and differentiation of each component in the DOM. Let's imagine that we have multiple instances of the same component in our application. If we were to use static names for the components, we could face naming collision issues, resulting in unexpected behaviors and debugging difficulties.",
          }}
        />

        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "1.3 | La función generateHash en Robust:|",
            en: "1.3 | The generateHash function in Robust:|",
          }}
        />

        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "En la biblioteca Robust, la función generateHash desempeña un papel crucial en la generación de hashes únicos para identificar los componentes. Esta función, implementada en TypeScript, acepta dos parámetros: str, que representa la cadena de texto de la cual queremos generar el hash, y algorithm, que es el algoritmo de hash que deseamos utilizar. Por defecto, se utiliza el algoritmo |\"sha512\"| si no se proporciona otro. Dentro de la función generateHash, se verifica la validez del algoritmo proporcionado, asegurándose de que esté incluido en la lista de algoritmos de hash disponibles en la biblioteca |crypto|. En caso de que se proporcione un algoritmo inválido, se lanza un error indicando la invalidez y se muestran los algoritmos válidos disponibles como alternativas. Luego, se crea un objeto hash utilizando el algoritmo especificado mediante |crypto.createHash(algorithm)|. A continuación, se actualiza el hash con la cadena de texto proporcionada mediante |update(str)|. Por último, se obtiene el hash resultante en forma de cadena hexadecimal utilizando |digest('hex')|.",
            en: "In the Robust library, the generateHash function plays a crucial role in generating unique hashes to identify components. This function, implemented in TypeScript, accepts two parameters: str, which represents the text string from which we want to generate the hash, and algorithm, which is the hash algorithm we wish to use. By default, the |\"sha512\"| algorithm is used if none other is provided. Within the generateHash function, the validity of the provided algorithm is verified, ensuring that it is included in the list of available hash algorithms in the |crypto| library. In case an invalid algorithm is provided, an error is thrown indicating the invalidity and the available valid algorithms are displayed as alternatives. Then, a hash object is created using the specified algorithm using |crypto.createHash(algorithm)|. Next, the hash is updated with the provided text string using |update(str)|. Finally, the resulting hash is obtained in hexadecimal string form using |digest('hex')|.",
          }}
        />
        <Image
          isSlider
          alt="Eacces error"
          height="50vh"
          borderRadius="2.5vh"
          minW={{
            base: "90%",
            md: "50%",
          }}
          mt="6vh"
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          p="0"
          src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169733/portfolio/Articles/Breaking%20down%20Robust:%20How%20to%20create%20your%20own%20React%20component%20library%20inspired%20by%20Styled%20Components%2C%20Tailwind%2C%20and%20Chakra%20UI%20%28Advanced%20TypeScript%29/1685385868929_yvkze4.png"
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "1.4 | La importancia de los nombres dinámicos de componentes:|",
            en: "1.4 | The importance of dynamic component names:|",
          }}
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Al utilizar los hashes generados por generateHash como nombres de los componentes en Robust, garantizamos que cada instancia tenga un identificador único. Esto nos brinda la tranquilidad de que los componentes se renderizarán correctamente y se comportarán de manera predecible en el DOM, sin importar la cantidad de instancias que tengamos. Los nombres dinámicos de componentes también facilitan la manipulación y gestión de los estilos y propiedades de cada instancia de componente, ya que cada uno tiene su propia identidad única en el DOM.",
            en: "By using the hashes generated by generateHash as component names in Robust, we ensure that each instance has a unique identifier. This gives us the peace of mind that components will render correctly and behave predictably in the DOM, regardless of the number of instances we have. Dynamic component names also make it easier to manipulate and manage the styles and properties of each component instance, as each has its own unique identity in the DOM.",
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "1.5 | Ventajas de los hashes en la identificación de componentes:|",
            en: "1.5 | Advantages of hashes in component identification:|",
          }}
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Un hash es una cadena de caracteres única generada a partir de un texto o datos específicos utilizando un algoritmo criptográfico. En el contexto de las bibliotecas de componentes, los hashes nos permiten generar nombres dinámicos que aseguran la identificación única y diferenciación de cada componente en el DOM. Imaginemos que tenemos múltiples instancias del mismo componente en nuestra aplicación. Si utilizáramos nombres estáticos para los componentes, podríamos enfrentarnos a problemas de colisión de nombres, lo que resultaría en comportamientos inesperados y dificultades para depurar.",
            en: "A hash is a unique string of characters generated from a specific text or data using a cryptographic algorithm. In the context of component libraries, hashes allow us to generate dynamic names that ensure the unique identification and differentiation of each component in the DOM. Let's imagine that we have multiple instances of the same component in our application. If we were to use static names for the components, we could face naming collision issues, resulting in unexpected behaviors and debugging difficulties.",
          }}
        />

        <Flex my="0.5vh" mx="6vw" gap="1vh" optimizedWidth>
          <Icon
            color="white"
            icon="starFill"
            sizeRaw={{
              base: "2vh",
              md: "3vh",
            }}
          />
          <StyledText
            p="0"
            optimizedWidth
            alignSelf="center"
            fontSizeRaw={{
              base: "2.5vh",
              md: "3vh",
            }}
            textAlign={{
              base: "left",
              md: "left",
            }}
            textShadow={{
              x: "0.3vh",
              y: "-0.2vh",
              blur: "0.2vh",
              color: "black",
            }}
            fontWeights={["400", "900", "400", "900"]}
            px={{
              base: "6vw",
              md: "3vw",
            }}
            textColors={["white", "mulberry"]}
            multiLanguageSupport={{
              es: "Garantizan la identificación única y diferenciación de componentes en el DOM.",
              en: "They ensure the unique identification and differentiation of components in the DOM.",
            }}
          />
        </Flex>
        <Flex my="0.5vh" mx="6vw" gap="1vh" optimizedWidth>
          <Icon
            icon="starFill"
            color="white"
            sizeRaw={{
              base: "2vh",
              md: "3vh",
            }}
          />
          <StyledText
            p="0"
            optimizedWidth
            alignSelf="center"
            fontSizeRaw={{
              base: "2.5vh",
              md: "3vh",
            }}
            textAlign={{
              base: "left",
              md: "left",
            }}
            textShadow={{
              x: "0.3vh",
              y: "-0.2vh",
              blur: "0.2vh",
              color: "black",
            }}
            fontWeights={["400", "900", "400", "900"]}
            px={{
              base: "6vw",
              md: "3vw",
            }}
            textColors={["white", "mulberry"]}
            multiLanguageSupport={{
              es: "Evitan problemas de colisión de nombres al tener nombres dinámicos generados por hashes.",
              en: "They avoid naming collision issues by having dynamic names generated by hashes.",
            }}
          />
        </Flex>
        <Flex my="0.5vh" mx="6vw" gap="1vh" optimizedWidth>
          <Icon
            icon="starFill"
            color="white"
            sizeRaw={{
              base: "2vh",
              md: "3vh",
            }}
          />
          <StyledText
            p="0"
            optimizedWidth
            alignSelf="center"
            fontSizeRaw={{
              base: "2.5vh",
              md: "3vh",
            }}
            textAlign={{
              base: "left",
              md: "left",
            }}
            textShadow={{
              x: "0.3vh",
              y: "-0.2vh",
              blur: "0.2vh",
              color: "black",
            }}
            fontWeights={["400", "900", "400", "900"]}
            px={{
              base: "6vw",
              md: "3vw",
            }}
            textColors={["white", "mulberry"]}
            multiLanguageSupport={{
              es: "Proporcionan un enfoque eficiente y seguro para identificar componentes en una biblioteca de componentes de React.",
              en: "They provide an efficient and secure approach to identifying components in a React component library.",
            }}
          />
        </Flex>
        <Image
          isSlider
          alt="Eacces error"
          height="50vh"
          borderRadius="2.5vh"
          minW={{
            base: "90%",
            md: "50%",
          }}
          mt="6vh"
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          p="0"
          src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169733/portfolio/Articles/Breaking%20down%20Robust:%20How%20to%20create%20your%20own%20React%20component%20library%20inspired%20by%20Styled%20Components%2C%20Tailwind%2C%20and%20Chakra%20UI%20%28Advanced%20TypeScript%29/1685386484533_pfjweq.png"
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Conclusión: En este primer capítulo, hemos explorado la importancia de los hashes en la identificación de componentes en el DOM. Los hashes ofrecen una solución eficiente y segura para asegurar la identificación única y diferenciación de componentes en bibliotecas de componentes de React como Robust. En el próximo capítulo, profundizaremos en más conceptos y enfoques clave utilizados en la biblioteca Robust. Te invitamos a seguir esta serie para aprender cómo construir tu propia biblioteca de componentes personalizada, aprovechando lo mejor de Styled Components, Tailwind y Chakra UI. ¡Hasta la próxima entrega!",
            en: "Conclusion: In this first chapter, we have explored the importance of hashes in identifying components in the DOM. Hashes offer an efficient and secure solution to ensure the unique identification and differentiation of components in React component libraries like Robust. In the next chapter, we will dive deeper into more key concepts and approaches used in the Robust library. We invite you to follow this series to learn how to build your own custom component library, leveraging the best of Styled Components, Tailwind, and Chakra UI. Until next time!",
          }}
        />
      </Flex>
    </Block>
  );
}
