"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Wrench, Star, Shield } from "lucide-react"

export default function HuollotPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/15 rounded-full blur-[150px] animate-blob mix-blend-screen" />
        <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] bg-purple-600/15 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[15%] w-[55vw] h-[55vw] bg-indigo-600/15 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <div className="relative pt-40 pb-32 overflow-hidden">
          <Image
            src="/ruorivene.webp"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
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
            </motion.div>
          </div>
        </div>

        {/* Osuus 1 – intro */}
        <section className="py-8 relative">
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-xl md:text-2xl text-white leading-snug text-center"
            >
              Veneesi ansaitsee yhtä hyvää huoltoa kuin sinäkin. Åbo Marine Service Oy tulee luoksesi – oli veneesi sitten vedessä tai maalla, satamassa tai talviteloilla. Palvelemme yksityisiä veneenomistajia sekä ammattiliikennettä Turun alueella, lähikunnissa ja saaristossa lähes 20 vuoden kokemuksella.
            </motion.p>
          </div>
        </section>

        {/* Osuus 2 – Kaikki merkit */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Kaikki merkit – yksi palveluntarjoaja
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  Huollamme ja korjaamme kaikkien merkkien veneitä – moottorityypistä tai iästä riippumatta. Ammattitaitoinen mekaanikkimme hoitaa niin arkiset huollot kuin vaativatkin korjaukset paikan päällä.
                </p>
                <div className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                  <Wrench className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">Tuntihinta alkaen 91 €</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src="/venekone.webp"
                  alt="Venekorjaus"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Osuus 3 – Volvo Penta */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] md:order-last"
              >
                <Image
                  src="/volvopenta.webp"
                  alt="Volvo Penta huolto"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="md:order-first"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Volvo Penta – huolto ja korjaus alkuperäisosilla
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  Volvo Penta on yksi Suomen yleisimmistä venemoottoreista, ja sen huolto vaatii oikeat osat ja osaamisen. Teemme kaikki Volvo Pentan huollot ja korjaukset valmistajan ohjeiden mukaisesti ja alkuperäisosilla – niin moottoreihin kuin vetolaitteihinkin.
                </p>
                <div className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-full bg-white/5 border border-white/10">
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Yanmar – huolto ja korjaus
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  Yanmar-moottoreiden huolto sujuu meiltä yhtä ammattitaidolla. Vuosihuolto pitää Yannmarin virittyneen ja luotettavana koko kauden ajan.
                </p>
                <div className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-full bg-white/5 border border-white/10">
                  <Star className="w-5 h-5 text-indigo-400" />
                  <span className="text-white font-semibold">Yanmar vuosihuolto alkaen 299 €</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src="/yanmar.jpg"
                  alt="Yanmar huolto"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Osuus 5 – Hinnoittelu */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl bg-white/5 border border-white/10 px-8 py-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Hinnoittelu ja yhteistyö
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Kaikki työt hinnoitellaan tapauskohtaisesti – pyydä meiltä tarjous, niin kerromme selkeän arvion ennen töiden aloitusta. Palvelemme myös ammattiliikennettä: satamat, laivausyhtiöt ja muut alan toimijat – kysy lisää yhteistyöstä.
              </p>
            </motion.div>
          </div>
        </section>

        <ContactForm />
      </div>

      <Footer />
    </main>
  )
}
