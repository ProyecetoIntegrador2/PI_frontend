import { useState } from "react"

export interface UseStepperProps {
  initialStep?: number
  totalSteps: number
}

export function useStepper({ initialStep = 1, totalSteps }: UseStepperProps) {
  const [step, setStep] = useState(initialStep)

  const nextStep = () => {
    setStep((prev) => (prev < totalSteps ? prev + 1 : prev))
  }

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
