import Image from "next/image";
import DataForm from "./_components/DataForm";

const Prediction = () => {
  return (
    <section className="relative w-full h-full overflow-hidden flex justify-center pt-20 md:pt-40">
      <div className="absolute md:top-[-200px] md:left-[-200px] top-[-200px] left-[-350px] ">
        <Image
          src="/blob.svg"
          alt="blob"
          width={500}
          height={500}
          objectFit="cover"
          className="animate-spin-slow"
        />
      </div>

      <div className="absolute md:bottom-[-200px] md:right-[-200px] bottom-[-200px] right-[-350px] ">
        <Image
          src="/blob.svg"
          alt="blob"
          width={500}
          height={500}
          objectFit="cover"
          className="animate-spin-slow"
        />
      </div>
      <div className="md:w-[50%] w-full px-8 py-2  flex flex-col  items-center">
        <span className="text-[18px] text-primary ">Pateint Details</span>
        <DataForm />
      </div>
    </section>
  );
};

export default Prediction;
