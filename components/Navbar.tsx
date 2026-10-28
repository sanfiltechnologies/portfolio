"use client";
import React, { useState, useEffect } from "react";
import logo from "../public/assets/sanfil.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Navlink {
  label: string;
  href: string;
}

const navLinks: NavLinks[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about " },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link
          href="#home"
          className="flex items-center gap-1 shrink-0"
          onClick={() => handleLinkClick("#home")}
        >
          <Image
            src={logo}
            width={70}
            height={70}
            alt="Sanfil logo"
            className="rounded h-12 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p
              className={`font-mono text-lg font-bold leading-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              Idea Transformation
            </p>
            <p
              className={`text-xs font-mono tracking-wiser ${scrolled ? "text-muted-foreground" : "text-shadow-primary-foreground/80"} `}
            >
              Your Ideas our Execution
            </p>
          </div>
        </Link>
      </div>
    </motion.nav>
  );
}
