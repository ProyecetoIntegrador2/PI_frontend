"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"
import { Stepper } from "@/components/shared/Stepper"
import { useStepper } from "@/hooks/useStepper"

export default function MultiStepRegisterForm() {
  const { step, nextStep, prevStep, isFirstStep, isLastStep } = useStepper({ totalSteps: 3 })
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Step 2
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    // Step 3
    occupation: "",
    company: "",
    website: "",
    referral: "",
  })

  const updateFormData = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission with formData
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your API
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Crear cuenta</CardTitle>
          <CardDescription className="text-center">Completa el formulario para registrarte</CardDescription>
          <Stepper currentStep={step} steps={["Cuenta", "Personal", "Adicional"]} />
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              {/* Step 1 */}
              {step === 1 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => updateFormData("password", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox
                      id="terms"
                      checked={agreed}
                      onCheckedChange={(checked) => {
                        if (typeof checked === "boolean") {
                          setAgreed(checked)
                        }
                      }}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto los{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        términos y condiciones
                      </Link>
                    </label>
                  </div>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      placeholder="+34 600 000 000"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Dirección</Label>
                    <Input
                      id="address"
                      placeholder="Calle Ejemplo, 123"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Ciudad</Label>
                    <Input
                      id="city"
                      placeholder="Madrid"
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Código Postal</Label>
                    <Input
                      id="postalCode"
                      placeholder="28001"
                      value={formData.postalCode}
                      onChange={(e) => updateFormData("postalCode", e.target.value)}
                      required
                    />
                  </div>
                </>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Ocupación</Label>
                    <Input
                      id="occupation"
                      placeholder="Desarrollador"
                      value={formData.occupation}
                      onChange={(e) => updateFormData("occupation", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Mi Empresa S.L."
                      value={formData.company}
                      onChange={(e) => updateFormData("company", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Sitio web</Label>
                    <Input
                      id="website"
                      placeholder="https://miempresa.com"
                      value={formData.website}
                      onChange={(e) => updateFormData("website", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="referral">¿Cómo nos conociste?</Label>
                    <Input
                      id="referral"
                      placeholder="Google, amigo, etc."
                      value={formData.referral}
                      onChange={(e) => updateFormData("referral", e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="flex w-full space-x-2">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                  Anterior
                </Button>
              )}

              {!isLastStep ? (
                <Button type="button" onClick={nextStep} disabled={step === 1 && !agreed} className="flex-1">
                  Siguiente
                </Button>
              ) : (
                <Button type="submit" className="flex-1">
                  Registrarse
                </Button>
              )}
            </div>

            {step === 1 && (
              <div className="text-center text-sm">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Iniciar sesión
                </Link>
              </div>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

