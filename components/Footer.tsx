"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState<number | null>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchYear = async () => {
      const y = new Date().getFullYear();
      setYear(y);
    };
    fetchYear();
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <footer id="contact" className="border-t border-border mt-32 bg-deep">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/sanfil.png"
              width={70}
              height={70}
              alt="Sanfil logo"
              className="rounded h-12 w-auto object-contain"
              loading="eager"
            />
            <span className=" font-display uppercase font-bold text-xl">
              sanfil <span className="text-gradient-brand">technologies</span>
            </span>
          </div>
          <p className="text-foreground/60 max-w-md">
            Engineering software,hardware and infrastructure that move
            businesses forward. From web to IoT - wired or wireless.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/50">
            Company
          </h4>
          <ul className="space-y-2 text-foreground">
            <li>
              <Link
                href="#home"
                className="hover:text-primary transition-all "
                onClick={(e) => handleLinkClick(e, "#home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-primary transition-all "
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:text-primary transition-all "
                onClick={(e) => handleLinkClick(e, "#services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="hover:text-primary transition-all "
                onClick={(e) => handleLinkClick(e, "#faq")}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/50">
            Get in touch
          </h4>
          <ul className="space-y-2 text-foreground/70">
            <li>
              <Link
                href="https:wa.me/254748092687"
                className="hover:text-sanfil-orange"
              >
                WhatsApp Chat
              </Link>
            </li>
            <li>
              <Link
                href="mailto:admin@sanfiltechnologies.com"
                className="hover:text-sanfil-orange"
              >
                admin@sanfiltechnologies.com
              </Link>
            </li>
            <li>Nairobi . Remote worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-foreground/40 text-sm">
        @ {year ?? "2026"} Sanfil Technologies. All rights reserved
      </div>
    </footer>
  );
}
