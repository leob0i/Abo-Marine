"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 items-center group"
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Reilu hinnoittelu, selkeä työn jälki
            </h3>
            <p className="text-white/60 leading-relaxed max-w-lg whitespace-pre-line text-lg md:text-xl">
              {"Tuntihinta alkaen 91 €/h.\nYleisimmille moottoreille saatavilla myös valmiit huoltopaketit.\n\nVolvo Penta vuosihuolto alkaen 390 €\nYanmar vuosihuolto alkaen 299 €\n\nKaikki työt hinnoitellaan tapauskohtaisesti"}
            </p>
            <div className="mt-6 flex justify-end mr-4">
              <a
                href="#contact"
                className="inline-block px-6 py-2.5 rounded-full bg-white text-sm font-medium text-black hover:bg-white/80 transition-colors duration-200"
              >
                Pyydä tarjous
              </a>
            </div>
          </div>

          <div className="w-full flex-shrink-0 md:w-80">
            <div className="relative rounded-2xl overflow-hidden h-56 md:h-64">
              <Image
                src="/volvopenta.webp"
                alt="Hinnoittelu"
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
