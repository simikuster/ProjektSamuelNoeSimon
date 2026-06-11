import drivingLessonImg from '../../assets/driving-lesson.jpg'
import './Hero.css'

const heroStats = [
  { value: '1:1', label: 'Coaching' },
  { value: 'B', label: 'Kategorie' },
  { value: '7 Tage', label: 'flexibel planbar' },
]

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-section__copy reveal">
        <p className="hero-section__eyebrow">Fahrstunden ohne Stress</p>
        <h1>Sicher fahren lernen. Ruhig bleiben. Prüfung bestehen.</h1>
        <p className="hero-section__lead">
          Moderne Fahrschule für alle, die klar erklärt bekommen möchten, was
          im Verkehr wirklich zählt. Persönlich, geduldig und mit einem Plan bis
          zur Prüfung.
        </p>

        <div className="hero-section__actions" aria-label="Schnelle Aktionen">
          <a className="btn btn--primary" href="#kontakt">
            Erstes Gespräch buchen
          </a>
          <a className="btn btn--secondary" href="#preise">
            Preise ansehen
          </a>
        </div>

        <div className="hero-section__stats" aria-label="Kurzinfos">
          {heroStats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-section__visual" aria-label="Illustration Fahrplan">
        <figure className="hero-section__photo">
          <img
            src={drivingLessonImg}
            alt="Fahrlehrer erklaert eine Fahrstunde direkt am Auto"
          />
          <figcaption>Persönlich erklärt, direkt am Auto.</figcaption>
        </figure>

        <div className="route-card">
          <div className="route-card__top">
            <span>Dein Weg</span>
            <strong>zur Prüfung</strong>
          </div>

          <div className="route-map" aria-hidden="true">
            <span className="route-map__line route-map__line--one"></span>
            <span className="route-map__line route-map__line--two"></span>
            <span className="route-map__point route-map__point--start"></span>
            <span className="route-map__point route-map__point--middle"></span>
            <span className="route-map__point route-map__point--end"></span>
            <span className="route-map__car">
              <span></span>
            </span>
          </div>

          <div className="route-card__steps">
            <span>Theorie</span>
            <span>Manöver</span>
            <span>Prüfung</span>
          </div>
        </div>

        <div className="hero-note hero-note--left">
          <strong>Heute</strong>
          <span>Parkieren üben</span>
        </div>

        <div className="hero-note hero-note--right">
          <strong>+18%</strong>
          <span>mehr Sicherheit</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
