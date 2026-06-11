import './Classes.css'

const lessonTypes = [
  {
    name: 'Kategorie B',
    tag: 'Auto',
    description:
      'Der komplette Weg vom ersten Losfahren bis zur sicheren Prüfungsfahrt.',
    points: ['Grundlagen', 'Stadtverkehr', 'Autobahn'],
  },
  {
    name: 'Prüfungsvorbereitung',
    tag: 'Intensiv',
    description:
      'Gezielte Lektionen für die letzten Wochen vor dem praktischen Termin.',
    points: ['Testfahrt', 'Fehleranalyse', 'Prüfungsroute'],
  },
  {
    name: 'Auffrischung',
    tag: 'Sicherheit',
    description:
      'Für alle, die länger nicht gefahren sind oder einzelne Situationen üben möchten.',
    points: ['Parkieren', 'Kreisel', 'Spurwechsel'],
  },
]

function Classes() {
  return (
    <section className="classes section-shell" id="fahrstunden">
      <div className="section-header">
        <p className="section-kicker">Fahrstunden</p>
        <h2 className="section-title">Angebote für deinen aktuellen Stand.</h2>
        <p className="section-lead">
          Egal ob erste Fahrstunde oder letzte Vorbereitung: Jede Lektion ist
          praktisch aufgebaut und direkt auf dein Ziel ausgerichtet.
        </p>
      </div>

      <div className="classes__grid">
        {lessonTypes.map((lesson) => (
          <article className="class-card" key={lesson.name}>
            <div className="class-card__head">
              <span>{lesson.tag}</span>
              <h3>{lesson.name}</h3>
            </div>
            <p>{lesson.description}</p>
            <ul>
              {lesson.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Classes
