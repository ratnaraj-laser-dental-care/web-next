"use client";

import { useState, useMemo } from "react";
import { treatmentComparisonData } from "./treatmentData";
import ComparisonFilter from "./ComparisonFilter";
import ComparisonTable from "./ComparisonTable";
import SectionTitle from "@/components/Common/SectionTitle";

export default function Comparison({ showSectionTitle = true }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(treatmentComparisonData.map((t) => t.category)));
    return cats.sort();
  }, []);

  const filteredTreatments = useMemo(() => {
    if (selectedCategory === "All") {
      return treatmentComparisonData;
    }
    return treatmentComparisonData.filter(
      (t) => t.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {showSectionTitle ? <SectionTitle
          title="Affordable Dentistry"
          paragraph="Compare dental treatment costs between US and India. Discover significant savings with Ratnaraj Laser Dental Care."
          center
        /> : <></>}

        <div className="mx-auto max-w-7xl">
          <ComparisonFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <ComparisonTable treatments={filteredTreatments} />
        </div>

        <div className="mt-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 p-8 border border-primary-200 dark:border-primary-800">
          <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            Why Choose Ratnaraj Dental Care?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span>World-class facilities with latest technology</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span>Experienced and internationally trained dentists</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span>Affordable treatment without compromising quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span>Comprehensive aftercare and follow-up support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span>All safety and hygiene standards compliant</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span>Tourism packages including accommodation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
