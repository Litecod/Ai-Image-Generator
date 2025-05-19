import type { Metadata } from "next";
import "./globals.css";
import All from "@/components/All";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "3D Cartoonify",
  description: "wlecome to cartoonify, when we turn your images and ideals to 3D animates and Cartoon Character",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();

  return (
    <html lang="en">
      <body
        className="  text-[#fff] sm:overflow-x-hidden "
      >
        <div className="">
          <All children={children} />
        </div>
        
      </body>
    </html>
  );
}
