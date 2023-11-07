import {
  Flex,
  StyledText,
  Image,
  Block,
  NextLink,
  CodeText,
  StyledTextProps,
} from "@robust-ui/nextjs-components";

export default function EaccesError() {
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
    <Block pt="10vh" tabIndex={-1} id={"eacces-error"}>
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
            en: "Conquering the EACCES Error: | Installing Libraries on Linux Made Easy",
            es: "Venciendo el Error EACCES: | Instalación de Bibliotecas en Linux de Forma Sencilla",
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
          src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684810747172_bguk3p.webp"
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            en: `When you dive into the captivating realm of software development on Linux, you'll likely encounter various technical challenges. One of the most common obstacles you may face is the global installation of libraries, which can result in the frustrating "insufficient permissions" error message. This error occurs when you lack the necessary permissions to install or modify files in specific locations within the operating system.
The reason behind this error lies in Linux's robust and precise security structure. To prevent unauthorized alterations to the system, permissions are meticulously assigned to files and directories. However, this can complicate the process of globally installing libraries, as it necessitates special privileges.
But fear not! Fortunately, there are effective solutions to overcome the issue of insufficient permissions when installing libraries on Linux. Below, I'll provide you with detailed options to help you resolve this inconvenience:`,
            es: `Cuando te adentras en el cautivador mundo del desarrollo de software en Linux, es probable que te encuentres con diversos desafíos técnicos. Uno de los obstáculos más comunes que puedes enfrentar es la instalación global de bibliotecas, lo que puede llevar al frustrante mensaje de error "permisos insuficientes". Este error ocurre cuando no cuentas con los permisos necesarios para instalar o modificar archivos en ubicaciones específicas dentro del sistema operativo.
La razón detrás de este error se encuentra en la sólida y precisa estructura de seguridad de Linux. Para evitar alteraciones no autorizadas en el sistema, se asignan cuidadosamente permisos a archivos y directorios. Sin embargo, esto puede complicar el proceso de instalación global de bibliotecas, ya que requiere privilegios especiales.
¡Pero no te preocupes! Afortunadamente, existen soluciones efectivas para superar el problema de los permisos insuficientes al instalar bibliotecas en Linux. A continuación, te proporcionaré opciones detalladas para ayudarte a resolver esta molestia:`,
          }}
        />

        <StyledText
          {...titleTextStyle}
          multiLanguageSupport={{
            es: "Utiliza un gestor de paquetes con privilegios de administrador",
            en: "Utilize a package manager with administrator privileges",
          }}
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `Una manera sencilla de resolver el problema de los permisos insuficientes es utilizar un gestor de paquetes con privilegios de administrador. En Linux o macOS, puedes ejecutar el comando "sudo" antes del comando de instalación para otorgar los permisos necesarios. A continuación, te mostramos el proceso paso a paso:`,
            en: `One straightforward method to address the insufficient permissions issue is to utilize a package manager with administrator privileges. In Linux or macOS, you can execute the "sudo" command before the installation command to grant the necessary permissions. Below, we provide a step-by-step guide:`,
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "1.1. | Abre una terminal en tu sistema operativo Linux o macOS.",
            en: "1.1. | Open a terminal on your Linux or macOS operating system.",
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "1.2. | Ejecuta el siguiente comando para instalar la biblioteca utilizando NPM con privilegios de administrador:",
            en: "1.2. | Run the following command to install the library using NPM with administrator privileges:",
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh"
          multiLanguageSupport={{
            es: `sudo npm install -g <nombre-de-la-librería>`,
            en: `sudo npm install -g <library-name>`,
          }}
        />

        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "1.3. | Se te solicitará ingresar la contraseña de administrador. Una vez ingresada, se otorgarán los permisos necesarios para completar la instalación sin problemas.",
            en: "1.3. | You will be prompted to enter the administrator password. Once entered, the necessary permissions will be granted to complete the installation smoothly.",
          }}
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Es importante tener en cuenta que el uso de privilegios de administrador debe realizarse con precaución y solo cuando sea necesario, ya que puede presentar riesgos de seguridad.",
            en: "It is important to note that the use of administrator privileges should be exercised with caution and only when necessary, as it can pose security risks.",
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
          src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684812922488_nx5g16.webp"
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Cambia la ubicación de instalación global",
            en: "Change the global installation location",
          }}
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `Si deseas evitar depender de los permisos de administrador cada vez que instales una librería globalmente, existe una solución práctica para ti. Puedes configurar una ubicación de instalación global en tu propio directorio de usuario. A continuación, te mostraré los pasos detallados para cambiar esta ubicación utilizando NPM.`,
            en: `If you wish to avoid relying on administrator permissions every time you install a library globally, there is a practical solution available. You can set up a global installation location within your own user directory. Below, I will provide you with detailed steps on how to change this location using NPM.`,
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: `2.1. | Abre una terminal en tu sistema operativo Linux.`,
            en: `2.1. | Open a terminal on your Linux operating system.`,
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "2.2. | Ejecuta el siguiente comando para crear el directorio de la ubicación de instalación. Con esto, habrás creado un directorio específico para tus instalaciones.",
            en: "2.2. | Run the following command to create the installation location directory. With this, you will have established a dedicated directory for your installations.",
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh">
          mkdir ~/npm-global
        </CodeText>
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "2.3. | A continuación, establece la ubicación de instalación global en tu directorio de usuario. De esta manera, tendrás el control total sobre tus instalaciones.",
            en: "2.3. | Next, configure the global installation location within your user directory. This will grant you full control over your installations.",
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh">
          npm config set prefix ~/npm-global
        </CodeText>
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Ahora, para asegurarnos de que todo funcione correctamente, debemos realizar algunos ajustes adicionales:",
            en: "Now, to ensure that everything functions correctly, we need to make some additional adjustments:",
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "2.4.1. | Si estás utilizando Bash como tu shell, ejecuta este comando. Esta instrucción añadirá una línea al final del archivo ~/.bashrc, lo cual es necesario para la configuración adecuada.",
            en: "2.4.1. | If you are using Bash as your shell, run this command. This instruction will append a line to the end of the ~/.bashrc file, which is necessary for proper configuration.",
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh">
          {`echo 'export PATH=~/npm-global/bin:$PATH' >> ~/.bashrc`}
        </CodeText>
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "2.4.2. | Si estás utilizando Zsh como tu shell, ejecuta este comando. De manera similar, esta instrucción agregará la línea necesaria al final del archivo ~/.zshrc.",
            en: "2.4.2. | If you are using Zsh as your shell, run this command. Likewise, this instruction will add the necessary line to the end of the ~/.zshrc file.",
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh">
          {`echo 'export PATH=~/npm-global/bin:$PATH' >> ~/.zshrc`}
        </CodeText>
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `Una vez que hayas ejecutado el comando correspondiente, reinicia tu terminal o abre una nueva ventana de terminal para que los cambios surtan efecto.
Finalmente, una vez que hayas completado estos pasos, el directorio "~/npm-global/bin" se agregará a tu variable de entorno "PATH". Esto te permitirá ejecutar comandos o scripts ubicados en dicho directorio desde cualquier ubicación en tu sistema.`,
            en: `Once you have run the corresponding command, restart your terminal or open a new terminal window for the changes to take effect.
Finally, after you have completed these steps, the "~/npm-global/bin" directory will be added to your "PATH" environment variable. This will enable you to run commands or scripts located in that directory from any location on your system.`,
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
          src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169561/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684819556321_ric2xx.webp"
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `Una vez hayas realizado los cambios en la variable de entorno "PATH" siguiendo las instrucciones previas, es recomendable utilizar el comando npm doctor para verificar la correcta configuración. Simplemente ejecuta el comando npm doctor en tu terminal y examina los resultados para confirmar que todo esté configurado adecuadamente en tu entorno de desarrollo. Esta herramienta te proporcionará información útil para asegurarte de que los ajustes realizados sean correctos y estén funcionando como se espera.`,
            en: `After you have made the changes to the "PATH" environment variable following the previous instructions, it is advisable to use the npm doctor command to verify the correct configuration. Simply run the npm doctor command in your terminal and examine the results to confirm that everything is properly set up in your development environment. This tool will provide you with valuable information to ensure that the adjustments you have made are accurate and functioning as expected.`,
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
          src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684819760366_injzed.webp"
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: "Utiliza un administrador de versiones de Node.js ",
            en: "Use a Node.js version manager",
          }}
        />
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `Una alternativa eficiente para gestionar múltiples versiones de Node.js sin necesidad de privilegios de administrador es utilizar administradores de versiones como "nvm" o "n". Estas herramientas te permiten instalar y administrar diferentes versiones de Node.js en tu sistema. A continuación, te presento los pasos para utilizar "nvm":`,
            en: `An efficient alternative to managing multiple versions of Node.js without the need for administrator privileges is to use version managers like "nvm" or "n". These tools allow you to install and manage different versions of Node.js on your system. Here are the steps to use "nvm":`,
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: "3.1. | Abre una terminal en tu sistema operativo Linux o macOS.",
            en: "3.1. | Open a terminal on your Linux or macOS operating system.",
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: `3.2. | Para instalar o actualizar "nvm", puedes utilizar el siguiente comando con "curl":`,
            en: `3.2. | To install or update "nvm", you can use the following command with "curl":`,
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh">
          curl -o-
          https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
        </CodeText>
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `O puedes utilizar "wget":`,
            en: `Or you can use "wget":`,
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh">
          {`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`}
        </CodeText>
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `Este comando descargará un script e iniciará automáticamente el proceso de instalación.`,
            en: `This command will download a script and automatically start the installation process.`,
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
          src="https://res.cloudinary.com/dpd5v5wnr/image/upload/v1693169562/portfolio/Articles/Overcoming%20the%20EACCES%20error%20when%20installing%20libraries%20on%20Linux/1684813805753_sq5pry.webp"
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: `3.3. | Una vez finalizada la instalación, reinicia tu terminal o abre una nueva ventana de terminal para que los cambios surtan efecto.`,
            en: `3.3. | Once the installation is complete, restart your terminal or open a new terminal window for the changes to take effect.`,
          }}
        />
        <StyledText
          {...secondaryTitleTextStyle}
          multiLanguageSupport={{
            es: `3.4. | Ahora puedes utilizar "nvm" para instalar y gestionar las versiones de Node.js. Por ejemplo, para instalar la última versión estable de Node.js, ejecuta el siguiente comando:`,
            en: `3.4. | Now you can use "nvm" to install and manage Node.js versions. For example, to install the latest stable version of Node.js, run the following command:`,
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh">
          nvm install node
        </CodeText>
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `Y luego, para utilizar esa versión recién instalada, ejecuta:`,
            en: `And then, to use that newly installed version, run:`,
          }}
        />
        <CodeText
          mx={{
            base: "6vw",
            md: "3vw",
          }}
          my="1vh">
          nvm use node
        </CodeText>
        <StyledText
          {...commonTextStyle}
          multiLanguageSupport={{
            es: `Estos comandos instalarán la última versión de Node.js y configurarán tu sistema para que la utilice. 
Recuerda que "nvm" te brinda la flexibilidad de cambiar entre diferentes versiones de Node.js según tus necesidades de desarrollo. Puedes consultar la documentación oficial y explorar más características y opciones disponibles para aprovechar al máximo esta herramienta. 
Es importante tener en cuenta que la instalación global de librerías debe realizarse con precaución y solo cuando sea absolutamente necesario. En general, es recomendable utilizar librerías locales y gestionar las dependencias de nuestros proyectos a través de herramientas como "package.json" y "yarn.lock". Sin embargo, si nos vemos en la necesidad de instalar una librería globalmente, ahora existen herramientas que nos permiten superar los obstáculos de permisos insuficientes. 
Es relevante destacar que los errores de permisos son simplemente desafíos menores en nuestro proceso de desarrollo. A medida que adquirimos más experiencia y conocimientos, aprendemos a lidiar con ellos y encontrar soluciones rápidas y efectivas. La comunidad de desarrolladores está repleta de recursos y consejos valiosos que nos ayudarán a superar cualquier obstáculo que encontremos en nuestro camino. 
Así que, no te desanimes por los errores de permisos insuficientes al instalar librerías globalmente. Utiliza las soluciones que hemos compartido, investiga, aprende y mantén la pasión por el desarrollo de software. Pronto estarás creando proyectos increíbles sin preocuparte por estos pequeños obstáculos en tu camino hacia el éxito.`,
            en: `These commands will install the latest version of Node.js and configure your system to use it. 
Remember that "nvm" gives you the flexibility to switch between different versions of Node.js according to your development needs. You can consult the official documentation and explore more features and options available to make the most of this tool. 
It is important to note that global library installation should be done with caution and only when absolutely necessary. In general, it is recommended to use local libraries and manage the dependencies of our projects through tools such as "package.json" and "yarn.lock". However, if we find ourselves in the need to install a library globally, there are now tools that allow us to overcome the obstacles of insufficient permissions. 
It is relevant to note that permission errors are simply minor challenges in our development process. As we gain more experience and knowledge, we learn to deal with them and find quick and effective solutions. The developer community is full of valuable resources and tips that will help us overcome any obstacle we encounter on our way. 
So, don't be discouraged by insufficient permissions errors when installing libraries globally. Use the solutions we have shared, research, learn, and keep the passion for software development. Soon you will be creating amazing projects without worrying about these little obstacles in your path to success.`,
          }}
        />
      </Flex>
    </Block>
  );
}
