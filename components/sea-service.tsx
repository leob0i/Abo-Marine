"use client"

import Image from "next/image"
import { Phone } from "lucide-react"

export function SeaService() {
  return (
    <section id="merella" className="flex flex-col md:flex-row w-full bg-[#02091a]">
      {/* Left: text */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Jumissa merellä tai saarella?
        </h2>
        <p className="text-lg md:text-xl font-semibold text-blue-400 mb-6">
          Pääsemme luoksesi nopeasti myös merellä.
        </p>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Huoltoveneemme avulla tulemme nopeasti paikan päälle Turun saariston
          alueella. Korjaamme veneesi paikanpäällä tai kuljetamme tarvittaessa
          veneesi rantaan lisätöitä varten. Huoltoveneemme päivystää
          kellon ympäri ja olemme aina valmiit auttamaan! Kiireellisissä
          tapauksissa soita meille numeroon{" "}
          <a
            href="tel:+358503511512"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            +358 50 351 1512
          </a>
        </p>
      </div>

      {/* Right: image */}
      <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[400px]">
        <Image
          src="/huoltovene.webp"
          alt="Huoltovene merellä"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/15" />
        {/* Call button overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <a
            href="tel:+358503511512"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-base rounded-full shadow-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            Soita +358 50 351 1512
          </a>
        </div>
      </div>
    </section>
  )
}
