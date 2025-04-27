import { ReactNode } from "node_modules/react-resizable-panels/dist/declarations/src/vendor/react";
import { UseFormHandleSubmit, FieldValues } from "react-hook-form";

export type StepperProps = {
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