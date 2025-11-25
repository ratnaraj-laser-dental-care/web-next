"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { useBlogData } from "./useBlogs";

const Blog = () => {
  const { blogData } = useBlogData({
    showHighlighted: true,
  });

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Love reading about dental care topics? Stay tuned with our latest blogs and articles on dental health, oral hygiene and expert tips!"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
