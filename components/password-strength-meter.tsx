"use client"

import { cn } from "@/lib/utils"

interface PasswordStrengthMeterProps {
  password: string
}

export function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  const getPasswordStrength = (password: string): number => {
    if (!password) return 0

    let strength = 0

    // Length check
    if (password.length >= 8) strength += 1

    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 1

    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1

    // Contains number
    if (/[0-9]/.test(password)) strength += 1

    // Contains special character
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    return strength
  }

  const strength = getPasswordStrength(password)

  const getStrengthText = (strength: number): string => {
    if (strength === 0) return "Muito fraca"
    if (strength === 1) return "Fraca"
    if (strength === 2) return "Razoável"
    if (strength === 3) return "Boa"
    if (strength === 4) return "Forte"
    return "Muito forte"
  }

  const getStrengthColor = (strength: number): string => {
    if (strength === 0) return "bg-red-500"
    if (strength === 1) return "bg-red-500"
    if (strength === 2) return "bg-yellow-500"
    if (strength === 3) return "bg-yellow-500"
    if (strength === 4) return "bg-green-500"
    return "bg-green-500"
  }

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={cn("h-1 flex-1 rounded-full", index <= strength ? getStrengthColor(strength) : "bg-muted")}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Força da senha: <span className="font-medium">{getStrengthText(strength)}</span>
      </p>
    </div>
  )
}
