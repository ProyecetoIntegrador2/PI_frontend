import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpIcon, CheckCircle2Icon } from "lucide-react"
import { Submission } from "./types"

function formatScore(score: number) {
  return Number.isInteger(score) ? score : score.toFixed(1)
}

export const DashboardSummaryCards = ({
  data,
  colors,
}: {
  data: Submission
  colors: Record<string, string>
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    {/* Nivel actual promedio */}
    <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg" style={{ color: colors.accent }}>
          Nivel actual
        </CardTitle>
        <CardDescription style={{ color: colors.secondary }}>Puntuación General</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-4xl font-bold" style={{ color: colors.accent }}>
            {formatScore(data.submissionMetrics.averageActualScore)}
          </div>
          <div className="text-sm" style={{ color: colors.secondary }}>
            de 5
          </div>
        </div>
        <Progress
          value={data.submissionMetrics.averageActualScore * 20}
          className="h-2 mt-2"
          style={{
            backgroundColor: colors.border,
          }}
        />
        <style>
          {`
            .h-2.mt-2 > div {
              background-color: ${colors.accent} !important;
            }
          `}
        </style>
      </CardContent>
    </Card>
    {/* Nivel Objetivo */}
    <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg" style={{ color: colors.success }}>
          Nivel Objetivo
        </CardTitle>
        <CardDescription style={{ color: colors.secondary }}>Puntuación deseada</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="text-4xl font-bold" style={{ color: colors.success }}>
            {formatScore(data.submissionMetrics.averageDesiredScore)}
          </div>
          <div className="text-sm" style={{ color: colors.secondary }}>
            de 5
          </div>
        </div>
        <Progress
          value={data.submissionMetrics.averageDesiredScore * 20}
          className="h-2 mt-2 progress-success"
          style={{
            backgroundColor: colors.border,
          }}
        />
        <style>
          {`
            .progress-success.h-2.mt-2 > div {
              background-color: ${colors.success} !important;
            }
          `}
        </style>
      </CardContent>
    </Card>
    {/* Categorías */}
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
    {/* Preguntas */}
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
)