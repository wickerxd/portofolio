import { hero } from "../data/content";

function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero__layout">
        <div className="hero__content">
          <h1 className="hero__title" id="hero-title">
            {hero.name}
          </h1>
          <p className="hero__role">{hero.role}</p>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__actions">
            <a className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="btn btn-outline" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <aside className="hero__code card" aria-hidden="true">
          <div className="hero__code-bar">
            <span className="hero__code-dots">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--amber" />
              <span className="hero__code-dot hero__code-dot--green" />
            </span>
            <span className="hero__code-file">about.ts</span>
            <span className="hero__code-plus">+</span>
          </div>
          <pre className="hero__code-body">
            <code>
              <span className="code-line">
                <span className="code-keyword">const</span> me = {"{"}
              </span>
              <span className="code-line">
                {"  "}role:{" "}
                <span className="code-string">"Full-Stack Engineer"</span>,
              </span>
              <span className="code-line">
                {"  "}focus: [
                <span className="code-string">"Architecture"</span>,{" "}
                <span className="code-string">"Modernization"</span>,{" "}
                <span className="code-string">"Product"</span>],
              </span>
              <span className="code-line">
                {"  "}location: <span className="code-string">"Greece"</span>,
              </span>
              <span className="code-line">
                {"  "}values: [<span className="code-string">"Quality"</span>,{" "}
                <span className="code-string">"Accessibility"</span>,{" "}
                <span className="code-string">"Mentoring"</span>
                ],
              </span>
              <span className="code-line">{"}"};</span>
            </code>
          </pre>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
