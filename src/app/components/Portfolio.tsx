import Image from "next/image";
import type { ReactNode } from "react";
import {
  academicProject,
  capabilities,
  companies,
  eventPosts,
  experience,
  profile,
  projects,
  technologies,
  technologyTags,
} from "@/content/portfolio";
import { ui, type Language } from "@/content/locale";
import {
  englishCapabilities,
  englishCompanyDetails,
  englishEvents,
  englishExperience,
  englishMedia,
  englishProfile,
  englishProjects,
  englishTechnologyDetails,
} from "@/content/portfolio.en";
import ProfileFeed from "./ProfileFeed";
import ProjectMedia from "./ProjectMedia";
import SharePost from "./SharePost";
import LikePost from "./LikePost";
import HeaderControls from "./HeaderControls";
import styles from "../portfolio.module.css";

const paths = {
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m12-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6m-2-16-4 20",
  work: "M3 7h18v13H3zM8 7V4h8v3M3 12h18",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  pin: "M19 10c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Zm-4 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  link: "M10 13a4 4 0 0 0 6 0l4-4a4 4 0 0 0-6-6l-2 2m2 6a4 4 0 0 0-6 0l-4 4a4 4 0 0 0 6 6l2-2",
  external: "M7 17 17 7M7 7h10v10",
  reply: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l2.4-3.2A8.5 8.5 0 1 1 21 11.5Z",
  post: "M5 3h14v18H5zM8 8h8m-8 4h8m-8 4h5",
  linkedin: "M4 9v11M4 5v.01M9 20V9m0 5a4 4 0 0 1 8 0v6",
} as const;

function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

function Avatar({ large = false, language = "es" }: { large?: boolean; language?: Language }) {
  return (
    <Image
      className={large ? styles.profileAvatar : styles.avatar}
      src="/profile-pf.webp"
      alt={large ? ui[language].photoOf(profile.name) : ""}
      width={large ? 108 : 38}
      height={large ? 108 : 38}
      preload={large}
    />
  );
}

function TechnologyTag({ name }: { name: string }) {
  const visual = technologyTags[name];
  return (
    <span className={styles.hashtag} title={name}>
      {visual?.logo ? (
        <Image src={visual.logo} alt="" width={15} height={15} />
      ) : (
        <Icon name="code" />
      )}
      #{visual?.tag ?? name.replace(/\s+/g, "")}
    </span>
  );
}

