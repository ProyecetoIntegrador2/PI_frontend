import { z } from "zod";

export const stepOneSchema = z.object({
  name: z.string().min(1, "Nmae Requerido"),
  lastName: z.string().min(1, "Requerido"),
  email: z.string().email("Email inválido").min(1, "Requerido"),
  jobTitle: z.string().min(1, "Requerido"),
  yearsOfExperience: z.string().min(1, "Requerido"),
});

export const stepTwoSchema = z.object({
  companyName: z.string().min(1, "Requerido"),
  country: z.string().min(1, "Requerido"),
  employeesNumber: z.string().min(1, "Requerido"),
  companyType: z.string().min(1, "Requerido"),
  companySector: z.string().min(1, "Requerido"),
});

export const stepThreeSchema = z.object({
  password: z.string().min(1, "Requerido"),
  confirmPassword: z.string().min(1, "Requerido"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar los términos y condiciones",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
})

export const combinatedSchema = z
  .object({
    stepOne: stepOneSchema,
    stepTwo: stepTwoSchema,
    stepThree: stepThreeSchema,
  });

export type StepOneFormData = z.infer<typeof stepOneSchema>;
export type StepTwoFormData = z.infer<typeof stepTwoSchema>;
export type StepThreeFormData = z.infer<typeof stepThreeSchema>;
