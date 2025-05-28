
// app/components/PainSection.tsx
"use client";

import { motion } from "framer-motion";

const pains = [
  "Everyone’s telling you AI is taking your job.",
  "You tried watching YouTube tutorials, but they all feel disconnected.",
  "You feel behind. Like you missed the tech boat.",
  "You’re afraid of wasting time learning what AI will automate."
];

export default function PainSection() {
  return (
    <section className="bg-muted py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6"
        >
          Does This Sound Familiar?
        </motion.h2>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid gap-6 md:grid-cols-2 mt-8 text-left"
        >
          {pains.map((pain, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-muted"
            >
              <span className="text-lg text-text">🔥 {pain}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}