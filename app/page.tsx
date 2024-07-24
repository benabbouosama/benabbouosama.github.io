"use client";

import Image from "next/image";
import Myth from "@/components/Myth";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import About from "@/components/aboutMe"

export default function Home() {
  return (
   <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <Myth />
      <About />
      <RecentProjects />
      <Experience />
      <Footer />
    </div>
   </main>
  );
}
