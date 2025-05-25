import { Submission } from "./types"

export const prepareRadarData = (data: Submission | null) => {
  if (!data) return []
  return data.submissionParts.map((part) => ({
    subject: part.partName,
    actual: part.submissionPartMetrics.averageActualScore,
    target: part.submissionPartMetrics.averageDesiredScore,
    fullMark: 5,
  }))
}

export const prepareBarData = (data: Submission | null) => {
  if (!data) return []
  return data.submissionParts.map((part) => ({
    name: part.partName,
    actual: part.submissionPartMetrics.averageActualScore,
    target: part.submissionPartMetrics.averageDesiredScore,
  }))
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}