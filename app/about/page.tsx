import AboutDoctor from "@/components/About/AboutDoctor";
import AboutFacility from "@/components/About/AboutFacility";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Ratnaraj Laser Dental Care is a highly advanced dental clinic located in Kalyan West"
      />
      <AboutDoctor />
      <AboutFacility />
      <div className="pb-16 md:pb-20 lg:pb-28"></div>
    </>
  );
};

export default AboutPage;
