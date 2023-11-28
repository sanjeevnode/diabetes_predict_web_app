"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { Info, MoveLeftIcon } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const isPredict = pathname === "/predict" || pathname === "/about";
  const isHome = pathname === "/";
  return (
    <nav className=" z-10 fixed bg-black opacity-85  w-full  px-4 p-2  md:px-10 flex justify-between shadow-b shadow-sm ">
      <Link href="/" className="flex space-x-2 items-center justify-center">
        <Image src="/drugs.png" alt="logo" width={28} height={28} />
        <span className="text-[20px]  text-white">Diabacto</span>
      </Link>

      {isPredict && (
        <Link href="/">
          <Button variant="secondary" size="sm">
            <MoveLeftIcon size={16} />
          </Button>
        </Link>
      )}

      {isHome && (
        <Link href="/about" className="flex justify-center items-center">
          <Info size={16} className="text-white" />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
