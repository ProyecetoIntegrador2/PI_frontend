import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
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
    <Accordion type="multiple" className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.submissionParts.map((part) => (
        <AccordionItem key={part.partNumber} value={`part-${part.partNumber}`}>
          <Card style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <div className="p-4">
              <AccordionTrigger>
                <div>
                  <div className="text-lg font-semibold" style={{ color: colors.primary }}>{part.partName}</div>
                  <div className="text-sm" style={{ color: colors.secondary }}>
                    Nivel actual promedio: {part.submissionPartMetrics.averageActualScore.toFixed(1)} | Nivel objetivo promedio:{" "}
                    {part.submissionPartMetrics.averageDesiredScore.toFixed(1)}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 mt-4">
                  {part.submissionAnswers.map((answer, idx) => (
                    <div key={idx} className="mb-4 p-3 rounded" style={{ backgroundColor: colors.background, border: `1px solid ${colors.border}` }}>
                      <div className="font-medium mb-2" style={{ color: colors.primary }}>
                        {answer.questionNumber}. {answer.questionText}
                      </div>
                      <div className="flex flex-col gap-1 text-sm">
                        <div>
                          <span className="font-semibold" style={{ color: colors.accent }}>Nivel actual:</span>{" "}
                          {answer.actualOptionText} <span style={{ color: colors.secondary }}>(Puntaje: {answer.actualLevel})</span>
                        </div>
                        <div>
                          <span className="font-semibold" style={{ color: colors.success }}>Nivel objetivo:</span>{" "}
                          {answer.targetOptionText} <span style={{ color: colors.secondary }}>(Puntaje: {answer.targetLevel})</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </div>
          </Card>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
)