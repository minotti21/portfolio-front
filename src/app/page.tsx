"use client";

import SkeletonLoading from "@/components/SkeletonLoading";
import About from "@/screens/About";
import Contact from "@/screens/Contact";
import Home from "@/screens/Home";
import Projects from "@/screens/Projects";
import Technologies from "@/screens/Technologies";

export default function Main() {
  return (
    <>
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}
