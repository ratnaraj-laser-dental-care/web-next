"use client";
import SingleBlog from "@/components/Blog/SingleBlog";
import { useBlogData } from "@/components/Blog/useBlogs";
import Breadcrumb from "@/components/Common/Breadcrumb";
import usePagination from "@/components/hooks/usePagination";
import ReactPaginate from "react-paginate";

const Blogs = () => {
  const { blogData } = useBlogData({ showHighlighted: false });

  const { paginatedData, totalPages, gotoPage } = usePagination(blogData, 6);

  const handlePageClick = (event: { selected: number }) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    gotoPage(event.selected + 1);
  };

  return (
    <>
      <Breadcrumb
        pageName="Dental Care Blogs"
        description="Love reading about dental care topics? Stay tuned with our latest blogs and articles on dental health, oral hygiene and expert tips!"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {paginatedData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 mt-8 flex flex-wrap lg:mt-12"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
                containerClassName="flex items-center justify-center pt-8"
                activeClassName="bg-primary text-white rounded-md"
                activeLinkClassName="bg-primary text-white rounded-md"
                pageClassName="mx-1"
                pageLinkClassName="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                previousClassName="mx-1"
                previousLinkClassName="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                nextClassName="mx-1"
                nextLinkClassName="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
