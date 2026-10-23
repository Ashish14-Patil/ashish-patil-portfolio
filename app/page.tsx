import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-textPrimary">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills & Tools Section */}
        <Skills />

        {/* Experience Timeline Section */}
        <Experience />

        {/* Featured Projects & Case Studies */}
        <Projects />

        {/* Freelance Services Section */}
        <Services />

        {/* Education & Certification Section */}
        <Education />

        {/* Contact Form & Direct Information */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
