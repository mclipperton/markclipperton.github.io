import { SiteHeader } from "../components/site-header";
import { withSitePath } from "../lib/site-path";

const featuredWork = [
  {
    title: "Enhancing record pages",
    summary:
      "Enhancing the hero section on record pages throughout iamproperty CRM to improve linking between records and surfacing key information users require.",
  },
  {
    title: "Management Reporting",
    summary:
      "Designing a brand new reporting dashboard for branch owners and branch managers to track key goals and targets.",
  },
  {
    title: "Property Inspections",
    summary:
      "Responsive web app that allows agents to produce detailed inspection reports in the office or on the go.",
  },
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <SiteHeader activePath="/" />
      <div className="page-content">
        <section className="home-hero" id="top">
          <div className="home-hero-visual" aria-hidden="true">
            <div className="home-hero-photo">
              <img
                alt=""
                className="home-hero-photo-image"
                height="248"
                src={withSitePath("/mark-clipperton.jpg")}
                width="248"
              />
            </div>

            <div className="home-hero-badge">
              <span>Currently Product</span>
              <span>Designer for CRM at</span>
              <span>iamproperty</span>
            </div>
          </div>

          <div className="home-hero-copy">
            <h1>Hi I&apos;m Mark!</h1>

            <p className="home-hero-introtext">
              A <strong>Product Designer</strong> based in the North East of
              England.
            </p>

            <p className="home-hero-lede">
              For over 6 years I&apos;ve designed digital products that help
              businesses grow and make a meaningful impact.
            </p>
          </div>
        </section>

        <section className="featured-section" id="featured-work">
          <div className="featured-section-inner">
            <h2 className="featured-section-title">Featured Projects</h2>

            <div className="featured-grid">
              {featuredWork.map((item) => (
                <article className="featured-card" key={item.title}>
                  <div className="featured-card-visual" aria-hidden="true" />
                  <div className="featured-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
