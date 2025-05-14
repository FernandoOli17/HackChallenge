import type React from "react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function StatsCard({ icon, title, description, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border/40 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-primary/10 p-3 flex items-center justify-center">{icon}</div>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