function Post({
  language,
  id,
  label,
  title,
  children,
  logo,
  author,
  published,
  activity = false,
}: {
  language: Language;
  id?: string;
  label: string;
  title: string;
  children: ReactNode;
  logo?: string;
  author?: { name: string; logo: string };
  published?: { iso: string; label: string };
  activity?: boolean;
}) {
  return (
    <article
      className={activity ? `${styles.post} ${styles.activityPost}` : styles.post}
      id={id}
      tabIndex={id ? -1 : undefined}
    >
      <div className={styles.postGrid}>
        {author ? (
          <Image
            className={styles.authorAvatar}
            src={author.logo}
            alt=""
            width={38}
            height={38}
          />
        ) : (
          <Avatar />
        )}
        <div className={styles.postBody}>
          <div className={styles.postMeta}>
            <strong>{author?.name ?? profile.name}</strong>
            {activity && (
              <span className={styles.postHandle}>{profile.handle}</span>
            )}
            {published ? (
              <span className={styles.postDate}>
                <span aria-hidden="true">·</span>
                <a href={`#${id}`} aria-label={`${ui[language].open} ${title} · ${published.label}`}>
                  <time dateTime={published.iso}>{published.label}</time>
                </a>
              </span>
            ) : (
              <>
                <span aria-hidden="true">·</span>
                <span>{label}</span>
              </>
            )}
          </div>
          {!activity && (
            <h2>
              {logo && (
                <Image
                  className={styles.inlineLogo}
                  src={logo}
                  alt=""
                  width={34}
                  height={28}
                  unoptimized={logo.endsWith(".ico")}
                />
              )}
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </article>
  );
}

function ThreadReply({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <li className={styles.reply}>
      <Avatar />
      <div>
        <div className={styles.postMeta}>
          <strong>{profile.name}</strong>
          <span>· {title}</span>
        </div>
        {children}
      </div>
    </li>
  );
}

type Project = (typeof projects)[number] | typeof academicProject;

function PostPermalink({ id, name, language }: { id: string; name: string; language: Language }) {
  return (
    <a
      className={styles.postPermalink}
      href={`#${id}`}
      aria-label={`${ui[language].linkTo} ${name}`}
      title={ui[language].postLink}
    >
      <Icon name="link" />
    </a>
  );
}

function ViewerPost({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <div className={styles.viewerAuthor}>
        <Avatar />
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.handle}</span>
        </div>
      </div>
      <h2>{title}</h2>
      {children}
    </>
  );
}

const englishDate = new Intl.DateTimeFormat("en-US", {
  month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
});

function postDate(published: { iso: string; label: string }, language: Language) {
  return language === "es"
    ? published
    : { ...published, label: englishDate.format(new Date(published.iso)) };
}

function postMedia(media: Project["media"], language: Language) {
  if (language === "es") return media;
  return media.map((image) => {
    const translation = englishMedia[image.src];
    if (!translation) return image;
    const [alt, caption] = translation;
    return { ...image, alt, caption };
  });
}

function ProjectPost({ entry, language }: { entry: Project; language: Language }) {
  const text = ui[language];
  const project = language === "en" ? { ...entry, ...englishProjects[entry.id] } : entry;
  const published = "published" in entry ? postDate(entry.published, language) : undefined;

  return (
    <Post
      language={language}
      id={project.id}
      label={project.category}
      title={project.name}
      logo={project.logo}
      published={published}
      activity={!!published}
    >
      {published ? (
        <a className={styles.activityText} href={`#${project.id}`}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </a>
      ) : (
        <>
          <p className={styles.lead}>{project.summary}</p>
          <p>{project.description}</p>
        </>
      )}
      <ProjectMedia
        language={language}
        postId={project.id}
        name={project.name}
        media={postMedia(project.media, language)}
        compact={!!published}
        postContent={<ViewerPost title={project.name}><p>{project.description}</p></ViewerPost>}
      />
      <ul className={styles.tags} aria-label={text.tech}>
        {project.stack.map((tech) => (
          <li key={tech}>
            <TechnologyTag name={tech} />
          </li>
        ))}
      </ul>
      <div className={styles.postActions}>
        <details className={styles.details} open>
          <summary>
            <Icon name="reply" /> {text.replyCount}
          </summary>
          <ol
            className={styles.replies}
            aria-label={`${text.threadReplies} ${project.name}`}
          >
            <ThreadReply title={text.context}>
              <p>{project.problem}</p>
            </ThreadReply>
            <ThreadReply title={text.contribution}>
              <p>{project.contribution}</p>
            </ThreadReply>
            <ThreadReply title={text.features}>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className={styles.muted}>{project.note}</p>
            </ThreadReply>
          </ol>
        </details>
        <div className={styles.postButtons}>
          <LikePost id={project.id} name={project.name} language={language} />
          {published ? (
            <SharePost id={project.id} name={project.name} language={language} />
          ) : (
            <PostPermalink id={project.id} name={project.name} language={language} />
          )}
        </div>
      </div>
      {"link" in project && project.link && (
        <a
          className={styles.textLink}
          href={project.link}
          {...(project.link.startsWith("https:")
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          {project.linkLabel}
          <Icon name="external" />
        </a>
      )}
    </Post>
  );
}

function EventPost({ event, language }: { event: (typeof eventPosts)[number]; language: Language }) {
  const { id, name, published, media, aspectRatio } = event;
  const { description, context } = language === "en" ? englishEvents[id] ?? event : event;

  return (
    <Post id={id} title={name} label={ui[language].event} published={postDate(published, language)} language={language} activity>
      <a className={styles.activityText} href={`#${id}`}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{context}</p>
      </a>
      <ProjectMedia
        language={language}
        postId={id}
        name={name}
        media={postMedia(media, language)}
        compact
        aspectRatio={aspectRatio}
        postContent={
          <ViewerPost title={name}>
            <p>{description}</p>
            <p>{context}</p>
          </ViewerPost>
        }
      />
      <div className={styles.activityActions}>
        <LikePost id={id} name={name} language={language} />
        <SharePost id={id} name={name} language={language} />
      </div>
    </Post>
  );
}

const activity = [academicProject, ...eventPosts]
  .sort((first, second) => second.published.iso.localeCompare(first.published.iso));

function ExperiencePosts({ language }: { language: Language }) {
  return (
    <ol className={styles.timeline}>
      {experience.map((job) => {
        const copy = language === "en" ? englishExperience[job.company] : job;
        return (
          <li key={job.company}>
            <Post
              language={language}
              label={copy.period}
              title={copy.role}
              author={companies.find(({ name }) => name === job.company)}
            >
              <p>{copy.description}</p>
              <p className={styles.muted}>{copy.previous}</p>
            </Post>
          </li>
        );
      })}
    </ol>
  );
}

function AboutPosts({ language }: { language: Language }) {
  const text = ui[language];
  return (
    <>
      <Post language={language} label={text.profile} title={text.sections.perfil}>
        <p>{text.about}</p>
      </Post>
      <Post language={language} id="formacion" label={text.education} title={text.degree}>
        <p className={styles.lead}>Universidad de Guayaquil</p>
        <p>{text.thesis}</p>
        <a className={styles.textLink} href="#odin">
          {text.viewOdin} <Icon name="external" />
        </a>
      </Post>
      <Post language={language} label="Software" title={text.tools}>
        <ul className={styles.techStrip} aria-label={text.mainTech}>
          {technologies.map(({ name }) => (
            <li key={name}>
              <TechnologyTag name={name} />
            </li>
          ))}
        </ul>
        <dl className={styles.capabilities}>
          {capabilities.map((item) => {
            const copy = language === "en" ? { ...item, ...englishCapabilities[item.number] } : item;
            return (
              <div key={item.number}>
                <dt>{copy.name}</dt>
                <dd>{copy.stack}</dd>
              </div>
            );
          })}
        </dl>
      </Post>
    </>
  );
}

function getContacts(language: Language) {
  return [
    { name: ui[language].email, value: profile.email, href: "mailto:" + profile.email },
    { name: "LinkedIn", value: profile.fullName, href: profile.linkedin },
    { name: "GitHub", value: "fernanjacome", href: profile.github },
  ];
}

function ContactPosts({ language }: { language: Language }) {
  return getContacts(language).map((contact) => (
    <Post key={contact.name} language={language} label={ui[language].sections.contacto} title={contact.name}>
      <a
        className={styles.textLink}
        href={contact.href}
        {...(contact.href.startsWith("https:")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {contact.value}
        <Icon name="external" />
      </a>
    </Post>
  ));
}

export default function Portfolio({ language }: { language: Language }) {
  const text = ui[language];
  const introduction = language === "en" ? englishProfile.introduction : profile.introduction;
  const activityPosts = activity.map((entry) => ({
    id: entry.id,
    content: "stack" in entry
      ? <ProjectPost entry={entry} language={language} />
      : <EventPost event={entry} language={language} />,
  }));

  return (
    <div className={styles.shell}>
      <a className="skip-link" href="#contenido">
        {text.skip}
      </a>
      <aside className={styles.rail} aria-label={text.navigation}>
        <a href="#inicio" className={styles.railBrand} aria-label={text.home}>
          <Image src="/brand.png" alt="" width={42} height={42} />
        </a>
        <nav>
          <a href="#inicio">
            <Icon name="user" />
            {text.profile}
          </a>
          <a href="#experiencia">
            <Icon name="work" />
            {text.sections.experiencia}
          </a>
          <a href="#proyectos">
            <Icon name="code" />
            {text.sections.proyectos}
          </a>
          <a href="#posts">
            <Icon name="post" />
            {text.sections.posts}
          </a>
          <a href="#contacto">
            <Icon name="mail" />
            {text.sections.contacto}
          </a>
        </nav>
      </aside>

      <main className={styles.main} id="contenido">
        <header className={styles.topBar}>
          <Image src="/brand.png" alt="" width={30} height={30} />
          <div>
            <strong>{profile.name}</strong>
            <span>{text.portfolio}</span>
          </div>
          <HeaderControls language={language} />
        </header>
        <section id="inicio" className={styles.profileSection} aria-labelledby="profile-name">
          <div className={styles.cover}>
            <Image
              src="/profile-banner.webp"
              alt={text.banner}
              fill
              sizes="(max-width: 660px) 100vw, 600px"
              preload
            />
          </div>
          <div className={styles.profile}>
            <div className={styles.profileTop}>
              <Avatar large language={language} />
              <a className={styles.followButton} href="#contacto">
                {text.follow}
              </a>
            </div>
            <h1 id="profile-name">{profile.name}</h1>
            <p className={styles.handle}>{profile.handle}</p>
            <p className={styles.role}>Full Stack Software Engineer</p>
            <p className={styles.bio}>{introduction}</p>
            <ul className={styles.profileTags} aria-label={text.profileTags}>
              {profile.tags.map((tag) => <li key={tag}>#{tag}</li>)}
            </ul>
            <ul
              className={styles.profileMeta}
              aria-label={text.profileInfo}
            >
              <li>
                <Icon name="work" /> Alexsoft S.A.
              </li>
              <li>
                <Icon name="pin" /> {profile.location}
              </li>
              <li>
                <Icon name="link" />{" "}
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/fernanjacome
                </a>
              </li>
              <li>
                <Icon name="linkedin" />{" "}
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </section>
        <ProfileFeed
          language={language}
          activityPosts={activityPosts}
          postSections={{
            ...Object.fromEntries(
              projects.map(({ id }) => [id, "proyectos"] as const),
            ),
            ...Object.fromEntries(
              activityPosts.map(({ id }) => [id, "posts"] as const),
            ),
            formacion: "perfil",
          }}
          panels={{
            proyectos: projects.map((project) => (
              <ProjectPost key={project.id} entry={project} language={language} />
            )),
            experiencia: <ExperiencePosts language={language} />,
            perfil: <AboutPosts language={language} />,
            contacto: <ContactPosts language={language} />,
          }}
        />
      </main>

      <aside
        className={styles.sidebar}
        aria-label={text.sidebar}
      >
        <section className={styles.sideSection}>
          <h2>{text.companies}</h2>
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              className={styles.sideProject}
              {...(company.url.startsWith("https:")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <Image src={company.logo} alt="" width={38} height={38} />
              <span>
                <strong>{company.name}</strong>
                <small>{language === "en" ? englishCompanyDetails[company.name] : company.detail}</small>
              </span>
              <span className={styles.companyAction}>{text.visit}</span>
            </a>
          ))}
        </section>
        <section className={styles.sideSection}>
          <h2>{text.trends}</h2>
          <ul className={styles.trends} aria-label={text.techUsed}>
            {technologies.map(({ name, detail, logo }) => (
              <li key={name}>
                <Image src={logo} alt="" width={23} height={23} />
                <span>
                  <small>{language === "en" ? englishTechnologyDetails[name] : detail}</small>
                  <strong>#{technologyTags[name]?.tag ?? name}</strong>
                </span>
              </li>
            ))}
          </ul>
        </section>
        <nav className={styles.sideLinks} aria-label={text.externalLinks}>
          {getContacts(language).map((contact) => (
            <a
              className={styles.sideLink}
              key={contact.name}
              href={contact.href}
              {...(contact.href.startsWith("https:")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <span>{contact.name}</span>
            </a>
          ))}
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
      </aside>
    </div>
  );
}
