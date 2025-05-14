"use client"

// Simulação de um sistema de autenticação usando localStorage
// Em um ambiente de produção, você usaria um sistema de autenticação real

interface User {
  id: string
  name: string
  email: string
}

// Chaves para armazenamento no localStorage
const AUTH_TOKEN_KEY = "hackchallenge_auth_token"
const USER_DATA_KEY = "hackchallenge_user_data"

// Usuários de exemplo
const MOCK_USERS = [
  {
    id: "1",
    name: "Usuário Teste",
    email: "teste@exemplo.com",
    password: "senha123",
  },
]

// Função para simular login
export async function login(email: string, password: string): Promise<boolean> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Busca o usuário pelo email (case insensitive)
  const user = MOCK_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

  if (user) {
    // Gera um token fake
    const token = `token_${Math.random().toString(36).substring(2)}`

    // Armazena o token e os dados do usuário
    localStorage.setItem(AUTH_TOKEN_KEY, token)
    localStorage.setItem(
      USER_DATA_KEY,
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
      }),
    )

    return true
  }

  // Limpa qualquer sessão anterior para evitar problemas
  localStorage.removeItem(AUTH_TOKEN_KEY)
  localStorage.removeItem(USER_DATA_KEY)

  return false
}

// Função para simular login com redes sociais
export async function loginWithSocial(provider: string): Promise<boolean> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Cria um usuário fake para o login social
  const socialUser = {
    id: `social_${Math.random().toString(36).substring(2)}`,
    name: provider === "google" ? "Usuário Google" : "Usuário Facebook",
    email: `usuario_${provider.toLowerCase()}@exemplo.com`,
  }

  // Gera um token fake
  const token = `token_${provider}_${Math.random().toString(36).substring(2)}`

  // Armazena o token e os dados do usuário
  localStorage.setItem(AUTH_TOKEN_KEY, token)
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(socialUser))

  console.log(`Login com ${provider} bem-sucedido:`, socialUser)

  return true
}

// Função para simular registro
export async function register(name: string, email: string, password: string): Promise<boolean> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Verifica se o email já está em uso (case insensitive)
  const existingUser = MOCK_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase())
  if (existingUser) {
    return false
  }

  // Cria um novo usuário
  const newUser = {
    id: `${MOCK_USERS.length + 1}`,
    name,
    email,
    password,
  }

  // Adiciona o usuário à lista (em um ambiente real, isso seria salvo no banco de dados)
  MOCK_USERS.push(newUser)

  // Gera um token fake
  const token = `token_${Math.random().toString(36).substring(2)}`

  // Armazena o token e os dados do usuário
  localStorage.setItem(AUTH_TOKEN_KEY, token)
  localStorage.setItem(
    USER_DATA_KEY,
    JSON.stringify({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    }),
  )

  console.log("Usuário registrado:", newUser)
  console.log("Todos os usuários:", MOCK_USERS)

  return true
}

// Função para verificar se o usuário está autenticado
export async function isAuthenticated(): Promise<boolean> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 100))

  const token = localStorage.getItem(AUTH_TOKEN_KEY)
  return !!token
}

// Função para obter os dados do usuário
export async function getUserData(): Promise<User | null> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 100))

  const userData = localStorage.getItem(USER_DATA_KEY)
  if (!userData) {
    return null
  }

  return JSON.parse(userData) as User
}

// Função para fazer logout
export async function logout(): Promise<void> {
  // Simula uma chamada de API
  await new Promise((resolve) => setTimeout(resolve, 300))

  localStorage.removeItem(AUTH_TOKEN_KEY)
  localStorage.removeItem(USER_DATA_KEY)
}

// Função para depuração - listar todos os usuários
export async function getAllUsers(): Promise<any[]> {
  return MOCK_USERS
}
