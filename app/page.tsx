import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { NichesSection } from "@/components/niches-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <NichesSection />
      </main>
      <Footer />
    </div>
  )
}
