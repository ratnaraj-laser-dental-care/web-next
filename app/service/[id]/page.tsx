'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import Breadcrumb from '@/components/Common/Breadcrumb';
import servicesData from '@/components/Services/servicesData';
import { Service } from '@/types/service';
import BeforeAfterCarousel from '@/components/Common/BeforeAfterCarousel';

const ServiceDetail = ({ params }: { params: { id: string } }) => {
  const [service, setService] = useState<Service | null>(null);
  const [relatedServices, setRelatedServices] = useState<Service[]>([]);

  useEffect(() => {
    const serviceId = parseInt(params.id);
    const found = servicesData.find(s => s.id === serviceId);
    
    if (found) {
      setService(found);
      // Get related services (exclude current service)
      const related = servicesData.filter(s => s.id !== serviceId).slice(0, 3);
      setRelatedServices(related);
    }
  }, [params.id]);

  if (!service) {
    return (
      <section className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
              Service Not Found
            </h2>
            <p className="mb-6 text-lg text-body-color">
              We couldn't find the service you're looking for.
            </p>
            <Link
              href="/"
              className="inline-block rounded bg-primary px-8 py-3 font-semibold text-white transition hover:bg-opacity-90"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb pageName={service.title} description={service.description} />

      {/* Service Detail Section */}
      <section className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
            {/* Left Column - Service Details */}
            <div className="md:col-span-2">
              {/* Hero Image */}
              <div className="mb-10 overflow-hidden rounded-lg">
                <div className="relative h-96 w-full sm:h-[500px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Title and Icon */}
              <div className="mb-8 flex items-start gap-6">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-primary bg-opacity-10 text-primary">
                  {service.icon}
                </div>
                <div>
                  <h1 className="mb-2 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                    {service.title}
                  </h1>
                  <p className="text-lg text-body-color">{service.description}</p>
                </div>
              </div>

              {/* Long Description */}
              <div className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  About This Service
                </h3>
                <p className="leading-relaxed text-body-color dark:text-gray-300">
                  {service.longDescription}
                </p>
              </div>

              {/* Benefits Section */}
              <div className="mb-12">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  Key Benefits
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10">
                        <svg
                          className="h-4 w-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-base font-medium text-body-color dark:text-gray-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mb-12 grid gap-6 sm:grid-cols-2">
                {service.duration && (
                  <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                    <h4 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Duration
                    </h4>
                    <p className="text-xl font-bold text-black dark:text-white">
                      {service.duration}
                    </p>
                  </div>
                )}
                {service.price && (
                  <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                    <h4 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Starting Price
                    </h4>
                    <p className="text-xl font-bold text-black dark:text-white">
                      {service.price}
                    </p>
                  </div>
                )}
              </div>

              {/* Before/After Carousel */}
              {service.casesBeforeAfter && service.casesBeforeAfter.length > 0 && (
                <div className="mb-12">
                  <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                    Cases
                  </h3>
                  <BeforeAfterCarousel cases={service.casesBeforeAfter} />
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                    Related Services
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedServices.map((relService) => (
                      <Link
                        key={relService.id}
                        href={`/service/${relService.id}`}
                        className="group rounded-lg border border-gray-200 p-6 transition hover:border-primary hover:shadow-lg dark:border-gray-700"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary bg-opacity-10 text-primary">
                          {relService.icon}
                        </div>
                        <h4 className="mb-2 font-bold text-black transition group-hover:text-primary dark:text-white">
                          {relService.title}
                        </h4>
                        <p className="text-sm text-body-color dark:text-gray-400">
                          {relService.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Booking Form */}
            <div className="md:col-span-1">
              <div className="sticky">
                <BookingForm serviceName={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
