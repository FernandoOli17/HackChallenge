import { cn } from "@/lib/utils"
import Image from "next/image"

interface SpeakerCardProps {
  name: string
  role: string
  company: string
  image: string
  topics: string[]
  className?: string
}

export function SpeakerCard({ name, role, company, image, topics, className }: SpeakerCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border/40 rounded-lg overflow-hidden shadow hover:shadow-md transition-all text-center",
        className,
      )}
    >
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary mb-1">{role}</p>
        <p className="text-muted-foreground text-sm mb-4">{company}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {topics.map((topic, index) => (
            <span key={index} className="bg-muted text-xs font-medium px-2.5 py-1 rounded text-muted-foreground">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
