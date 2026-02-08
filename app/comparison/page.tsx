import Comparison from "@/components/Comparison";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost Comparison | Ratnaraj Dental Care",
  description:
    "Compare dental treatment costs between US and India. See how much you can save with Ratnaraj Laser Dental Care.",
};

export default function ComparisonPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb pageName="Cost Comparison" description="Compare dental treatment costs between US and India. See how much you can save with Ratnaraj Laser Dental Care." />
      <Comparison showSectionTitle={false} />
    </>
  );
}
