'use client';

import { Service } from "@/types/service";
import Link from "next/link";
import Image from "next/image";

const ServiceTile = ({ service }: { service: Service }) => {
  const { id, icon, title, description, image } = service;

  return (
    <Link href={`/service/${id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl">
        {/* Image Container */}
        <div className="relative h-32 overflow-hidden bg-gray-200 sm:h-40">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content Container */}
        <div className="bg-white p-6 dark:bg-gray-800 sm:p-8">
          {/* Icon */}
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold text-black transition-colors duration-300 dark:text-white sm:text-2xl group-hover:text-primary dark:group-hover:text-primary">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm font-medium leading-relaxed text-body-color transition-colors duration-300 line-clamp-2 dark:text-gray-300">
            {description}
          </p>

          {/* Button */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-primary transition-all duration-300 group-hover:font-bold">
              Learn More
            </span>
            <svg
              className="h-5 w-5 text-primary transition-transform duration-500 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceTile;
