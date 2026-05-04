import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { About } from "@/components/about"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meistä",
  description: "Åbo Marine Service Oy on turkulainen merialan huolto- ja korjausyritys yli 20 vuoden kokemuksella. Liikkuva palvelu yksityisille, yrityksille ja ammattiliikenteelle Turun ja saariston alueella. Jaltest-diagnoosilaitteet käytössä.",
  alternates: {
    canonical: "https://www.abomarineservice.com/meista",
  },
  openGraph: {
    title: "Meistä | Åbo Marine Service Oy",
    description: "Turkulainen venehuollon ammattilainen yli 20 vuoden kokemuksella. Palvelemme yksityisiä, yrityksiä ja ammattiliikennettä Turun ja saariston alueella.",
    url: "https://www.abomarineservice.com/meista",
  },
}

export default function MeistaPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/15 rounded-full blur-[150px] animate-blob" />
        <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] bg-purple-600/15 rounded-full blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[15%] w-[55vw] h-[55vw] bg-indigo-600/15 rounded-full blur-[150px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <About />
        <ContactForm />
      </div>

      <Footer />
    </main>
  )
}
