'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        name: 'James O.',
        role: 'Former HR Officer turned Python Developer',
        quote:
            'Before this, I couldn’t write a single line of code without panicking. Now, I’ve built three Python projects, and I’m already freelancing on Upwork. This course didn’t just teach me code – it gave me confidence.',
    },
    {
        name: 'Fatima A.',
        role: 'Stay-at-home mom & now junior dev at a fintech startup',
        quote:
            'I thought AI had killed coding, but this program proved otherwise. I can now collaborate with AI, not rely on it. That shift alone is worth the price of admission.',
    },
    {
        name: 'Chinedu M.',
        role: 'Mechanical Engineer learning Python for automation',
        quote:
            'I never imagined learning to code could feel this exciting. The analogies, coaching calls, and real-world projects made everything click. I even automated parts of my engineering job now.',
    },
    {
        name: 'Lilian T.',
        role: 'University student with no tech background',
        quote:
            'GPT scared me. I felt like I was too late to the game. But this course made me see that code isn’t dying — it’s evolving. And now I know how to evolve with it.',
    },
]

export default function Testimonials() {
    return (
        <section className="w-full py-24 bg-white text-[#36454f]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold font-poppins mb-4">
                        Real People. Real Transformations.
                    </h2>
                    <p className="text-lg font-nunito">
                        Here’s what happens when ordinary people learn to code the right way — without fear, and without hype.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#f5f5dc] p-6 rounded-2xl shadow-md border border-[#72007f]/10"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Star className="text-[#cc5500]  w-5 h-5" />
                                <Star className="text-[#cc5500] w-5 h-5" />
                                <Star className="text-[#cc5500] w-5 h-5" />
                                <Star className="text-[#cc5500] w-5 h-5" />
                                <Star className="text-[#cc5500] w-5 h-5" />
                            </div>
                            <p className="text-base font-nunito italic mb-4">“{t.quote}”</p>
                            <p className="font-bold font-poppins text-sm text-[#72007f]">
                                {t.name} <span className="text-[#36454f] font-normal">– {t.role}</span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
