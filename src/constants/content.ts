export const CONTENT = {
  agency: {
    name: "Vex Studio",
    tagline: "Engineering Excellence",
    location: "Argentina · Operación Global",
    email: "studiovex06@gmail.com",
    phone: "+54 261 534 9682",
    whatsapp: "https://wa.me/2615349682",
    instagram: "https://instagram.com/vex.studio_",
    logo: "/imagenes/logo/logo.png",
  },

  nav: {
    links: [
      { name: "Servicios", href: "#servicios" },
      { name: "Proyectos", href: "#portafolio" },
      { name: "Equipo", href: "#equipo" },
      { name: "Contacto", href: "#contacto" },
    ],
    cta: "Iniciar Proyecto",
  },

  hero: {
    badge: "Partners Tecnológicos de Élite",
    title: {
      line1: "Construimos software",
      line2: "que genera resultados."
    },
    description: "Transformamos ideas complejas en productos digitales de alto rendimiento. Desarrollo fullstack, arquitectura escalable y automatización con IA para empresas que exigen excelencia.",
    ctas: {
      primary: "Agendar Consultoría Gratis",
      secondary: "Ver Proyectos"
    },
    stats: [
      { value: "40+", label: "Proyectos Entregados" },
      { value: "98%", label: "Clientes Satisfechos" },
      { value: "<24h", label: "Tiempo de Respuesta" },
    ],
  },

  services: {
    label: "01 — Servicios",
    title: "Soluciones que resuelven",
    titleHighlight: "problemas reales.",
    subtitle: "No vendemos código. Resolvemos problemas de negocio complejos con ingeniería de primer nivel.",
    items: [
      {
        id: "web",
        title: "Desarrollo Web",
        problem: "Tu sitio actual no convierte visitantes en clientes y carga lento.",
        solution: "Diseñamos y desarrollamos interfaces de alto rendimiento con React y Next.js, optimizadas para SEO y velocidad.",
        benefit: "+300% en velocidad de carga y aumento significativo en conversiones.",
        tags: ["React", "Next.js", "Performance"],
        icon: "layout",
      },
      {
        id: "systems",
        title: "Sistemas a Medida",
        problem: "Usas herramientas genéricas que no se adaptan a tu operación.",
        solution: "Construimos software personalizado que automatiza tus procesos y se integra con tu ecosistema actual.",
        benefit: "Reducción del 60% en tiempo operativo y eliminación de errores manuales.",
        tags: ["Node.js", "APIs", "Cloud"],
        icon: "code",
      },
      {
        id: "ecommerce",
        title: "E-commerce",
        problem: "Tu tienda online pierde ventas por una mala experiencia de compra.",
        solution: "Creamos tiendas rápidas y personalizadas que maximizan cada visita con UX optimizado para conversión.",
        benefit: "Incremento directo en el ticket promedio y la tasa de compra completada.",
        tags: ["Headless", "Payments", "UX"],
        icon: "shopping",
      },
      {
        id: "ai",
        title: "Automatización & IA",
        problem: "Tu equipo pierde horas en tareas repetitivas que no generan valor.",
        solution: "Integramos agentes de IA y workflows automatizados que liberan a tu equipo para enfocarse en lo estratégico.",
        benefit: "200% más productividad sin contratar personal adicional.",
        tags: ["OpenAI", "Agents", "Workflows"],
        icon: "zap",
      },
    ],
  },

  portfolio: {
    label: "02 — Proyectos",
    title: "Resultados que hablan",
    titleHighlight: "por sí solos.",
    subtitle: "Cada proyecto es un caso de éxito. Interfaces que convierten, sistemas que escalan.",
    projects: [
      {
        name: "Éclat Beauté",
        category: "Landing Inmersiva",
        description: "Plataforma web para centro de estética premium. Diseño inmersivo con animaciones sutiles y un sistema de reservas integrado que simplifica la experiencia del cliente.",
        result: "Aumento del 200% en reservas online durante el primer mes de lanzamiento.",
        image: "/imagenes/proyectos/eclatestetica.png",
        link: "https://eclatestetica.netlify.app/",
        metrics: { label: "Conversión", value: "+200%" },
      },
      {
        name: "Gentleman Barber",
        category: "Identidad + Web",
        description: "Rediseño completo de identidad digital para barbería de alto nivel. Landing page con galería interactiva, agenda de turnos y presencia de marca coherente.",
        result: "Incremento del 180% en engagement de redes sociales y nuevas reservas.",
        image: "/imagenes/proyectos/gentleman.png",
        link: "https://gentleman-barbershop.netlify.app/",
        metrics: { label: "Engagement", value: "+180%" },
      },
      {
        name: "Nature Medical",
        category: "Landing Médica",
        description: "Sitio web profesional para clínica de medicina natural. Diseño limpio enfocado en confianza, con optimización SEO avanzada y formularios de consulta.",
        result: "Tráfico orgánico triplicado en 3 meses gracias a estrategia SEO técnico.",
        image: "/imagenes/proyectos/nature.png",
        link: "https://naturemedical.netlify.app/",
        metrics: { label: "Tráfico", value: "x3" },
      },
      {
        name: "Apex Gym",
        category: "Web + Sistema",
        description: "Plataforma integral para cadena de gimnasios. Incluye sistema de gestión de membresías, panel de métricas en tiempo real y landing de captación.",
        result: "Reducción del 50% en tareas administrativas y mejora en retención de socios.",
        image: "/imagenes/proyectos/apexgym.png",
        link: "https://apexgimnasio.netlify.app/",
        metrics: { label: "Eficiencia", value: "+150%" },
      },
    ],
  },

  testimonials: {
    label: "03 — Testimonios",
    title: "Lo que dicen",
    titleHighlight: "nuestros clientes.",
    items: [
      {
        quote: "Vex Studio transformó completamente nuestra presencia digital. Las reservas online aumentaron un 200% en el primer mes.",
        author: "María López",
        role: "Fundadora, Éclat Beauté",
        rating: 5,
      },
      {
        quote: "El sistema que construyeron nos ahorró más de 20 horas semanales en gestión administrativa. Inversión que se pagó sola.",
        author: "Carlos Méndez",
        role: "Director, Apex Gym",
        rating: 5,
      },
      {
        quote: "Profesionalismo de otro nivel. Entendieron nuestras necesidades desde el primer día y entregaron antes del deadline.",
        author: "Ana Gutiérrez",
        role: "CEO, Nature Medical",
        rating: 5,
      },
    ],
  },

  team: {
    label: "04 — Equipo",
    title: "Las mentes detrás",
    titleHighlight: "de cada solución.",
    subtitle: "Un equipo multidisciplinario con visión de producto y ejecución técnica de primer nivel.",
    members: [
      {
        name: "Nicolas Aguirres",
        id: "nicolas-aguirres",
        type: "Cofundador",
        role: "Fullstack Developer & Co-founder",
        shortRole: "Fullstack Developer",
        bio: "Desarrollador fullstack with dominio en frontend, backend y desarrollo potenciado por IA. Lidera la arquitectura técnica de cada proyecto en Vex Studio.",
        skills: ["React", "Node.js", "Desarrollo con IA"],
        fullBio: "Nicolas es el motor técnico de Vex Studio. Con un dominio completo del stack de desarrollo — desde maquetación y diseño frontend hasta lógica de servidor y bases de datos — construye productos digitales de principio a fin. Su enfoque en el desarrollo asistido por inteligencia artificial le permite acelerar entregas y crear soluciones que normalmente requerirían equipos más grandes. Como Technical Lead, cada decisión técnica pasa por su criterio.",
        experience: [
          { title: "Desarrollo Fullstack End-to-End", desc: "Construcción de aplicaciones completas desde el frontend (React, Tailwind) hasta el backend (Node.js, PHP, SQL) con despliegue en producción." },
          { title: "Desarrollo Potenciado por IA", desc: "Uso estratégico de herramientas de inteligencia artificial para acelerar el desarrollo, automatizar procesos y crear soluciones más inteligentes." },
          { title: "Consultoría & Liderazgo Técnico", desc: "Asesoramiento estratégico para startups y empresas en transformación digital, definiendo stack tecnológico y arquitectura." },
        ],
        stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "React", "Tailwind", "WordPress", "Bootstrap", "Node.js", "Python"],
        portfolio: "https://nicolasaguirrescode.com/",
        cv: "/cv/NicolasFabian_Aguirres.pdf",
      },
      {
        name: "Nicolás Ozan",
        id: "nicolas-ozan",
        type: "Cofundador",
        role: "Fullstack Developer & Designer · Co-founder",
        shortRole: "Fullstack & Designer",
        bio: "Fusiona diseño y código en cada proyecto. Desarrollador fullstack con ojo de diseñador, crea experiencias visuales que funcionan por dentro y por fuera.",
        skills: ["UI/UX Design", "Fullstack", "Desarrollo con IA"],
        fullBio: "Nicolas Ozan es la mente creativa y técnica detrás de las interfaces de Vex Studio. Su pasión por el diseño combinada con su capacidad de desarrollo fullstack le permite llevar una idea desde el wireframe en Figma hasta el producto final en código. Domina tanto la estética como la funcionalidad, asegurando que cada pixel tenga propósito y cada línea de código sea eficiente. Su uso de IA como herramienta de desarrollo lo convierte en un profesional de nueva generación.",
        experience: [
          { title: "Diseño UI/UX Profesional", desc: "Creación de interfaces intuitivas y visualmente impactantes en Figma, con sistemas de diseño escalables y prototipos interactivos." },
          { title: "Desarrollo Fullstack Completo", desc: "Implementación de soluciones web completas combinando HTML, CSS, JavaScript, PHP y SQL para proyectos funcionales y atractivos." },
          { title: "Desarrollo Asistido por IA", desc: "Integración de herramientas de IA en el flujo de trabajo para acelerar el diseño, prototipado y desarrollo de productos digitales." },
        ],
        stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Figma", "Bootstrap", "IA"],
        portfolio: "",
        cv: "",
      },
      {
        name: "Mauricio Velazquez",
        id: "mauricio-velazquez",
        type: "Especialista",
        role: "Backend Developer & Database Specialist",
        shortRole: "Database Specialist",
        bio: "Especialista en arquitecturas de backend y gestión de bases de datos. Optimiza procesos y asegura la escalabilidad de cada sistema que construimos.",
        skills: ["PostgreSQL", "Node.js", "Python"],
        fullBio: "Mauricio es el experto en datos de Vex Studio. Con una sólida formación en desarrollo fullstack y una especialización profunda en bases de datos relacionales y no relacionales, se encarga de que la infraestructura de nuestros proyectos sea robusta, segura y eficiente. Su enfoque en la optimización de procesos y el trabajo bajo metodologías ágiles garantiza soluciones de backend de alta calidad.",
        experience: [
          { title: "Gestión de Bases de Datos", desc: "Diseño y optimización de arquitecturas de datos complejas utilizando PostgreSQL, MongoDB y MySQL." },
          { title: "Arquitecturas de Servidor", desc: "Desarrollo de APIs robustas y eficientes con Node.js y Python (Django/Flask)." },
          { title: "Infraestructura & DevOps", desc: "Implementación de contenedores con Docker y despliegue en entornos cloud como AWS." },
        ],
        stack: ["PostgreSQL", "MongoDB", "MySQL", "Node.js", "Python", "Docker", "AWS", "React", "Next.js", "TypeScript"],
        portfolio: "",
        cv: "/cv/Mauricio_Velazquez_CV.pdf",
      },
    ],
  },

  contact: {
    label: "05 — Contacto",
    title: "Tu próximo nivel",
    titleHighlight: "empieza aquí.",
    subtitle: "Contanos tu idea y recibí una propuesta estratégica en menos de 24 horas. Sin compromisos.",
    formTitle: "Solicitar Consultoría Gratuita",
    formCta: "Enviar Solicitud",
  },

  footer: {
    tagline: "Ingeniería digital de élite para empresas que no se conforman.",
    copyright: `© ${new Date().getFullYear()} Vex Studio. Todos los derechos reservados.`,
  },

  seo: {
    title: "Vex Studio | Desarrollo de Software & Automatización con IA — Argentina",
    description: "Agencia de desarrollo de software premium en Argentina. Creamos páginas web, sistemas a medida, e-commerce y soluciones de automatización con IA. Consultoría gratuita.",
    keywords: "desarrollo web argentina, software a medida, automatización IA, agencia digital mendoza, desarrollo fullstack, react, next.js, e-commerce, vex studio",
    url: "https://vexstudio.online",
    ogImage: "/imagenes/logo/logo.png",
  },
};
