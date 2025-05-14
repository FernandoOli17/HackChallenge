import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  title: string
  speaker: string
  date: string
  time: string
  location: string
  image: string
  category: string
  availableSeats: number
  className?: string
}

export function EventCard({
  title,
  speaker,
  date,
  time,
  location,
  image,
  category,
  availableSeats,
  className,
}: EventCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border/40 rounded-lg overflow-hidden shadow hover:shadow-md transition-all",
        className,
      )}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">{category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-4">Apresentado por {speaker}</p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{availableSeats} vagas disponíveis</span>
          </div>
        </div>
        <Link href="/lectures/1" className="w-full">
          <Button variant="outline" className="w-full">
            Ver detalhes
          </Button>
        </Link>
      </div>
    </div>
  )
}
