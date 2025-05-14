"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MapPin, Search, Users } from "lucide-react"
import { getAllLectures } from "@/lib/lectures"
import DashboardLayout from "@/components/dashboard-layout"
import type { LectureType } from "@/lib/types"

export default function LecturesPage() {
  const [lectures, setLectures] = useState<LectureType[]>([])
  const [filteredLectures, setFilteredLectures] = useState<LectureType[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLectures = async () => {
      const data = await getAllLectures()
      setLectures(data)
      setFilteredLectures(data)
      setLoading(false)
    }

    fetchLectures()
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredLectures(lectures)
      return
    }

    const filtered = lectures.filter(
      (lecture) =>
        lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lecture.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lecture.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredLectures(filtered)
  }, [searchTerm, lectures])

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Carregando palestras...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Palestras Disponíveis</h1>
            <p className="text-muted-foreground">Explore e inscreva-se nas palestras disponíveis</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar palestras..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Link href="/lectures/create">
              <Button>Cadastrar Palestra</Button>
            </Link>
          </div>
        </div>

        {filteredLectures.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredLectures.map((lecture) => (
              <Card key={lecture.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{lecture.title}</CardTitle>
                  <CardDescription>{lecture.speaker}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{lecture.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{new Date(lecture.date).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{lecture.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{lecture.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{lecture.availableSeats} vagas disponíveis</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/lectures/${lecture.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Ver detalhes
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-8">
              <div className="text-center">
                <p className="mb-4 text-muted-foreground">
                  {searchTerm
                    ? "Nenhuma palestra encontrada com os termos da busca."
                    : "Não há palestras disponíveis no momento."}
                </p>
                {searchTerm && (
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    Limpar busca
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
