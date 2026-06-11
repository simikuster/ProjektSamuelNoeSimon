import './About.css'

function About() {
  return (
    <section className="about section-shell" id="ueber-mich">
      <div className="about__content">
        <div className="section-header">
          <p className="section-kicker">Über mich</p>
          <h2 className="section-title">Ein Fahrlehrer, der verständlich bleibt.</h2>
          <p className="section-lead">
            Jede Lektion hat ein klares Ziel. Du bekommst ehrliches Feedback,
            einfache Erklärungen und genug Ruhe, um sicherer zu werden.
          </p>
        </div>

        <div className="about__grid">
          <article className="about__profile">
            <span className="about__avatar" aria-hidden="true">
              FS
            </span>
            <div>
              <p className="about__name">Fahrlehrer Simon</p>
              <p>
                Spezialisiert auf Kategorie B, Prüfungsvorbereitung und
                Auffrischungslektionen für unsichere Fahrerinnen und Fahrer.
              </p>
            </div>
          </article>

          <article className="about__statement">
            <strong>Mein Ziel</strong>
            <p>
              Du sollst nicht nur die Prüfung bestehen, sondern dich danach im
              Alltag wirklich sicher fühlen - in der Stadt, auf der Autobahn und
              beim Manövrieren.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
