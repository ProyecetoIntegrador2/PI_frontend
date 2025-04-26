"use client";

import type React from "react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Stepper } from "@/components/shared/Stepper";
import { useStepper } from "@/hooks/useStepper";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import {
  combinatedSchema,
  StepOneFormData,
  StepTwoFormData,
  StepThreeFormData,
} from "@/components/modules/auth/validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

// TODO: Add conection to backend
export default function MultiStepRegisterForm() {
  const methods = useForm<{
    stepOne: StepOneFormData;
    stepTwo: StepTwoFormData;
    stepThree: StepThreeFormData;
  }>({
    resolver: zodResolver(combinatedSchema),
    defaultValues: {
      stepOne: {
        name: "",
        lastName: "",
        email: "",
        jobTitle: "",
        yearsOfExperience: "",
      },
      stepTwo: {
        companyName: "",
        country: "",
        employeesNumber: "",
        companyType: "",
        companySector: "",
      },
      stepThree: {
        password: "",
        confirmPassword: "",
        terms: false,
      },
    },
  });

  const { step, nextStep, prevStep, isFirstStep, isLastStep } = useStepper({
    totalSteps: 3,
    methods,
    combinedSchema: combinatedSchema,
  });

  const handleSubmit = async (data: {
    stepOne: StepOneFormData;
    stepTwo: StepTwoFormData;
    stepThree: StepThreeFormData;
  }) => {
    const requestBody = {
      ...data.stepOne,
      ...data.stepTwo,
      ...data.stepThree,
    };

    methods.handleSubmit((values) => {
      console.log(values);
    });
    console.log(requestBody);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <FormProvider {...methods}>
          <Stepper
            title="Crear cuenta"
            description="Completa el formulario para registrarte"
            steps={["Cuenta", "Empresa", "Confirmar"]}
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
          </Stepper>
        </FormProvider>
      </Card>
    </div>
  );
}
