"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollY.getPrevious()!;
      
      if (current < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navItems.map(item => {
        const element = document.querySelector(item.link);
        return element ? element.getBoundingClientRect().top + window.scrollY : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentIndex = sectionOffsets.findIndex(offset => scrollPosition < offset);
      setActiveIndex(currentIndex === -1 ? navItems.length - 1 : currentIndex - 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-2 sm:px-4 py-2 items-center justify-center space-x-2", 
          "max-w-[75%] sm:max-w-fit", // Reduced width on small screens
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              {
                "text-purple-600 font-bold": activeIndex === idx, // Highlight the active link
              }
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            <span className="block sm:hidden text-sm">{navItem.name}</span> {/* Show name on small screens */}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
