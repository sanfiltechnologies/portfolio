"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
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
            src="/assets/sanfil.png"
            width={70}
            height={70}
            alt="Sanfil logo"
            className="rounded h-12 w-auto object-contain"
            loading="eager"
          />
          <div className="hidden sm:block">
            <p
              className={`font-display text-lg font-bold leading-tight ${!scrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              Idea Transformation
            </p>
            <p
              className={`text-xs font-mono tracking-wider ${!scrolled ? "text-muted-foreground" : "text-muted-foreground/80"} `}
            >
              Your Ideas our Execution
            </p>
          </div>
        </Link>
        {/**Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-body text-sm font-medium tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                scrolled
                  ? "text-muted-foreground hover:text-accent"
                  : "text-muted-foreground hover:text-accent"
              } `}
            >
              {link.label}
            </Link>
          ))}

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLinkClick("#contact")}
            className="px-6 py-2.5 rounded-full bg-linear-to-r from-primary to-sanfil-orange text-primary-foreground font-semibold text-xs tracking-wide shadow-[0_4px_20px_hsl(var(--primary)/0.35)] hover:shadow-[0_8px_30px_hsl(var(--primary)/0.5)] transition-all duration-300  "
          >
            Get In Touch
          </motion.button>
        </div>
        {/* {mobile menu Button} */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          className={`lg:hidden bg-gradient-primary p-2 ${scrolled ? "text-muted-foreground" : "text-muted-foreground"}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* {Mobile Menu} */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-accent-transparent backdrop-blur-xl border-t border-border overflow-hidden"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link: NavLink, i: number) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-mono text-foreground text-lg font-medium py-2 border-b bored-border/50 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
