export const profile = {
  name: 'Marcos Castillo',
  role: 'Backend Developer',
  tagline: '.NET (C#) & Java · APIs e Integraciones · SQL Server',
  summary:
    'Soy un desarrollador Backend/Full-stack con experiencia en la creación de aplicaciones web y APIs, trabajando actualmente en Grupo Dinosaurio. He liderado el desarrollo de un sistema de impresión de precios basado en Android con Java y una API en C#, y he participado en integraciones de APIs, facturación y sistemas de Puntos de Venta. Mi enfoque se centra en desarrollar soluciones eficientes e innovadoras, con una curva de aprendizaje constante y curiosidad por explorar nuevas tecnologías.',
  location: 'Córdoba, Argentina',
  email: 'marcos469204@gmail.com',
  phone: '+54 351-3475094',
  whatsapp: 'https://wa.me/543513475094',
  linkedin: 'https://www.linkedin.com/in/marcos-developer/',
  github: 'https://github.com/Marcos-Castillo',
  instagram: 'https://www.instagram.com/marcos_e_castillo/',
  discord: 'https://discord.gg/bBtzExKt',
}

export const skillsGroups = [
  {
    label: 'Lenguajes de programación',
    items: ['Java', 'C#', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frameworks y bibliotecas',
    items: ['Spring Boot', '.NET', 'Angular', 'React', 'Node.js', 'Bootstrap', 'Swagger'],
  },
  {
    label: 'Bases de datos',
    items: ['MySQL', 'Microsoft SQL Server', 'Firebase'],
  },
  {
    label: 'Herramientas y plataformas',
    items: ['Git', 'GitHub', 'Linux', 'Windows', 'Android', 'Cloud'],
  },
  {
    label: 'Hardware y comunicaciones',
    items: ['Impresión térmica ESC/POS', 'Bluetooth'],
  },
  {
    label: 'Metodologías ágiles',
    items: ['Scrum', 'Agile', 'Waterfall', 'LeSS'],
  },
]

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const skills = [
  { name: 'Java', img: asset('icons/java.png') },
  { name: 'Spring Boot', img: asset('icons/spring.png') },
  { name: 'C#', img: asset('icons/csharp.png') },
  { name: '.NET', img: asset('icons/dotnet.png') },
  { name: 'Angular', img: asset('icons/angular.png') },
  { name: 'React', img: asset('icons/react.png') },
  { name: 'Node.js', img: asset('icons/node.png') },
  { name: 'TypeScript', img: asset('icons/typescript.png') },
  { name: 'JavaScript', img: asset('icons/javascript.png') },
  { name: 'Bootstrap', img: asset('icons/bootstrap.png') },
  { name: 'MySQL', img: asset('icons/mysql.png') },
  { name: 'SQL Server', img: asset('icons/sqlserver.png') },
  { name: 'Firebase', img: asset('icons/firebase.png') },
  { name: 'Git', img: asset('icons/git.png') },
  { name: 'HTML', img: asset('icons/html.png') },
  { name: 'CSS', img: asset('icons/css.png') },
]

export const experience = [
  {
    role: 'Desarrollador',
    company: 'Grupo Dinosaurio',
    period: 'abr. 2023 - actualidad',
    description:
      'Desarrollo y mantenimiento de APIs e integraciones (facturación y sistemas de Puntos de Venta) con Spring Boot, Java, C#/.NET y Microsoft SQL Server. Liderazgo en el desarrollo del sistema de impresión de precios en Android (Java) con impresión térmica Bluetooth.',
    technologies: ['Java', 'C#/.NET', 'Spring Boot', 'SQL Server', 'Git'],
  },
  {
    role: 'Técnico de Operaciones de TI',
    company: 'Grupo Dinosaurio',
    period: 'ene. 2023 - abr. 2023',
    description:
      'Soporte a usuarios por fallas en Puntos de Venta (hardware y software) de facturación en todas las sucursales. Detección, diagnóstico e implementación de soluciones, y procedimientos diarios de integración de ventas, actualización de precios y generación de reportes.',
    technologies: ['Soporte IT', 'Puntos de Venta', 'Diagnóstico'],
  },
  {
    role: 'Técnico de Soporte de TI (nivel 2)',
    company: 'Jazzplat España',
    period: 'jun. 2009 - feb. 2013 · 3 años 9 meses',
    description:
      'Soporte técnico de nivel 2 para campañas de activaciones de Pymes (CAT). Diagnóstico y resolución de incidencias de hardware, software, telefónica y redes, gestionando incidentes en mesa de ayuda y escalando al nivel correspondiente.',
    technologies: ['Soporte nivel 2', 'Mesa de ayuda', 'Redes'],
  },
  {
    role: 'Freelancer · Desarrollo Web',
    company: 'Independiente',
    period: 'nov. 2021 - actualidad',
    description:
      'Desarrollo de páginas web dinámicas y aplicaciones a medida para clientes.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js'],
  },
]

