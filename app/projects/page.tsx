"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gainX from "@/public/assets/project.jpg";
import Navbar from "@/components/Navbar";

type Category =
  | "Websites"
  | "Web Apps"
  | "Mobile Apps"
  | "IoT"
  | "School Systems"
  | "POS"
  | "Maintenance";
export default function Page() {
  const projects: {
    title: string;
    cat: Category;
    desc: string;
    img: string;
    tags: string[];
  }[] = [
    {
      title: "GainX limited ",
      cat: "Websites",
      desc: "High-conversion website for a brand growth company with great features. This is aimed at increasing the client base through  providing a strong online presence for the compant ",
      img: "/assets/project.jpg",
      tags: ["Next.js", "TailwindCss"],
    },
  ];

  const categories: ("All" | Category)[] = [
    "All",
    "Websites",
    "Web Apps",
    "Mobile Apps",
    "IoT",
    "School Systems",
    "POS",
    "Maintenance",
  ];

  const [active, setActive] = useState<"All" | Category>("All");

  const filtered = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.cat === active),
    [active],
  );

  return (
    <div className="min-h-screen bg-deep text-foreground ">
      <Navbar />
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 -z-10" />
        <div className="absolute inset-0 bg-gradient-brand -z-10 " />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-sm uppercase tracking-widest text-brand-gold mb-3 ">
              Portfolio{" "}
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 ">
              {" "}
              Work that <span className="text-gradient-brand">ships</span>{" "}
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              A selection of projects across all seven of our service lines.
              Filter by category to dig in.{" "}
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${active === c ? "bg-gradient-brand text-primary-foreground border-transparent shadow-glow " : "border-border text-foreground/70 hover:border-border hover:text-foreground "} `}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
