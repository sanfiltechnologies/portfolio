"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Services from "@/components/Services";

export default function page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatsAppFloat />
      <Services />
      <Footer />
    </div>
  );
}
