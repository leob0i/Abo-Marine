"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


export function About() {
  return (
    <section id="about" className="relative">
      {/* Hero-alue taustakuvalla – kattaa kaikki tekstit */}
      <div className="relative pt-40 pb-32 overflow-hidden">
        <Image
          src="/ilmakuva.vene.webp"
          alt=""
          fill
          className="object-cover object-top opacity-50"
          priority
        />
        {/* Häivytys alhaalta ennen galleriaa */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
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
            <h1 className="text-5xl md:text-7xl font-bold text-white">Åbo Marine Service Oy</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6 text-white text-lg leading-relaxed mb-6"
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

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
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
              </Link>

              <Link
                href="#contact"
                className="inline-flex h-12 items-center rounded-full bg-white/10 px-6 ring-1 ring-white/20 text-white font-semibold text-[15px] transition hover:bg-white/20 hover:scale-105"
              >
                Ota yhteyttä
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="container mx-auto px-6 max-w-4xl pb-24 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6"
        >
          <h2 id="galleria" className="relative z-20 text-2xl font-semibold text-white mb-8">Työmme kuvina</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/konehuone.vihreä.jpg",
            "/puhdaskonetila.JPG",
            "/ahvenanmaan lautta.jpg",
            "/puretutmoottorit.jpg",
            "/ruori.jpg",
            "/venekone.webp",
            "/yanmar.jpg",
            "/potkurit.jpg",
            "/kansiremppa.jpg",
            "/scania konehuone.jpg",
            "/veneen moottorin nosto.jpg",
            "/konetila.siisti.jpg",
          ].map((src, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10">
              {src && (
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover opacity-70 hover:opacity-90 transition-opacity duration-300"
                />
              )}
            </div>
          ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

