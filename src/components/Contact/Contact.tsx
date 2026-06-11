import { type FormEvent, useState } from 'react'
import './Contact.css'

const contactDetails = [
  { label: 'Telefon', value: '+41 79 000 00 00', href: 'tel:+41790000000' },
  { label: 'E-Mail', value: 'info@fahrlehrer-simon.ch', href: 'mailto:info@fahrlehrer-simon.ch' },
  { label: 'Region', value: 'Winterthur und Umgebung', href: '#kontakt' },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const topic = String(formData.get('topic') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = encodeURIComponent(`Fahrstunden Anfrage von ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nThema: ${topic}\n\nNachricht:\n${message}`,
    )

    setSubmitted(true)
    window.location.href = `mailto:info@fahrlehrer-simon.ch?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section-shell" id="kontakt">
      <div className="contact__layout">
        <div className="contact__copy">
          <p className="section-kicker">Kontakt</p>
          <h2 className="section-title">Bereit für deine erste Fahrstunde?</h2>
          <p className="section-lead">
            Schreib kurz, wo du aktuell stehst. Das Formular öffnet dein
            Mailprogramm mit einer vorbereiteten Nachricht und braucht dafür
            kein Backend.
          </p>

          <div className="contact__details">
            {contactDetails.map((detail) => (
              <a href={detail.href} key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" placeholder="Dein Name" required type="text" />
          </label>

          <label>
            E-Mail
            <input name="email" placeholder="dein.name@mail.ch" required type="email" />
          </label>

          <label>
            Was möchtest du üben?
            <select name="topic" defaultValue="Kategorie B">
              <option>Kategorie B</option>
              <option>Prüfungsvorbereitung</option>
              <option>Auffrischung</option>
              <option>Beratung</option>
            </select>
          </label>

          <label>
            Nachricht
            <textarea
              name="message"
              placeholder="Zum Beispiel: Ich möchte im August mit Fahrstunden starten."
              rows={5}
            />
          </label>

          <button className="btn btn--primary" type="submit">
            Anfrage per E-Mail öffnen
          </button>

          {submitted && (
            <p className="contact-form__note" role="status">
              Dein Mailprogramm wurde geöffnet. Falls nichts passiert, nutze
              direkt die E-Mail-Adresse links.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
