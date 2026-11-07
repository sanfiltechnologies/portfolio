"use client";
import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
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

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center "></div>
    </section>
  );
}
