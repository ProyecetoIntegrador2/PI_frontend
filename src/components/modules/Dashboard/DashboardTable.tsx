import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Submission } from "./types"

function formatScore(score: number) {
  return Number.isInteger(score) ? score : score.toFixed(1)
}

export const DashboardTable = ({
  data,
  colors,
}: {
  data: Submission
  colors: Record<string, string>
}) => (
  <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
    <CardContent className="pt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
              <th className="p-3" style={{ color: colors.primary }}>Dimensión</th>
              <th className="p-3" style={{ color: colors.primary }}>Nivel Actual</th>
              <th className="p-3" style={{ color: colors.primary }}>Nivel Objetivo</th>
              <th className="p-3" style={{ color: colors.primary }}>Brecha</th>
            </tr>
          </thead>
          <tbody>
            {data.submissionParts.map((part) => (
              <tr key={part.partNumber} style={{ borderBottom: `1px solid ${colors.border}` }}>
                <td className="p-3" style={{ color: colors.primary }}>{part.partName}</td>
                <td className="p-3" style={{ color: colors.primary }}>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">
                      {formatScore(part.submissionPartMetrics.averageActualScore)}
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
                      {formatScore(part.submissionPartMetrics.averageDesiredScore)}
                    </span>
                    <Progress
                      value={part.submissionPartMetrics.averageDesiredScore * 20}
                      className="h-2 w-24"
                      style={{ backgroundColor: colors.border }}
                    />
                  </div>
                </td>
                <td className="p-3" style={{ color: colors.primary }}>
                  {formatScore(
                    part.submissionPartMetrics.averageDesiredScore -
                    part.submissionPartMetrics.averageActualScore
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: `${colors.border}30` }}>
              <td className="p-3 font-bold" style={{ color: colors.primary }}>Promedio General</td>
              <td className="p-3 font-bold" style={{ color: colors.primary }}>
                {formatScore(data.submissionMetrics.averageActualScore)}
              </td>
              <td className="p-3 font-bold" style={{ color: colors.primary }}>
                {formatScore(data.submissionMetrics.averageDesiredScore)}
              </td>
              <td className="p-3 font-bold" style={{ color: colors.primary }}>
                {formatScore(
                  data.submissionMetrics.averageDesiredScore - data.submissionMetrics.averageActualScore
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </CardContent>
  </Card>
)