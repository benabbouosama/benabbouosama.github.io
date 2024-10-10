"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { blogs } from "@/data"; 
import { useState, useEffect, useRef } from "react";

// Card component to show the blog details when "View" is clicked
const BlogDetailCard = ({
  item,
  onClose,
}: {
  item: any;
  onClose: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showSoonMessage, setShowSoonMessage] = useState(false);

  // Close the card if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleReadMoreClick = () => {
    if (item.date === "Soon") {
      setShowSoonMessage(true);
    } else {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" id="blogs">
      <div
        ref={cardRef}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          X
        </button>

        {/* Blog Title */}
        <h2 className="text-3xl font-bold mb-4">{item.title}</h2>

        {/* Blog Content */}
        <p className="text-md text-gray-700 mb-6">{item.content}</p>

        {/* Bottom row with date and Read More button */}
        <div className="flex items-center justify-between mt-4">
          {/* Blog Publication Date (only show if it's not "Soon") */}
          {item.date !== "Soon" && (
            <span className="text-sm text-gray-500">
              Published on: {item.date}
            </span>
          )}

          {/* "Read More" button */}
          <button
            onClick={handleReadMoreClick}
            className={`${
              item.date === "Soon"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            } text-gray-500 px-4 py-2 rounded-md shadow`}
          >
            Read More
          </button>
        </div>

        {/* Message for "Coming Soon" blogs */}
        {showSoonMessage && (
          <p className="mt-4 text-red-500 text-sm">
            This blog will be published soon. Stay tuned!
          </p>
        )}
      </div>
    </div>
  );
};

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);

  return (
    <div className="py-20" id="blogs">
      <h1 className="heading">
        Check out my latest <span className="text-purple">blog posts</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 mt-10"> {/* Adjusted gap */}
        {blogs.map((item) => (
          <div
            className="lg:min-h-[25rem] h-[20rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-5 bg-gray-200 rounded-2xl shadow-lg"> {/* Adjusted margin-bottom */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center p-4">
                {item.title}
              </h1>

              <div className="flex items-center justify-between mt-7 mb-3">
                {/* 'View' button to open the blog details card */}
                <button
                  onClick={() => setSelectedBlog(item)}
                  className="flex justify-center items-center no-underline"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View
                  </p>
                  <FaLocationArrow color="#CBACF9" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the BlogDetailCard if a blog is selected */}
      {selectedBlog && (
        <BlogDetailCard
          item={selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />
      )}
    </div>
  );
};

export default Blog;
