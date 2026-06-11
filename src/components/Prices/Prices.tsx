import './Prices.css'

const offers = [
  {
    label: 'Einzellektion',
    price: 'CHF 90.-',
    detail: '50 Minuten Fahrunterricht',
    featured: false,
    items: ['Individuelle Ziele', 'Direktes Feedback', 'Flexibel buchbar'],
  },
  {
    label: '10er Paket',
    price: 'CHF 850.-',
    detail: 'Für strukturiertes Lernen',
    featured: true,
    items: ['Lernplan inklusive', 'Prüfungscheck', 'Terminpriorität'],
  },
  {
    label: 'Prüfungsfit',
    price: 'CHF 320.-',
    detail: '4 Lektionen Fokus-Training',
    featured: false,
    items: ['Testfahrt', 'Manövertraining', 'Letzte Korrekturen'],
  },
]

function Prices() {
  return (
    <section className="prices section-shell" id="preise">
      <div className="section-header">
        <p className="section-kicker">Preise</p>
        <h2 className="section-title">Transparente Pakete ohne Kleingedrucktes.</h2>
        <p className="section-lead">
          Klare Preisbeispiele helfen Fahrschülerinnen und Fahrschülern, direkt
          das passende Angebot zu finden.
        </p>
      </div>

      <div className="prices__grid">
        {offers.map((offer) => (
          <article
            className={`price-card${offer.featured ? ' price-card--featured' : ''}`}
            key={offer.label}
          >
            {offer.featured && <span className="price-card__badge">Beliebt</span>}
            <h3>{offer.label}</h3>
            <p className="price-card__price">{offer.price}</p>
            <p className="price-card__detail">{offer.detail}</p>
            <ul>
              {offer.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn btn--secondary" href="#kontakt">
              Anfragen
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Prices
