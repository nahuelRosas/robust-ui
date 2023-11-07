import { Project } from "@/components/project";

export default function index() {
  return (
    <Project
      id={"kalo"}
      title={{
        en: "Kalo: | Your Ultimate Online Sneaker Destination",
        es: "Kalo: | Tu Destino Definitivo de Zapatillas en Línea",
      }}
      description={{
        en: `Kalo is a creative and dynamic online footwear emporium tailored to meet all your shoe-shopping desires. This fictional establishment is equipped with an intuitive admin panel, an extensive showcase of products, sophisticated filtering options, image storage capabilities, a seamless shopping cart, integrated payment processing, and even a wishlist feature. Crafted with TypeScript, ReactJS, Chakra UI, Firebase, and Cloudinary, Kalo delivers a distinctive and captivating shopping experience for avid shoe enthusiasts.`,
        es: `Kalo es un imaginativo y dinámico establecimiento de calzado en línea diseñado para satisfacer todos tus deseos de compra de zapatos. Esta tienda ficticia está equipada con un panel de administración intuitivo, una amplia exhibición de productos, opciones de filtrado sofisticadas, capacidades de almacenamiento de imágenes, un carrito de compras sin interrupciones, procesamiento de pagos integrado e incluso una función de lista de deseos. Elaborado con TypeScript, ReactJS, Chakra UI, Firebase y Cloudinary, Kalo ofrece una experiencia de compra única y cautivadora para los entusiastas del calzado.`,
      }}
      keyFeatures={[
        {
          en: `Product Showcase: Kalo features a diverse collection of footwear products, thoughtfully presented for users to browse and select.`,
          es: `Vitrina de Productos: Kalo ofrece una amplia colección de productos de calzado, cuidadosamente presentados para que los usuarios los naveguen y elijan.`,
        },

        {
          en: `Advanced Filtering: Empower users to fine-tune their search with a wide range of filtering options, guaranteeing the discovery of the perfect pair of shoes.`,
          es: `Filtrado Avanzado: Permite a los usuarios ajustar su búsqueda con una amplia variedad de opciones de filtrado, garantizando el hallazgo del par de zapatos perfecto.`,
        },
        {
          en: `Image Storage: Our system seamlessly handles and stores product images, ensuring that high-quality visuals are readily accessible for each item.`,
          es: `Almacenamiento de Imágenes: Nuestro sistema gestiona y almacena las imágenes de productos de manera fluida, garantizando que las imágenes de alta calidad estén disponibles fácilmente para cada artículo.`,
        },
        {
          en: `Shopping Cart: Kalo's integrated shopping cart empowers users to easily select and manage their desired products before proceeding to checkout.`,
          es: `Carrito de Compras: El carrito de compras integrado de Kalo permite a los usuarios seleccionar y gestionar sus productos deseados antes de proceder al pago.`,
        },
        {
          en: `Seamless Payment: Through an integrated payment gateway, Kalo streamlines the purchase process, ensuring a secure and hassle-free transaction experience.`,
          es: `Pago Sin Problemas: Mediante una pasarela de pago integrada, Kalo simplifica el proceso de compra, garantizando una experiencia de transacción segura y sin complicaciones.`,
        },
        {
          en: `Wishlist: Enable users to effortlessly create and manage wishlists, simplifying the process of saving and tracking desired items for future reference.`,
          es: `Lista de Deseos: Permite a los usuarios crear y gestionar listas de deseos de manera sencilla, simplificando el proceso de guardar y hacer seguimiento de los artículos deseados para futuras referencias.`,
        },
      ]}
      resume={{
        en: `Kalo Footwear Store blends cutting-edge technologies with a user-centric design to provide an immersive and delightful online shopping experience for shoe enthusiasts. Offering an extensive product selection, advanced features, and a seamless payment process, Kalo aspires to set a new benchmark in the world of online footwear retail.`,
        es: `Kalo Footwear Store combina tecnologías de vanguardia con un diseño centrado en el usuario para ofrecer una experiencia de compra en línea inmersiva y placentera para los amantes del calzado. Con una amplia selección de productos, funciones avanzadas y un proceso de pago sin complicaciones, Kalo aspira a establecer un nuevo estándar en el mundo de la venta minorista de calzado en línea.`,
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
            en: "Redux",
            es: "Redux",
          },
          iconType: "brandRedux",
        },
        {
          text: {
            en: "Algolia",
            es: "Algolia",
          },
          iconType: "brandAlgolia",
        },
        {
          text: {
            en: "Vercel",
            es: "Vercel",
          },
          iconType: "brandVercel",
        },
      ]}
      url={{
        website: "https://kalo-arg.vercel.app/",
        github: "https://github.com/nahuelRosas/Kalo",
      }}
      images={[
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935733/Screenshot/1675935206665_gx68ax.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935731/Screenshot/1675935241450_gjkpem.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935730/Screenshot/1675935259575_onto22.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935729/Screenshot/1675935378836_z0njz0.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935729/Screenshot/1675935364578_f97oah.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935729/Screenshot/1675935285283_vklvrj.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935729/Screenshot/1675935344675_sgya7v.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935510010_iq8kn1.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935537471_oz0jcn.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935617888_wnddja.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935564614_wrekgk.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935644247_bjzqjx.webp",
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1675935728/Screenshot/1675935696736_ulouoy.webp",
      ]}
    />
  );
}