export const projects = [
  {
    title: 'Sistema de impresión de precios y etiquetas',
    description:
      'App Android en Java con impresión térmica Bluetooth (ESC/POS), API en C# y frontend web. Optimizó el seguimiento y control de precios en tiempo real en Grupo Dinosaurio.',
    image: asset('projects/printer.jpg'),
    repo: 'https://github.com/Marcos-Castillo/etiquetas_v2',
  },
  {
    title: 'Market',
    description: 'E-commerce desarrollado con React y Vite.',
    image: asset('projects/market-banner.png'),
    repo: 'https://github.com/Marcos-Castillo/Market',
  },
  {
    title: 'Control de Aforo Inteligente',
    description: 'Prototipo de control de aforo con detección facial integrada a Firebase.',
    image: asset('projects/aforo.png'),
    repo: 'https://github.com/Marcos-Castillo/pruba-reconcimiento-facial-',
  },
  {
    title: 'appChat',
    description: 'Aplicación de mensajería con backend en tiempo real, con un juego integrado.',
    image: asset('projects/appchat.png'),
    repo: 'https://github.com/Marcos-Castillo/appChat',
  },
  {
    title: 'Sistema de ventas en Spring Boot',
    description: 'Trabajo práctico final de Spring Boot con Java y MySQL (Codo a Codo 4.0).',
    image: asset('projects/diagrama_clases.png'),
    repo: 'https://github.com/Marcos-Castillo/tp-grupo-14',
  },
  {
    title: 'lectorMd',
    description: 'Lector y conversor de Markdown a PDF (HTML/JS standalone).',
    image: asset('projects/lectorMd.png'),
    repo: 'https://github.com/Marcos-Castillo/lectorMd',
  },
  {
    title: 'Kanban',
    description: 'Tablero Kanban con drag & drop, persistencia en localStorage y respaldos automáticos.',
    image: asset('projects/kanban.png'),
    repo: 'https://github.com/Marcos-Castillo/kanban',
  },
  {
    title: 'Juegos dante',
    description: 'Compilado de juegos infantiles desarrollados en lenguaje web.',
    image: asset('projects/juegos-dante.svg'),
  },
  {
    title: 'Manuales IA',
    description:
      'Sistema de gestión y consulta inteligente de manuales técnicos con IA: centraliza manuales (PDF, DOCX, TXT, MD, RTF), chat con IA basado en el contenido, resúmenes automáticos, lectura por voz (TTS) y gestión de usuarios, roles y permisos. API .NET (C#) con Ollama.',
    image: asset('projects/manuales-ia.png'),
    repo: 'https://github.com/Marcos-Castillo/Manuales-ia',
  },
  {
    title: 'Ncgift',
    description:
      'Automatización de notas de crédito de gift cards (Dini/plástico) con impresora fiscal Epson, cierres Z y reportes por email.',
    image: asset('projects/nc-gift.png'),
    repo: 'https://github.com/Marcos-Castillo/NotaCreditoGiftCard',
  },
  {
    title: 'Verificadores',
    description: 'API de verificación de precios y carrusel de imágenes para puntos de venta.',
    image: asset('projects/verificadores.svg'),
  },
  {
    title: 'Club Dino',
    description:
      'Club de beneficios de Grupo Dinosaurio: una amplia variedad de beneficios y descuentos especiales en tiendas de Córdoba y Mendoza. Frontend estático con Bootstrap y backend .NET (JWT, Dapper/SQLite).',
    image: asset('projects/clubdino.webp'),
    repo: 'https://github.com/Marcos-Castillo/ClubDino2026',
  },
]

