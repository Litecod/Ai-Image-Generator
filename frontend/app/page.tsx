import CountUps from "@/componen/CountUp";
import Footer from "@/componen/Footer";
import Hero from "@/componen/Hero";
import Pricing from "@/componen/Pricing";
import Reviews from "@/componen/Reviews";

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
