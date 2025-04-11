import CountUps from "@/components/CountUp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full bg-[#000]">
      <Hero />
      <CountUps />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
