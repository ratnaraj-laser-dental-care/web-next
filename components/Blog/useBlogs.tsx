import { useEffect, useState } from "react";
import axios from "axios";
import { Blog } from "@/types/blog";
import dayjs from "dayjs";

export const transformWPPostToWebsiteBlog: (wpPost: any) => Blog = (
  wpPost,
) => {
  const decodeHtml = (html: string | undefined) => {
    if (!html) return "";
    if (typeof document !== "undefined") {
      const txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
    // fallback for non-browser environments: at least handle &amp;
    return html.replace(/&amp;/g, "&");
  };

  return {
    id: wpPost.ID,
    title: decodeHtml(wpPost.title),
    // parse the HTML excerpt into a React element for safe rendering
    paragraph: (
      <div dangerouslySetInnerHTML={{ __html: wpPost.excerpt || "" }} />
    ),
    image: `/images/blog/dept-${(wpPost.ID % 8) + 1}.jpg`, // /images/blog/blog-01.jpg
    author: {
      name: "Dr. Ashish Jain",
      image: "/images/dr_ashish_1.png",
      role: "Dental Specialist",
      designation: "BDS, MDS",
    },
    tags:
      wpPost.tags && Object.keys(wpPost.tags).length
        ? Object.keys(wpPost.tags).concat("Dental Care")
        : ["Dental Care"],
    publishDate: dayjs(wpPost.date).format("MMMM D, YYYY"),
    likeCount: wpPost.like_count || 0,
    wpURL: wpPost.URL,
    commentsCount: wpPost.comment_count || 0,
  };
};

type TPaginatorProps = {
  currentPage: number;
  totalPages: number;
  resultsPerPage: number;
}

type TParams = {
  showHighlighted?: boolean;
  pagination?: TPaginatorProps;
};

export const useBlogData = ({ showHighlighted = false }: TParams) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get("https://public-api.wordpress.com/rest/v1/sites/193430668/posts")
      .then((response) => {
        console.log(response.data);
        const supportedPosts = response.data.posts.map(
          transformWPPostToWebsiteBlog,
        )

        setBlogData(
          showHighlighted
            ? supportedPosts.filter((p) => p.tags.includes("Dental Care")).slice(0, 3)
            : supportedPosts,
        );
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [showHighlighted]);

  return {
    blogData
  };
};
