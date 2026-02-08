"use client";

interface ComparisonFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ComparisonFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: ComparisonFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      <button
        onClick={() => onCategoryChange("All")}
        className={`px-6 py-2 rounded-lg font-semibold transition-all ${
          selectedCategory === "All"
            ? "bg-primary-600 text-white dark:bg-primary-700"
            : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
        }`}
      >
        All Treatments
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            selectedCategory === category
              ? "bg-primary-600 text-white dark:bg-primary-700"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
