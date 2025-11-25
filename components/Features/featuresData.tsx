import { Feature } from "@/types/feature";
import { FaBeer, FaTeeth, FaTooth } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { LiaTeethOpenSolid } from "react-icons/lia";
import { IoSparklesSharp } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { GiTooth } from "react-icons/gi";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <FaTooth size={40} />
      // <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
      //   />
      //   <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      // </svg>
    ),
    title: "Dental Implants",
    paragraph:
      "Dental implants are small titanium posts placed into your jaw to act like real tooth roots.",
  },
  {
    id: 1,
    icon: (
      <LiaTeethOpenSolid size={40} />
    ),
    title: "Cosmetic Dentistry",
    paragraph:
      "Cosmetic dentistry includes treatments that make your smile look its best, such as whitening, veneers, and bonding.",
  },
  {
    id: 1,
    icon: (
      <MdHealthAndSafety size={40} />
    ),
    title: "Dental Care",
    paragraph:
      "Daily dental care—like cleanings, cavity checks, and sealants—keeps teeth healthy and prevents problems.",
  },
  {
    id: 1,
    icon: (
     <IoSparklesSharp size={40} />
    ),
    title: "Teeth Whitening",
    paragraph:
      "Teeth whitening uses safe bleaching agents to brighten your smile by removing stains from coffee, tea, or ageing.",
  },
  {
    id: 1,
    icon: (
      <FaUserDoctor size={40} />
    ),
    title: "Dental Calculus",
    paragraph:
      "Dental calculus (tartar) is hardened plaque that can’t be brushed away and requires a professional cleaning for removal.",
  },
  {
    id: 1,
    icon: (
      <GiTooth size={40} />
    ),
    title: "Root Canal",
    paragraph:
      "A root canal removes infection inside a tooth’s center (the pulp), cleans it out, and seals it to save the tooth",
  },
];
export default featuresData;
