import React, { useEffect, useRef, useState } from "react";
import BeforeAfterComparison from "./BeforeAfterComparison";

interface CaseItem {
  before: React.ReactNode;
  after: React.ReactNode;
}

interface BeforeAfterCarouselProps {
  cases: CaseItem[];
  interval?: number; // ms
  className?: string;
}

const BeforeAfterCarousel: React.FC<BeforeAfterCarouselProps> = ({ cases, interval = 5000, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % cases.length);
        setFade(false); // Fade in after content change
      }, 300); // fade duration
    }, interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, cases.length, interval]);

  if (!cases || cases.length === 0) return null;

  return (
    <div className={`relative w-fit ${className}`}>
      <div
        className={`transition-opacity mb-5 duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
        key={activeIndex}
      >
        <BeforeAfterComparison
          before={cases[activeIndex].before}
          after={cases[activeIndex].after}
        />
      </div>
      <div className="flex justify-center mt-2 gap-2">
        {cases.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border border-primary ${activeIndex === idx ? 'bg-primary' : 'bg-gray-300'}`}
            onClick={() => {
              setFade(true);
              setTimeout(() => {
                setActiveIndex(idx);
                setFade(false);
              }, 300);
            }}
            aria-label={`Show case ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterCarousel;
