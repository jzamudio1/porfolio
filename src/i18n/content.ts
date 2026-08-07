export type Lang = "es" | "en"

export const cvContent = {
  es: {
    meta: {
      title: "Jesús Zamudio Noguera | Software Engineer",
      description:
        "Portfolio profesional de Jesús Zamudio Noguera, Software Engineer especializado en Oracle PL/SQL, PostgreSQL, Angular, .NET, OCI, ORDS, automatización e IA aplicada al desarrollo.",
    },
    nav: {
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      education: "Formación",
      contact: "Contacto",
    },
    sections: {
      experience: "Experiencia profesional",
      professionalProjects: "Proyectos destacados",
      personalProjects: "Proyectos personales",
      skills: "Habilidades técnicas",
      education: "Formación e idiomas",
    },
    hero: {
      location: "Software Engineer · Sevilla, España",
      intro: {
        before: "Software Engineer con",
        highlight: "más de 4 años de experiencia",
        after:
          "en desarrollo, evolución y soporte de aplicaciones empresariales del sector energético. Especializado en Oracle PL/SQL, PostgreSQL PL/pgSQL, Angular, TypeScript, Ionic y .NET, con experiencia en optimización SQL, integraciones, migraciones, coordinación de equipo y comunicación directa con cliente.",
      },
      lifecycle:
        "Participación integral en el ciclo de vida del software: análisis de requisitos, diseño técnico, desarrollo, pruebas, despliegue, soporte y mejora continua, incorporando automatización e IA para mejorar la eficiencia operativa.",
      tags: ["Oracle PL/SQL", "PostgreSQL", "Angular", ".NET", "OCI & ORDS", "IA & automatización"],
      linksAria: "Enlaces profesionales",
      downloadCv: "Descargar CV",
      linkedin: "LinkedIn",
      contact: "Contacto",
    },
    experience: {
      role: "Software Engineer",
      company: "NTT DATA Europe & LATAM",
      period: "Marzo 2022 — Actualidad",
      responsibilities: [
        "Desarrollo y evolución end-to-end de aplicaciones estratégicas del sector energético, desde requisitos y diseño técnico hasta pruebas, despliegue, soporte y mejora continua.",
        "Diseño, desarrollo y mantenimiento de backend con Oracle PL/SQL y PostgreSQL PL/pgSQL, incluyendo consultas, procedimientos almacenados, procesos de base de datos y tareas de administración.",
        "Optimización de sentencias SQL y procesos de base de datos para reforzar rendimiento, estabilidad y mantenibilidad.",
        "Desarrollo frontend y mobile/web con Angular, TypeScript, HTML, CSS e Ionic, además de integraciones, middleware .NET y REST APIs.",
        "Análisis funcional y técnico de nuevos desarrollos, evolutivos e incidencias con seguimiento en Jira, Confluence y ServiceNow.",
        "Gestión de versiones, ramas y despliegues con Git, Bitbucket y Bamboo, colaborando en migraciones Angular y continuidad funcional.",
        "Coordinación y supervisión de tareas del equipo, comunicación directa con cliente y seguimiento de calidad, prioridades, plazos y entregas.",
        "Diseño e implementación de automatizaciones, agentes inteligentes y soluciones de IA aplicada para reducir tareas manuales y mejorar la eficiencia operativa.",
      ],
    },
    professionalProjects: {
      eyebrow: "Sector energético",
      projects: [
        {
          title: "SIGMEL",
          tags: ["Oracle PL/SQL", "SQL", ".NET", "Angular", "TypeScript"],
          description:
            "Integración, tratamiento, gestión y validación de datos de medida; desarrollo evolutivo, optimización SQL, soporte técnico y migración Angular.",
        },
        {
          title: "Interfaz SIE",
          tags: ["PostgreSQL PL/pgSQL", "SQL", ".NET"],
          description:
            "Integración e intercambio de información entre sistemas corporativos; desarrollo backend, soporte e incidencias funcionales y técnicas.",
        },
        {
          title: "EMAPP",
          tags: ["PostgreSQL PL/pgSQL", "Ionic", ".NET"],
          description:
            "Gestión y optimización de procesos de negocio; mantenimiento mobile/web, procesos backend y middleware.",
        },
        {
          title: "IBOST",
          tags: ["Oracle PL/SQL", "SQL", ".NET", "Angular", "TypeScript"],
          description:
            "Plataforma de liquidaciones del sector energético; colaboración en migración frontend, compatibilidad técnica y continuidad funcional.",
        },
      ],
    },
    personalProjects: {
      technologiesLabel: "Tecnologías de",
      githubLabel: "Ver en GitHub",
      projects: [
        {
          title: "pg_metadata",
          eyebrow: "Extensión PostgreSQL",
          description:
            "Extensión de PostgreSQL para extraer el DDL de objetos de base de datos. Replica en PostgreSQL una experiencia similar a Oracle DBMS_METADATA, permitiendo recuperar definiciones mediante consultas SQL simples o código PL/pgSQL.",
          github: "https://github.com/jzamudio1/pg_metadata",
          tags: ["PostgreSQL", "PL/pgSQL", "SQL", "DDL"],
        },
        {
          title: "PadelAcademy",
          eyebrow: "Aplicación móvil",
          description:
            "Aplicación móvil para la gestión de alumnos y monitores de una academia de pádel. Construida con Expo Router y React Native, con Supabase y PostgreSQL como backend y capa de persistencia.",
          github: null,
          tags: ["React Native", "Expo", "Expo Router", "Supabase", "PostgreSQL"],
        },
        {
          title: "OCI Autonomous Database & ORDS",
          eyebrow: "Cloud y arquitectura backend",
          description:
            "Entorno personal en Oracle Cloud Infrastructure con Oracle Autonomous Database para Transaction Processing y ORDS habilitado. Lo utilizo para desarrollar y probar servicios REST, SQL/PLSQL y proyectos de arquitectura dinámica sobre Oracle Cloud.",
          github: null,
          tags: ["OCI", "Autonomous Database", "ORDS", "Oracle SQL", "PL/SQL", "REST"],
        },
      ],
    },
    skills: {
      groups: [
        {
          title: "Análisis y gestión",
          items: [
            "Análisis funcional y técnico",
            "Toma de requisitos",
            "Gestión de incidencias",
            "Coordinación de equipo",
            "Comunicación con cliente",
          ],
        },
        {
          title: "Tecnologías",
          items: [
            "Oracle PL/SQL",
            "Oracle Forms",
            "Oracle ORDS",
            "Oracle APEX",
            "Oracle Cloud (OCI)",
            "PostgreSQL PL/pgSQL",
            "SQL",
            "Angular",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Ionic",
            "C#/.NET",
            "REST APIs",
          ],
        },
        {
          title: "DevOps y herramientas",
          items: [
            "Git",
            "Bitbucket",
            "Bamboo",
            "Jira",
            "Confluence",
            "ServiceNow",
            "Postman",
            "Bruno",
            "SQL*Plus",
            "SQLLoader",
            "DBeaver",
            "Visual Studio Code",
          ],
        },
        {
          title: "Sistemas, IA y otros",
          items: [
            "Linux/Unix",
            "Windows Server",
            "IA aplicada al desarrollo",
            "Agentes inteligentes",
            "Automatización de procesos",
            "Java",
            "React",
            "Docker",
            "Kubernetes",
          ],
        },
      ],
    },
    education: {
      educationLabel: "Formación",
      degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
      school: "Santa Joaquina de Vedruna · 2019 — 2021",
      languagesLabel: "Idiomas",
      languages: [
        { name: "Español", level: "nativo" },
        { name: "Inglés", level: "intermedio" },
      ],
    },
    footer: {
      rights: "Todos los derechos reservados",
      home: "Inicio",
      contact: "Contacto",
    },
  },
  en: {
    meta: {
      title: "Jesús Zamudio Noguera | Software Engineer",
      description:
        "Professional portfolio of Jesús Zamudio Noguera, Software Engineer specializing in Oracle PL/SQL, PostgreSQL, Angular, .NET, OCI, ORDS, automation and applied AI.",
    },
    nav: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    sections: {
      experience: "Professional experience",
      professionalProjects: "Featured projects",
      personalProjects: "Personal projects",
      skills: "Technical skills",
      education: "Education & languages",
    },
    hero: {
      location: "Software Engineer · Seville, Spain",
      intro: {
        before: "Software Engineer with ",
        highlight: "more than 4 years of experience ",
        after:
          "developing, evolving and supporting enterprise applications in the energy sector. Specialized in Oracle PL/SQL, PostgreSQL PL/pgSQL, Angular, TypeScript, Ionic and .NET, with experience in SQL optimization, integrations, migrations, team coordination and direct client communication.",
      },
      lifecycle:
        "End-to-end involvement across the software lifecycle: requirements analysis, technical design, development, testing, deployment, support and continuous improvement, incorporating automation and AI to improve operational efficiency.",
      tags: ["Oracle PL/SQL", "PostgreSQL", "Angular", ".NET", "OCI & ORDS", "AI & automation"],
      linksAria: "Professional links",
      downloadCv: "Download CV",
      linkedin: "LinkedIn",
      contact: "Contact",
    },
    experience: {
      role: "Software Engineer",
      company: "NTT DATA Europe & LATAM",
      period: "March 2022 — Present",
      responsibilities: [
        "End-to-end development and evolution of strategic applications in the energy sector, from requirements and technical design through testing, deployment, support and continuous improvement.",
        "Backend design, development and maintenance with Oracle PL/SQL and PostgreSQL PL/pgSQL, including queries, stored procedures, database processes and administration tasks.",
        "Optimization of SQL statements and database processes to improve performance, stability and maintainability.",
        "Frontend and mobile/web development with Angular, TypeScript, HTML, CSS and Ionic, plus integrations, .NET middleware and REST APIs.",
        "Functional and technical analysis of new developments, enhancements and incidents, tracked in Jira, Confluence and ServiceNow.",
        "Version, branch and deployment management with Git, Bitbucket and Bamboo, collaborating on Angular migrations and functional continuity.",
        "Coordination and supervision of team tasks, direct client communication, and tracking of quality, priorities, deadlines and deliveries.",
        "Design and implementation of automations, intelligent agents and applied AI solutions to reduce manual work and improve operational efficiency.",
      ],
    },
    professionalProjects: {
      eyebrow: "Energy sector",
      projects: [
        {
          title: "SIGMEL",
          tags: ["Oracle PL/SQL", "SQL", ".NET", "Angular", "TypeScript"],
          description:
            "Integration, processing, management and validation of metering data; evolutionary development, SQL optimization, technical support and Angular migration.",
        },
        {
          title: "Interfaz SIE",
          tags: ["PostgreSQL PL/pgSQL", "SQL", ".NET"],
          description:
            "Integration and information exchange between corporate systems; backend development, support, and functional and technical incident resolution.",
        },
        {
          title: "EMAPP",
          tags: ["PostgreSQL PL/pgSQL", "Ionic", ".NET"],
          description:
            "Business process management and optimization; mobile/web maintenance, backend processes and middleware.",
        },
        {
          title: "IBOST",
          tags: ["Oracle PL/SQL", "SQL", ".NET", "Angular", "TypeScript"],
          description:
            "Energy-sector settlement platform; collaboration on frontend migration, technical compatibility and functional continuity.",
        },
      ],
    },
    personalProjects: {
      technologiesLabel: "Technologies used in",
      githubLabel: "View on GitHub",
      projects: [
        {
          title: "pg_metadata",
          eyebrow: "PostgreSQL extension",
          description:
            "PostgreSQL extension for extracting DDL from database objects. It brings a workflow similar to Oracle DBMS_METADATA to PostgreSQL, allowing definitions to be retrieved through simple SQL queries or PL/pgSQL code.",
          github: "https://github.com/jzamudio1/pg_metadata",
          tags: ["PostgreSQL", "PL/pgSQL", "SQL", "DDL"],
        },
        {
          title: "PadelAcademy",
          eyebrow: "Mobile application",
          description:
            "Mobile application for managing students and coaches at a padel academy. Built with Expo Router and React Native, using Supabase and PostgreSQL for backend services and persistence.",
          github: null,
          tags: ["React Native", "Expo", "Expo Router", "Supabase", "PostgreSQL"],
        },
        {
          title: "OCI Autonomous Database & ORDS",
          eyebrow: "Cloud & backend architecture",
          description:
            "Personal Oracle Cloud Infrastructure environment with Oracle Autonomous Database for Transaction Processing and ORDS enabled. I use it to develop and test REST services, SQL/PLSQL and dynamic architecture projects on Oracle Cloud.",
          github: null,
          tags: ["OCI", "Autonomous Database", "ORDS", "Oracle SQL", "PL/SQL", "REST"],
        },
      ],
    },
    skills: {
      groups: [
        {
          title: "Analysis & management",
          items: [
            "Functional and technical analysis",
            "Requirements gathering",
            "Incident management",
            "Team coordination",
            "Client communication",
          ],
        },
        {
          title: "Technologies",
          items: [
            "Oracle PL/SQL",
            "Oracle Forms",
            "Oracle ORDS",
            "Oracle APEX",
            "Oracle Cloud (OCI)",
            "PostgreSQL PL/pgSQL",
            "SQL",
            "Angular",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Ionic",
            "C#/.NET",
            "REST APIs",
          ],
        },
        {
          title: "DevOps & tools",
          items: [
            "Git",
            "Bitbucket",
            "Bamboo",
            "Jira",
            "Confluence",
            "ServiceNow",
            "Postman",
            "Bruno",
            "SQL*Plus",
            "SQLLoader",
            "DBeaver",
            "Visual Studio Code",
          ],
        },
        {
          title: "Systems, AI & more",
          items: [
            "Linux/Unix",
            "Windows Server",
            "AI applied to software development",
            "Intelligent agents",
            "Process automation",
            "Java",
            "React",
            "Docker",
            "Kubernetes",
          ],
        },
      ],
    },
    education: {
      educationLabel: "Education",
      degree: "Higher Technician in Cross-Platform Application Development",
      school: "Santa Joaquina de Vedruna · 2019 — 2021",
      languagesLabel: "Languages",
      languages: [
        { name: "Spanish", level: "native" },
        { name: "English", level: "intermediate" },
      ],
    },
    footer: {
      rights: "All rights reserved",
      home: "Home",
      contact: "Contact",
    },
  },
} as const
