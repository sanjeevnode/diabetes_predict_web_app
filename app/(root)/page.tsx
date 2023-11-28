import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute md:bottom-[-150px] md:left-[-150px] bottom-[-150px] left-[-300px] ">
        <Image
          src="/blob.svg"
          alt="blob"
          width={500}
          height={500}
          objectFit="cover"
          className="animate-spin-slow"
        />
      </div>

      <div className="absolute md:top-[-150px] md:right-[-150px] top-[-150px] right-[-300px] ">
        <Image
          src="/blob.svg"
          alt="blob"
          width={500}
          height={500}
          objectFit="cover"
          className="animate-spin-slow"
        />
      </div>

      <div className="z-10 w-full flex flex-col items-center justify-center pt-28 md:pt-16">
        <p className="text-[20px] md:text-5xl  text-foreground space-y-6  flex flex-col text-center w-3/4 md:w-1/2">
          <span> Empowering Health , One Prediction </span>
          <span> at a Time. Discover Your Diabetic </span>
          <span> Risk Profile Today!</span>
        </p>

        <Link href="/predict">
          <Button className="mt-10" variant="default" size="lg">
            Check Here
          </Button>
        </Link>
      </div>
    </section>
  );
}
