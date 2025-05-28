// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";

export default function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-12 bg-bg">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-primary leading-tight mb-6">
                    Why Learning Python in the Age of AI Is the Smartest Move You Can Make
                </h1>
                <p className="text-lg md:text-xl text-text mb-8 max-w-xl">
                    AI isn&#39;t replacing programmers. It&#39;s replacing people who don&#39;t understand code. Our step-by-step coaching turns you into the kind of coder AI assists — not replaces.
                </p>
                <Link href="#cta">
                    {/* <button className="bg-accent text-white font-heading text-lg px-6 py-3 rounded-lg hover:bg-secondary transition cursor-pointer">
                        Join the Program Now
                    </button> */}
                    <Button>
                        {/* <Button className="bg-[#cc5500] text-white text-lg px-8 py-4 font-semibold rounded-2xl shadow-md hover:bg-[#e06200] transition-colors"> */}
                        Join the Program Now
                    </Button>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 mb-10 md:mb-0"
            >
                <Image
                    src="/illustrations/hero.jpg"
                    alt="Fred facing AI dilemma"
                    width={500}
                    height={500}
                    className=" rounded-xl shadow-xl w-full h-auto"
                />
            </motion.div>
        </section>
    );
}




