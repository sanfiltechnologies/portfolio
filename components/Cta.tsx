import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Cta() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl bg-panel border-border p-10 md:p-16 text-center overflow-hidden ">
          <div className="absolute inset-0 grid-pattern opacity-30 " />
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="relative">
            <h2 className="text-4xl md:text=5xl font-display font-bold mb-4 ">
              Ready to ship something{" "}
              <span className="text-gradient-brand">remarkable?</span>
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto mb-8 ">
              Tell us about your project on WhatsApp - we'll reply within an
              hour during working days.
            </p>
            <Link
              href="https://wa.me/+254748092687?text=Hi%20Sansfil%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-brand tex-primary-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform  "
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
