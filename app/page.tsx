import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CompanyInfo } from "@/components/company-info"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Sivun tausta – samat blob-elementit kuin herossa */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/15 rounded-full blur-[150px] animate-blob mix-blend-screen" />
        <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] bg-purple-600/15 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[15%] w-[55vw] h-[55vw] bg-indigo-600/15 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-screen" />
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
