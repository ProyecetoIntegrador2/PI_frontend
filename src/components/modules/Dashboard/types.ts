export interface SubmissionAnswer {
  questionNumber: number
  questionText: string
  actualLevel: number
  actualOptionText: string
  targetLevel: number
  targetOptionText: string
}

export interface SubmissionPartMetrics {
  averageActualScore: number
  averageDesiredScore: number
  qualifiedMajorityCriterion: any
  majorityCutOffLevel: any
  thresholdBasedScoring: any
}

export interface SubmissionPart {
  partNumber: number
  partName: string
  submissionAnswers: SubmissionAnswer[]
  submissionPartMetrics: SubmissionPartMetrics
}

export interface Submission {
  userId: number
  formName: string
  formVersion: string
  submissionDate: string
  submissionParts: SubmissionPart[]
  submissionMetrics: SubmissionPartMetrics
}