import React from "react";

export type Brand = {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight?: string;
  equimentImage?: string;
  content?: React.ReactNode;
};
