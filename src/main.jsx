import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profileBase = {
  name: 'Sebastian Lopez',
  role: 'Full Stack Developer',
  email: 'se.lopezmunoz@gmail.com',
  phone: '+56 9 3336 7642',
  linkedin: 'https://www.linkedin.com/in/selopezmu/',
  website: 'https://iseezl.github.io/cv-sebastian_lopez/',
  location: 'Santiago, Chile',
};

const content = {
  es: {
    htmlLang: 'es',
    languageLabel: 'ES',
    switchLabel: 'English',
    switchTo: 'en',
    contactAria: 'Canales de contacto',
    highlightsAria: 'Especialidades principales',
    sidebarAria: 'Resumen profesional',
    contactButton: 'Contactar',
    emailLabel: 'Email',
    phoneLabel: 'Teléfono',
    locationLabel: 'Ubicación',
    languageInfoLabel: 'Idioma',
    languageInfo: 'Inglés B2',
    summary:
      'Desarrollador full stack orientado a soluciones empresariales, banca, integraciones POS, SAP B1, aplicaciones web y móviles. Experiencia en React, .NET, C#, Node.js, Flutter y bases de datos SQL/NoSQL. Uso diario de herramientas de IA para diseño de software, generación de código, depuración, refactorización, documentación y pruebas. Conocimientos básicos de AWS, conceptos cloud y flujos CI/CD con GitHub Actions.',
    highlights: [
      'Optimización de procesos financieros',
      'Integraciones POS y SAP B1',
      'IA aplicada al desarrollo',
      'Fundamentos AWS y CI/CD',
    ],
    stackTitle: 'Stack Técnico',
    strengthsTitle: 'Aptitudes',
    educationTitle: 'Educación',
    educationText: 'Titulado en Analista Programador Computacional',
    certificationsTitle: 'Certificaciones y Formación',
    experienceEyebrow: 'Experiencia Profesional',
    experienceTitle: 'Trayectoria orientada a integraciones, banca e IA aplicada',
    skills: [
      { label: 'Backend / Full Stack', items: ['C#', '.NET', 'APIs RESTful', 'Node.js', 'Python', 'Java', 'TypeScript', 'VB.NET'] },
      { label: 'Frontend / Mobile', items: ['React', 'Flutter', 'Django', 'Spring Boot', 'Unity'] },
      { label: 'Bases de datos', items: ['SQL Server', 'MongoDB', 'Oracle SQL'] },
      { label: 'AWS / Cloud', items: ['Fundamentos AWS', 'EC2', 'IAM', 'S3', 'RDS', 'Lambda', 'API Gateway', 'CloudWatch', 'GitHub Actions'] },
      { label: 'IA aplicada', items: ['GitHub Copilot', 'ChatGPT', 'Cursor AI', 'Claude CLI', 'LLMs', 'Agentes IA'] },
      { label: 'Integraciones', items: ['SAP B1', 'DI API', 'Service Layer', 'POS', 'Proveedores de pago', 'Scrum'] },
    ],
    strengths: [
      'Autodidacta',
      'Adaptabilidad tecnológica',
      'Metódico',
      'Aprendizaje rápido',
      'Organizado',
      'Resolución de problemas',
      'Responsabilidad',
    ],
    certifications: [
      'Security Code Warrior - White Belt',
      'Security Code Warrior - Yellow Belt',
      'Formación interna en fundamentos de IA, LLMs, GitHub Copilot, agentes IA y flujos Cursor AI',
    ],
    experiences: [
      {
        company: 'Stefanini / HSBC Bank',
        period: 'Enero 2026 - Presente',
        role: 'Full Stack Developer',
        description:
          'Desarrollo full stack en proyecto de optimización para el área de finanzas de HSBC Bank. Participación en la construcción de una aplicación web con React y API web en C#, enfocada en mejorar procesos internos, reducir fricción operativa y mantener una base técnica evolutiva.',
        projects: [
          {
            title: 'Aplicación web para procesos financieros',
            details:
              'Implementación de interfaces React y servicios backend en C# para digitalización, seguimiento y optimización de procesos financieros.',
          },
          {
            title: 'Desarrollo asistido por IA',
            details:
              'Uso de GitHub Copilot, ChatGPT, Cursor AI y Claude CLI para análisis técnico, generación de código, debugging, refactorización y documentación.',
          },
        ],
      },
      {
        company: 'Retail Custom Solution',
        period: '2021 - 2025',
        role: 'Full Stack Developer / Consultor de Proyectos',
        description:
          'Desarrollo full stack de soluciones informáticas con .NET para puntos de venta en clientes de los sectores ferretero, retail y cárnico. Foco en mejora continua de RMS.NET/POS.NET, APIs e integraciones externas, incluyendo SAP B1 mediante DI API y Service Layer.',
        projects: [
          {
            title: 'Integración de dispositivos POS de pago',
            details: 'Integración con dispositivos y proveedores de pago como GetNet, Transbank y BCIPagos.',
          },
          {
            title: 'Aplicación mobile de administración y reportería',
            details:
              'Aplicación Flutter para gestionar configuraciones de integración con SAP B1 y reportar estados de documentos pendientes entre punto de venta y SAP.',
          },
          {
            title: 'API web de información de documentos',
            details: 'API REST para disponibilizar información de RMS/POS a proveedores externos del sistema.',
          },
        ],
      },
      {
        company: 'Faros Asesores',
        period: '2023 - 2025',
        role: 'Full Stack Developer',
        description:
          'Desarrollo full stack de microservicios, aplicaciones web y aplicaciones móviles, con participación en modelado de procesos, integración de sistemas y automatización de flujos operativos.',
        projects: [
          {
            title: 'Aplicación web de gestión RFID',
            details:
              'Solución para toma de inventario con tecnología RFID usando Node.js, React y MongoDB. Incluye adaptación de modelos de negocio y procesos logísticos como órdenes de compra, avisos de embarque, packing list y tomas de inventario.',
          },
          {
            title: 'Tablero de control ASN',
            details: 'Desarrollo de tablero para generación, seguimiento y procesamiento de ASN en procesos logísticos.',
          },
        ],
      },
      {
        company: 'Profesional Independiente',
        period: '2021 - Presente',
        role: 'Full Stack Developer',
        description:
          'Desarrollo de proyectos independientes orientados a productividad, entretenimiento y herramientas digitales, con profundización continua en cloud, CI/CD e IA aplicada al desarrollo.',
        projects: [
          {
            title: 'Aplicación Linux para ajuste de brillo',
            details:
              'Herramienta con interfaz en Python para controlar el brillo de pantalla en entornos Linux y mejorar la experiencia de uso diario.',
          },
          {
            title: 'Juegos y prototipos en Unity',
            details:
              'Desarrollo de juegos y prototipos interactivos versionados en GitHub, aplicando lógica de gameplay, manejo de escenas e interfaces.',
          },
          {
            title: 'Extensión para Owlbear Rodeo',
            details:
              'Extensión para lanzar tiradas dentro de Owlbear Rodeo, ampliando el flujo de juego con una herramienta integrada a la plataforma.',
          },
          {
            title: 'Aplicaciones de música independiente',
            details:
              'Desarrollo de páginas web en Python, reproductores de música y aplicaciones móviles para proyectos musicales independientes.',
          },
        ],
      },
    ],
  },
  en: {
    htmlLang: 'en',
    languageLabel: 'EN',
    switchLabel: 'Español',
    switchTo: 'es',
    contactAria: 'Contact channels',
    highlightsAria: 'Main specialties',
    sidebarAria: 'Professional summary',
    contactButton: 'Contact',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    languageInfoLabel: 'Language',
    languageInfo: 'English B2',
    summary:
      'Full Stack Developer with experience building business applications for banking, retail, POS integrations, SAP Business One, web platforms, and mobile solutions. Skilled in React, .NET, C#, Node.js, Flutter, and SQL/NoSQL databases. Daily user of AI-assisted development tools for software design, code generation, debugging, refactoring, documentation, and test creation. Foundational knowledge of AWS, cloud deployment concepts, and CI/CD workflows with GitHub Actions.',
    highlights: [
      'Financial process optimization',
      'POS and SAP B1 integrations',
      'AI-assisted development',
      'AWS fundamentals and CI/CD',
    ],
    stackTitle: 'Technical Stack',
    strengthsTitle: 'Strengths',
    educationTitle: 'Education',
    educationText: 'Programmer Analyst',
    certificationsTitle: 'Certifications and Training',
    experienceEyebrow: 'Professional Experience',
    experienceTitle: 'Experience across integrations, banking, and applied AI',
    skills: [
      { label: 'Backend / Full Stack', items: ['C#', '.NET', 'REST APIs', 'Node.js', 'Python', 'Java', 'TypeScript', 'VB.NET'] },
      { label: 'Frontend / Mobile', items: ['React', 'Flutter', 'Django', 'Spring Boot', 'Unity'] },
      { label: 'Databases', items: ['SQL Server', 'MongoDB', 'Oracle SQL'] },
      { label: 'AWS / Cloud', items: ['AWS fundamentals', 'EC2', 'IAM', 'S3', 'RDS', 'Lambda', 'API Gateway', 'CloudWatch', 'GitHub Actions'] },
      { label: 'Applied AI', items: ['GitHub Copilot', 'ChatGPT', 'Cursor AI', 'Claude CLI', 'LLMs', 'AI agents'] },
      { label: 'Integrations', items: ['SAP B1', 'DI API', 'Service Layer', 'POS', 'Payment providers', 'Scrum'] },
    ],
    strengths: [
      'Self-directed learning',
      'Technical adaptability',
      'Methodical execution',
      'Fast learning',
      'Organization',
      'Problem solving',
      'Accountability',
    ],
    certifications: [
      'Security Code Warrior - White Belt',
      'Security Code Warrior - Yellow Belt',
      'Internal AI training covering AI fundamentals, LLMs, GitHub Copilot, AI agents, and Cursor AI workflows',
    ],
    experiences: [
      {
        company: 'Stefanini / HSBC Bank',
        period: 'January 2026 - Present',
        role: 'Full Stack Developer',
        description:
          'Full stack development for a finance optimization project at HSBC Bank, building a React web application and C# web API focused on improving internal workflows, reducing operational friction, and supporting continuous product evolution.',
        projects: [
          {
            title: 'Financial process web application',
            details:
              'Implemented React interfaces and C# backend services to support digitalization, tracking, and optimization of finance processes.',
          },
          {
            title: 'AI-assisted development',
            details:
              'Used GitHub Copilot, ChatGPT, Cursor AI, and Claude CLI for technical analysis, code generation, debugging, refactoring, and documentation.',
          },
        ],
      },
      {
        company: 'Retail Custom Solution',
        period: '2021 - 2025',
        role: 'Full Stack Developer / Project Consultant',
        description:
          'Developed .NET-based software solutions for POS environments serving hardware, retail, and meat industry clients, with a focus on RMS.NET/POS.NET improvements, APIs, external integrations, and SAP Business One through DI API and Service Layer.',
        projects: [
          {
            title: 'Payment POS device integrations',
            details: 'Built integrations with POS devices and payment providers such as GetNet, Transbank, and BCIPagos.',
          },
          {
            title: 'Mobile administration and reporting app',
            details:
              'Built a Flutter app to manage SAP B1 integration settings and report pending document synchronization between POS systems and SAP.',
          },
          {
            title: 'Document information web API',
            details: 'Created a REST API to expose RMS/POS document information to external providers.',
          },
        ],
      },
      {
        company: 'Faros Asesores',
        period: '2023 - 2025',
        role: 'Full Stack Developer',
        description:
          'Developed microservices, web applications, and mobile applications, contributing to process modeling, system integration, and operational workflow automation.',
        projects: [
          {
            title: 'RFID inventory management web application',
            details:
              'Built an inventory solution using Node.js, React, and MongoDB, adapting logistics processes such as purchase orders, shipment notices, packing lists, and inventory counts.',
          },
          {
            title: 'ASN control dashboard',
            details: 'Developed a dashboard for ASN generation, tracking, and processing in logistics workflows.',
          },
        ],
      },
      {
        company: 'Independent Professional',
        period: '2021 - Present',
        role: 'Full Stack Developer',
        description:
          'Build independent projects focused on productivity, entertainment, and practical digital tools while continuing to expand cloud, CI/CD, and AI-assisted development knowledge.',
        projects: [
          {
            title: 'Linux brightness control app',
            details: 'Built a Python desktop interface to control screen brightness in Linux environments.',
          },
          {
            title: 'Unity games and prototypes',
            details: 'Created interactive games and prototypes versioned on GitHub, applying gameplay logic, scene management, and UI work.',
          },
          {
            title: 'Owlbear Rodeo extension',
            details: 'Built an extension for dice rolling workflows inside Owlbear Rodeo.',
          },
          {
            title: 'Independent music apps',
            details: 'Developed Python websites, music players, and mobile applications for independent music projects.',
          },
        ],
      },
    ],
  },
};

