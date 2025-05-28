// app/components/ChefAnalogy.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChefAnalogy() {
  return (
    <section className="bg-white py-24 px-6 md:px-10 lg:px-20 border-t border-muted">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <Image
            src="/illustrations/chef-analogy.jpg"
            alt="Chef vs AI"
            width={500}
            height={500}
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            AI Is Like a Microwave… But You Still Need to Know How to Cook
          </h2>
          <p className="text-text text-lg leading-relaxed">
            Imagine this: you walk into a five-star restaurant. You’re greeted by a world-class chef. He’s not sweating over a fire — he’s got tools. High-end knives. Sous vide. Maybe even a smart oven. But he still knows *how to cook*.
          </p>
          <p className="mt-4 text-text text-lg leading-relaxed">
            That’s what learning Python does for you. It makes you the chef. AI is just the tool. Sure, it can heat stuff up. But without skills? You’re just throwing frozen pizzas in and hoping it doesn’t burn.
          </p>
          <p className="mt-4 text-text text-lg leading-relaxed">
            Our coaching makes sure you’re not just pushing buttons — you’re commanding the kitchen. You’ll understand what’s cooking, why it’s working, and how to make it better — every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
