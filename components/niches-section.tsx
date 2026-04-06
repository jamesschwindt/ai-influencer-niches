import { niches } from "@/lib/niches"
import { NicheCard } from "./niche-card"

export function NichesSection() {
  return (
    <section id="niches" className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
          Explore the Niches
        </h2>
        <p className="text-muted-foreground mb-10">
          Click on any niche to see detailed information, target audience, and content ideas.
        </p>
        
        <div>
          {niches.map((niche, index) => (
            <NicheCard key={niche.id} niche={niche} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
