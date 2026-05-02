"use client"

import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

const mainServices = [
  {
    large: true,
    titles: [
      {
        title: "Korjaukset nopeasti ja ammattitaidolla",
        description: "Pitkä kokemus takaa varman työn myös vaativissa korjauksissa. Oli kyseessä pieni häiriö tai isompi moottorivika, hoidamme sen tehokkaasti kuntoon.",
      },
      {
        title: "Huolto ja ennakoiva ylläpito",
        description: "Pidä veneesi kunnossa ennen kuin ongelmat syntyvät. Teemme perä- ja sisämoottoreiden määräaikaishuollot valmistajien ohjelman mukaan tai räätälöitynä juuri sinun käyttöön.",
      },
    ],
    image: "/venekone.webp",
    imageAlt: "Moottorin huolto ja korjaus",
  },
  {
    imageLeft: true,
    titles: [
      {
        title: "Varaosat",
        description: "Kauttamme laadukkaat uudet alkuperäisosat tai hyväksi todetut tarvikeosat. Meiltä saat myös alkuperäiset Volvo Penta osat ja vetolaitteet.  ",
      },
    ],
    image: "/volvo.penta.öljyfiltteri.webp",
    imageAlt: "Varaosat",
  },
  {
    imageLeft: true,
    titles: [
      {
        title: "Veneiden nosto ja kuljetus",
        description: "Ammattimainen ja luotettava veneen nosto sekä kuljetus trailerilla. Veneiden nostot trailerilla 2000kg asti, tarvittaessa max 25m ja 40000kg, tarjouksen mukaan.",
      },
    ],
    subService: {
      title: "Siirtoajot merellä onnistuu myös!",
      description: "",
    },
    image: "/traileri.webp",
    imageAlt: "Veneen kuljetus trailerilla",
  },
]

export function Services() {
  return (
    <section id="services" className="pt-8 pb-32 relative">
      <div className="container mx-auto px-6">

        <div className="divide-y divide-white/10">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center group"
            >
              <div className={`flex-1 ${'imageLeft' in service && service.imageLeft || index % 2 === 1 ? 'md:order-2' : ''}`}>
                {service.titles.map((item, i) => (
                  <div key={i} className={i > 0 ? 'mt-8' : ''}>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-semibold text-white text-3xl md:text-5xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-white/60 leading-relaxed max-w-lg whitespace-pre-line text-lg md:text-xl">
                      {item.description}
                    </p>
                  </div>
                ))}
                {index === 0 && (
                  <div className="flex justify-end -mt-10">
                    <Link
                      href="/huollot"
                      className="px-8 py-4 rounded-full bg-white text-black text-lg font-semibold hover:bg-white/90 transition-colors hover:scale-105"
                    >
                      Lue lisää
                    </Link>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex justify-end mt-6 pr-20">
                    <a
                      href="#contact"
                      className="px-8 py-4 rounded-full bg-white text-black text-lg font-semibold hover:bg-white/90 transition-colors hover:scale-105"
                    >
                      Pyydä tarjous
                    </a>
                  </div>
                )}
                {'subService' in service && service.subService && (
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      {service.subService.title}
                    </h4>
                  </div>
                )}
                {index === 2 && (
                  <div className="flex justify-end mt-6 pr-20">
                    <a
                      href="#contact"
                      className="px-8 py-4 rounded-full bg-white text-black text-lg font-semibold hover:bg-white/90 transition-colors hover:scale-105"
                    >
                      Pyydä tarjous
                    </a>
                  </div>
                )}
              </div>

              <div className={`w-full flex-shrink-0 ${service.large ? 'md:w-[480px]' : 'md:w-80'} ${'imageLeft' in service && service.imageLeft || index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`relative rounded-2xl overflow-hidden ${service.large ? 'h-72 md:h-96' : 'h-56 md:h-64'}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 border-t border-white/10 pt-8">
          <p className="text-white text-2xl md:text-3xl font-semibold">
            Veneiden talvisäilytys kauttamme, kysy lisää!
          </p>
        </div>

      </div>
    </section>
  )
}
