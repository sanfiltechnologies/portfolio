"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Cpu,
  GraduationCap,
  ShoppingCart,
  Wrench,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      requestAnimationFrame(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/code.jpg"
          width={120}
          height={120}
          alt="sanfil logo"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[oklch(0.11_0.04_260/0.7)] via-[oklch(0.11_0.04_260/0.85)] to-[--bg-deep)" />
        <div className="absolute inset-0 grid-pattern opacity-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-sm text-foreground/70 mb-6 ">
            <Sparkles className="w-3 h-3.5 text-sanfil-orange" />
            <span className="">
              Sanfil Technologies -
              <span className="text-gradient-brand">
                Powerhouse Of Solutions
              </span>
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] mb-6 ">
            Building the {""}
            <span className="text-gradient-brand">Connected future</span>, one
            circuit at a time.
          </h1>
          <p className="text-lg text-foreground/70 max-w-xl mb-8">
            From websites to mobile apps, IoT devices to point-of-sale systems -
            Sanfil Technologies designs, ships and maintains the digital
            backbone of modern businesses
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-semibold shadow-glow hover:scale-[1.1] transition-all  "
            >
              Explore our work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 " />
            </Link>
            <Link
              href="#services"
              className="px-6 py-3.5 rounded-full border border-border text-foreground hover:bg-white/5 transition-colors"
              onClick={(e) => handleLinkClick(e, "#services")}
            >
              See what we do
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["50+", "Projects"],
              ["7", "Service lines"],
              ["24/7", "Support"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-display font-bold text-gradient">
                  {n}
                </div>
                <div className="text-sm text-foreground/50">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-brand blur-3xl opacity-30 rounded-full " />
          <motion.div
            animate={{ y: [5, -12, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/assets/project.jpg"
              width={500}
              height={500}
              alt="picture of client and programmer"
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-glow"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
