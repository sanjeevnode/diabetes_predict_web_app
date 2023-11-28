import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const SpinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      lg: "h-6 w-6",
      sm: "h-2 w-2",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof SpinnerVariants> {}

export const Spinner = ({ size }: SpinnerProps) => {
  return <Loader className={cn(SpinnerVariants({ size }))} />;
};
