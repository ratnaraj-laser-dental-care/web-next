import AboutDoctor from "@/components/About/AboutDoctor";
import AboutFacility from "@/components/About/AboutFacility";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Ratnaraj Dental Care",
  description: "Learn more about Ratnaraj Laser Dental Care, a leading dental clinic in Kalyan West offering advanced dental treatments.",
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
    </>
  );
};

export default AboutPage;
