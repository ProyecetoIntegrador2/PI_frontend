"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts"
import { ArrowUpIcon, CheckCircle2Icon, BarChart3Icon, PieChartIcon, ActivityIcon, AlertCircleIcon } from "lucide-react"

// Definición de tipos
interface SubmissionAnswer {
  questionNumber: number
  questionText: string
  actualLevel: number
  actualOptionText: string
  targetLevel: number
  targetOptionText: string
}

interface SubmissionPartMetrics {
  averageActualScore: number
  averageDesiredScore: number
  qualifiedMajorityCriterion: any
  majorityCutOffLevel: any
  thresholdBasedScoring: any
}

interface SubmissionPart {
  partNumber: number
  partName: string
  submissionAnswers: SubmissionAnswer[]
  submissionPartMetrics: SubmissionPartMetrics
}

interface Submission {
  userId: number
  formName: string
  formVersion: string
  submissionDate: string
  submissionParts: SubmissionPart[]
  submissionMetrics: SubmissionPartMetrics
}

function Dashboard({ id }: { id: string }) {
  const [data, setData] = useState<Submission | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Colores adaptados del diseño mostrado
  const colors = {
    primary: "#000000", // Negro para texto principal
    secondary: "#6B7280", // Gris para texto secundario
    background: "#FFFFFF", // Fondo blanco
    card: "#F9FAFB", // Fondo de tarjetas ligeramente gris
    border: "#E5E7EB", // Bordes suaves
    accent: "#1D4ED8", // Azul para acentos (basado en el círculo activo)
    accent2: "#3B82F6", // Azul secundario para gráficos
    accent3: "#60A5FA", // Azul terciario para gráficos
    success: "#10B981", // Verde para éxito
    warning: "#F59E0B", // Ámbar para advertencias
    error: "#EF4444", // Rojo para errores
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:8080/api/submission?userId=1")
        if (!response.ok) {
          throw new Error("Error al obtener los datos")
        }
        const submissions: Submission[] = await response.json()
        // Obtener la última submission
        const latestSubmission = submissions[submissions.length - 1]
        setData(latestSubmission)
      } catch (err) {
        setError("Error al cargar los datos: " + (err instanceof Error ? err.message : String(err)))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Preparar datos para el gráfico de radar
  const prepareRadarData = (data: Submission | null) => {
    if (!data) return []

    return data.submissionParts.map((part) => ({
      subject: part.partName,
      actual: part.submissionPartMetrics.averageActualScore,
      target: part.submissionPartMetrics.averageDesiredScore,
      fullMark: 5,
    }))
  }

  // Preparar datos para el gráfico de barras
  const prepareBarData = (data: Submission | null) => {
    if (!data) return []

    return data.submissionParts.map((part) => ({
      name: part.partName,
      actual: part.submissionPartMetrics.averageActualScore,
      target: part.submissionPartMetrics.averageDesiredScore,
    }))
  }

  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen" style={{ backgroundColor: colors.background }}>
        <div className="text-xl" style={{ color: colors.primary }}>
          Cargando datos...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{ backgroundColor: colors.background }}
      >
        <AlertCircleIcon className="w-12 h-12 mb-4" style={{ color: colors.error }} />
        <div className="text-xl" style={{ color: colors.primary }}>
          {error}
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen" style={{ backgroundColor: colors.background }}>
        <div className="text-xl" style={{ color: colors.primary }}>
          No hay datos disponibles
        </div>
      </div>
    )
  }

  const radarData = prepareRadarData(data)
  const barData = prepareBarData(data)

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: colors.background, color: colors.primary }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: colors.primary }}>
            Modelo Madurez de Transformación Digital para organizaciones
          </h1>
          <p style={{ color: colors.secondary }}>
            Formulario: {data.formName} v{data.formVersion} | Usuario ID: {data.userId} | Fecha:{" "}
            {formatDate(data.submissionDate)}
          </p>
        </div>

        {/* Tarjetas de resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: colors.primary }}>
                Puntuación General
              </CardTitle>
              <CardDescription style={{ color: colors.secondary }}>Nivel actual promedio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div className="text-4xl font-bold" style={{ color: colors.primary }}>
                  {data.submissionMetrics.averageActualScore.toFixed(1)}
                </div>
                <div className="text-sm" style={{ color: colors.secondary }}>
                  de 5.0
                </div>
              </div>
              <Progress
                value={data.submissionMetrics.averageActualScore * 20}
                className="h-2 mt-2"
                style={{ backgroundColor: colors.border }}
              />
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: colors.primary }}>
                Nivel Objetivo
              </CardTitle>
              <CardDescription style={{ color: colors.secondary }}>Puntuación deseada</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div className="text-4xl font-bold" style={{ color: colors.primary }}>
                  {data.submissionMetrics.averageDesiredScore.toFixed(1)}
                </div>
                <div className="text-sm" style={{ color: colors.secondary }}>
                  de 5.0
                </div>
              </div>
              <Progress
                value={data.submissionMetrics.averageDesiredScore * 20}
                className="h-2 mt-2"
                style={{ backgroundColor: colors.border }}
              />
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: colors.primary }}>
                Categorías
              </CardTitle>
              <CardDescription style={{ color: colors.secondary }}>Áreas evaluadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div className="text-4xl font-bold" style={{ color: colors.primary }}>
                  {data.submissionParts.length}
                </div>
                <div className="text-sm" style={{ color: colors.secondary }}>
                  dimensiones
                </div>
              </div>
              <div className="flex items-center mt-2">
                <CheckCircle2Icon className="h-5 w-5 mr-2" style={{ color: colors.success }} />
                <span style={{ color: colors.primary }}>Todas completadas</span>
              </div>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: colors.primary }}>
                Preguntas
              </CardTitle>
              <CardDescription style={{ color: colors.secondary }}>Total respondidas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div className="text-4xl font-bold" style={{ color: colors.primary }}>
                  {data.submissionParts.reduce((acc, part) => acc + part.submissionAnswers.length, 0)}
                </div>
                <div className="text-sm" style={{ color: colors.secondary }}>
                  preguntas
                </div>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUpIcon className="h-5 w-5 mr-2" style={{ color: colors.success }} />
                <span style={{ color: colors.primary }}>100% completado</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos */}
        <Tabs defaultValue="radar" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
              Análisis por Dimensión
            </h2>
            <TabsList style={{ backgroundColor: colors.card }}>
              <TabsTrigger
                value="radar"
                className="data-[state=active]:text-white"
                style={{
                  color: colors.primary,
                  backgroundColor: "transparent",
                  ["--tw-ring-color" as any]: colors.accent,
                }}
              >
                <PieChartIcon className="h-4 w-4 mr-2" />
                Radar
              </TabsTrigger>
              <TabsTrigger
                value="bar"
                className="data-[state=active]:text-white"
                style={{
                  color: colors.primary,
                  backgroundColor: "transparent",
                  ["--tw-ring-color" as any]: colors.accent,
                }}
              >
                <BarChart3Icon className="h-4 w-4 mr-2" />
                Barras
              </TabsTrigger>
              <TabsTrigger
                value="table"
                className="data-[state=active]:text-white"
                style={{
                  color: colors.primary,
                  backgroundColor: "transparent",
                  ["--tw-ring-color" as any]: colors.accent,
                }}
              >
                <ActivityIcon className="h-4 w-4 mr-2" />
                Tabla
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="radar" className="mt-0">
            <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
              <CardContent className="pt-6">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={150} data={radarData}>
                      <PolarGrid stroke={colors.border} />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: colors.secondary }} />
                      <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fill: colors.secondary }} />
                      <Radar
                        name="Nivel Actual"
                        dataKey="actual"
                        stroke={colors.accent}
                        fill={colors.accent}
                        fillOpacity={0.5}
                      />
                      <Radar
                        name="Nivel Objetivo"
                        dataKey="target"
                        stroke={colors.success}
                        fill={colors.success}
                        fillOpacity={0.3}
                      />
                      <Legend wrapperStyle={{ color: colors.primary }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: colors.card,
                          borderColor: colors.border,
                          color: colors.primary,
                        }}
                        labelStyle={{ color: colors.primary }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bar" className="mt-0">
            <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
              <CardContent className="pt-6">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 120 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: colors.secondary }}
                        angle={-45}
                        textAnchor="end"
                        height={100}
                      />
                      <YAxis domain={[0, 5]} tick={{ fill: colors.secondary }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: colors.card,
                          borderColor: colors.border,
                          color: colors.primary,
                        }}
                        labelStyle={{ color: colors.primary }}
                      />
                      <Legend wrapperStyle={{ color: colors.primary }} />
                      <Bar name="Nivel Actual" dataKey="actual" fill={colors.accent} />
                      <Bar name="Nivel Objetivo" dataKey="target" fill={colors.success} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="table" className="mt-0">
            <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
                        <th className="p-3" style={{ color: colors.primary }}>
                          Dimensión
                        </th>
                        <th className="p-3" style={{ color: colors.primary }}>
                          Nivel Actual
                        </th>
                        <th className="p-3" style={{ color: colors.primary }}>
                          Nivel Objetivo
                        </th>
                        <th className="p-3" style={{ color: colors.primary }}>
                          Brecha
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.submissionParts.map((part) => (
                        <tr key={part.partNumber} style={{ borderBottom: `1px solid ${colors.border}` }}>
                          <td className="p-3" style={{ color: colors.primary }}>
                            {part.partName}
                          </td>
                          <td className="p-3" style={{ color: colors.primary }}>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">
                                {part.submissionPartMetrics.averageActualScore.toFixed(1)}
                              </span>
                              <Progress
                                value={part.submissionPartMetrics.averageActualScore * 20}
                                className="h-2 w-24"
                                style={{ backgroundColor: colors.border }}
                              />
                            </div>
                          </td>
                          <td className="p-3" style={{ color: colors.primary }}>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">
                                {part.submissionPartMetrics.averageDesiredScore.toFixed(1)}
                              </span>
                              <Progress
                                value={part.submissionPartMetrics.averageDesiredScore * 20}
                                className="h-2 w-24"
                                style={{ backgroundColor: colors.border }}
                              />
                            </div>
                          </td>
                          <td className="p-3" style={{ color: colors.primary }}>
                            {(
                              part.submissionPartMetrics.averageDesiredScore -
                              part.submissionPartMetrics.averageActualScore
                            ).toFixed(1)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr style={{ backgroundColor: `${colors.border}30` }}>
                        <td className="p-3 font-bold" style={{ color: colors.primary }}>
                          Promedio General
                        </td>
                        <td className="p-3 font-bold" style={{ color: colors.primary }}>
                          {data.submissionMetrics.averageActualScore.toFixed(1)}
                        </td>
                        <td className="p-3 font-bold" style={{ color: colors.primary }}>
                          {data.submissionMetrics.averageDesiredScore.toFixed(1)}
                        </td>
                        <td className="p-3 font-bold" style={{ color: colors.primary }}>
                          {(
                            data.submissionMetrics.averageDesiredScore - data.submissionMetrics.averageActualScore
                          ).toFixed(1)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Detalle por dimensión */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
            Detalle por Dimensión
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.submissionParts.map((part) => (
              <Card key={part.partNumber} style={{ backgroundColor: colors.card, borderColor: colors.border }}>
                <CardHeader>
                  <CardTitle style={{ color: colors.primary }}>{part.partName}</CardTitle>
                  <CardDescription style={{ color: colors.secondary }}>
                    Nivel actual: {part.submissionPartMetrics.averageActualScore.toFixed(1)} | Nivel objetivo:{" "}
                    {part.submissionPartMetrics.averageDesiredScore.toFixed(1)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress
                    value={part.submissionPartMetrics.averageActualScore * 20}
                    className="h-2 mb-4"
                    style={{ backgroundColor: colors.border }}
                  />
                  <div className="text-sm" style={{ color: colors.primary }}>
                    <p className="mb-2">Esta dimensión contiene {part.submissionAnswers.length} preguntas evaluadas.</p>
                    {part.submissionPartMetrics.averageActualScore === 5 ? (
                      <div className="flex items-center" style={{ color: colors.success }}>
                        <CheckCircle2Icon className="h-4 w-4 mr-2" />
                        <span>Nivel máximo alcanzado</span>
                      </div>
                    ) : (
                      <div className="flex items-center" style={{ color: colors.warning }}>
                        <ArrowUpIcon className="h-4 w-4 mr-2" />
                        <span>
                          Oportunidad de mejora:{" "}
                          {(
                            part.submissionPartMetrics.averageDesiredScore -
                            part.submissionPartMetrics.averageActualScore
                          ).toFixed(1)}{" "}
                          puntos
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
