import React from "react";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Cpu,
  GraduationCap,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      desc: "Marketing sites, e-commerce and content platforms built for speed and SEO.",
    },
    {
      icon: LayoutDashboard,
      title: "Web Applications",
      desc: "Custom dashboards, SaaS platforms and internal tools tailored to your workflow",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      desc: "Native-feeling ios & Android apps with offline support and push notifications",
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      desc: "Connected devices, sensors and dashboards - from prototype to production.",
    },
    {
      icon: GraduationCap,
      title: "School Management Systems",
      desc: "Students, fees, attendance, exams and parent portals - all in one place.",
    },
    {
      icon: ShoppingCart,
      title: "POS Systems & Services",
      desc: "Point-of-sale hardware, software and integrations for retail & hospitality ",
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      desc: "Ongoing Support, monitoring and upgrades to keep your systems running 24/7",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <div className="text-sm uppercase tracking-widest text-brand-gold mb-3 ">
            What we build
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 ">
            {" "}
            Seven services. One studio{" "}
          </h2>
          <p className="text-foreground/60 text-lg">
            Pick a single discipline or stack them - most clients start with one
            and grow int a long-term partnership{" "}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-2xl bg-panel border border-white/5 overflow-hidden hover:border-(--brand-gold) transition-colors  "
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand/0 via transparent to-brand-glow/0 group-hover:from-brand/10 group-hover:to-brand-glow/5 transition-colors " />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 shadow-glow ">
                  <s.icon className="w-6 h-6 text-primary-foreground " />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2 ">
                  {s.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {s.desc}{" "}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
