"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Wrench, Star, Shield } from "lucide-react"
import { SeaService } from "@/components/sea-service"




export default function HuollotPage() {
  return (
    <main className="min-h-screen bg-[#02091a] text-white selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] md:bg-blue-600/15 bg-blue-500/35 rounded-full blur-[100px] md:blur-[150px] animate-blob" />
        <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] md:bg-purple-600/15 bg-blue-600/30 rounded-full blur-[100px] md:blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[15%] w-[55vw] h-[55vw] md:bg-indigo-600/15 bg-indigo-500/30 rounded-full blur-[100px] md:blur-[150px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <div className="relative pt-52 pb-48 overflow-hidden">
          <Image
            src="/vene.keula.webp"
            alt="Venehuolto ja korjaus Turussa – Åbo Marine Service Oy"
            fill
            className="object-cover object-[75%_50%] md:object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/80" />
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Liikkuva venehuolto<br className="hidden md:block" /> ja -korjaus Turussa
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed"
              >
                Ammattitaitoista veneiden ja venemoottoreiden huoltoa Turun alueella. Volvo Penta, Yanmar, Yamaha ja muut merkit.
                Tulemme luoksesi maalla sekä merellä!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
              >
                <a
                  href="tel:+358503511512"
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 transition-all"
                >
                  Soita
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 glass rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all hover:scale-105"
                >
                  Pyydä tarjous
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Osuus 2 – Kaikki merkit */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:row-start-1 md:col-start-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Korjaukset ja huollot merkistä riippumatta
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Huollamme ja korjaamme kaiken merkkisiä veneitä, moottorityypistä tai iästä riippumatta. Ammattitaitoinen mekaanikkimme hoitaa niin arkiset huollot kuin vaativatkin korjaukset paikan päällä yli 20 vuoden kokemuksella.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <span className="text-white/70 text-base">Kaikki työt hinnoitellaan tapauskohtaisesti</span>
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-full bg-white hover:bg-white/90 text-black font-semibold text-sm transition-colors whitespace-nowrap"
                  >
                    Pyydä tarjous
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] md:row-start-1 md:row-end-3 md:col-start-2"
              >
                <Image
                  src="/venekone.webp"
                  alt="Venekorjaus"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="md:row-start-2 md:col-start-1"
              >
              </motion.div>
            </div>
          </div>
        </section>

        {/* Osuus 3 – Volvo Penta */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:row-start-1 md:col-start-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Volvo Penta – huolto ja korjaus alkuperäisosilla
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Volvo Penta on yksi Suomen yleisimmistä venemoottoreista, ja sen huolto vaatii oikeat osat ja osaamisen. Teemme kaikki Volvo Pentan huollot ja korjaukset valmistajan ohjeiden mukaisesti ja alkuperäisosilla – niin moottoreihin kuin vetolaitteihinkin.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] md:row-start-1 md:row-end-3 md:col-start-2"
              >
                <Image
                  src="/volvopenta.webp"
                  alt="Volvo Penta huolto"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="md:row-start-2 md:col-start-1"
              >
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Volvo Penta vuosihuolto alkaen 390 €</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Osuus 4 – Yanmar */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:row-start-1 md:col-start-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Yanmar – huolto ja korjaus
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Yanmar-moottoreiden huolto sujuu meiltä yhtä ammattitaitoisesti. Vuosihuolto pitää Yanmarin virittyneenä ja luotettavana koko kauden ajan.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] md:row-start-1 md:row-end-3 md:col-start-2"
              >
                <Image
                  src="/yanmar.jpg"
                  alt="Yanmar huolto"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="md:row-start-2 md:col-start-1"
              >
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                  <Star className="w-5 h-5 text-indigo-400" />
                  <span className="text-white font-semibold">Yanmar vuosihuolto alkaen 299 €</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <SeaService />

        {/* Osuus 1 – intro */}
        <section className="py-8 relative">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl text-white leading-snug text-center"
            >
              Veneesi ansaitsee yhtä hyvää huoltoa kuin sinäkin. Palvelemme yksityisiä veneenomistajia sekä ammattiliikennettä Turun alueella, lähikunnissa ja saaristossa yli 20 vuoden kokemuksella.
            </motion.p>
            <div className="flex justify-center mt-8">
              <a
                href="https://wa.me/358503511512"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avaa WhatsApp ja ota yhteyttä"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-[#25D366] px-6 ring-1 ring-white/20 text-white font-semibold text-[15px] transition hover:bg-[#1EBE5D] hover:scale-105"
              >
                <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0 text-white" aria-hidden="true" focusable="false">
                  <path fill="currentColor" transform="translate(1.5 -0)" d="M19.11 17.53c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.74.9-.9 1.08-.17.18-.33.2-.6.06-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.49h-.55c-.2 0-.49.07-.74.35-.26.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
                  <path fill="currentColor" d="M16.01 3.2c-7.03 0-12.75 5.7-12.75 12.7 0 2.23.6 4.41 1.73 6.33L3.2 28.8l6.75-1.77a12.8 12.8 0 0 0 6.06 1.54c7.03 0 12.75-5.7 12.75-12.7S23.04 3.2 16.01 3.2zm0 23.12c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.51 10.51 0 0 1-1.61-5.57c0-5.8 4.75-10.52 10.66-10.52 5.9 0 10.66 4.72 10.66 10.52 0 5.8-4.76 10.55-10.66 10.55z" />
                </svg>
                <span className="font-sans text-[15px] font-semibold tracking-tight text-white">WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

<ContactForm />
      </div>

      <Footer />
    </main>
  )
}
