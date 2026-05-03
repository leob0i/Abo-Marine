import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CompanyInfo } from "@/components/company-info"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02091a] text-white selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] md:bg-blue-600/15 bg-blue-500/35 rounded-full blur-[100px] md:blur-[150px] animate-blob" />
        <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] md:bg-purple-600/15 bg-blue-600/30 rounded-full blur-[100px] md:blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[15%] w-[55vw] h-[55vw] md:bg-indigo-600/15 bg-indigo-500/30 rounded-full blur-[100px] md:blur-[150px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
<CompanyInfo />
        <ContactForm />
      </div>

      <Footer />
    </main>
  )
}
