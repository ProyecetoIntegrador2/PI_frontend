import { useState } from "react"
import { Path, UseFormReturn, FieldValues } from "react-hook-form";
import { ZodObject, ZodRawShape } from "zod";

export interface UseStepperProps<T extends FieldValues> {
  initialStep?: number
  totalSteps: number
  methods: UseFormReturn<T>;
  combinedSchema: ZodObject<ZodRawShape>;
}

export function useStepper<T extends FieldValues>({ initialStep = 1, totalSteps, methods, combinedSchema }: UseStepperProps<T>) {
  const [step, setStep] = useState(initialStep)

  const nextStep = async () => {
    const typeCombinedSchema = Object.keys(combinedSchema.shape);
    const isValid = await methods.trigger(typeCombinedSchema[step - 1] as Path<T>);

    console.log("errors", methods.formState.errors.name?.message);
    if (isValid) {
      setStep((prev) => (prev < totalSteps ? prev + 1 : prev))
    }
  };

  const prevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const resetStepper = () => {
    setStep(initialStep)
  }

  const isFirstStep = step === 1
  const isLastStep = step === totalSteps

  return {
    step,
    setStep,
    nextStep,
    prevStep,
    resetStepper,
    isFirstStep,
    isLastStep,
  }
}