function getLanguageFromPath() {
  const segments = window.location.pathname.split('/').filter(Boolean);
  if (segments.includes('en')) return 'en';
  return 'es';
}

function getLocalizedPath(targetLanguage) {
  const segments = window.location.pathname.split('/').filter(Boolean);
  const languageIndex = segments.findIndex((segment) => segment === 'es' || segment === 'en');

  if (languageIndex >= 0) {
    segments[languageIndex] = targetLanguage;
  } else {
    segments.push(targetLanguage);
  }

  return `/${segments.join('/')}/`;
}

function App() {
  const language = getLanguageFromPath();
  const copy = content[language];
  const profile = { ...profileBase, role: 'Full Stack Developer' };

  React.useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
    document.title = `${profile.name} | ${profile.role}`;
  }, [copy.htmlLang, profile.name, profile.role]);

  return (
    <main>
      <nav className="language-switch" aria-label="Language selector">
        <span>{copy.languageLabel}</span>
        <a href={getLocalizedPath(copy.switchTo)}>{copy.switchLabel}</a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero__summary">{copy.summary}</p>

          <div className="hero__actions" aria-label={copy.contactAria}>
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              {copy.contactButton}
            </a>
            <a className="button button--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <dl className="contact-list">
            <div>
              <dt>{copy.emailLabel}</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>{copy.phoneLabel}</dt>
              <dd>
                <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
              </dd>
            </div>
            <div>
              <dt>{copy.locationLabel}</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>{copy.languageInfoLabel}</dt>
              <dd>{copy.languageInfo}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="band">
        <div className="container highlight-grid" aria-label={copy.highlightsAria}>
          {copy.highlights.map((item) => (
            <article className="highlight" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container split">
        <aside className="sidebar" aria-label={copy.sidebarAria}>
          <section>
            <h2>{copy.stackTitle}</h2>
            <div className="skill-groups">
              {copy.skills.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2>{copy.strengthsTitle}</h2>
            <ul className="strengths">
              {copy.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="education">
            <h2>{copy.educationTitle}</h2>
            <p>{copy.educationText}</p>
            <span>Duoc UC · 2019 - 2022</span>
          </section>

          <section className="certifications">
            <h2>{copy.certificationsTitle}</h2>
            <ul>
              {copy.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </aside>

        <section className="timeline" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">{copy.experienceEyebrow}</p>
            <h2 id="experience-title">{copy.experienceTitle}</h2>
          </div>

          {copy.experiences.map((experience) => (
            <article className="experience" key={experience.company}>
              <div className="experience__header">
                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
                <span>{experience.period}</span>
              </div>
              <p>{experience.description}</p>

              {experience.projects.length > 0 && (
                <div className="projects">
                  {experience.projects.map((project) => (
                    <div className="project" key={project.title}>
                      <h4>{project.title}</h4>
                      <p>{project.details}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
