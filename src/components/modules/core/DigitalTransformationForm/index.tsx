"use client";

import { Stepper } from "@/components/shared/Stepper";
import { Card } from "@/components/ui/card";
import React, { use, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  combinatedSchema,
  StepOneFormData,
} from "../validations/digitalTransformationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStepper } from "@/hooks/useStepper";
import StepOne from "./StepOne";
import { defaultValues } from "../constants/questions";

function DigitalTransformationForm() {
  const api = "http://localhost:8080/api";

  const methods = useForm<{
    stepOne: StepOneFormData;
  }>({
    resolver: zodResolver(combinatedSchema),
    defaultValues: defaultValues,
  });

  const { step, nextStep, prevStep, isLastStep } = useStepper({
    totalSteps: 1,
    methods,
    combinedSchema: combinatedSchema,
  });

  // Estado para almacenar los resultados de la evaluación
  const [result, setResult] = useState<{
    averageActualScore: number;
    averageDesiredScore: number;
  } | null>(null);

  const handleSubmit = async (data: { stepOne: StepOneFormData }) => {
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

      // Guardamos el resultado en el estado
      setResult({
        averageActualScore: resultData.submissionParts[0].submissionPartMetrics.averageActualScore,
        averageDesiredScore: resultData.submissionParts[0].submissionPartMetrics.averageDesiredScore,
      });
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-max">
        <FormProvider {...methods}>
          <Stepper
            title="Modelo Madurez de Transformación Digital para organizaciones"
            description="Completa el formulario para poder obtener el resultado de la evaluación"
            steps={["Estrategia de TI"]}
            step={step}
            prevStep={prevStep}
            nextStep={nextStep}
            isLastStep={isLastStep}
            handleSubmit={methods.handleSubmit}
            onSubmit={handleSubmit}
            form={methods}
          >
            {step === 1 && <StepOne />}
          </Stepper>
        </FormProvider>
      </Card>

      {/* Modal que muestra el resultado */}
      {result && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h3 className="text-xl font-semibold mb-4">Resultado de la Evaluación</h3>
            <p><strong>Promedio actual:</strong> {result.averageActualScore}</p>
            <p><strong>Promedio deseado:</strong> {result.averageDesiredScore}</p>
            <div className="mt-4 text-center">
              <button
                onClick={() => setResult(null)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DigitalTransformationForm;
