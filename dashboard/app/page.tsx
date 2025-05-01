import CountUps from "@/components/componen/CountUp";
import Footer from "@/components/componen/Footer";
import Hero from "@/components/componen/Hero";
import Navbar from "@/components/componen/Navbar";
import Pricing from "@/components/componen/Pricing";
import Reviews from "@/components/componen/Reviews";

export default function Home() {
  return (
    <div className=" w-full bg-[#000] absolute text-[#fff] top-0 left-0 h-screen z-40 overflow-y-scroll max-w-[1550px] mx-auto">
      <Navbar />
      <Hero />
      <CountUps />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
