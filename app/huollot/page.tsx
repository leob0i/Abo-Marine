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

        <SeaService />

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
                  Yanmar-moottoreiden huolto sujuu meiltä yhtä ammattitaidolla. Vuosihuolto pitää Yanmarin virittyneenä ja luotettavana koko kauden ajan.
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
          </div>
        </section>

<ContactForm />
      </div>

      <Footer />
    </main>
  )
}
