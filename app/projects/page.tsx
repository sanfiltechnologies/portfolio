"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gainX from "@/public/assets/project.jpg";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { span } from "framer-motion/client";

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
    link: string;
    tags: string[];
  }[] = [
    {
      title: "GainX limited ",
      cat: "Websites",
      desc: "High-conversion website for a brand growth company with great features. This is aimed at increasing the client base through  providing a strong online presence for the company ",
      img: "/assets/gainxltd.jpg",
      tags: ["Next.js", "TailwindCss"],
      link: "https://gainxltd.com/",
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

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 "
          >
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 6) * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden bg-panel border border-border hover:border-(--brand-gold)/50 transition-colors shadow-card "
              >
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative aspect-5/3 overflow-hidden ">
                    <Image
                      src={p.img}
                      alt={p.title}
                      loading="eager"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover transition-transform duration-700  group-hover:scale-110 "
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-(--bg-deep) via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-border text-foreground/90">
                      {p.cat}{" "}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display fot-semibold text-xl ">
                        {p.title}{" "}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-brand-gold group-hover:rotate-12 transition-all shrink-0 " />
                    </div>
                    <p className="text-foreground/60 text-sm mb-4">{p.desc} </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-foreground/60 border border-border "
                        >
                          {t}{" "}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
