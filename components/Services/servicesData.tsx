import { Service } from "@/types/service";
import { FaTooth, FaSmile, FaMedkit, FaRegSmile } from "react-icons/fa";
import { LiaTeethOpenSolid } from "react-icons/lia";
import { MdHealthAndSafety } from "react-icons/md";
import { IoSparklesSharp } from "react-icons/io5";
import { GiTooth } from "react-icons/gi";
import Image from "next/image";

const servicesData: Service[] = [
  {
    id: 1,
    icon: <FaTooth size={40} />,
    title: "Dental Implants",
    description: "A permanent, natural-looking replacement for missing teeth.",
    longDescription:
      "Dental implants are titanium posts placed into the jawbone that act as artificial tooth roots. They support crowns that look and function like natural teeth, restoring chewing ability and appearance.",
    image: "/images/services/implants.jpg",
    benefits: [
      "Feels and looks like a real tooth",
      "Restores chewing and speech",
      "Prevents jaw bone loss",
      "Long-lasting solution",
    ],
    duration: "Several months (including healing)",
  },
  {
    id: 2,
    icon: <LiaTeethOpenSolid size={40} />,
    title: "Veneers & Smile Designing",
    description:
      "Custom porcelain/ composite veneers to reshape and brighten your smile.",
    longDescription:
      "Veneers are thin shells bonded to tooth fronts to fix chips, gaps, or discoloration. Smile designing combines veneers and other cosmetic steps to create a balanced, confident smile.",
    image: "/images/services/veneers.jpg",
    benefits: [
      "Hides stains and chips",
      "Improves tooth shape and size",
      "Quick cosmetic transformation",
      "Natural-looking results",
    ],
    duration: "1–3 weeks (depending on treatment)",
  },
  {
    id: 3,
    icon: <IoSparklesSharp size={40} />,
    title: "Professional Teeth Whitening",
    description: "In-office whitening for a brighter smile in one visit.",
    longDescription:
      "Professional whitening safely removes deep stains and brightens teeth several shades in-office. It's faster and more effective than over-the-counter products.",
    image: "/images/services/whitening.jpg",
    benefits: [
      "Noticeable results in one appointment",
      "Safe for enamel when done professionally",
      "Boosts confidence",
      "Quick and non-invasive",
    ],
    duration: "About 1 hour",
    casesBeforeAfter: [
      {
        before: (
          <Image
            src="/images/services/cases/one/before.png"
            alt="Before whitening"
            width={400}
            height={300}
          />
        ),
        after: (
          <Image
            src="/images/services/cases/one/after.png"
            alt="After whitening"
            width={400}
            height={300}
          />
        ),
      },
      {
        before: (
          <Image
            src="/images/services/cases/two/before.png"
            alt="Before whitening"
            width={400}
            height={300}
          />
        ),
        after: (
          <Image
            src="/images/services/cases/two/after.png"
            alt="After whitening"
            width={400}
            height={300}
          />
        ),
      },
    ],
  },
  {
    id: 4,
    icon: <MdHealthAndSafety size={40} />,
    title: "General Dental Care",
    description: "Routine checkups, cleanings, and preventive treatments.",
    longDescription:
      "Regular exams and cleanings prevent cavities and gum disease, catch problems early, and keep your mouth healthy. Includes x-rays, polishing, and advice for home care.",
    image: "/images/services/cleaning.jpg",
    benefits: [
      "Prevents tooth decay",
      "Catches issues early",
      "Professional cleaning removes buildup",
      "Personalized home care tips",
    ],
    duration: "30–60 minutes",
  },
  {
    id: 5,
    icon: <FaMedkit size={40} />,
    title: "Braces & Aligners",
    description:
      "Straighten teeth and correct bites with braces or clear aligners.",
    longDescription:
      "Orthodontic treatment moves teeth into the right position to improve chewing, appearance, and oral hygiene. Options include metal braces, ceramic braces, and invisible aligners.",
    image: "/images/services/braces.jpg",
    benefits: [
      "Straighter teeth",
      "Improved bite and function",
      "Easier to clean teeth",
      "Invisible options available",
    ],
    duration: "12–24 months (typical course)",
  },
  {
    id: 6,
    icon: <GiTooth size={40} />,
    title: "Root Canal Treatment",
    description: "Remove infection inside a tooth and save it from extraction.",
    longDescription:
      "Root canal therapy removes infected pulp, cleans and seals the tooth, relieving pain and preserving the natural tooth structure whenever possible.",
    image: "/images/services/rootcanal.jpg",
    benefits: [
      "Stops tooth pain and infection",
      "Saves the natural tooth",
      "Allows normal chewing",
      "Usually completed in 1–2 visits",
    ],
    duration: "1–2 hours (often single visit)",
  },
  {
    id: 7,
    icon: <FaRegSmile size={40} />,
    title: "Full Mouth Rehabilitation",
    description: "Comprehensive rebuild of teeth for function and aesthetics.",
    longDescription:
      "Full mouth rehab combines restorative and cosmetic dentistry to rebuild worn, damaged, or missing teeth — improving chewing, speech, and appearance.",
    image: "/images/services/fullmouth.jpg",
    benefits: [
      "Restores full chewing function",
      "Improves facial appearance",
      "Custom treatment plan",
      "Combines multiple therapies",
    ],
    duration: "Varies (multi-stage)",
  },
  {
    id: 8,
    icon: <FaSmile size={40} />,
    title: "Invisalign / Clear Aligners",
    description: "Removable, nearly invisible aligners to straighten teeth.",
    longDescription:
      "Clear aligners are a discreet way to shift teeth using a series of custom trays. They're removable for eating and cleaning, making them convenient for adults and teens.",
    image: "/images/services/invisalign.jpg",
    benefits: [
      "Nearly invisible",
      "Removable for meals",
      "Comfortable fitting",
      "Predictable digital planning",
    ],
    duration: "6–18 months (case-dependent)",
  },
  {
    id: 9,
    icon: <FaTooth size={40} />,
    title: "Dental Crowns & Bridges",
    description:
      "Crowns restore damaged teeth; bridges replace one or more missing teeth.",
    longDescription:
      "Crowns cap and protect damaged or weak teeth. Bridges span the gap left by missing teeth using adjacent teeth or implants for support.",
    image: "/images/services/crowns-bridges.jpg",
    benefits: [
      "Restores chewing ability",
      "Protects damaged teeth",
      "Replaces missing teeth without implants",
      "Long-lasting restorations",
    ],
    duration: "1–3 weeks (depending on lab work)",
  },
  {
    id: 10,
    icon: <MdHealthAndSafety size={40} />,
    title: "Dentures",
    description: "Removable plates that replace multiple missing teeth.",
    longDescription:
      "Dentures are removable prosthetics that restore appearance and function for patients missing several or all teeth. Options include partial and full dentures.",
    image: "/images/services/dentures.jpg",
    benefits: [
      "Restores smile and chewing",
      "Cost-effective for multiple teeth",
      "Easily adjustable",
      "Quick to fabricate",
    ],
    duration: "2–4 weeks (fitting & adjustments)",
  },
  {
    id: 11,
    icon: <FaTooth size={40} />,
    title: "Tooth-Colored Fillings",
    description: "Durable, natural-looking fillings that match your teeth.",
    longDescription:
      "Composite (tooth-colored) fillings repair cavities and blend into your natural tooth color for a seamless appearance.",
    image: "/images/services/fillings.png",
    benefits: [
      "Blends with your teeth",
      "Conserves tooth structure",
      "Strong and durable",
      "Quick repair in one visit",
    ],
    duration: "30–60 minutes",
  },
  {
    id: 12,
    icon: <MdHealthAndSafety size={40} />,
    title: "Gum Treatment",
    description: "Treat and manage gum disease to protect your teeth.",
    longDescription:
      "Gum treatments range from deep cleanings to surgical options to control infection, stop bone loss, and preserve teeth.",
    image: "/images/services/gum-treatment.jpg",
    benefits: [
      "Controls gum infection",
      "Prevents tooth loss",
      "Improves oral health",
      "Reduces bad breath",
    ],
    duration: "Depends on treatment (single visit to multiple)",
  },
  {
    id: 13,
    icon: <GiTooth size={40} />,
    title: "Wisdom & Molar Removal",
    description: "Safe extraction of impacted or painful wisdom teeth.",
    longDescription:
      "Extractions remove problematic wisdom or molar teeth that are causing pain, infection, or crowding. We use sedation and careful techniques for comfort.",
    image: "/images/services/wisdom.jpg",
    benefits: [
      "Relieves pain and infection",
      "Prevents crowding",
      "Quick outpatient procedure",
      "Options for sedation available",
    ],
    duration: "30–90 minutes (per tooth/visit)",
  },
  {
    id: 14,
    icon: <FaMedkit size={40} />,
    title: "Bone Graft & Sinus Lift",
    description: "Procedures to rebuild bone for implant placement.",
    longDescription:
      "Bone grafts and sinus lifts add or reposition bone to create a stable foundation for dental implants when natural bone volume is insufficient.",
    image: "/images/services/bone-graft.jpg",
    benefits: [
      "Creates strong implant foundation",
      "Enables implants where bone is low",
      "Improves long-term implant success",
    ],
    duration: "Several months (healing required)",
  },
  {
    id: 15,
    icon: <FaRegSmile size={40} />,
    title: "Pediatric / Child Dentistry",
    description: "Gentle dental care tailored for children and infants.",
    longDescription:
      "Pediatric dentistry focuses on preventive care, routine checkups, and child-friendly treatments to keep young teeth healthy and set good habits early.",
    image: "/images/services/pediatric.jpg",
    benefits: [
      "Child-friendly environment",
      "Prevents cavities early",
      "Education for parents and kids",
      "Gentle, age-appropriate care",
    ],
    duration: "20–45 minutes",
  },
];

export default servicesData;
