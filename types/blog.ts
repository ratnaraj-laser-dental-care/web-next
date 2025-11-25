import React from "react";

type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: React.ReactNode;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  likeCount: number;
  wpURL: string;
  commentsCount: number;
};

