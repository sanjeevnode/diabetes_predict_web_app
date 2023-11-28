"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formValidation } from "@/lib/formValidation";
import MessageDialog from "./MessageDialog";
import { predict } from "@/lib/form-actions";
import { useState } from "react";

const DataForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      Pregnancies: "0",
      Glucose: "0",
      BloodPressure: "0",
      SkinThickness: "0",
      Insulin: "0",
      BMI: "0",
      DiabetesPedigreeFunction: "0",
      Age: "0",
    },
  });

  async function onSubmit(values: z.infer<typeof formValidation>) {
    setIsLoading(true);
    setIsSubmitting(true);

    const res = await predict({
      Pregnancies: values.Pregnancies,
      Glucose: values.Glucose,
      BloodPressure: values.BloodPressure,
      SkinThickness: values.SkinThickness,
      Insulin: values.Insulin,
      BMI: values.BMI,
      DiabetesPedigreeFunction: values.DiabetesPedigreeFunction,
    }).then((res) => {
      setIsLoading(false);
      setMessage(res.prediction);
      form.reset();
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" z-10 w-full md:mt-6 space-y-4"
      >
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="space-y-2 md:w-1/2">
            <FormField
              control={form.control}
              name="Pregnancies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pregnancies</FormLabel>
                  <FormControl>
                    <Input placeholder="Pregnancies" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Glucose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Glucose</FormLabel>
                  <FormControl>
                    <Input placeholder="Glucose" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="BloodPressure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood Pressure</FormLabel>
                  <FormControl>
                    <Input placeholder="BloodPressure" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="SkinThickness"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skin Thickness</FormLabel>
                  <FormControl>
                    <Input placeholder="SkinThickness" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2 md:w-1/2">
            <FormField
              control={form.control}
              name="Insulin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Insulin</FormLabel>
                  <FormControl>
                    <Input placeholder="Insulin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="BMI"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>BMI</FormLabel>
                  <FormControl>
                    <Input placeholder="BMI" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="DiabetesPedigreeFunction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Diabetes Pedigree Function</FormLabel>
                  <FormControl>
                    <Input placeholder="DiabetesPedigreeFunction" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input placeholder="Age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <MessageDialog
          isLoading={isLoading}
          message={message}
          isSubmitting={isSubmitting}
          setMessage={setMessage}
          setIsSubmitting={setIsSubmitting}
        >
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </MessageDialog>
      </form>
    </Form>
  );
};

export default DataForm;
