import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppFloat() {
  const phone = "+254748092687";
  const text = encodeURIComponent(
    "Hi Sanfil Technologies, I'd like to discuss a project.",
  );
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Link
        href={`https://wa.me/${phone}?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30 " />
        <span className="relative flex items-center gap-2 bg-[#25d366] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl shadow-[#254366]/30 ">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium hidden sm:inline">Chat with us </span>
        </span>
      </Link>
    </motion.div>
  );
}
