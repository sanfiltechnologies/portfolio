"use client";
import { div } from "framer-motion/client";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Most websites ship in 2–4 weeks. Web apps and mobile apps range 8–18 weeks depending on scope. IoT and POS projects depend on hardware lead times.",
    },
    {
      q: "Do you provide hosting and maintenance?",
      a: "Yes — we offer fully managed hosting, monitoring, security patches and feature updates under monthly retainers.",
    },
    {
      q: "Can you integrate with our existing systems?",
      a: "Absolutely. We routinely integrate with payment gateways, ERPs, CRMs, government APIs and legacy databases.",
    },
    {
      q: "What does a school management system include?",
      a: "Student records, fee invoicing, attendance, exams & report cards, timetables, SMS alerts and a parent portal.",
    },
    {
      q: "Do you sell POS hardware or just software?",
      a: "Both. We supply terminals, receipt printers, barcode scanners and cash drawers, plus the software and ongoing service.",
    },
    {
      q: "How do we get started?",
      a: "Tap the WhatsApp button, send us a message describing your idea, and we'll book a free 30-minute discovery call.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6 ">
        <div className="text-center mb-14">
          <div className="text-sm uppercase tracking-widest text-brand-gold mb-3">
            FAQ{" "}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold ">
            {" "}
            Questions, answered.{" "}
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl bg-panel border border-border overflow-hidden "
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/2 transition-colors"
                >
                  <span className="font-medium text-lg ">{f.q} </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground ">
                    {isOpen ? (
                      <Minus className="w-4 h-4 " />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-foreground/70 leading-relaxed ">
                    {f.a}{" "}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
