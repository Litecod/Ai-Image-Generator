import type { Metadata } from "next";
import "./globals.css";
import NavSide from "@/components/NavSide";
import AuthContextProvider from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Cartoonify Dashboard",
  description: "wlecome to cartoonify, when we turn your images and ideals to 3D animates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="mx-auto max-w-[1550px] bg-[#000] text-[#fff] sm:overflow-hidden"
      >
        {/* flex w-full gap-[1rem] pt-[3.2rem] md:pt-[4rem] */}
        <AuthContextProvider>
          <NavSide />
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[83%] sm:float-right rounded-xl sm:overflow-y-scroll ">
            {children}
          </div>

        </AuthContextProvider>

      </body>
    </html>
  );
}
