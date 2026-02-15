import React from "react";

interface BeforeAfterComparisonProps {
  before: React.ReactNode;
  after: React.ReactNode;
  className?: string;
}

const tagStyle =
  "absolute top-2 left-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 uppercase tracking-wider opacity-90";

const imgWrapperStyle =
  "relative mx-auto overflow-hidden";

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({ before, after, className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={imgWrapperStyle}>
        <span className={tagStyle}>Before</span>
        {before}
      </div>
      <div className={imgWrapperStyle}>
        <span className={tagStyle}>After</span>
        {after}
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
