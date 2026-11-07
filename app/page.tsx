"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
