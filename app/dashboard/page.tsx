"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { getUserData, isAuthenticated, logout } from "@/lib/auth"
import { getUserRegistrations } from "@/lib/lectures"
import DashboardLayout from "@/components/dashboard-layout"
import type { LectureType } from "@/lib/types"

export default function DashboardPage() {
  const [registeredLectures, setRegisteredLectures] = useState<LectureType[]>([])
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState<{ name: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated()
      if (!authenticated) {
        router.push("/login")
        return
      }

      const user = await getUserData()
      setUserData(user)

      const lectures = await getUserRegistrations()
      setRegisteredLectures(lectures)
      setLoading(false)
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Carregando...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Olá, {userData?.name || "Usuário"}</h1>
            <p className="text-muted-foreground">Bem-vindo ao seu painel de controle</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={handleLogout} variant="outline">
              Sair
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Minhas Inscrições</CardTitle>
              <CardDescription>Palestras em que você está inscrito</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{registeredLectures.length}</div>
            </CardContent>
            <CardFooter>
              <Link href="/lectures" className="text-primary hover:underline text-sm">
                Ver todas as palestras
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Próxima Palestra</CardTitle>
              <CardDescription>Sua próxima palestra agendada</CardDescription>
            </CardHeader>
            <CardContent>
              {registeredLectures.length > 0 ? (
                <div className="text-lg font-medium">{registeredLectures[0].title}</div>
              ) : (
                <div className="text-muted-foreground">Nenhuma palestra agendada</div>
              )}
            </CardContent>
            <CardFooter>
              <Link href="/lectures/register" className="text-primary hover:underline text-sm">
                Inscrever-se em uma palestra
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Cadastrar Palestra</CardTitle>
              <CardDescription>Compartilhe seu conhecimento</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Crie e gerencie suas próprias palestras</p>
            </CardContent>
            <CardFooter>
              <Link href="/lectures/create">
                <Button size="sm">Cadastrar nova palestra</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Minhas Inscrições</h2>
          {registeredLectures.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {registeredLectures.map((lecture) => (
                <Card key={lecture.id}>
                  <CardHeader>
                    <CardTitle>{lecture.title}</CardTitle>
                    <CardDescription>{lecture.speaker}</CardDescription>
                  </CardHeader>
                  <CardContent>
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
                    <Link href={`/lectures/${lecture.id}`}>
                      <Button variant="outline" size="sm">
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
                  <p className="mb-4 text-muted-foreground">Você ainda não está inscrito em nenhuma palestra.</p>
                  <Link href="/lectures">
                    <Button>Explorar palestras</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
