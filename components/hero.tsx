export function Hero() {
  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          The Complete Guide
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground text-balance mb-6">
          Niche Ideas for AI Influencers
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Discover untapped opportunities to build your AI persona. From martial arts to mindfulness, 
          each niche offers unique potential to connect with passionate audiences.
        </p>
        <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
          <span>April 2026</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>18 Niche Ideas</span>
        </div>
        
        <p className="mt-8 text-foreground">
          Use an{" "}
          <a 
            href="https://makeclips.com/tools/ai-influencer-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors font-medium"
          >
            AI Influencer Generator
          </a>{" "}
          to create your influencer.
        </p>
      </div>
    </section>
  )
}
