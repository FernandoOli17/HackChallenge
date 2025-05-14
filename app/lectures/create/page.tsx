"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import DashboardLayout from "@/components/dashboard-layout"
import { createLecture } from "@/lib/lectures"

export default function CreateLecturePage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [speaker, setSpeaker] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [location, setLocation] = useState("")
  const [availableSeats, setAvailableSeats] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const success = await createLecture({
        title,
        description,
        speaker,
        date,
        time,
        location,
        availableSeats: Number.parseInt(availableSeats),
      })

      if (success) {
        router.push("/lectures")
      } else {
        setError("Não foi possível cadastrar a palestra. Tente novamente.")
      }
    } catch (err) {
      setError("Ocorreu um erro ao cadastrar a palestra. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cadastrar Nova Palestra</h1>

        <Card>
          <CardHeader>
            <CardTitle>Informações da Palestra</CardTitle>
            <CardDescription>Preencha os detalhes da palestra que você deseja cadastrar</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="title">Título da Palestra *</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição *</Label>
                <Textarea
                  id="description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="speaker">Palestrante *</Label>
                <Input id="speaker" value={speaker} onChange={(e) => setSpeaker(e.target.value)} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Data *</Label>
                  <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Horário *</Label>
                  <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Local *</Label>
                <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availableSeats">Número de Vagas *</Label>
                <Input
                  id="availableSeats"
                  type="number"
                  min="1"
                  value={availableSeats}
                  onChange={(e) => setAvailableSeats(e.target.value)}
                  required
                />
              </div>
              <div className="pt-4 flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => router.back()} disabled={loading}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Cadastrando..." : "Cadastrar Palestra"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
