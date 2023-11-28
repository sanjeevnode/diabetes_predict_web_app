import { Spinner } from "@/components/Spinner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface MessageDialogProps {
  isLoading: boolean;
  message: string;
  children: React.ReactNode;
  isSubmitting: boolean;
  setMessage: React.SetStateAction<any>;
  setIsSubmitting: React.SetStateAction<any>;
}

const MessageDialog = ({
  isLoading,
  message,
  children,
  isSubmitting,
  setMessage,
  setIsSubmitting,
}: MessageDialogProps) => {
  const handleOk = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        asChild
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {!isSubmitting ? (
              <span className="text-red-500">
                Error ! please check the input
              </span>
            ) : isLoading ? (
              <span>Prediction is on the way</span>
            ) : (
              <span>Your Report </span>
            )}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isLoading ? (
              <div className="w-full h-full flex justify-center items-center">
                <Spinner size="icon" />
              </div>
            ) : message === "1.0" ? (
              <div className="w-full h-full flex justify-center items-center">
                <span className="text-red-500 text-2xl">You have diabetes</span>
              </div>
            ) : message === "0.0" ? (
              <div className="w-full h-full flex justify-center items-center">
                <span className="text-green-500 text-2xl">{`You don't have diabetes`}</span>
              </div>
            ) : (
              message
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleOk}>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MessageDialog;
