import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const borderClass = "border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, id, wpURL, likeCount, commentsCount } =
    blog;

    const hasLikes = likeCount > 0;
    const hasComments = commentsCount > 0;
  return (
    <>
      <div
        className="wow fadeInUp group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
        data-wow-delay=".1s"
      >
        <Link
          target="_blank"
          href={wpURL}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              target="_blank"
              href={wpURL}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className={`mr-5 flex items-center pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 ${hasLikes || hasComments ? borderClass : ""}`}>
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  {author.name}
                </h4>
                <p className="text-xs text-body-color">{publishDate}</p>
              </div>
            </div>
            {likeCount > 0 && <div className={`${hasComments ? borderClass : ""} inline-block pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5`}>
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Likes
              </h4>
              <p className="text-xs text-body-color">{likeCount}</p>
            </div>}
            {commentsCount > 0 && <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Comments
              </h4>
              <p className="text-xs text-body-color">{commentsCount}</p>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
