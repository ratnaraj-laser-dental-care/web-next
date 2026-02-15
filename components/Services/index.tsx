'use client';

import SectionTitle from "@/components/Common/SectionTitle";
import ServiceTile from "./ServiceTile";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Title */}
        <div className="mb-12 text-center flex justify-center">
          <SectionTitle
            title="Our Services"
            paragraph="Explore our full spectrum of services — cosmetic, restorative, preventive"
          />
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="wow fadeInUp"
              data-wow-delay={`.${service.id}s`}
            >
              <ServiceTile service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
