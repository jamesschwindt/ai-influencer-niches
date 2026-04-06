import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group">
            <h1 className="font-serif text-xl font-semibold tracking-tight text-foreground">
              AI Influencer Niches
            </h1>
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="#niches" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse Niches
            </Link>
            <Link 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
