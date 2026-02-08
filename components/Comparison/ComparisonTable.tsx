"use client";

import { TreatmentCost } from "@/types/treatment";

interface ComparisonTableProps {
  treatments: TreatmentCost[];
}

export default function ComparisonTable({ treatments }: ComparisonTableProps) {
  const calculatePercentageSavings = (usCost: number, indiaCost: number) => {
    return Math.round(((usCost - indiaCost) / usCost) * 100);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-primary-600 to-secondary text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
              Treatment
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              US Cost
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              India Cost
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              You Save
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              Savings %
            </th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((treatment, index) => (
            <tr
              key={treatment.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors`}
            >
              <td className="border border-gray-300 px-4 py-3">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">
                    {treatment.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {treatment.description}
                  </p>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-3 text-center text-gray-800 dark:text-gray-100">
                ${treatment.usCost.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-center text-gray-800 dark:text-gray-100">
                ₹{treatment.indiaCost.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-600 dark:text-green-400">
                ${treatment.savings.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-center">
                <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-3 py-1 rounded-full font-semibold">
                  {calculatePercentageSavings(treatment.usCost, treatment.indiaCost)}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
