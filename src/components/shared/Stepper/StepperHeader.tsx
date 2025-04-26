interface StepperHeaderProps {
  steps: string[]
  currentStep: number
}

export const StepperHeader: React.FC<StepperHeaderProps> = ({ steps, currentStep }) => {
  return (
    <div className="relative flex justify-between items-center mt-4 py-4">
      {steps.map((label, index) => {
        const stepNumber = index + 1
        const isCompleted = currentStep > stepNumber
        const isActive = currentStep === stepNumber

        return (
          <div key={stepNumber} className="z-10 flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : isCompleted
                  ? "bg-primary/80 text-primary-foreground"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {isCompleted ? "✓" : stepNumber}
            </div>
            <span className="text-xs mt-1 text-center">{label}</span>
          </div>
        )
      })}

      {/* Connecting lines */}
      <div className="absolute top-8 left-0 right-0 flex justify-center w-full px-10">
        {steps.slice(1).map((_, index) => (
          <div
            key={index}
            className={`h-0.5 flex-1 ${
              currentStep > index + 1 ? "bg-primary" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
