import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroParticles } from "@/components/hero-particles"
import { FeatureCard } from "@/components/feature-card"
import { StatsCard } from "@/components/stats-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { EventCard } from "@/components/event-card"
import { SpeakerCard } from "@/components/speaker-card"
import { ArrowRight, Calendar, CheckCircle, Globe, MessageSquare, Mic, Users, Zap, BookOpen, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-full p-1.5">
              <Mic className="h-5 w-5 text-white" />
            </div>
            <Link href="/" className="text-xl font-bold">
              HackChallenge
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#eventos" className="text-sm font-medium hover:text-primary transition-colors">
              Eventos
            </Link>
            <Link href="#palestrantes" className="text-sm font-medium hover:text-primary transition-colors">
              Palestrantes
            </Link>
            <Link href="#recursos" className="text-sm font-medium hover:text-primary transition-colors">
              Recursos
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-primary transition-colors">
              Depoimentos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Cadastrar</Button>
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <HeroParticles className="opacity-50" />
          <div className="container relative z-10 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6 bg-background">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Plataforma de gerenciamento de eventos
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  Conectando Mentes Brilhantes
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10">
                  Descubra, organize e participe de palestras técnicas que impulsionam a inovação e o conhecimento.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link href="/register">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      Começar agora <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/lectures">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Explorar palestras
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Palestra técnica"
                    width={800}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Próximos Eventos Section */}
        <section id="eventos" className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Próximos Eventos em Destaque</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Confira as palestras técnicas mais aguardadas e garanta sua vaga
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventCard
                title="Inteligência Artificial: Tendências e Aplicações"
                speaker="Dra. Ana Silva"
                date="15 de Junho, 2025"
                time="14:00 - 16:00"
                location="Auditório Principal"
                image="/placeholder.svg?height=300&width=500"
                category="Inteligência Artificial"
                availableSeats={50}
              />
              <EventCard
                title="Arquitetura de Microsserviços na Prática"
                speaker="Carlos Mendes"
                date="20 de Junho, 2025"
                time="10:00 - 12:00"
                location="Sala de Conferências 2"
                image="/placeholder.svg?height=300&width=500"
                category="Desenvolvimento"
                availableSeats={30}
              />
              <EventCard
                title="Cibersegurança: Protegendo Sistemas Críticos"
                speaker="Fernanda Costa"
                date="25 de Junho, 2025"
                time="15:30 - 17:30"
                location="Auditório Secundário"
                image="/placeholder.svg?height=300&width=500"
                category="Segurança"
                availableSeats={40}
              />
            </div>
            <div className="text-center mt-10">
              <Link href="/lectures">
                <Button variant="outline" size="lg">
                  Ver todos os eventos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Palestrantes em Destaque */}
        <section id="palestrantes" className="py-20">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Palestrantes em Destaque</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça os especialistas que compartilham conhecimento e inspiração
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SpeakerCard
                name="Dra. Ana Silva"
                role="Pesquisadora em IA"
                company="TechInnovate"
                image="/placeholder.svg?height=400&width=400"
                topics={["Inteligência Artificial", "Machine Learning", "Deep Learning"]}
              />
              <SpeakerCard
                name="Carlos Mendes"
                role="Arquiteto de Software"
                company="DevSolutions"
                image="/placeholder.svg?height=400&width=400"
                topics={["Microsserviços", "Cloud Computing", "DevOps"]}
              />
              <SpeakerCard
                name="Fernanda Costa"
                role="Especialista em Segurança"
                company="SecureNet"
                image="/placeholder.svg?height=400&width=400"
                topics={["Cibersegurança", "Ethical Hacking", "Proteção de Dados"]}
              />
              <SpeakerCard
                name="Ricardo Oliveira"
                role="CTO"
                company="InnovateTech"
                image="/placeholder.svg?height=400&width=400"
                topics={["Liderança Técnica", "Inovação", "Transformação Digital"]}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                icon={<Users className="h-6 w-6 text-primary" />}
                title="10,000+"
                description="Participantes ativos"
              />
              <StatsCard
                icon={<Calendar className="h-6 w-6 text-primary" />}
                title="5,000+"
                description="Palestras realizadas"
              />
              <StatsCard
                icon={<Globe className="h-6 w-6 text-primary" />}
                title="50+"
                description="Países alcançados"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="py-20">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Por que escolher nossa plataforma?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Oferecemos ferramentas completas para organizadores e participantes de eventos técnicos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Calendar className="h-5 w-5 text-primary" />}
                title="Gestão Simplificada"
                description="Crie e gerencie palestras técnicas com facilidade, definindo datas, horários e capacidade."
              />
              <FeatureCard
                icon={<Users className="h-5 w-5 text-primary" />}
                title="Inscrições Online"
                description="Sistema completo de inscrições com confirmação automática e lembretes para os participantes."
              />
              <FeatureCard
                icon={<MessageSquare className="h-5 w-5 text-primary" />}
                title="Interação em Tempo Real"
                description="Perguntas, enquetes e feedback durante as palestras para maior engajamento."
              />
              <FeatureCard
                icon={<BookOpen className="h-5 w-5 text-primary" />}
                title="Materiais Complementares"
                description="Compartilhe slides, códigos e recursos adicionais com os participantes."
              />
              <FeatureCard
                icon={<Award className="h-5 w-5 text-primary" />}
                title="Certificados Digitais"
                description="Emissão automática de certificados para palestrantes e participantes."
              />
              <FeatureCard
                icon={<Zap className="h-5 w-5 text-primary" />}
                title="Análises Detalhadas"
                description="Métricas e insights sobre engajamento, participação e feedback dos eventos."
              />
            </div>
          </div>
        </section>

        {/* Imagem de Palestra com CTA */}
        <section className="py-20 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Palestra técnica"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background"></div>
          </div>
          <div className="container px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Transforme sua carreira com conhecimento técnico
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Participe de palestras ministradas por especialistas reconhecidos e expanda suas habilidades em
                  tecnologia, desenvolvimento, segurança e muito mais.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Conteúdo de Qualidade</h3>
                      <p className="text-muted-foreground">
                        Palestras cuidadosamente selecionadas com foco em temas relevantes e atuais.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Networking Estratégico</h3>
                      <p className="text-muted-foreground">
                        Conecte-se com profissionais e especialistas da sua área de interesse.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Certificação Profissional</h3>
                      <p className="text-muted-foreground">
                        Obtenha certificados que valorizam seu currículo e demonstram seu compromisso com o aprendizado
                        contínuo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/register">
                    <Button size="lg" className="gap-2">
                      Comece sua jornada <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Palestra técnica"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">O Que Dizem Nossos Usuários</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Veja como nossa plataforma tem impactado organizadores e participantes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                content="A plataforma HackChallenge revolucionou a forma como organizamos nossas conferências técnicas. A gestão de inscrições e o envio de materiais ficaram muito mais eficientes."
                author="Marcos Almeida"
                role="Organizador de Eventos de Tecnologia"
                avatar="/placeholder.svg?height=40&width=40"
              />
              <TestimonialCard
                content="Como palestrante, posso acompanhar facilmente o engajamento do público e compartilhar recursos adicionais. A interface é intuitiva e as ferramentas são exatamente o que precisamos."
                author="Juliana Santos"
                role="Especialista em Cloud Computing"
                avatar="/placeholder.svg?height=40&width=40"
              />
              <TestimonialCard
                content="Participar de palestras técnicas nunca foi tão fácil. O sistema de recomendação me ajuda a encontrar eventos relevantes para minha área, e os certificados são gerados automaticamente."
                author="Rafael Costa"
                role="Desenvolvedor Full Stack"
                avatar="/placeholder.svg?height=40&width=40"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Expandir seu Conhecimento?</h2>
                <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                  Junte-se a milhares de profissionais que estão aprimorando suas habilidades técnicas através de
                  palestras de qualidade.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/register">
                    <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                      Criar conta gratuita <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/lectures">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    >
                      Explorar palestras
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary rounded-full p-1.5">
                  <Mic className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold">HackChallenge</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Plataforma completa para gerenciamento de palestras técnicas e eventos.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Plataforma</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Casos de uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Integrações
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Clientes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Comunidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Tutoriais
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HackChallenge. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Termos de Serviço
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
