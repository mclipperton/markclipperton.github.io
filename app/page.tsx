const featuredWork = [
  {
    label: "FinTech onboarding",
    title: "Turned a 14-step account setup into a calm, three-minute flow.",
    summary:
      "Redesigned the first-run experience, clarified verification states, and reduced drop-off with progressive disclosure.",
    impact: "22% lift in completion",
    tags: ["UX strategy", "Flow design", "Content design"],
  },
  {
    label: "AI workspace",
    title: "Shaped a tool-first dashboard that lets teams find signal fast.",
    summary:
      "Built a modular canvas, reworked the information hierarchy, and gave the product a stronger editorial voice.",
    impact: "31% faster task discovery",
    tags: ["Information architecture", "Design systems", "Prototyping"],
  },
  {
    label: "Health app",
    title: "Made a dense care plan feel reassuring, not clinical.",
    summary:
      "Paired softer motion cues with clearer progress indicators so patients always know what happens next.",
    impact: "4.8/5 usability score",
    tags: ["Mobile UX", "Accessibility", "Motion"],
  },
];

const principles = [
  {
    title: "Make the first screen do the work",
    copy:
      "I design the opening view to answer three questions immediately: what is this, why does it matter, and what should happen next.",
  },
  {
    title: "Build systems, not one-offs",
    copy:
      "The final interface should feel effortless at launch and still scale when the product team doubles in size.",
  },
  {
    title: "Protect clarity under pressure",
    copy:
      "When a product gets complex, I simplify the hierarchy, trim the copy, and keep the interactions predictable.",
  },
];

const stats = [
  { value: "9", label: "years designing products" },
  { value: "28", label: "shipping cycles led" },
  { value: "11", label: "cross-functional launches" },
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Product designer • systems thinker • calm strategist</span>
          <h1>Designing digital products that feel sharp, human, and quietly confident.</h1>
          <p className="lede">
            I’m Mara Vale, a product designer who helps ambitious teams turn
            complicated ideas into clear, polished experiences. I work across
            strategy, interface design, and prototyping to move products from
            concept to launch with less noise and more momentum.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work
            </a>
            <a className="button button-secondary" href="#contact">
              Start a project
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Designer snapshot">
          <div className="hero-orb hero-orb-top" aria-hidden="true" />
          <div className="hero-orb hero-orb-bottom" aria-hidden="true" />
          <div className="panel-card panel-card-featured">
            <div className="panel-card-topline">
              <span>Current focus</span>
              <span>Remote, London</span>
            </div>
            <p>
              Crafting product narratives, interaction systems, and launch-ready
              interfaces for teams that need speed without sacrificing taste.
            </p>
          </div>

          <div className="panel-grid">
            <div className="panel-card">
              <span className="panel-label">Favorite tools</span>
              <strong>Figma, Framer, research notes, rapid prototypes</strong>
            </div>
            <div className="panel-card">
              <span className="panel-label">Design style</span>
              <strong>Editorial, tactile, and generous with whitespace</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="stats-row" aria-label="Experience summary">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <span className="eyebrow">Selected work</span>
          <h2>Focused on products where clarity changes the result.</h2>
          <p>
            A few projects that show how I think: structure first, polish second,
            then iterate until the experience feels obvious.
          </p>
        </div>

        <div className="work-grid">
          {featuredWork.map((item) => (
            <article className="work-card" key={item.label}>
              <div className="work-card-header">
                <span>{item.label}</span>
                <span>{item.impact}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="tag-list" aria-label={`${item.label} skills`}>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-section">
        <div className="section-heading">
          <span className="eyebrow">Working style</span>
          <h2>Steady process, high standards, no drama.</h2>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="eyebrow">Let’s build something worth shipping</span>
          <h2>Available for product design leadership, concept work, and redesigns.</h2>
        </div>

        <p>
          If your team needs a designer who can simplify the complicated, protect
          the details, and keep momentum moving, I’d love to hear what you’re
          building.
        </p>

        <div className="contact-actions">
          <a className="button button-primary" href="mailto:mara@maravale.design">
            mara@maravale.design
          </a>
          <a className="button button-secondary" href="https://www.linkedin.com">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
