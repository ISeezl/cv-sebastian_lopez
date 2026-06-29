import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'Sebastian Lopez',
  role: 'Full Stack Developer',
  email: 'se.lopezmunoz@gmail.com',
  phone: '+56 9 3336 7642',
  linkedin: 'https://www.linkedin.com/in/selopezmu/',
  summary:
    'Desarrollador full stack orientado a soluciones empresariales, banca, integraciones POS, SAP B1, aplicaciones web y móviles. Combina experiencia en React, .NET, Node.js, Flutter y bases de datos SQL/NoSQL para construir productos mantenibles, seguros y conectados a procesos reales de negocio.',
};

const highlights = [
  'Optimización de procesos financieros',
  'Integraciones POS de pago',
  'Microservicios y APIs REST',
  'Procesos retail, RFID y logística',
];

const experiences = [
  {
    company: 'Stefanini / HSBC Bank',
    period: 'Enero 2026 - Presente',
    description:
      'Desarrollo full stack en proyecto de optimización para el área de finanzas de HSBC Bank. Participación en la construcción de una aplicación web con React y API web en C#, enfocada en mejorar procesos internos, reducir fricción operativa y entregar una base técnica mantenible para evolución continua.',
    projects: [
      {
        title: 'Aplicación web para procesos financieros',
        details:
          'Implementación de interfaces en React y servicios backend en C# para apoyar la digitalización, seguimiento y optimización de procesos del área de finanzas.',
      },
    ],
  },
  {
    company: 'Retail Custom Solution',
    period: '2021 - 2025',
    description:
      'Desarrollo full stack de soluciones informáticas con .NET y consultoría de proyectos para puntos de venta en clientes de los sectores ferretero, retail y cárnico. Foco en mejora continua de RMS.NET/POS.NET e integraciones con herramientas externas, incluyendo SAP B1 mediante DI API y Service Layer.',
    projects: [
      {
        title: 'Integración de dispositivos POS de pago',
        details:
          'Integración con dispositivos y proveedores de pago como GetNet, Transbank y BCIPagos.',
      },
      {
        title: 'Aplicación mobile de administración y reportería',
        details:
          'Aplicación Flutter para gestionar configuraciones de integración con SAP B1 y reportar estados de documentos pendientes entre punto de venta y SAP.',
      },
      {
        title: 'API web de información de documentos',
        details:
          'API REST para disponibilizar información de RMS/POS a proveedores externos del sistema.',
      },
    ],
  },
  {
    company: 'Faros Asesores',
    period: '2023 - 2025',
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
        details:
          'Desarrollo de tablero para generación, seguimiento y procesamiento de ASN en procesos logísticos.',
      },
    ],
  },
  {
    company: 'Profesional Independiente',
    period: '2021 - Presente',
    description:
      'Desarrollo de soluciones para aplicaciones de música independiente, incluyendo páginas web en Python, reproductores de música y aplicaciones móviles.',
    projects: [],
  },
];

const skills = [
  { label: 'Lenguajes', items: ['Python', 'Java', 'TypeScript', 'C#', 'VB.NET'] },
  { label: 'Frameworks', items: ['Spring Boot', 'Django', 'React', '.NET', 'Flutter'] },
  { label: 'Bases de datos', items: ['SQL Server', 'MongoDB', 'Oracle SQL'] },
  { label: 'Prácticas', items: ['APIs RESTful', 'Scrum', 'Integraciones SAP B1'] },
];

const strengths = [
  'Autodidacta',
  'Adaptabilidad tecnológica',
  'Metódico',
  'Aprendizaje rápido',
  'Organizado',
  'Resolución de problemas',
  'Responsabilidad',
];

const certifications = [
  'Security Code Warrior - White Belt',
  'Security Code Warrior - Yellow Belt',
];

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions" aria-label="Canales de contacto">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Contactar
            </a>
            <a className="button button--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>Teléfono</dt>
              <dd>
                <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="band">
        <div className="container highlight-grid" aria-label="Especialidades principales">
          {highlights.map((item) => (
            <article className="highlight" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container split">
        <aside className="sidebar" aria-label="Resumen profesional">
          <section>
            <h2>Stack Técnico</h2>
            <div className="skill-groups">
              {skills.map((group) => (
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
            <h2>Aptitudes</h2>
            <ul className="strengths">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="education">
            <h2>Educación</h2>
            <p>Titulado en Analista Programador Computacional</p>
            <span>Duoc UC · 2019 - 2022</span>
          </section>

          <section className="certifications">
            <h2>Certificaciones</h2>
            <ul>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </aside>

        <section className="timeline" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">Experiencia Profesional</p>
            <h2 id="experience-title">Trayectoria orientada a integraciones y producto</h2>
          </div>

          {experiences.map((experience) => (
            <article className="experience" key={experience.company}>
              <div className="experience__header">
                <h3>{experience.company}</h3>
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
