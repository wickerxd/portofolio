import { hero } from '../data/content'

function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <p className="hero__prompt">
        <span className="hero__prompt-symbol" aria-hidden="true">
          $
        </span>
        {hero.prompt}
      </p>
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
    </section>
  )
}

export default Hero
