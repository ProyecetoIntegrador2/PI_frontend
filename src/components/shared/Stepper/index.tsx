import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StepperHeader } from "./StepperHeader";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { StepperProps } from "../interfaces/StepperProps";

export const Stepper: React.FC<StepperProps> = ({
  children,
  steps,
  onSubmit,
  handleSubmit,
  title,
  description,
  step,
  prevStep,
  nextStep,
  isLastStep,
  form,
}) => {
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-center">
          {description}
        </CardDescription>
        <div className={steps.length === 1 ? "flex justify-center" : ""}>
          <StepperHeader currentStep={step} steps={steps} />
        </div>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>{children}</CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2 mt-6">
              {step > 1 && (
                <Button
                  type="button"
                  className="outline flex-1"
                  onClick={prevStep}
                >
                  Anterior
                </Button>
              )}

              {!isLastStep ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1"
                >
                  Siguiente
                </Button>
              ) : (
                <Button type="submit" className="flex-1">
                  Enviar
                </Button>
              )}
            </div>
          </CardFooter>
        </form>
      </Form>
    </>
  );
};
