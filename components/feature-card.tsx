import type React from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn("bg-card border border-border/40 rounded-lg p-6 shadow hover:shadow-md transition-all", className)}
    >
      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
