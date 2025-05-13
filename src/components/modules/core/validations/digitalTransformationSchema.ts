import { z } from "zod";

const generateStepSchema = (start: number, end: number) => {
  const schemaShape: Record<string, z.ZodTypeAny> = {};
  for (let i = start; i <= end; i++) {
    schemaShape[`q${i}ActualLevel`] = z.number().min(1, "Requerido");
    schemaShape[`q${i}TargetLevel`] = z.number().min(1, "Requerido");
  }
  return z.object(schemaShape);
};

export const stepOneSchema = generateStepSchema(1, 5);
export const stepTwoSchema = generateStepSchema(6, 10);
export const stepThreeSchema = generateStepSchema(11, 15);
export const stepFourSchema = generateStepSchema(16, 20);
export const stepFiveSchema = generateStepSchema(21, 25);
export const stepSixSchema = generateStepSchema(26, 30);
export const stepSevenSchema = generateStepSchema(31, 35);

export const combinatedSchema = z.object({
  stepOne: stepOneSchema,
  stepTwo: stepTwoSchema,
  stepThree: stepThreeSchema,
  stepFour: stepFourSchema,
  stepFive: stepFiveSchema,
  stepSix: stepSixSchema,
  stepSeven: stepSevenSchema,
});

export type StepOneFormData = z.infer<typeof stepOneSchema>;
export type StepTwoFormData = z.infer<typeof stepTwoSchema>;
export type StepThreeFormData = z.infer<typeof stepThreeSchema>;
export type StepFourFormData = z.infer<typeof stepFourSchema>;
export type StepFiveFormData = z.infer<typeof stepFiveSchema>;
export type StepSixFormData = z.infer<typeof stepSixSchema>;
export type StepSevenFormData = z.infer<typeof stepSevenSchema>;
