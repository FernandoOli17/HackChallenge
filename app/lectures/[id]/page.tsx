"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { getLectureById, registerForLecture, isUserRegistered } from "@/lib/lectures"
import type { LectureType } from "@/lib/types"

export default function LectureDetailsPage({ params }: { params: { id: string } }) {
  const [lecture, setLecture] = useState<LectureType | null>(null)
  const [loading, setLoading] = useState(true)
  const [registering, setRegistering] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isRegistered, setIsRegistered] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchLecture = async () => {
      try {
        const data = await getLectureById(params.id)
        setLecture(data)

        const registered = await isUserRegistered(params.id)
        setIsRegistered(registered)
      } catch (err) {
        setError("Não foi possível carregar os detalhes da palestra.")
      } finally {
        setLoading(false)
      }
    }

    fetchLecture()
  }, [params.id])

  const handleRegister = async () => {
    setError("")
    setSuccess("")
    setRegistering(true)

    try {
      const result = await registerForLecture(params.id)
      if (result.success) {
        setSuccess("Inscrição realizada com sucesso!")
        setIsRegistered(true)
      } else {
        setError(result.message || "Não foi possível realizar a inscrição.")
      }
    } catch (err) {
      setError("Ocorreu um erro ao processar sua inscrição. Tente novamente.")
    } finally {
      setRegistering(false)
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Carregando detalhes da palestra...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (!lecture) {
    return (
      <DashboardLayout>
        <Card>
          <CardContent className="py-8">
            <div className="text-center">
              <p className="mb-4 text-muted-foreground">Palestra não encontrada.</p>
              <Button variant="outline" onClick={() => router.push("/lectures")}>
                Voltar para a lista de palestras
              </Button>
            </div>
          </CardContent>
        </Card>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <Button variant="outline" size="sm" onClick={() => router.back()}>
          Voltar
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{lecture.title}</CardTitle>
            <CardDescription>Apresentado por {lecture.speaker}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert className="bg-green-50 border-green-200 text-green-800">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            <div>
              <h3 className="font-semibold mb-2">Sobre a Palestra</h3>
              <p className="text-muted-foreground whitespace-pre-line">{lecture.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Detalhes</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>Data: {new Date(lecture.date).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>Horário: {lecture.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>Local: {lecture.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>Vagas disponíveis: {lecture.availableSeats}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Status da Inscrição</h3>
                {isRegistered ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-md">
                    <p className="font-medium">Você já está inscrito nesta palestra!</p>
                    <p className="text-sm mt-2">Não se esqueça de comparecer no dia e horário marcados.</p>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="mb-4">
                      {lecture.availableSeats > 0
                        ? "Inscreva-se para garantir sua vaga nesta palestra."
                        : "Não há mais vagas disponíveis para esta palestra."}
                    </p>
                    <Button
                      onClick={handleRegister}
                      disabled={registering || lecture.availableSeats <= 0 || isRegistered}
                      className="w-full"
                    >
                      {registering
                        ? "Processando..."
                        : lecture.availableSeats <= 0
                          ? "Sem vagas disponíveis"
                          : "Inscrever-se"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
