import Image from "next/image";

const AboutFacility = () => {
  return (
    <section>
      <div className="container border-t border-body-color/[.15] dark:border-white/[.15]">
        <div className="mx-auto flex max-w-lg items-center justify-center my-10 md:my-16 lg:my-20">
          <Image
            src="/images/logo/Light_Logo.png"
            alt="logo"
            width={100}
            height={30}
            className="w-full dark:hidden"
          />
          <Image
            src="/images/logo/Dark_Logo.png"
            alt="logo"
            width={140}
            height={30}
            className="hidden w-full dark:block"
          />
        </div>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[34/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              

              <Image
                src="/images/about/facility.jpg"
                alt="about image"
                fill
                className="rounded-xl drop-shadow-three dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
              data-wow-delay=".15s"
            >
              <div className="flex flex-wrap">
                <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                  <b className="text-primary">Ratnaraj Laser Dental Care</b> is a state-of-the-art dental clinic in <b className="text-primary">Kalyan (West)</b> offering advanced, painless, and precision-driven dental care.
                </p>

                <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                  With a strong focus on <b className="text-primary">laser dentistry</b>, <b className="text-primary">dental implants</b>, <b className="text-primary">aesthetic dentistry</b>, and <b className="text-primary">comprehensive oral rehabilitation</b>, we combine modern technology with ethical, patient-centric treatment.
                </p>

                <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                  Every smile is treated with meticulous planning, minimally invasive techniques, and the highest standards of safety and hygiene. At <b className="text-primary">Ratnaraj Laser Dental Care</b>, dentistry goes beyond treatment — we deliver <b className="text-primary">comfort</b>, <b className="text-primary">confidence</b>, and <b className="text-primary">long-lasting results</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFacility;
