"use client";

import Image from "next/image";
import { Brand } from "@/types/brand";
import { useEffect, useRef, useState } from "react";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Philips",
    href: "https://www.philips.co.in/c-e/pe/teeth-whitening.html",
    image: "/images/brands/1.png",
    equimentImage: "/images/equipments/philips.png",
    content: (
      <div>
        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            Who Is It For?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Philips Zoom® is perfect for adults looking to enhance their smile
            quickly and effectively. Whether you have a special event coming up
            or simply want to boost your confidence, this treatment can help you
            achieve noticeable results in a short amount of time.
          </p>
        </div>
        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            How It Works?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Philips Zoom® uses a powerful whitening gel that is carefully
            applied to your teeth and activated with a special LED light. This
            combination works to break down deep stains caused by coffee, tea,
            wine, tobacco, and natural aging. The process typically takes about
            an hour, making it an ideal choice for busy schedules.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "3 Shape",
    href: "https://www.3shape.com/en/scanners/trios",
    image: "/images/brands/2.png",
    equimentImage: "/images/equipments/3shape.png",
    content: (
      <div>
        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            What It Does?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            The 3Shape TRIOS 3 is a state-of-the-art intraoral scanner that
            replaces traditional dental impressions with fast, highly accurate
            digital 3D scans.
          </p>
        </div>
        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            Why Patients Love It?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            The TRIOS 3 makes dental treatment faster and smoother. Patients
            appreciate seeing their teeth in 3D on the screen and feeling
            confident in the precision of their care.
          </p>
        </div>
        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            Why Dentists Trust It?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            This scanner boosts efficiency and accuracy, reduces chair time, and
            improves the overall treatment experience—resulting in beautiful,
            predictable results every time.{" "}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Any Cubic",
    href: "https://www.anycubic.com/",
    image: "/images/brands/3.png",
    equimentImage: "/images/equipments/anycubic.png",
    content: (
      <div>
        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            Why We Use It?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Dental work demands accuracy — down to fractions of a millimeter.
            Anycubic printers deliver smooth, detailed prints suitable for
            diagnostic models, mock-ups, and appliance fabrication, ensuring
            predictable clinical outcomes.
          </p>
        </div>

        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            What It Does?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Anycubic 3D printers are designed for detail and reliability, these
            printers help produce custom dental models, surgical guides,
            aligners, retainers, and prosthetic components with excellent
            precision
          </p>
        </div>

        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            First In Kalyan
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Ratnaraj Dental Care is proud to be the first dental clinic in
            Kalyan to have in-house Anycubic 3D printing technology.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: "Zolar",
    href: "https://www.zolartek.com/",
    image: "/images/brands/4.png",
    equimentImage: "/images/equipments/zolar.png",
    content: (
      <div>
        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            How It Enhances Treatment?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Instead of relying solely on traditional surgical tools, the Zolar
            laser uses focused light energy to carefully reshape or remove soft
            tissue. This results in cleaner surgical fields, improved accuracy,
            and quicker recovery times
          </p>
        </div>

        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            Why We Choose Zolar?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            Zolar lasers are user-friendly, compact, and designed for seamless
            integration into daily clinical procedures. Their precision supports
            better clinical outcomes, while the improved patient comfort boosts
            satisfaction and confidence in treatment. The laser simultaneously
            disinfects tissue, reducing bacterial contamination.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    name: "Morita",
    href: "https://www.morita.com/group/en/",
    image: "/images/brands/5.png",
    equimentImage: "/images/equipments/morita.png",
    content: (
      <div>
        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            What Makes It Special?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            The Tri Auto ZX2 is an advanced cordless endodontic motor designed
            to make root canal treatments smoother, safer, and more
            comfortable—for both the dentist and the patient. It combines
            precision rotary motion, an apex locator, and intelligent
            auto-control features, all packed into a lightweight, ergonomic
            handpiece.
          </p>
        </div>

        <div className="mb-9">
          <h3 className="mb-4 text-xl font-bold text-black dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
            Why It’s Helpful?
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            With its built-in display, wireless convenience, and gentle,
            accurate performance, the Tri Auto ZX2 helps dentists treat canals
            with greater confidence—especially in challenging or curved canals.
            Its safety functions automatically adjust or stop the file to
            prevent breakage or over-instrumentation, ensuring reliable clinical
            outcomes.
          </p>
        </div>
      </div>
    ),
  },
];

const AboutEquipments = () => {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const haltAutoPlay = useRef(false);

  let intervalId = useRef<NodeJS.Timeout>();

  const handleItemMouseOver = (index: number) => {
    haltAutoPlay.current = true;
    setActiveBrandIndex(index);
  };

  const handleItemMouseOut = () => {
    haltAutoPlay.current = false;
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (!haltAutoPlay.current) {
        setActiveBrandIndex((p) => (p === brandsData.length - 1 ? 0 : p + 1));
      }
    }, 10000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 mb-16 flex flex-wrap ">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp flex flex-wrap items-center justify-center rounded-lg bg-primary px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
                data-wow-delay=".1s"
              >
                {brandsData.map((brand, index) => {
                  const { href, image, name } = brand;

                  return (
                    <div
                      key={name}
                      className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="nofollow noreferrer"
                        onMouseOver={() => handleItemMouseOver(index)}
                        onMouseOut={handleItemMouseOut}
                        className={`${
                          activeBrandIndex === index
                            ? "opacity-100 grayscale-0"
                            : "opacity-70 grayscale"
                        } relative h-10 w-full transition hover:opacity-100 hover:grayscale-0`}
                      >
                        <Image height={60} width={140} src={image} alt={name} />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0">
                <Image
                  src={
                    brandsData[activeBrandIndex].equimentImage ||
                    "/images/equipments/philips.png"
                  }
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                {brandsData[activeBrandIndex].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEquipments;
