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
import { LagosClock } from "./lagos-clock";
import { ThemeToggle } from "./theme-toggle";

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function SectionHead({ num, title, note }: { num: string; title: string; note?: string }) {
  return (
    <header className="section-head">
      <span className="num">{num}</span>
      <h2>{title}</h2>
      {note ? <p className="section-note">{note}</p> : null}
    </header>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            Olabiyi Olaleye
          </a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#notes">Notes</a>
            <a href="#day-job">Day job</a>
            <a href="#data">Data</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a className="text-link" href={profile.cv} download>
              CV
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero wrap">
          <div className="hero-text">
            <p className="meta">
              <span className="dot" aria-hidden="true" />
              {profile.status}
              <span className="sep" aria-hidden="true">
                /
              </span>
              <LagosClock />
            </p>
            <h1>
              Olabiyi
              <br />
              <em>Olaleye</em>
            </h1>
            <p className="lead">
              Software engineer in Lagos. I build web and mobile products that people pay through, book through and check
              in with.
            </p>
            <p className="sub">
              Six years of React, most of it on Nigerian products: event ticketing, lending, property deals and short-let
              bookings. TypeScript on the front end, Node behind it, and SQL when the numbers in production stop adding up.
            </p>
            <div className="actions">
              <Ext className="btn primary" href={profile.cal}>
                Book a 20-minute call
              </Ext>
              <a className="btn" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn ghost" href={profile.cv} download>
                Download CV
              </a>
            </div>
          </div>
          <figure className="hero-photo">
            <Image src={profile.photo} alt="Olabiyi Olaleye" width={420} height={420} priority />
            <figcaption>
              <span>{profile.stackLine}</span>
            </figcaption>
          </figure>
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
          <SectionHead num="01" title="Things I've built" note="Both are live. Try the demo, then read the code." />
          <div className="projects">
            {projects.map((p, i) => (
              <article key={p.name} className={`project ${i % 2 ? "flip" : ""}`}>
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="shot" aria-label={`Open the ${p.name} demo`}>
                  <Image src={p.image} alt={p.imageAlt} width={1124} height={700} />
                </a>
                <div className="project-body">
                  <p className="eyebrow">{p.tagline}</p>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <h4>What I did</h4>
                  <ul className="list">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <p className="stack">{p.stack.join(" · ")}</p>
                  <p className="links">
                    <Ext href={p.demo}>Live demo ↗</Ext>
                    <Ext href={p.code}>Code on GitHub ↗</Ext>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="notes" className="wrap section">
          <SectionHead
            num="02"
            title="Engineering notes"
            note="Problems that only showed up with real users, and the code that fixed them."
          />
          <div className="notes">
            {notes.map((n) => (
              <article key={n.title} className="note">
                <div className="note-text">
                  <p className="eyebrow">{n.project}</p>
                  <h3>{n.title}</h3>
                  <p>{n.problem}</p>
                  <p className="fix">
                    <strong>Fix.</strong> {n.fix}
                  </p>
                  <Ext href={n.href} className="more">
                    See it on GitHub ↗
                  </Ext>
                </div>
                <figure className="code">
                  <figcaption>{n.file}</figcaption>
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
            num="03"
            title="From my day job"
            note="Company work, so there's no code here. What the problem was, and my part in fixing it."
          />
          <div className="cases">
            {caseStudies.map((c) => (
              <article key={c.title} className="case">
                <p className="eyebrow">{c.context}</p>
                <h3>{c.title}</h3>
                <p>{c.problem}</p>
                <h4>My part</h4>
                <ul className="list">
                  {c.work.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="data" className="wrap section">
          <SectionHead num="04" title="Data work" note="Analysis projects, each with a full write-up and the queries or files." />
          <ul className="rows">
            {dataProjects.map((d) => (
              <li key={d.name}>
                <Ext href={d.href} className="row">
                  <span className="row-tool">{d.tool}</span>
                  <span className="row-name">{d.name}</span>
                  <span className="row-note">{d.note}</span>
                  <span className="row-go" aria-hidden="true">
                    ↗
                  </span>
                </Ext>
              </li>
            ))}
          </ul>
        </section>

        <section className="wrap section two-col">
          <div>
            <SectionHead num="05" title="Where I've worked" />
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.org + e.when}>
                  <span className="when">{e.when}</span>
                  <div>
                    <strong>{e.role}</strong>
                    <span className="org">
                      {e.org} · {e.where}
                    </span>
                    <span className="muted">{e.note}</span>
                  </div>
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
            <SectionHead num="06" title="What I work with" />
            <dl className="skills">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <p className="num">07</p>
          <h2>
            Let&rsquo;s <em>talk.</em>
          </h2>
          <p className="contact-text">
            I&rsquo;m looking for a remote frontend, full-stack or mobile role, ideally one where the data side gets used
            too. A 20-minute call or an email is the quickest way to reach me.
          </p>
          <a className="big-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="actions">
            <Ext className="btn primary" href={profile.cal}>
              Book a 20-minute call
            </Ext>
            <Ext className="btn" href={profile.linkedin}>
              LinkedIn
            </Ext>
            <Ext className="btn" href={profile.github}>
              GitHub
            </Ext>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <p>
          © {new Date().getFullYear()} {profile.name}, Lagos, Nigeria. Built with Next.js, hosted on Vercel.{" "}
          <Ext href="https://github.com/olabiyi-olaleye/olabiyi-portfolio">Source</Ext>
        </p>
      </footer>
    </>
  );
}
