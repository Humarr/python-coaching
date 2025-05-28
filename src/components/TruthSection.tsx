// app/components/TruthSection.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

const truths = [
    {
        title: "AI Is a Tool, Not a Replacement",
        description:
            "Just like Excel didn’t replace accountants — it empowered them — AI supercharges developers who know what they’re doing. If you understand code, AI becomes your power-up, not your pink slip."
    },
    {
        title: "Companies Need Coders More Than Ever",
        description:
            "Every startup, every corporation, every product needs code at the foundation. AI helps, but someone still has to drive the ship."
    },
    {
        title: "Python Is the Language of the Future",
        description:
            "From web development to automation to AI itself — Python is at the core. Learning it now is like learning to read before books exploded."
    },
    {
        title: "You Don’t Need to Be a Genius to Learn",
        description:
            "Our coaching breaks everything down, step-by-step. No jargon. No fluff. Real-world Python skills made beginner-friendly."
    }
];

export default function TruthSection() {
    return (
        <section className="bg- py-20 px-6 md:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12"
                >
                    Let’s Set the Record Straight
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {truths.map((truth, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-[#f5f5dc] p-6 rounded-xl shadow-lg border border-[#72007f]/10"
                        >
                            <h3 className="text-xl font-heading font-semibold text-primary/90 mb-2 flex items-center gap-2">
                                <CheckCheck className="self-start" />
                                {truth.title}
                            </h3>

                            <p className="text-text text-base leading-relaxed">
                                {truth.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}