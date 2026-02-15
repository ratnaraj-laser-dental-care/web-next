import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Quote from "../Common/Quote";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutDoctor = () => {
 

  return (
    <section id="about" >
      <div className="container">
        <div className="border-b border-body-color/[.15] dark:border-white/[.15] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Dr. Ashishh Jain"
                paragraph="Dental Surgeon & Implantologist"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap">
                  <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                    <b className="font-normal dark:text-white">Dr. Ashishh Jain</b> is a <b className="text-primary">highly trained dental professional</b> known for his precision, ethical approach, and commitment to advanced, patient-centric care. He specialises in <b className="text-primary">dental implants</b>, <b className="text-primary">laser dentistry</b>, <b className="text-primary">cosmetic dentistry</b>, and <b className="text-primary">comprehensive restorative treatments</b>, with a strong focus on minimally invasive and long-term solutions.
                  </p>

                  <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                    He has completed a <b className="text-primary">Fellowship in Dental Implants from Germany</b>, a <b className="text-primary">Diploma in Laser Dentistry from Austria</b>, and a <b className="text-primary">Fellowship in Cosmetic Dentistry from New York</b>, equipping him with international exposure to the latest techniques and global standards of care.
                  </p>

                  <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                    Dr. Jain actively pursues <b className="text-primary">continuous professional development</b> and has attended numerous advanced lectures, workshops and hands-on courses conducted by leading national and international speakers, staying updated with the latest trends and innovations in modern dentistry.
                  </p>

                  <p className="mb-3 text-base !leading-relaxed text-body-color md:text-lg">
                    Known for his calm demeanour and meticulous attention to detail, <b className="text-primary">Dr. Ashishh Jain</b> emphasises accurate diagnosis, detailed treatment planning, and transparent communication. 
                    
                    
                    
                  </p>


                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[17/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/dr_ashish_2.jpg"
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
            <div className="mt-12">

              <Quote message="At Ratnaraj Laser Dental Care, we lead with the philosophy of “Redefining Dentistry” by delivering care that combines technology, precision and compassion to create healthy, confident smiles." 
                quoter="Dr. Ashishh Jain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
