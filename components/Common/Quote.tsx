import React from "react";


interface QuoteProps {
  message: string;
  quoter?: string;
  className?: string;
}


const Quote: React.FC<QuoteProps> = ({ message, quoter, className = "" }) => {
  return (
    <blockquote
      className={`relative pl-12 py-6 text-3xl font-semibold text-gray-700 dark:text-gray-200 italic ${className}`}
      style={{ fontFamily: 'serif' }}
    >
      <span
        className="absolute left-0 top-0 text-7xl leading-none text-primary opacity-30 select-none"
        aria-hidden="true"
      >
        “
      </span>
      {message}
      {quoter && (
        <footer
          className="mt-6 flex items-center justify-end gap-2 text-right"
          aria-label="quoter"
        >
          {/* <span className="text-3xl text-primary font-serif select-none leading-none">—</span> */}
          <span className="text-xl font-semibold font-serif text-primary drop-shadow-sm tracking-wide bg-primary/5 px-3 py-1 rounded-full">
            - {quoter}
          </span>
        </footer>
      )}
    </blockquote>
  );
};

export default Quote;
