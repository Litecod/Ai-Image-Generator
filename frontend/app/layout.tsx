import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componen/Navbar";

export const metadata: Metadata = {
  title: "AI Image Generator",
  description: "An AI Image Generator That converts your Image into a Cartoon Character",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="mx-auto max-w-[1550px] bg-[#000] text-[#fff]"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
