"use client"

import { motion } from "framer-motion"
import Image from 'next/image'

const brands = [
  "Volvo Penta", "Yanmar", "Yamaha", "Scania", "Cummins",
  "Caterpillar", "Kubota", "Vetus", "Lombardini", "AGCO Power", "Valmet",
]

export function CompanyInfo() {
  return (
    <section className="pb-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-20 border-t border-white/10 flex flex-col items-center text-center"
        >
          <Image
            src="/abo.logo.webp"
            alt="Åbo Marine Service Oy"
            width={200}
            height={60}
            className="object-contain mb-8 opacity-90"
          />
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-16">
            Åbo Marine Service Oy on turkulainen merialan huolto- ja korjausyritys lähes 20 vuoden kokemuksella. Palvelemme yksityisiä veneenomistajia, yrityksiä ja ammattiliikennettä Turun ja saariston alueella — siellä missä veneesi on, sillä palvelumme on liikkuva.
          </p>

          <p className="text-white/40 text-sm uppercase tracking-widest mb-8">
            Huollot ja korjaukset onnistuvat niin maalla kuin merellä. Tuemme laajaa merkkivalikoimaa
          </p>

          <div className="w-full overflow-hidden">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...brands, ...brands].map((brand, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/15 text-white/50 text-sm font-medium flex-shrink-0"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
