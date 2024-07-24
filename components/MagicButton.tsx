import React from "react";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right"; 
  handleClick?: () => void;
  otherClasses?: string;
  className?: string; // Add className prop here
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  className, // Add className prop here
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 md:mt-10 ${className} ${otherClasses}`} // Use className here
      onClick={handleClick}
    >
      <div className="flex items-center">
        {position === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {title}
        {position === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </div>
    </button>
  );
};

export default MagicButton;