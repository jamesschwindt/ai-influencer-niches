"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { Niche } from "@/lib/niches"

interface NicheCardProps {
  niche: Niche
  index: number
}

export function NicheCard({ niche, index }: NicheCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="border-b border-border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left py-8 md:py-10 group"
      >
        <div className="flex items-start gap-6">
          <span className="text-sm font-mono text-muted-foreground mt-1.5 w-8 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap gap-3 mb-3">
                  {niche.tags.map((tag, i) => (
                    <span key={tag}>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {tag}
                      </span>
                      {i < niche.tags.length - 1 && (
                        <span className="text-muted-foreground/30 ml-3">/</span>
                      )}
                    </span>
                  ))}
                </div>
                
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground group-hover:text-accent transition-colors mb-3">
                  {niche.name}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-none">
                  {niche.description}
                </p>
              </div>
              
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 mt-2 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-10 pl-14 md:pl-14">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Target Audience
              </h3>
              <p className="text-foreground">{niche.audience}</p>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Content Ideas
              </h3>
              <ul className="space-y-2">
                {niche.contentIdeas.map((idea, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
