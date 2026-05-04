import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tietosuoja ja käyttöehdot",
  alternates: {
    canonical: "https://www.abomarineservice.com/tietosuoja",
  },
}

export default function TietosuojaPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/15 rounded-full blur-[150px] animate-blob" />
        <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] bg-purple-600/15 rounded-full blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[15%] w-[55vw] h-[55vw] bg-indigo-600/15 rounded-full blur-[150px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="pt-40 pb-24 px-6">
          <div className="max-w-2xl mx-auto">

            <h1 className="text-4xl font-bold tracking-tight mb-16">Tietosuoja ja käyttöehdot</h1>

            {/* Tietosuojaseloste */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8">Tietosuojaseloste</h2>

              <div className="space-y-8 text-white/70 leading-relaxed">
                <div>
                  <h3 className="text-white font-medium mb-2">Rekisterinpitäjä</h3>
                  <p>Abo Marine Service Oy</p>
                  <p>info@abomarineservice.com</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Mitä tietoja keräämme</h3>
                  <p className="mb-3">Keräämme vain tiedot, jotka käyttäjä itse antaa yhteydenottolomakkeen kautta, kuten:</p>
                  <ul className="space-y-1 ml-4">
                    <li>Nimi</li>
                    <li>Sähköposti</li>
                    <li>Puhelinnumero (jos annettu)</li>
                    <li>Viestin sisältö</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Mihin tietoja käytetään</h3>
                  <p className="mb-3">Tietoja käytetään ainoastaan:</p>
                  <ul className="space-y-1 ml-4">
                    <li>Yhteydenottoon asiakkaaseen</li>
                    <li>Asiakaspalveluun ja tarjouspyyntöihin vastaamiseen</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Tietojen säilytys</h3>
                  <p>Säilytämme tietoja vain niin kauan kuin on tarpeellista asian käsittelemiseksi.</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Tietojen luovutus</h3>
                  <p>Emme luovuta tietoja ulkopuolisille tahoille.</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Tietojen suojaus</h3>
                  <p>Käsittelemme tietoja huolellisesti ja pyrimme suojaamaan ne asianmukaisesti.</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Käyttäjän oikeudet</h3>
                  <p className="mb-3">Käyttäjällä on oikeus:</p>
                  <ul className="space-y-1 ml-4">
                    <li>Pyytää omien tietojen tarkastusta</li>
                    <li>Pyytää tietojen poistamista</li>
                  </ul>
                  <p className="mt-3">Pyynnöt voi lähettää sähköpostitse rekisterinpitäjälle.</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-16" />

            {/* Käyttöehdot */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Käyttöehdot</h2>

              <div className="space-y-8 text-white/70 leading-relaxed">
                <div>
                  <h3 className="text-white font-medium mb-2">Yleistä</h3>
                  <p>Käyttämällä tätä verkkosivua hyväksyt nämä käyttöehdot.</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Sisältö</h3>
                  <p>Sivuston sisältö on tarkoitettu yleiseksi informaatioksi palveluista. Emme takaa tietojen täydellistä virheettömyyttä.</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Vastuunrajoitus</h3>
                  <p>Emme vastaa mahdollisista vahingoista, jotka aiheutuvat sivuston käytöstä tai tietojen perusteella tehdyistä päätöksistä.</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Yhteydenottolomake</h3>
                  <p>Lomakkeen kautta lähetettyjä tietoja käytetään vain yhteydenottoon, kuten tietosuojaselosteessa kuvataan.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
