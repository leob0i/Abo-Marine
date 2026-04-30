"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Wrench, Shield, Star } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    icon: <Wrench className="w-6 h-6 text-blue-400" />,
    label: "Lähes 20 vuoden kokemus",
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    label: "Jaltest-diagnoosilaitteet",
  },
  {
    icon: <Star className="w-6 h-6 text-indigo-400" />,
    label: "Liikkuva huoltopalvelu",
  },
]

const brands = [
  "Volvo Penta", "Yanmar", "Yamaha", "Lombardini", "Vetus",
  "Scania", "Cummins", "Caterpillar", "Kubota", "AGCO Power",
  "Valmet",
]

export function About() {
  return (
    <section id="about" className="relative">
      {/* Hero-alue taustakuvalla */}
      <div className="relative pt-40 pb-24 overflow-hidden">
        <Image
          src="/herevene.webp"
          alt=""
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 flex flex-col items-center text-center"
          >
            <Image
              src="/abo.logo.webp"
              alt="Åbo Marine Service Oy"
              width={240}
              height={72}
              className="object-contain mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Åbo Marine Service Oy</h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6 text-white/70 leading-relaxed mb-16"
        >
          <p>
            Åbo Marine Service Oy on merialan palveluihin erikoistunut yritys, joka tarjoaa kattavia
            huolto- ja korjauspalveluita veneille sekä meriteknisille laitteille. Palvelemme
            yksityisiä veneenomistajia, yrityksiä sekä ammattiliikennettä Turun ja saariston alueella.
          </p>
          <p>
            Lähes 20 vuoden kokemuksella hoidamme huollot ja korjaukset siellä missä veneesi on —
            liikkuvana huoltopalveluna. Meille tärkeintä on työn laatu, luotettavuus ja asiakkaan
            tarpeiden ymmärtäminen. Jokainen huolto ja korjaus tehdään huolellisesti, jotta veneesi
            toimii moitteettomasti koko veneilykauden ajan.
          </p>
          <p>
            Käytössämme laadukkaat Jaltest-diagnoosilaitteet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10"
            >
              {h.icon}
              <span className="text-sm font-medium text-white/80">{h.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <GlassCard>
            <h2 className="text-xl font-semibold mb-6 text-white/90">Huollettavat merkit</h2>
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                >
                  {brand}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/50 italic">
                ja monet muut
              </span>
            </div>
          </GlassCard>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 text-sm text-white/35"
        >
          Y-tunnus 3435525-6
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 grid grid-cols-3 gap-4"
        >
          {[
            "/herevene.webp",
            "/venekone.webp",
            "/volvopenta.webp",
            "/traileri.webp",
            "/volvo.penta.öljyfiltteri.webp",
            "/placeholder.jpg",
          ].map((src, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover opacity-70 hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

