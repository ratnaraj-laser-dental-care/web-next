import AboutDoctor from "@/components/About/AboutDoctor";
import AboutEquipments from "@/components/About/AboutEquipments";
import AboutFacility from "@/components/About/AboutFacility";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage for Ratnaraj Laser Dental Care",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      <AboutFacility />
      <AboutEquipments />
      <AboutDoctor />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
