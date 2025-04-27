"use client";

import { Stepper } from "@/components/shared/Stepper";
import { Card } from "@/components/ui/card";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  combinatedSchema,
  StepOneFormData,
} from "../validations/digitalTransformationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStepper } from "@/hooks/useStepper";
import StepOne from "./StepOne";

function DigitalTransformationForm() {
  const methods = useForm<{
    stepOne: StepOneFormData;
  }>({
    resolver: zodResolver(combinatedSchema),
    defaultValues: {
      stepOne: {
        q1ActualLevel: 0,
        q1TargetLevel: 0,
        q2ActualLevel: 0,
        q2TargetLevel: 0,
        q3ActualLevel: 0,
        q3TargetLevel: 0,
        q4ActualLevel: 0,
        q4TargetLevel: 0,
        q5ActualLevel: 0,
        q5TargetLevel: 0,
      },
    },
  });

  const { step, nextStep, prevStep, isLastStep } = useStepper({
    totalSteps: 1,
    methods,
    combinedSchema: combinatedSchema,
  });

  const handleSubmit = async (data: { stepOne: StepOneFormData }) => {
    console.log("Data", data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-max">
        <FormProvider {...methods}>
          <Stepper
            title="Modelo Madurez de Transformación Digital para organizaciones"
            description="Completa el formulario para registrarte"
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
    </div>
  );
}

export default DigitalTransformationForm;
