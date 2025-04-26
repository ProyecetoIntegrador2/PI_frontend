import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "node_modules/react-resizable-panels/dist/declarations/src/vendor/react";
import { UseFormHandleSubmit, FieldValues } from "react-hook-form";
import { StepperHeader } from "./StepperHeader";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

type StepperProps = {
  children: ReactNode;
  steps: string[];
  step: number;
  prevStep: () => void;
  nextStep: () => void;
  isLastStep: boolean;
  title: string;
  description: string;
  onSubmit: (data: any) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  form: any;
};

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

  console.log(form.watch());
  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {/* Crear cuenta */}
          {title}
        </CardTitle>
        <CardDescription className="text-center">
          {/* Completa el formulario para registrarte */}
          {description}
        </CardDescription>
        <StepperHeader currentStep={step} steps={steps} />
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
                  // disabled={step === 1}
                  className="flex-1"
                >
                  Siguiente
                </Button>
              ) : (
                <Button type="submit" className="flex-1">
                  Registrarse
                </Button>
              )}
            </div>
          </CardFooter>
        </form>
      </Form>
    </>
  );
};
