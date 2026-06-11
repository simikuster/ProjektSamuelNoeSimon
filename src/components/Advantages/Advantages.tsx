import './Advantages.css'

const advantages = [
  {
    number: '01',
    title: 'Ruhiger Unterricht',
    text: 'Fehler werden nicht dramatisiert. Wir analysieren sie kurz und fahren mit einem klaren nächsten Schritt weiter.',
  },
  {
    number: '02',
    title: 'Flexible Termine',
    text: 'Fahrstunden am Morgen, Abend oder Wochenende - passend zu Schule, Arbeit oder Ausbildung.',
  },
  {
    number: '03',
    title: 'Klare Struktur',
    text: 'Du siehst jederzeit, welche Themen erledigt sind und was bis zur Prüfung noch fehlt.',
  },
  {
    number: '04',
    title: 'Prüfungsnah üben',
    text: 'Wir trainieren reale Strecken, schwierige Kreuzungen und Manöver so, wie sie an der Prüfung vorkommen.',
  },
]

function Advantages() {
  return (
    <section className="advantages section-shell" id="vorteile">
      <div className="section-header">
        <p className="section-kicker">Vorteile</p>
        <h2 className="section-title">Schlicht geplant. Wirksam gelernt.</h2>
        <p className="section-lead">
          Die Webseite zeigt kurz und klar, warum Fahrschülerinnen und
          Fahrschüler hier gut aufgehoben sind.
        </p>
      </div>

      <div className="advantages__grid">
        {advantages.map((advantage) => (
          <article className="advantage-card" key={advantage.number}>
            <span>{advantage.number}</span>
            <h3>{advantage.title}</h3>
            <p>{advantage.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Advantages
