"use server";

interface predictProps {
  Pregnancies: string;
  Glucose: string;
  BloodPressure: string;
  SkinThickness: string;
  Insulin: string;
  BMI: string;
  DiabetesPedigreeFunction: string;
}

export async function predict({
  Pregnancies,
  Glucose,
  BloodPressure,
  SkinThickness,
  Insulin,
  BMI,
  DiabetesPedigreeFunction,
}: predictProps) {
  try {
    const url = "https://diabetes-predict-api.onrender.com/predict";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Pregnancies,
        Glucose,
        BloodPressure,
        SkinThickness,
        Insulin,
        BMI,
        DiabetesPedigreeFunction,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
