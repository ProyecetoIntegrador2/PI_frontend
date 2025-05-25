"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChartIcon, BarChart3Icon, ActivityIcon, AlertCircleIcon } from "lucide-react"
import { DashboardSummaryCards } from "./DashboardSummaryCards"
import { DashboardCharts } from "./DashboardCharts"
import { DashboardTable } from "./DashboardTable"
import { DashboardDetail } from "./DashboardDetail"
import { prepareRadarData, prepareBarData, formatDate } from "./dashboardUtils"
import { Submission } from "./types"

function Dashboard({ id }: { id: string }) {
  const [data, setData] = useState<Submission | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const colors = {
    primary: "#000000",
    secondary: "#6B7280",
    background: "#FFFFFF",
    card: "#F9FAFB",
    border: "#E5E7EB",
    accent: "#1D4ED8",
    accent2: "#3B82F6",
    accent3: "#60A5FA",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`http://localhost:8080/api/submission?userId=${id}`)
        if (!response.ok) throw new Error("Error al obtener los datos")
        const submissions: Submission[] = await response.json()
        setData(submissions[submissions.length - 1])
      } catch (err) {
        setError("Error al cargar los datos: " + (err instanceof Error ? err.message : String(err)))
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

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
      <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: colors.background }}>
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
            Formulario: {data.formName} v{data.formVersion} | Usuario ID: {data.userId} | Fecha: {formatDate(data.submissionDate)}
          </p>
        </div>
        <DashboardSummaryCards data={data} colors={colors} />
        <Tabs defaultValue="radar" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
              Análisis por Dimensión
            </h2>
            <TabsList style={{ backgroundColor: colors.card }}>
              <TabsTrigger value="radar" className="data-[state=active]:text-white" style={{ color: colors.primary, backgroundColor: "transparent", ["--tw-ring-color" as any]: colors.accent }}>
                <PieChartIcon className="h-4 w-4 mr-2" />
                Radar
              </TabsTrigger>
              <TabsTrigger value="bar" className="data-[state=active]:text-white" style={{ color: colors.primary, backgroundColor: "transparent", ["--tw-ring-color" as any]: colors.accent }}>
                <BarChart3Icon className="h-4 w-4 mr-2" />
                Barras
              </TabsTrigger>
              <TabsTrigger value="table" className="data-[state=active]:text-white" style={{ color: colors.primary, backgroundColor: "transparent", ["--tw-ring-color" as any]: colors.accent }}>
                <ActivityIcon className="h-4 w-4 mr-2" />
                Tabla
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="radar" className="mt-0">
            <DashboardCharts radarData={radarData} barData={[]} colors={colors} type="radar" />
          </TabsContent>
          <TabsContent value="bar" className="mt-0">
            <DashboardCharts radarData={[]} barData={barData} colors={colors} type="bar" />
          </TabsContent>
          <TabsContent value="table" className="mt-0">
            <DashboardTable data={data} colors={colors} />
          </TabsContent>
        </Tabs>
        <DashboardDetail data={data} colors={colors} />
      </div>
    </div>
  )
}

export default Dashboard
