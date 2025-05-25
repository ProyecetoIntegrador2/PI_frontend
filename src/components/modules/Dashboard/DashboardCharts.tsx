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
import { Card, CardContent } from "@/components/ui/card"

export const DashboardCharts = ({
  radarData,
  barData,
  colors,
  type,
}: {
  radarData: any[]
  barData: any[]
  colors: Record<string, string>
  type: "radar" | "bar"
}) => {
  if (type === "radar") {
    return (
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
    )
  }

  if (type === "bar") {
    return (
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
    )
  }

  return null
}