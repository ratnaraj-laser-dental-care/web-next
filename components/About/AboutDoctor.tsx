import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutDoctor = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" >
      <div className="container">
        <div className="border-b border-body-color/[.15] dark:border-white/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Dr. Ashish Jain"
                paragraph="Dental Surgeon & Implantologist"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap">
                  <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                    <b className="font-normal dark:text-white">Dr. Ashish</b>  earned his <b className="text-primary">BDS</b> from <b className="text-primary">S.M.B.T. Dental College
                    & Hospital</b> in 2009 and has dedicated past <b className="text-primary">16 years</b>  as
                    Senior Dental Surgeon at Ratnaraj Laser Dental Care in 
                    <b className="text-primary"> Kalyan City.</b>
                  </p>
                  <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                    Over this time, he has treated countless patients with
                    services like cosmetic dentistry, implants, laser
                    treatments, root canals, crowns and dentures.
                  </p>
                  <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                    A member of the <b className="text-primary">Indian Dental Association</b>  and specialized
                    dental groups, Dr. Ashish combines solid academic
                    credentials with extensive real-world practice.
                  </p>
                  <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                    With a commitment to delivering top-tier treatments and
                    surgeries, Dr. Ashish stands as a <b className="text-primary">trusted dental care
                    provider</b> in the region.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/dr_ashish_1.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:mr-0 dark:bg-primary bg-slate-300 rounded-xl"
                />
                {/* <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
