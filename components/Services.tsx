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
        </motion.div>{" "}
      </div>
    </section>
  );
}
