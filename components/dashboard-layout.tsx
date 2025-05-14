"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, Home, LogOut, Menu, Users, X } from "lucide-react"
import { isAuthenticated, logout } from "@/lib/auth"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated()
      if (!authenticated) {
        router.push("/login")
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { href: "/lectures", label: "Palestras", icon: <Calendar className="h-5 w-5" /> },
    { href: "/lectures/create", label: "Cadastrar Palestra", icon: <Users className="h-5 w-5" /> },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-10">
        <div className="flex flex-col flex-grow bg-white border-r">
          <div className="flex items-center h-16 px-4 border-b shrink-0">
            <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
              <span>HackChallenge</span>
            </Link>
          </div>
          <div className="flex flex-col flex-grow px-4 py-4">
            <nav className="flex-1 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm rounded-md ${
                    pathname === item.href ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="pt-4 mt-auto">
              <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
          style={{ display: isMobileMenuOpen ? "block" : "none" }}
          onClick={closeMobileMenu}
        />
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
              <span>HackChallenge</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col flex-grow px-4 py-4">
            <nav className="flex-1 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm rounded-md ${
                    pathname === item.href ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="pt-4 mt-auto">
              <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 md:pl-64">
        <header className="sticky top-0 z-10 flex items-center h-16 bg-white border-b md:hidden">
          <div className="flex items-center justify-between w-full px-4">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
              <span>HackChallenge</span>
            </Link>
            <div className="w-8" /> {/* Spacer for balance */}
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
