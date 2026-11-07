import {
  capabilities,
  experience,
  profile,
  projects,
} from "@/content/portfolio";
import styles from "./portfolio.module.css";
import Image from "next/image";
import ProjectMedia from "./components/ProjectMedia";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.shell}>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <header className={styles.header}>
        <a
          href="#inicio"
          className={styles.brand}
          aria-label="Fernando Jácome, inicio"
        >
          <span className={styles.monogram} aria-hidden="true">
            fj.
          </span>
          {profile.name}
        </a>
        <nav className={styles.nav} aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#perfil">Perfil</a>
          <a className={styles.navContact} href="#contacto">
            Contacto
          </a>
        </nav>
      </header>
      <main id="contenido">
        <section id="inicio" className={styles.hero} aria-labelledby="titulo">
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            Full Stack Software Engineer
          </p>
          <div className={styles.heroGrid}>
            <div>
              <h1 id="titulo">
                Fernando
                <br />
                <span>Jácome.</span>
              </h1>
              <p className={styles.heroCopy}>{profile.introduction}</p>
              <p className={styles.currentRole}>
                <span aria-hidden="true" />
                Alexsoft · Arquitectura en Sistemas
              </p>
              <div className={styles.actions}>
                <a className={styles.primary} href="#proyectos">
                  Ver proyectos <Arrow />
                </a>
                <a
                  className={styles.secondary}
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <Arrow diagonal />
                </a>
              </div>
            </div>
            <div
              className={styles.heroMedia}
              aria-label="Vistas de mis proyectos"
            >
              <a
                href="#odin"
                className={styles.heroMainShot}
                aria-label="Ver proyecto ODIN"
              >
                <div className={styles.windowBar}>
                  <span className={styles.windowDots} aria-hidden="true">
                    ● ● ●
                  </span>
                  <span>ODIN / Monitoreo ATM</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <Image
                  src="/projects/odin-cajeros.webp"
                  alt="Dashboard ODIN con monitoreo de cajeros simulados"
                  width={1600}
                  height={786}
                  sizes="(max-width: 760px) 90vw, 600px"
                  priority
                />
              </a>
              <a
                href="#hermanoscourier"
                className={styles.heroFloatingShot}
                aria-label="Ver proyecto Hermanos Courier"
              >
                <Image
                  src="/projects/courier-tracking.webp"
                  alt="Portal de seguimiento de Hermanos Courier"
                  width={1600}
                  height={900}
                  sizes="(max-width: 760px) 60vw, 340px"
                />
                <span>
                  Hermanos Courier <Arrow diagonal />
                </span>
              </a>
              <div className={styles.heroBadge}>
                <Image src="/logos/eva.webp" alt="" width={38} height={38} />
                <span>
                  EVA Studio<small>Electron / React</small>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.heroFoot}>
            <span>{profile.location} · Experiencia profesional desde 2022</span>
            <div className={styles.techRail}>
              <span>
                <Image src="/logos/dotnet.webp" alt="" width={22} height={22} />
                C# / .NET
              </span>
              <span>
                <Image src="/logos/react.webp" alt="" width={24} height={22} />
                React
              </span>
              <span>
                <Image
                  src="/logos/sqlserver.svg"
                  alt=""
                  width={22}
                  height={22}
                />
                SQL Server
              </span>
            </div>
          </div>
        </section>
        <section
          id="proyectos"
          className={styles.section}
          aria-labelledby="proyectos-titulo"
        >
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>01 / Trabajo seleccionado</p>
            <div>
              <h2 id="proyectos-titulo">Proyectos</h2>
              <p className={styles.sectionIntro}>
                Trabajo académico, proyectos independientes y experiencia en
                sistemas bancarios.
              </p>
            </div>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className={`${styles.project} ${project.id === "odin" || project.id === "plataformas-atm" ? styles.wideProject : ""}`}
              >
                <div
                  className={`${styles.projectVisual} ${styles[project.kind] ?? ""}`}
                  aria-label={`Material visual de ${project.name}`}
                >
                  {project.media.length ? (
                    <ProjectMedia name={project.name} media={project.media} />
                  ) : (
                    <div className={styles.toolArtwork}>
                      <span className={styles.toolLabel}>
                        EVA / DEVELOPMENT TOOLS
                      </span>
                      <Image
                        src={project.logo}
                        alt="Logo de EVA Studio"
                        width={160}
                        height={160}
                      />
                      <div className={styles.toolModules}>
                        <span>〈/〉 XML</span>
                        <span>⇄ Comparador</span>
                        <span>▧ Pantallas</span>
                        <span>⚙ Compilador</span>
                      </div>
                      <p>Aplicación de escritorio · Electron + React</p>
                    </div>
                  )}
                </div>
                <div>
                  <p className={styles.projectMeta}>
                    {project.number} / {project.category}
                  </p>
                  <div className={styles.projectIdentity}>
                    <Image
                      src={project.logo}
                      alt=""
                      width={
                        project.id === "odin" ||
                        project.id === "plataformas-atm"
                          ? 40
                          : 110
                      }
                      height={40}
                      className={styles.projectLogo}
                    />
                    <h3>{project.name}</h3>
                  </div>
                  <p className={styles.projectSummary}>{project.summary}</p>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <ul
                    className={styles.tags}
                    aria-label="Tecnologías y enfoque"
                  >
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <details className={styles.details}>
                    <summary>Ver detalles y participación</summary>
                    <div className={styles.detailBody}>
                      <p>
                        <strong>Problema. </strong>
                        {project.problem}
                      </p>
                      <p>
                        <strong>Mi participación. </strong>
                        {project.contribution}
                      </p>
                      <ul>
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <a
                        href={project.link}
                        {...(project.link.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {project.linkLabel} ↗
                      </a>
                      <small>{project.note}</small>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="experiencia"
          className={styles.section}
          aria-labelledby="experiencia-titulo"
        >
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>02 / Trayectoria</p>
            <div>
              <h2 id="experiencia-titulo">Experiencia</h2>
              <p className={styles.sectionIntro}>
                Desarrollo empresarial, integración de sistemas y productos web.
              </p>
            </div>
          </div>
          <div className={styles.experienceList}>
            {experience.map((job) => (
              <article key={job.company} className={styles.job}>
                <div className={styles.jobMeta}>
                  <span>{job.company}</span>
                  <span>{job.period}</span>
                </div>
                <h3>{job.role}</h3>
                <p>{job.description}</p>
                <small>{job.previous}</small>
              </article>
            ))}
          </div>
        </section>
        <section
          id="perfil"
          className={styles.section}
          aria-labelledby="perfil-titulo"
        >
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>03 / Perfil & herramientas</p>
            <h2 id="perfil-titulo">Sobre mí</h2>
          </div>
          <div className={styles.aboutGrid}>
            <div id="formacion">
              <p className={styles.projectMeta}>Formación</p>
              <h3 className={styles.projectSummary}>Ingeniería en Software</h3>
              <p className={styles.projectDescription}>
                Universidad de Guayaquil
              </p>
              <p className={styles.sectionIntro}>
                Proyecto de titulación: ODIN, monitoreo y predicción del estado
                de gavetas de efectivo en una red de cajeros automáticos
                simulados.
              </p>
            </div>
            <div>
              <p className={styles.aboutText}>
                Desarrollo software desde 2022. Mi experiencia incluye
                aplicaciones empresariales, integración de servicios, bases de
                datos y despliegues en Windows y Linux.
              </p>
              <div className={styles.capabilities}>
                {capabilities.map((item) => (
                  <div className={styles.capability} key={item.name}>
                    <span>{item.number}</span>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <small>{item.stack}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="contacto"
          className={styles.contact}
          aria-labelledby="contacto-titulo"
        >
          <div>
            <p className={styles.eyebrow}>04 / Contacto</p>
            <h2 id="contacto-titulo">Contacto</h2>
            <p>Puedes escribirme por correo o encontrarme en estos perfiles.</p>
          </div>
          <div className={styles.contactLinks}>
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <Arrow diagonal />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <Arrow diagonal />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
              <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>{profile.location}</span>
        <a href="#inicio">Volver al inicio ↑</a>
      </footer>
    </div>
  );
}
