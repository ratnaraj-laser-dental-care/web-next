import { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { link, name, content, source } = testimonial;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}”
        </p>
        <div className="flex items-center">
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">
              via{" "}
              <a href={link} rel="noreferrer" target="_blank" className="text-primary hover:underline">
                {source}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
