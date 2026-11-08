import { motion } from "framer-motion";
import React from "react";

export default function HowWeWork() {
  const steps = [
    {
      n: "01",
      t: "Discover",
      d: "Free calls to map your goals, users and constraints",
    },
    {
      n: "02",
      t: "Design",
      d: "Wireframes, Prototypes and architecture ypu can sign off and on",
    },
    {
      n: "03",
      t: "Build",
      d: "Weekly demos. You see progress, not silence",
    },
    {
      n: "04",
      t: "Maintain",
      d: "From launch - we keep it running and up to date through regular upgrades",
    },
  ];
  return (
    <section className="py-24 bg-panel/30 border-y border-border ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-14 text-center ">
          How we work
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-7xl font-display font-bold text-gradient-brand opacity-30 mb-2 ">
                {s.n}
              </div>
              <h3 className="text-xl font-semibold mb-2 ">{s.t} </h3>
              <p className="text-foreground/60">{s.d} </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
