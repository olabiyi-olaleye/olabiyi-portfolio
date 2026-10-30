import Image from "next/image";
import {
  caseStudies,
  dataProjects,
  education,
  experience,
  notes,
  profile,
  projects,
  skillGroups,
  stats,
} from "./content";
import { ThemeToggle } from "./theme-toggle";

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function SectionHead({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <div className="section-head">
      <p className="kicker">
        <span className="accent">{index}</span> {"//"} {title.toLowerCase()}
      </p>
      <h2>{title}</h2>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#top" className="skip">
        Skip to content
      </a>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            <span className="accent">~/</span>
            {profile.handle}
          </a>
          <nav aria-label="Sections">
            <a href="#work">work</a>
            <a href="#notes">notes</a>
            <a href="#day-job">day job</a>
            <a href="#data">data</a>
            <a href="#contact">contact</a>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-sm" href={profile.cv} download>
              CV
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <p className="status">
              <span className="dot" aria-hidden="true" />
              {profile.status} · {profile.location}
            </p>
            <h1>{profile.name}</h1>
            <p className="role">
              {profile.role} <span className="muted">·</span> <span className="mono">{profile.stackLine}</span>
            </p>
            <p className="lead">{profile.intro}</p>
            <div className="actions">
              <Ext className="btn primary" href={profile.cal}>
                Book a 20-min call
              </Ext>
              <a className="btn" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn" href={profile.cv} download>
                Download CV
              </a>
            </div>
            <p className="links mono">
              <Ext href={profile.github}>github</Ext>
              <span aria-hidden="true">/</span>
              <Ext href={profile.linkedin}>linkedin</Ext>
            </p>
          </div>
          <div className="hero-photo">
            <Image src={profile.photo} alt="Olabiyi Olaleye" width={320} height={320} priority />
            <div className="photo-tag mono">
              <span className="accent">$</span> whoami
              <br />
              olabiyi · software engineer · lagos
            </div>
          </div>
        </section>

        <section className="wrap stats" aria-label="At a glance">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        <section id="work" className="wrap section">
          <SectionHead index="01" title="Things I've built" note="Both are live. Open the demo, then read the code." />
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="card project">
                <div className="shot">
                  <div className="shot-bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <span className="mono">{p.demo.replace("https://", "")}</span>
                  </div>
                  <Image src={p.image} alt={p.imageAlt} width={1124} height={700} />
                </div>
                <div className="project-body">
                  <p className="kicker">{p.tagline}</p>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <ul className="ticks">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="tags" aria-label="Built with">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="card-links">
                    <Ext href={p.demo}>Live demo ↗</Ext>
                    <Ext href={p.code}>Code on GitHub ↗</Ext>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="notes" className="wrap section">
          <SectionHead
            index="02"
            title="Engineering notes"
            note="Problems that only showed up with real users, and the code that fixed them."
          />
          <div className="notes">
            {notes.map((n) => (
              <article key={n.title} className="card note">
                <div className="note-text">
                  <p className="kicker">{n.project}</p>
                  <h3>{n.title}</h3>
                  <p>{n.problem}</p>
                  <p className="fix">
                    <span className="accent">fix:</span> {n.fix}
                  </p>
                  <Ext href={n.href} className="more">
                    See it on GitHub ↗
                  </Ext>
                </div>
                <figure className="code">
                  <figcaption className="mono">{n.file}</figcaption>
                  <pre tabIndex={0} aria-label={`Code from ${n.file}`}>
                    <code>{n.code}</code>
                  </pre>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section id="day-job" className="wrap section">
          <SectionHead
            index="03"
            title="From my day job"
            note="Company work, so there's no code here. This is what the problem was and what I did."
          />
          <div className="cases">
            {caseStudies.map((c) => (
              <article key={c.title} className="case">
                <h3>{c.title}</h3>
                <p className="case-context mono">{c.context}</p>
                <p>{c.problem}</p>
                <ul className="ticks">
                  {c.work.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="data" className="wrap section">
          <SectionHead index="04" title="Data work" note="Analysis projects, each with a full write-up and the queries or files." />
          <div className="data-grid">
            {dataProjects.map((d) => (
              <Ext key={d.name} href={d.href} className="card data-card">
                <span className="kicker">{d.tool}</span>
                <strong>{d.name}</strong>
                <span className="muted">{d.note}</span>
                <span className="more">Read it ↗</span>
              </Ext>
            ))}
          </div>
        </section>

        <section className="wrap section two-col">
          <div>
            <SectionHead index="05" title="Where I've worked" />
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.org + e.when}>
                  <span className="when mono">{e.when}</span>
                  <strong>{e.role}</strong>
                  <span className="org">
                    {e.org} · {e.where}
                  </span>
                  <span className="muted">{e.note}</span>
                </li>
              ))}
            </ol>
            <h3 className="small-heading">Education</h3>
            <ul className="plain">
              {education.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead index="06" title="What I work with" />
            <dl className="skills">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <dt className="mono">
                    <span className="accent">{g.label}</span>:
                  </dt>
                  <dd>{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <div className="card contact-card">
            <p className="kicker">
              <span className="accent">07</span> {"//"} contact
            </p>
            <h2>Let&rsquo;s talk</h2>
            <p>
              I&rsquo;m looking for a remote frontend, full-stack or mobile role, ideally where the data side gets used too.
              The quickest way to reach me is a 20-minute call or an email.
            </p>
            <div className="actions">
              <Ext className="btn primary" href={profile.cal}>
                Book a 20-min call
              </Ext>
              <a className="btn" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <p className="links mono">
              <Ext href={profile.github}>github</Ext>
              <span aria-hidden="true">/</span>
              <Ext href={profile.linkedin}>linkedin</Ext>
              <span aria-hidden="true">/</span>
              <a href={profile.cv} download>
                cv.pdf
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="wrap mono">
        <p className="footer">
          © {new Date().getFullYear()} {profile.name} · Lagos, Nigeria · built with Next.js, deployed on Vercel ·{" "}
          <Ext href="https://github.com/olabiyi-olaleye/olabiyi-portfolio">source</Ext>
        </p>
      </footer>
    </>
  );
}
