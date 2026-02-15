import AboutDoctor from "@/components/About/AboutDoctor";
import AboutEquipments from "@/components/About/AboutEquipments";
import AboutFacility from "@/components/About/AboutFacility";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Comparison from "@/components/Comparison";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
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
      <Services />
      <AboutFacility />
      <AboutEquipments />
      <AboutDoctor />
      <Testimonials />
      <Blog />
      <Comparison />
      <Contact />
    </>
  );
}
