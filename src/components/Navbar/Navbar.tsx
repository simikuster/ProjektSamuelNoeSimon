import './Navbar.css'

const navItems = [
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#vorteile', label: 'Vorteile' },
  { href: '#fahrstunden', label: 'Fahrstunden' },
  { href: '#auto', label: 'Auto' },
  { href: '#preise', label: 'Preise' },
  { href: '#kontakt', label: 'Kontakt' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#top" aria-label="Zur Startseite">
        <span className="navbar__mark">FS</span>
        <span>
          <strong>Fahrlehrer Simon</strong>
          <small>Fahrschule mit Ruhe</small>
        </span>
      </a>

      <nav className="navbar__links" aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="navbar__cta" href="#kontakt">
        Probestunde
      </a>
    </header>
  )
}

export default Navbar
