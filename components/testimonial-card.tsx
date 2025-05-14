import { cn } from "@/lib/utils"
import Image from "next/image"

interface TestimonialCardProps {
  content: string
  author: string
  role: string
  avatar: string
  className?: string
}

export function TestimonialCard({ content, author, role, avatar, className }: TestimonialCardProps) {
  return (
    <div
      className={cn("bg-card border border-border/40 rounded-lg p-6 shadow hover:shadow-md transition-all", className)}
    >
      <div className="mb-4">
        <svg
          width="45"
          height="36"
          className="text-primary/20"
          viewBox="0 0 45 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 0C6.04125 0 0 6.04125 0 13.5C0 20.9588 6.04125 27 13.5 27C20.9588 27 27 20.9588 27 13.5C27 6.04125 20.9588 0 13.5 0ZM40.5 0C33.0412 0 27 6.04125 27 13.5C27 20.9588 33.0412 27 40.5 27C47.9588 27 54 20.9588 54 13.5C54 6.04125 47.9588 0 40.5 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="mb-6 text-muted-foreground">{content}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
          <Image src={avatar || "/placeholder.svg"} alt={author} width={40} height={40} className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
