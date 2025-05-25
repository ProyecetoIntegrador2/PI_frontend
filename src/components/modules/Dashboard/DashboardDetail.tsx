import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpIcon, CheckCircle2Icon } from "lucide-react"
import { Submission } from "./types"

export const DashboardDetail = ({
  data,
  colors,
}: {
  data: Submission
  colors: Record<string, string>
}) => (
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
)