export const degrees = [
  { title: 'Desarrollo de Aplicaciones Web - Node.js (Talento Tech)', institution: 'Gobierno de la Ciudad de Buenos Aires', year: '2026' },
  { title: 'Liderazgo y Gestión de Equipos (125 h)', institution: 'UNIR - Universidad Internacional de La Rioja', year: '2026' },
  { title: 'Certificación intermedia de Analista Programador', institution: 'Instituto Superior Santo Domingo', year: '2026' },
  { title: 'Técnico Superior en Análisis de Sistemas de Computación', institution: 'Instituto Superior Santo Domingo', year: '2026' },
  { title: 'Inmersión IA + Google Gemini', institution: 'United Latino Students Association', year: '2025' },
  { title: 'Desarrollo de Videojuegos con Unity 2D (Talento Tech)', institution: 'Gobierno de la Ciudad de Buenos Aires', year: '2025' },
  { title: 'LFD121: Developing Secure Software', institution: 'The Linux Foundation', year: '2025' },
  { title: 'LFS101: Introduction to Linux', institution: 'The Linux Foundation', year: '2024' },
  { title: 'Junior Cybersecurity Analyst Career Path', institution: 'Cisco Networking Academy', year: '2024' },
  { title: 'Linux Essentials', institution: 'Cisco Networking Academy', year: '2024' },
  { title: 'Javascript Full Stack (Node.js)', institution: 'Codo a Codo 4.0 - Ciudad de Buenos Aires', year: '2024' },
  { title: 'React.js', institution: 'Universidad Tecnológica Nacional - FRM', year: '2024' },
  { title: 'Java Avanzado con Spring Boot', institution: 'Codo a Codo 4.0 - Ciudad de Buenos Aires', year: '2023' },
  { title: 'Java', institution: 'Universidad Tecnológica Nacional', year: '2023' },
  { title: 'Testing Manual y Ágil', institution: 'Universidad Tecnológica Nacional', year: '2023' },
  { title: 'Inglés técnico para desarrolladores de software', institution: 'Centro Universitario de Idiomas (CUI)', year: '2023' },
  { title: 'Formación SQL con MySQL Server de Oracle - ONE', institution: 'Alura Latam', year: '2022' },
  { title: 'English level - B1 Intermediate (47/100)', institution: 'EF Standard English Test (EF SET)', year: '2022' },
  { title: 'Oracle Cloud Infrastructure 2022 Certified Foundations Associate', institution: 'Oracle', year: '2022' },
  { title: 'Full stack', institution: 'Argentina Programa', year: '2022' },
  { title: 'Formación Java Orientado a Objetos - ONE', institution: 'Alura Latam', year: '2022' },
  { title: 'Desarrollador Full stack', institution: 'Alura', year: '2022' },
  { title: 'Universidad Angular', institution: 'Udemy', year: '2022' },
  { title: 'Formación Front-end - ONE', institution: 'Alura Latam', year: '2022' },
  { title: 'Formación Principiante en Programación - ONE', institution: 'Alura Latam', year: '2022' },
  { title: 'Full stack Java', institution: 'Argentina Programa', year: '2021' },
  { title: 'Técnico Superior en Programación', institution: 'Universidad Tecnológica Nacional (FRC)', year: '2009' },
  { title: 'Reparación, mantenimiento y Actualización de PC', institution: 'Instituto AES', year: '2006' },
]

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio (B1) — según EF SET (2022)' },
]

export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#estudios', label: 'Estudios' },
  { href: '#contacto', label: 'Contacto' },
]