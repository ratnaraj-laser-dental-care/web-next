import Image from "next/image";

const AboutFacility = () => {
  return (
    <section>
      <div className="container border-t border-body-color/[.15] dark:border-white/[.15]">
        <div className="mx-auto flex max-w-lg items-center justify-center my-10 md:my-16 lg:my-20">
          <Image
            src="/images/logo/logo-2.svg"
            alt="logo"
            width={100}
            height={30}
            className="w-full dark:hidden"
          />
          <Image
            src="/images/logo/logo.svg"
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
                  <b className="text-primary">Ratnaraj Laser Dental Care</b> is a highly advanced dental clinic
                  located in <b className="text-primary">Kalyan West</b>. We are pioneers in laser dentistry,
                  providing premium quality comprehensive dental care to restore
                  smiles and ensure long-term oral health.
                  {/* 
We prioritize staying up-to-date with the latest advancements in dentistry to provide the highest standard of care.

*/}
                  {/* <b className="font-normal dark:text-white">Dr. Ashish</b>  earned his <b className="text-primary">BDS</b> from <b className="text-primary">S.M.B.T. Dental College
                    & Hospital</b> in 2009 and has dedicated past <b className="text-primary">16 years</b>  as
                    Senior Dental Surgeon at Ratnaraj Laser Dental Care in 
                    <b className="text-primary"> Kalyan City.</b> */}
                </p>
                <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                  With a <b className="text-primary">focus</b> on scrupulous hygiene and a no-compromise
                  approach, we offer <b className="text-primary">accurate advice</b> and perform only necessary
                  procedures. We prioritize staying up-to-date with the latest
                  advancements in dentistry to provide the <b className="text-primary">highest standard of
                  care.</b>
                </p>

                <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                  Alongside general dental services, we offer <b className="text-primary">specialized
                  treatments</b> like single sitting root canals , Philips Zoom
                  Teeth whitening, home visit dentures, digital smile designing,
                  full mouth rehabilitation with implants, and sleep apnea
                  treatment
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
