import cupraTrainingCarImg from '../../assets/cupra-training-car.jpg'
import './TrainingCar.css'

const carHighlights = [
  { label: 'Marke', value: 'Cupra' },
  { label: 'Einsatz', value: 'Kategorie B' },
  { label: 'Training', value: 'Stadt, Land, Prüfung' },
]

const carDetails = [
  'Gute Übersicht für Blicktechnik, Spurwechsel und Manöver.',
  'Modernes Cockpit, damit du dich schnell orientieren kannst.',
  'Ruhiges Fahrgefühl für konzentriertes Lernen ohne unnötigen Stress.',
]

function TrainingCar() {
  return (
    <section className="training-car section-shell" id="auto">
      <div className="training-car__layout">
        <div className="training-car__image-card">
          <img
            src={cupraTrainingCarImg}
            alt="Cupra Fahrschulauto fuer Fahrstunden"
          />
          <div className="training-car__plate" aria-hidden="true">
            L
          </div>
        </div>

        <div className="training-car__content">
          <p className="section-kicker">Fahrschulauto</p>
          <h2 className="section-title">
            Du lernst im Cupra: modern, direkt und angenehm.
          </h2>
          <p className="section-lead">
            Das Auto ist ein wichtiger Teil der Fahrstunde. Deshalb bekommt es
            einen eigenen Bereich: Interessierte sehen sofort, mit welchem
            Fahrzeug sie unterwegs sind und worauf beim Lernen geachtet wird.
          </p>

          <div className="training-car__facts">
            {carHighlights.map((highlight) => (
              <article key={highlight.label}>
                <span>{highlight.label}</span>
                <strong>{highlight.value}</strong>
              </article>
            ))}
          </div>

          <details className="training-car__more">
            <summary>Mehr über das Auto erfahren</summary>
            <ul>
              {carDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  )
}

export default TrainingCar
