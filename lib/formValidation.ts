import * as z from "zod";

export const formValidation = z.object({
  Pregnancies: z
    .string()
    .min(0)
    .regex(/^-?\d*\.?\d+$/),
  Glucose: z
    .string()
    .min(0)
    .regex(/^-?\d*\.?\d+$/),
  BloodPressure: z
    .string()
    .min(0)
    .regex(/^-?\d*\.?\d+$/),
  SkinThickness: z
    .string()
    .min(0)
    .regex(/^-?\d*\.?\d+$/),
  Insulin: z
    .string()
    .min(0)
    .regex(/^-?\d*\.?\d+$/),
  BMI: z
    .string()
    .min(0)
    .regex(/^-?\d*\.?\d+$/),
  DiabetesPedigreeFunction: z
    .string()
    .min(0)
    .regex(/^-?\d*\.?\d+$/),
  Age: z
    .string()
    .min(0)
    .regex(/^-?\d*\.?\d+$/),
});
