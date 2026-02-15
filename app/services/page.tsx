import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";

export const metadata = {
  title: "Our Services | Ratnaraj Dental Care",
  description: "Explore our comprehensive dental services including implants, cosmetic dentistry, and more.",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Services" description="Explore our comprehensive dental services including implants, cosmetic dentistry, and more." />
      <Services />
    </>
  );
};

export default ServicesPage;
