import React from "react";

export type Service = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: JSX.Element;
  benefits: string[];
  price?: string;
  duration?: string;
  casesBeforeAfter?: {
    before: React.ReactNode;
    after: React.ReactNode;
  }[];
};
