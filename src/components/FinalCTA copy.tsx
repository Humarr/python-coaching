'use client'

import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FinalCTA() {
    return (
        <section className="w-full py-32 bg-[#72007f] text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-poppins mb-6"
                >
                    This Is Your Moment
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl font-nunito mb-10 max-w-3xl mx-auto"
                >
                    You’ve seen the proof. You’ve felt the pull. Now it’s your turn. Join hundreds who took the leap — and never looked back. Become fluent in the language of the future. Not just with AI. But with your own mind.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link href="#pricing">
                        {/* <Button className="bg-[#cc5500] text-white text-lg px-8 py-4 font-semibold rounded-2xl shadow-md hover:bg-[#e06200] transition-colors">
                            Enroll Now – Let’s Do This
                        </Button> */}
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
