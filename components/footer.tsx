import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              ÅMS<span className="text-blue-400">.</span>
            </Link>
            <p className="text-white/50 leading-relaxed">
              Åbo Marine Service Oy – Liikkuva veneiden ja venemoottoreiden huoltopalvelu Turun alueella.
            </p>
            <p className="text-white/35 mt-4">Y-tunnus 3435525-6</p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Sivukartta</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/meista#galleria" className="hover:text-white transition-colors">Referenssit</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Palvelut</Link></li>
              <li><Link href="/meista" className="hover:text-white transition-colors">Meistä</Link></li>
              <li><Link href="/huollot#merella" className="hover:text-white transition-colors">Huoltovene</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Palvelualue</h4>
            <ul className="space-y-4 text-white/60">
              <li>Turku</li>
              <li>Kaarina</li>
              <li>Raisio</li>
              <li>Naantali</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Yhteystiedot</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="mailto:info@abomarineservice.com" className="hover:text-white transition-colors">
                  info@abomarineservice.com
                </a>
              </li>
              <li>
                <a href="tel:+358503511512" className="hover:text-white transition-colors">
                  +358 50 351 1512
                </a>
              </li>
              <li>Ravurinkatu 29</li>
              <li>20380 Turku</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
          <p>&copy; 2026 Åbo Marine Service Oy. Kaikki oikeudet pidätetään.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Tietosuoja</Link>
            <Link href="#" className="hover:text-white transition-colors">Käyttöehdot</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
