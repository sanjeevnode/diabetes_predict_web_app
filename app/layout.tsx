import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const roboto = Roboto({
  weight: ["400", "100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diabacto - AI powered diabetes checkup",
  description: "Check your diabetes with AI powered app Diabacto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="w-full h-screen bg-background">
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
