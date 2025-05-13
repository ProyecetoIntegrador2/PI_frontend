"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, FileText, Lock, School } from "lucide-react"

export default function DigitalTransformationHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modelo de Madurez de Transformación Digital
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Evaluación para organizaciones que desean medir su nivel de madurez en transformación digital
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-3 accent-slate-900"></div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sobre este estudio</h2>
              <p className="text-gray-600 mb-6">
                Esta evaluación forma parte del Proyecto de Investigación: Framework de Gobernanza de Datos para
                Instituciones de Educación Superior financiado por la Universidad de Antioquia dirigido por la Dra. Gina
                Maestre, Profesora Asociada del departamento de Ingeniería de Sistemas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <School className="h-5 w-5 text-slate-900 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Toda la información producida se utilizará solo para fines académicos y de investigación.
                  </p>
                </div>
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-slate-900 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Los resultados pueden publicarse para fines académicos sin posibilidad de identificar a los
                    participantes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="h-3 accent-slate-900"></div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Privacidad y datos</h2>
              <p className="text-gray-600 mb-6">
                De acuerdo con la Ley 1581 del 2012, garantizamos la privacidad y el correcto tratamiento de sus datos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Lock className="h-5 w-5 text-slate-900 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Cualquier información de posible identificación será tratada de forma absolutamente privada.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-slate-900 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Puede retirarse de este estudio en cualquier momento si lo desea.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg mb-12">
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Consideraciones especiales</h2>
              <p className="text-gray-600 mb-6">
                Su participación en este estudio no implica costos o beneficios económicos. El nombre no es un campo
                obligatorio. No podrá ser contactado por investigadores excepto por su voluntad expresa.
              </p>
              <p className="text-gray-700 mb-8">
                Los miembros del equipo de investigación están listos para proporcionar cualquier información adicional.
                Contacto:{" "}
                <a href="mailto:gina.maestre@udea.edu.co" className="text-slate-900 hover:underline">
                  gina.maestre@udea.edu.co
                </a>
              </p>

              <Link href="/digital-transformation-form">
                <Button className="accent-slate-900 hover:accent-slate-600 hover:cursor-pointer text-white px-8 py-6 rounded-md text-lg font-medium transition-all shadow-md hover:shadow-lg">
                  Comenzar evaluación
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Universidad de Antioquia - Proyecto de Investigación</p>
        </footer>
      </div>
    </div>
  )
}
