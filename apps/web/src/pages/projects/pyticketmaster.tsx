import { Project } from "@/components/project";
import HeadNext from "@/components/headNext";

export default function index() {
  return (
    <>
      <HeadNext
        title={{
          en: "PyTicketMaster | Projects | Nahuel Rosas",
          es: "PyTicketMaster | Proyectos | Nahuel Rosas",
        }}
      />
      <Project
        id={"pyticketmaster"}
        title={{
          en: "PyTicketMaster: | Unleashing Opportunities with Python Scraping for Mass Events",
          es: "PyTicketMaster: | Desatando oportunidades con Python Scraping para eventos masivos",
        }}
        description={{
          en: `PyTicketMaster is a closed-source application crafted with Python, Selenium, and Chrome. It serves as a robust tool for accessing websites that employ virtual queue systems like Queue-it. This exceptional application streamlines the process of securing a spot in online queues, making it a valuable asset for users aiming to increase their chances of obtaining sought-after positions.`,
          es: `PyTicketMaster es una aplicación de código cerrado diseñada con Python, Selenium y Chrome. Sirve como una sólida herramienta para acceder a sitios web que utilizan sistemas de cola virtual como Queue-it. Esta excepcional aplicación simplifica el proceso de asegurar un lugar en colas en línea, convirtiéndose en un activo valioso para usuarios que buscan aumentar sus posibilidades de obtener posiciones muy demandadas.`,
        }}
        salesDistribution={{
          en: `PyTicketMaster is currently an evolving entrepreneurial venture, with its services primarily available through Twitter. Users can obtain access to this potent tool to enhance their online queuing experience.`,
          es: `En la actualidad, PyTicketMaster es una empresa emprendedora en desarrollo, y sus servicios se ofrecen principalmente a través de Twitter. Los usuarios pueden adquirir acceso a esta potente herramienta para mejorar su experiencia de espera en línea.`,
        }}
        keyFeatures={[
          {
            en: `Queue Access: PyTicketMaster examines the target website's queuing system and, when required, navigates through CAPTCHA challenges using image analysis, OCR, or audio analysis techniques.`,
            es: `Acceso a la Cola: PyTicketMaster examina el sistema de colas del sitio web de destino y, si es necesario, sortea los desafíos CAPTCHA mediante técnicas de análisis de imágenes, OCR o análisis de audio.`,
          },
          {
            en: `Automatic Browser Identification: The application effortlessly recognizes the browser identification code provided by the Queue-it backend, simplifying the process of joining queues for events.`,
            es: `Identificación Automática del Navegador: La aplicación reconoce sin esfuerzo el código de identificación del navegador proporcionado por Queue-it backend, simplificando el proceso de unirse a las colas para eventos.`,
          },
          {
            en: `Multi-Profile Queueing: PyTicketMaster repeats the queuing process across multiple profiles to secure a larger number of queue positions before the virtual queue opens, thereby increasing the user's chances of securing a spot.`,
            es: `Cola de Múltiples Perfiles: PyTicketMaster repite el proceso de cola en varios perfiles para asegurar un mayor número de posiciones en la cola antes de que se abra la cola virtual, aumentando así las posibilidades del usuario de asegurar un lugar.`,
          },
          {
            en: `Priority Queue Management: The system intelligently prioritizes and efficiently manages the captured queue positions, ensuring that users with the highest likelihood of faster access receive priority.`,
            es: `Gestión de Colas Prioritarias: El sistema prioriza de manera inteligente y administra eficientemente las posiciones capturadas en la cola, garantizando que los usuarios con mayor probabilidad de acceso más rápido reciban prioridad.`,
          },
        ]}
        technologies={[
          {
            text: {
              en: "Python",
              es: "Python",
            },
            iconType: "brandPython",
          },
          {
            text: {
              en: "Django",
              es: "Django",
            },
            iconType: "brandDjango",
          },
        ]}
        url={{
          website: "https://twitter.com/queue_express",
        }}
        images={[
          "https://res.cloudinary.com/dlcilp6vw/image/upload/v1692752323/Screenshot/Screenshot_from_2023-08-22_21-56-02_uuuttk.webp",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/v1692752593/Screenshot/Screenshot_from_2023-07-13_17-33-36_qzbkqa.webp",
          "https://res.cloudinary.com/dlcilp6vw/image/upload/v1692752323/Screenshot/Screenshot_from_2023-07-13_18-03-25_ejoknq.webp",
        ]}
      />
    </>
  );
}
