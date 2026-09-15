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

export const skills = [
  { name: 'Java', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'Spring Boot', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
  { name: 'C#', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
  { name: '.NET', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg' },
  { name: 'Angular', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
  { name: 'React', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Node.js', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'Bootstrap', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg' },
  { name: 'MySQL', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
  { name: 'SQL Server', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'Firebase', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
  { name: 'Git', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
  { name: 'HTML', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'CSS', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
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
    period: 'fechas a verificar',
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
    image: 'https://via.placeholder.com/600x400/ff6e42/ffffff?text=Sistema+de+Etiquetas',
    repo: 'https://github.com/Marcos-Castillo/etiquetas_v2',
  },
  {
    title: 'Plataforma de gestión de RRHH y vacantes',
    description:
      'Sistema de gestión de vacantes desarrollado con Angular y Microsoft SQL Server, impulsando un aumento en las postulaciones de la empresa.',
    image: 'https://via.placeholder.com/600x400/ff6e42/ffffff?text=RRHH',
    repo: 'https://github.com/Marcos-Castillo/rrhh',
  },
  {
    title: 'Market',
    description: 'E-commerce desarrollado con React y Vite.',
    image: 'https://via.placeholder.com/600x400/ff6e42/ffffff?text=Market',
    repo: 'https://github.com/Marcos-Castillo/Market',
  },
  {
    title: 'Control de Aforo Inteligente',
    description: 'Prototipo de control de aforo con detección facial integrada a Firebase.',
    image: 'https://via.placeholder.com/600x400/ff6e42/ffffff?text=Control+de+Aforo',
    repo: 'https://github.com/Marcos-Castillo/pruba-reconcimiento-facial-',
  },
  {
    title: 'appChat',
    description: 'Aplicación de mensajería con backend en tiempo real.',
    image: 'https://via.placeholder.com/600x400/ff6e42/ffffff?text=appChat',
    repo: 'https://github.com/Marcos-Castillo/appChat',
  },
  {
    title: 'Sistema de ventas en Spring Boot',
    description: 'Trabajo práctico final de Spring Boot con Java y MySQL (Codo a Codo 4.0).',
    image: 'https://via.placeholder.com/600x400/ff6e42/ffffff?text=Spring+Boot+Ventas',
    repo: 'https://github.com/Marcos-Castillo/tp-grupo-14',
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