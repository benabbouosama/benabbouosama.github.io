"use client";

import { FaLocationArrow, FaEye, FaEyeSlash } from "react-icons/fa6"; // Import FaEyeSlash
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useState, useEffect, useRef } from "react";

// Card component to show the project details when "View" is clicked
const ProjectDetailCard = ({
  item,
  onClose,
  isCardClicked, // Receive the isCardClicked state from the parent component
}: {
  item: any;
  onClose: () => void;
  isCardClicked: boolean; // Flag to control icon change on card view
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={cardRef} className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          X
        </button>

        {/* Bigger image - change based on card click */}
        <img
          src={isCardClicked ? item.secondIcon : item.img} // Display second image if clicked
          alt="Project Image"
          className="w-full h-96 object-contain mb-6 rounded-lg" // Changed to object-contain
        />

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">{item.title}</h2>

        {/* Description */}
        <p className="text-md text-gray-700 mb-6">{item.des}</p>

        {/* Repository Link and Visibility */}
        <div className="flex items-center justify-between mt-4">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple underline text-xl"
          >
            View Repository
          </a>

          {/* Visibility (with Eye or EyeSlash icon) */}
          <div className="flex items-center text-lg font-semibold">
            {item.visibility ? (
              <FaEye color="green" className="mr-2" /> // Open eye for public
            ) : (
              <FaEyeSlash color="red" className="mr-2" /> // Closed eye for private
            )}
            <p
              style={{ color: item.visibility ? "green" : "red" }}
              className="text-lg"
            >
              {item.visibility ? "Public" : "Private"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isCardClicked, setIsCardClicked] = useState(false); // Track if "View" button was clicked

  const handleViewClick = (item: any) => {
    setSelectedProject(item);
    setIsCardClicked(true); // Set to true when "View" is clicked
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of my{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="absolute bottom-0 w-auto h-auto object-contain" // Adjusted to use object-contain
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-4">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                {/* 'View' button to open the project details card */}
                <button
                  onClick={() => handleViewClick(item)} // Call when "View" button is clicked
                  className="flex justify-center items-center no-underline"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View
                  </p>
                  <FaLocationArrow color="#CBACF9" />
                </button>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Conditionally render the ProjectDetailCard if a project is selected */}
      {selectedProject && (
        <ProjectDetailCard
          item={selectedProject}
          onClose={() => setSelectedProject(null)}
          isCardClicked={isCardClicked} // Pass down the click state
        />
      )}
    </div>
  );
};

export default RecentProjects;
