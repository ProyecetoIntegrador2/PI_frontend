"use client";

import { Stepper } from "@/components/shared/Stepper";
import { Card } from "@/components/ui/card";
import React, { use, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  combinatedSchema,
  StepFiveFormData,
  StepFourFormData,
  StepOneFormData,
  StepSevenFormData,
  StepSixFormData,
  StepThreeFormData,
  StepTwoFormData,
} from "../validations/digitalTransformationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStepper } from "@/hooks/useStepper";
import StepOne from "./StepOne";
import { defaultValues } from "../constants/questions";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";

function DigitalTransformationForm() {
  const api = "http://localhost:8080/api";

  const methods = useForm<{
    stepOne: StepOneFormData;
    stepTwo: StepTwoFormData;
    stepThree: StepThreeFormData;
    stepFour: StepFourFormData;
    stepFive: StepFiveFormData;
    stepSix: StepSixFormData;
    stepSeven: StepSevenFormData;
  }>({
    resolver: zodResolver(combinatedSchema),
    defaultValues: defaultValues,
  });

  const { step, nextStep, prevStep, isLastStep } = useStepper({
    totalSteps: 8,
    methods,
    combinedSchema: combinatedSchema,
  });

  type ResultData = {
    partNumber: number;
    averageActualScore: number;
    averageDesiredScore: number;
  };

  const [results, setResults] = useState<ResultData[] | null>(null);

  const handleSubmit = async (data: {
    stepOne: StepOneFormData;
    stepTwo: StepTwoFormData;
    stepThree: StepThreeFormData;
    stepFour: StepFourFormData;
    stepFive: StepFiveFormData;
    stepSix: StepSixFormData;
    stepSeven: StepSevenFormData;
  }) => {
    console.log("Data", data);

    const requestBody = {
      userId: 1,
      formDefinitionId: 1,
      registerSubmissionParts: [
        {
          partNumber: 1,
          registerSubmissionAnswers: [
            {
              questionNumber: 1,
              actualLevel: data.stepOne.q1ActualLevel,
              targetLevel: data.stepOne.q1TargetLevel,
            },
            {
              questionNumber: 2,
              actualLevel: data.stepOne.q2ActualLevel,
              targetLevel: data.stepOne.q2TargetLevel,
            },
            {
              questionNumber: 3,
              actualLevel: data.stepOne.q3ActualLevel,
              targetLevel: data.stepOne.q3TargetLevel,
            },
            {
              questionNumber: 4,
              actualLevel: data.stepOne.q4ActualLevel,
              targetLevel: data.stepOne.q4TargetLevel,
            },
            {
              questionNumber: 5,
              actualLevel: data.stepOne.q5ActualLevel,
              targetLevel: data.stepOne.q5TargetLevel,
            },
          ],
        },
        {
          partNumber: 2,
          registerSubmissionAnswers: [
            {
              questionNumber: 6,
              actualLevel: data.stepTwo.q6ActualLevel,
              targetLevel: data.stepTwo.q6TargetLevel,
            },
            {
              questionNumber: 7,
              actualLevel: data.stepTwo.q7ActualLevel,
              targetLevel: data.stepTwo.q7TargetLevel,
            },
            {
              questionNumber: 8,
              actualLevel: data.stepTwo.q8ActualLevel,
              targetLevel: data.stepTwo.q8TargetLevel,
            },
            {
              questionNumber: 9,
              actualLevel: data.stepTwo.q9ActualLevel,
              targetLevel: data.stepTwo.q9TargetLevel,
            },
            {
              questionNumber: 10,
              actualLevel: data.stepTwo.q10ActualLevel,
              targetLevel: data.stepTwo.q10TargetLevel,
            },
          ],
        },
        {
          partNumber: 3,
          registerSubmissionAnswers: [
            {
              questionNumber: 11,
              actualLevel: data.stepThree.q11ActualLevel,
              targetLevel: data.stepThree.q11TargetLevel,
            },
            {
              questionNumber: 12,
              actualLevel: data.stepThree.q12ActualLevel,
              targetLevel: data.stepThree.q12TargetLevel,
            },
            {
              questionNumber: 13,
              actualLevel: data.stepThree.q13ActualLevel,
              targetLevel: data.stepThree.q13TargetLevel,
            },
            {
              questionNumber: 14,
              actualLevel: data.stepThree.q14ActualLevel,
              targetLevel: data.stepThree.q14TargetLevel,
            },
            {
              questionNumber: 15,
              actualLevel: data.stepThree.q15ActualLevel,
              targetLevel: data.stepThree.q15TargetLevel,
            },
          ],
        },
        {
          partNumber: 4,
          registerSubmissionAnswers: [
            {
              questionNumber: 16,
              actualLevel: data.stepFour.q16ActualLevel,
              targetLevel: data.stepFour.q16TargetLevel,
            },
            {
              questionNumber: 17,
              actualLevel: data.stepFour.q17ActualLevel,
              targetLevel: data.stepFour.q17TargetLevel,
            },
            {
              questionNumber: 18,
              actualLevel: data.stepFour.q18ActualLevel,
              targetLevel: data.stepFour.q18TargetLevel,
            },
            {
              questionNumber: 19,
              actualLevel: data.stepFour.q19ActualLevel,
              targetLevel: data.stepFour.q19TargetLevel,
            },
            {
              questionNumber: 20,
              actualLevel: data.stepFour.q20ActualLevel,
              targetLevel: data.stepFour.q20TargetLevel,
            },
          ],
        },
        {
          partNumber: 5,
          registerSubmissionAnswers: [
            {
              questionNumber: 21,
              actualLevel: data.stepFive.q21ActualLevel,
              targetLevel: data.stepFive.q21TargetLevel,
            },
            {
              questionNumber: 22,
              actualLevel: data.stepFive.q22ActualLevel,
              targetLevel: data.stepFive.q22TargetLevel,
            },
            {
              questionNumber: 23,
              actualLevel: data.stepFive.q23ActualLevel,
              targetLevel: data.stepFive.q23TargetLevel,
            },
            {
              questionNumber: 24,
              actualLevel: data.stepFive.q24ActualLevel,
              targetLevel: data.stepFive.q24TargetLevel,
            },
            {
              questionNumber: 25,
              actualLevel: data.stepFive.q25ActualLevel,
              targetLevel: data.stepFive.q25TargetLevel,
            },
          ],
        },
        {
          partNumber: 6,
          registerSubmissionAnswers: [
            {
              questionNumber: 26,
              actualLevel: data.stepSix.q26ActualLevel,
              targetLevel: data.stepSix.q26TargetLevel,
            },
            {
              questionNumber: 27,
              actualLevel: data.stepSix.q27ActualLevel,
              targetLevel: data.stepSix.q27TargetLevel,
            },
            {
              questionNumber: 28,
              actualLevel: data.stepSix.q28ActualLevel,
              targetLevel: data.stepSix.q28TargetLevel,
            },
            {
              questionNumber: 29,
              actualLevel: data.stepSix.q29ActualLevel,
              targetLevel: data.stepSix.q29TargetLevel,
            },
            {
              questionNumber: 30,
              actualLevel: data.stepSix.q30ActualLevel,
              targetLevel: data.stepSix.q30TargetLevel,
            },
          ],
        },
        {
          partNumber: 7,
          registerSubmissionAnswers: [
            {
              questionNumber: 31,
              actualLevel: data.stepSeven.q31ActualLevel,
              targetLevel: data.stepSeven.q31TargetLevel,
            },
            {
              questionNumber: 32,
              actualLevel: data.stepSeven.q32ActualLevel,
              targetLevel: data.stepSeven.q32TargetLevel,
            },
            {
              questionNumber: 33,
              actualLevel: data.stepSeven.q33ActualLevel,
              targetLevel: data.stepSeven.q33TargetLevel,
            },
            {
              questionNumber: 34,
              actualLevel: data.stepSeven.q34ActualLevel,
              targetLevel: data.stepSeven.q34TargetLevel,
            },
            {
              questionNumber: 35,
              actualLevel: data.stepSeven.q35ActualLevel,
              targetLevel: data.stepSeven.q35TargetLevel,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(`${api}/submission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const resultData = await response.json();
      console.log("Resultado:", resultData);

      setResults([
        {
          partNumber: resultData.submissionParts[0].partNumber,
          averageActualScore:
            resultData.submissionParts[0].submissionPartMetrics
              .averageActualScore,
          averageDesiredScore:
            resultData.submissionParts[0].submissionPartMetrics
              .averageDesiredScore,
        },
        {
          partNumber: resultData.submissionParts[1].partNumber,
          averageActualScore:
            resultData.submissionParts[1].submissionPartMetrics
              .averageActualScore,
          averageDesiredScore:
            resultData.submissionParts[1].submissionPartMetrics
              .averageDesiredScore,
        },
        {
          partNumber: resultData.submissionParts[2].partNumber,
          averageActualScore:
            resultData.submissionParts[2].submissionPartMetrics
              .averageActualScore,
          averageDesiredScore:
            resultData.submissionParts[2].submissionPartMetrics
              .averageDesiredScore,
        },
        {
          partNumber: resultData.submissionParts[3].partNumber,
          averageActualScore:
            resultData.submissionParts[3].submissionPartMetrics
              .averageActualScore,
          averageDesiredScore:
            resultData.submissionParts[3].submissionPartMetrics
              .averageDesiredScore,
        },
        {
          partNumber: resultData.submissionParts[4].partNumber,
          averageActualScore:
            resultData.submissionParts[4].submissionPartMetrics
              .averageActualScore,
          averageDesiredScore:
            resultData.submissionParts[4].submissionPartMetrics
              .averageDesiredScore,
        },
        {
          partNumber: resultData.submissionParts[5].partNumber,
          averageActualScore:
            resultData.submissionParts[5].submissionPartMetrics
              .averageActualScore,
          averageDesiredScore:
            resultData.submissionParts[5].submissionPartMetrics
              .averageDesiredScore,
        },
        {
          partNumber: resultData.submissionParts[6].partNumber,
          averageActualScore:
            resultData.submissionParts[6].submissionPartMetrics
              .averageActualScore,
          averageDesiredScore:
            resultData.submissionParts[6].submissionPartMetrics
              .averageDesiredScore,
        }
      ]);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-4xl">
        <FormProvider {...methods}>
          <Stepper
            title="Modelo Madurez de Transformación Digital para organizaciones"
            description="Completa el formulario para poder obtener el resultado de la evaluación"
            steps={[
              "Estrategia de TI",
              "Inteligencia de Datos",
              "Capacidad de TI",
              "Procesos",
              "Experiencia del Usuario",
              "Riesgo y Cumplimiento",
              "Cultura Digital",
              "Caracterización",
            ]}
            step={step}
            prevStep={prevStep}
            nextStep={nextStep}
            isLastStep={isLastStep}
            handleSubmit={methods.handleSubmit}
            onSubmit={handleSubmit}
            form={methods}
          >
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree />}
            {step === 4 && <StepFour />}
            {step === 5 && <StepFive />}
            {step === 6 && <StepSix />}
            {step === 7 && <StepSeven />}
          </Stepper>
        </FormProvider>
      </Card>

      {/* Modal que muestra el resultado */}
      {results && (
        <div className="mt-8 p-4 border rounded bg-white shadow">
          <h2 className="text-xl font-semibold mb-4">Resultados por parte</h2>
          <ul className="space-y-2">
            {results.map((res) => (
              <li key={res.partNumber} className="border-b pb-2">
                <p>
                  <strong>Parte {res.partNumber}</strong>
                </p>
                <p>Promedio actual: {res.averageActualScore.toFixed(2)}</p>
                <p>Promedio deseado: {res.averageDesiredScore.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DigitalTransformationForm;
