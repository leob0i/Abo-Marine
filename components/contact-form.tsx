"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@abomarineservice.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nimi: data.get("nimi"),
          puhelin: data.get("puhelin"),
          email: data.get("email"),
          viesti: data.get("viesti"),
          _replyto: data.get("email"),
          _subject: "Yhteydenotto – Åbo Marine Service",
          _captcha: "false",
        }),
      })

      if (!res.ok) throw new Error()
      form.reset()
      setSent(true)
    } catch {
      setError("Lähetys epäonnistui. Tarkista yhteytesi ja yritä uudelleen.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-center"
        >
          Ota yhteyttä
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-center mb-12 text-lg"
        >
          Täytä lomake ja otamme yhteyttä mahdollisimman pian.<br />
          Kiireellisissä tapauksissa voit soittaa meille numeroon +358 50 351 1512
        </motion.p>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <p className="text-2xl font-semibold text-white mb-2">Kiitos! Olemme yhteydessä mahdollisimman pian.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Nimi *</label>
                <input
                  name="nimi"
                  required
                  type="text"
                  placeholder="Etunimi Sukunimi"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Puhelinnumero</label>
                <input
                  name="puhelin"
                  type="tel"
                  placeholder="+358 50 000 0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Sähköposti *</label>
              <input
                name="email"
                required
                type="email"
                placeholder="sinä@esimerkki.fi"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Viesti *</label>
              <textarea
                name="viesti"
                required
                rows={5}
                placeholder="Kerro veneen merkki, malli ja huoltotarve..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-[1.02] transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] disabled:opacity-60 disabled:scale-100"
            >
              {loading ? "Lähetetään…" : <><span>Lähetä viesti</span><Send className="w-5 h-5" /></>}
            </button>
          </motion.form>
        )}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
    </section>
  )
}
