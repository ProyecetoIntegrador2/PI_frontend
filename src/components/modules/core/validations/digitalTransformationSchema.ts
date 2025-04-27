import { z } from "zod";

export const stepOneSchema = z.object({
  q1ActualLevel: z.number().min(1, "Requerido"),
  q1TargetLevel: z.number().min(1, "Requerido"),
  q2ActualLevel: z.number().min(1, "Requerido"),
  q2TargetLevel: z.number().min(1, "Requerido"),
  q3ActualLevel: z.number().min(1, "Requerido"),
  q3TargetLevel: z.number().min(1, "Requerido"),
  q4ActualLevel: z.number().min(1, "Requerido"),
  q4TargetLevel: z.number().min(1, "Requerido"),
  q5ActualLevel: z.number().min(1, "Requerido"),
  q5TargetLevel: z.number().min(1, "Requerido"),
});

export const combinatedSchema = z
  .object({
    stepOne: stepOneSchema,
  });

export type StepOneFormData = z.infer<typeof stepOneSchema>;
