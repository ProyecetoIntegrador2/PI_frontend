import { useState } from "react";
import { Path, UseFormReturn, FieldValues } from "react-hook-form";
import { ZodObject, ZodRawShape } from "zod";

export interface UseStepperProps<T extends FieldValues> {
  initialStep?: number;
  totalSteps: number;
  methods: UseFormReturn<T>;
  combinedSchema: ZodObject<ZodRawShape>;
}

export function useStepper<T extends FieldValues>({
  initialStep = 1,
  totalSteps,
  methods,
  combinedSchema,
}: UseStepperProps<T>) {
  const [step, setStep] = useState(initialStep);

  const nextStep = async () => {
    // Si ya estamos en el último paso, no hacemos nada.
    if (step >= totalSteps) return;

    const typeCombinedSchema = Object.keys(combinedSchema.shape);

    // Si estamos en el paso anterior al último, pasamos sin validación
    if (step === totalSteps - 1) {
      setStep(step + 1);
      return;
    }

    // Validamos los campos del paso actual
    const isValid = await methods.trigger(typeCombinedSchema[step - 1] as Path<T>);

    if (isValid) {
      setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
    }
  };

  const prevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const resetStepper = () => {
    setStep(initialStep);
  };

  const isFirstStep = step === 1;
  const isLastStep = step === totalSteps;

  return {
    step,
    setStep,
    nextStep,
    prevStep,
    resetStepper,
    isFirstStep,
    isLastStep,
  };
}
