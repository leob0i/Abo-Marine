import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Huollot ja korjaukset",
  description: "Veneiden ja venemoottoreiden huollot ja korjaukset Turussa. Volvo Penta, Yanmar, Yamaha, Scania, Cummins, Caterpillar ja muut merkit. Volvo Penta vuosihuolto alkaen 390 €. Liikkuva palvelu – tulemme sinne missä veneesi on, myös merellä tai Turun saaristossa.",
  alternates: {
    canonical: "https://www.abomarineservice.com/huollot",
  },
  openGraph: {
    title: "Venehuollot ja -korjaukset Turku | Åbo Marine Service Oy",
    description: "Jumissa merellä tai saaristossa? Huoltoveneemme päivystää kellon ympäri Turun saariston alueella. Volvo Penta, Yanmar, Yamaha, Scania, Cummins ja muut merkit.",
    url: "https://www.abomarineservice.com/huollot",
  },
}

export default function HuollotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
