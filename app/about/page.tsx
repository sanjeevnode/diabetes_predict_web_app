import { Github, Linkedin, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className=" relative w-full h-full flex flex-col justify-center items-center overflow-hidden rounded-md">
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
      <div className="md:w-[40%] p-6 shadow-lg flex flex-col space-y-8 ">
        <span className="text-sky-600 text-[25px]">Diabacto</span>
        <span>
          Diabacto is a web application that helps you to predict your risk of
          getting diabetes
        </span>
        <span>
          This application is developed by <i>Sanjeev Kumar Singh</i>
        </span>
        <div className="w-full flex space-x-5 justify-center">
          <Link href="https://github.com/sanjeevnode" target="_blank">
            <Github size={24} />
          </Link>
          <Link href="https://me.sanjeevks@gmail.com" target="_blank">
            <MailIcon size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sanjeev-singh-242122253"
            target="_blank"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
