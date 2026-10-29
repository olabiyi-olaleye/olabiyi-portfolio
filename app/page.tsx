import {
  about,
  caseStudies,
  dataProjects,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "./content";

function ExternalLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">
            Olabiyi Olaleye
          </a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#case-studies">Case studies</a>
            <a href="#data">Data</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.intro}</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <ExternalLink className="btn" href={profile.linkedin}>
              LinkedIn
            </ExternalLink>
            <ExternalLink className="btn" href={profile.github}>
              GitHub
            </ExternalLink>
          </div>
        </section>

        <section className="wrap about">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </section>

        <section id="work" className="wrap section">
          <h2>Things I&rsquo;ve built</h2>
          <p className="section-note">Both are live. Open the demo, then read the code.</p>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="card project">
                <p className="eyebrow">{p.tagline}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul>
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
                  <ExternalLink href={p.demo}>Live demo ↗</ExternalLink>
                  <ExternalLink href={p.code}>Code on GitHub ↗</ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="case-studies" className="wrap section">
          <h2>From my day job</h2>
          <p className="section-note">
            This is client and company work, so there&rsquo;s no code here. It&rsquo;s what the problem was and what I did about it.
          </p>
          <div className="cases">
            {caseStudies.map((c) => (
              <article key={c.title} className="case">
                <h3>{c.title}</h3>
                <p className="case-context">{c.context}</p>
                <p>{c.problem}</p>
                <ul>
                  {c.work.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="data" className="wrap section">
          <h2>Data work</h2>
          <p className="section-note">Analysis projects from when I was sharpening the data side, each with a full write-up.</p>
          <div className="data-grid">
            {dataProjects.map((d) => (
              <ExternalLink key={d.name} href={d.href} className="card data-card">
                <span className="eyebrow">{d.tool}</span>
                <strong>{d.name}</strong>
                <span>{d.note}</span>
                <span className="more">Read it ↗</span>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="wrap section two-col">
          <div>
            <h2>What I work with</h2>
            <dl className="skills">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2>Where I&rsquo;ve worked</h2>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.org}>
                  <strong>{e.role}</strong>, {e.org}
                  <span>
                    {e.when} · {e.where}
                  </span>
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
        </section>

        <section id="contact" className="wrap section contact">
          <h2>Let&rsquo;s talk</h2>
          <p>
            I&rsquo;m looking for a remote frontend, full-stack or mobile role, ideally somewhere the data side gets used too. The
            quickest way to reach me is email.
          </p>
          <p className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <ExternalLink href={profile.linkedin}>LinkedIn ↗</ExternalLink>
            <ExternalLink href={profile.github}>GitHub ↗</ExternalLink>
          </p>
        </section>
      </main>

      <footer className="wrap footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · Lagos, Nigeria
        </p>
      </footer>
    </>
  );
}
