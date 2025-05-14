"use client"

import type { LectureType } from "./types"

// Palestras de exemplo
const MOCK_LECTURES: LectureType[] = [
  {
    id: "1",
    title: "Introdução à Inteligência Artificial",
    description:
      "Uma palestra introdutória sobre os conceitos básicos de IA, machine learning e suas aplicações no mundo real. Discutiremos os fundamentos, algoritmos populares e como começar a trabalhar com IA.",
    speaker: "Dr. Ana Silva",
    date: "2025-06-15",
    time: "14:00",
    location: "Auditório Principal",
    availableSeats: 50,
    registeredUsers: [],
  },
  {
    id: "2",
    title: "Desenvolvimento Web Moderno",
    description:
      "Aprenda as mais recentes tecnologias e frameworks para desenvolvimento web. Vamos cobrir React, Next.js, e as melhores práticas para criar aplicações web modernas e responsivas.",
    speaker: "Carlos Mendes",
    date: "2025-06-20",
    time: "10:00",
    location: "Sala de Conferências 2",
    availableSeats: 30,
    registeredUsers: [],
  },
  {
    id: "3",
    title: "Segurança Cibernética para Empresas",
    description:
      "Uma visão abrangente sobre as ameaças cibernéticas atuais e como proteger sua empresa. Discutiremos estratégias de prevenção, detecção e resposta a incidentes de segurança.",
    speaker: "Fernanda Costa",
    date: "2025-06-25",
    time: "15:30",
    location: "Auditório Secundário",
    availableSeats: 40,
    registeredUsers: [],
  },
]

// Função para obter todas as palestras
export async function getAllLectures(): Promise<LectureType[]> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 800))

  return MOCK_LECTURES
}

// Função para obter uma palestra pelo ID
export async function getLectureById(id: string): Promise<LectureType | null> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 500))

  const lecture = MOCK_LECTURES.find((l) => l.id === id)
  return lecture || null
}

// Função para criar uma nova palestra
export async function createLecture(lectureData: Omit<LectureType, "id" | "registeredUsers">): Promise<boolean> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const newLecture: LectureType = {
    id: `${MOCK_LECTURES.length + 1}`,
    ...lectureData,
    registeredUsers: [],
  }

  MOCK_LECTURES.push(newLecture)
  return true
}

// Função para inscrever um usuário em uma palestra
export async function registerForLecture(lectureId: string): Promise<{ success: boolean; message?: string }> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Obtém o ID do usuário atual
  const userData = localStorage.getItem("hackchallenge_user_data")
  if (!userData) {
    return { success: false, message: "Usuário não autenticado" }
  }

  const user = JSON.parse(userData)
  const userId = user.id

  // Encontra a palestra
  const lectureIndex = MOCK_LECTURES.findIndex((l) => l.id === lectureId)
  if (lectureIndex === -1) {
    return { success: false, message: "Palestra não encontrada" }
  }

  const lecture = MOCK_LECTURES[lectureIndex]

  // Verifica se o usuário já está inscrito
  if (lecture.registeredUsers.includes(userId)) {
    return { success: false, message: "Você já está inscrito nesta palestra" }
  }

  // Verifica se há vagas disponíveis
  if (lecture.availableSeats <= 0) {
    return { success: false, message: "Não há vagas disponíveis para esta palestra" }
  }

  // Inscreve o usuário
  MOCK_LECTURES[lectureIndex] = {
    ...lecture,
    availableSeats: lecture.availableSeats - 1,
    registeredUsers: [...lecture.registeredUsers, userId],
  }

  return { success: true }
}

// Função para verificar se um usuário está inscrito em uma palestra
export async function isUserRegistered(lectureId: string): Promise<boolean> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Obtém o ID do usuário atual
  const userData = localStorage.getItem("hackchallenge_user_data")
  if (!userData) {
    return false
  }

  const user = JSON.parse(userData)
  const userId = user.id

  // Encontra a palestra
  const lecture = MOCK_LECTURES.find((l) => l.id === lectureId)
  if (!lecture) {
    return false
  }

  // Verifica se o usuário está inscrito
  return lecture.registeredUsers.includes(userId)
}

// Função para obter as palestras em que o usuário está inscrito
export async function getUserRegistrations(): Promise<LectureType[]> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Obtém o ID do usuário atual
  const userData = localStorage.getItem("hackchallenge_user_data")
  if (!userData) {
    return []
  }

  const user = JSON.parse(userData)
  const userId = user.id

  // Filtra as palestras em que o usuário está inscrito
  return MOCK_LECTURES.filter((lecture) => lecture.registeredUsers.includes(userId))
}
