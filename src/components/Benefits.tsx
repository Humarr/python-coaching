'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const benefits = [
    {
        title: 'Confidence to Build Anything',
        description:
            'No more imposter syndrome. You’ll develop the inner steel to build your own apps, land gigs, or even start a startup—because you understand what’s under the hood.'
    },
    {
        title: 'Stand Out in the AI Age',
        description:
            'While others rely on bots, you’ll know how to THINK like a programmer. That makes you 10x more valuable in companies and teams that want creators, not code typists.'
    },
    {
        title: 'Future-Proof Your Income',
        description:
            'Learning Python opens doors—from web development to AI to data science. The demand is shifting, not disappearing. And coders who can adapt will win.'
    },
    {
        title: 'Solve Real-Life Problems',
        description:
            'You won’t just “learn Python.” You’ll use it to automate tasks, solve business problems, and build tools that people pay for.'
    },
    {
        title: 'Think Like a Millionaire',
        description:
            'You’ll train your brain to break down problems and solve them—just like top entrepreneurs, strategists, and world-class thinkers.'
    },
    {
        title: 'Total Freedom',
        description:
            'You’re not learning coding to sit in a cubicle. You’re learning it so you can command your time, build your income streams, and have OPTIONS.'
    }
]

export default function Benefits() {
    return (
        <section className="w-full py-24 bg-[#f5f5dc] text-[#36454f]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold font-poppins mb-12 text-center"
                >
                    What You’ll Walk Away With
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl p-6 border border-[#72007f]/10"
                        >
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-[#cc5500] w-16 h-6 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 font-poppins">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-base font-nunito leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
