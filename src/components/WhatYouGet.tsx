'use client'

import { motion } from 'framer-motion'
import { Gift } from 'lucide-react'

const items = [
    {
        title: '1-on-1 Coaching Calls (Weekly)',
        description:
            'Get direct access to a mentor who’s walked the path. You’ll never be stuck. You’ll always know what to do next.',
    },
    {
        title: 'Step-by-Step Python Curriculum',
        description:
            'No fluff. No theory overload. Just a clear, beginner-friendly roadmap that builds mastery—fast.',
    },
    {
        title: 'Live Debugging & Code Reviews',
        description:
            'Bring your code. We’ll tear it apart together, fix it, and help you think like a pro dev under pressure.',
    },
    {
        title: 'Lifetime Access to the Portal',
        description:
            'Every lesson. Every replay. Every bonus. Yours forever, so you can revisit and revise at your own pace.',
    },
    {
        title: 'Real-World Mini Projects',
        description:
            'You won’t just copy code—you’ll build tools you can use in real life or showcase in a portfolio.',
    },
    {
        title: 'Private Community Access',
        description:
            'Surround yourself with other serious learners. Share wins. Ask questions. Get unstuck—fast.',
    }
]

export default function WhatYouGet() {
    return (
        <section className="w-full py-24 bg-[#ffffff] text-[#36454f]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold font-heading mb-12 text-center"
                >
                    Everything You Get Inside This Coaching
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#f5f5dc] rounded-2xl shadow-xl p-6 border border-[#72007f]/10"
                        >
                            <div className="flex items-start gap-4">
                                <Gift className="text-[#72007f] w-12 h-6 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 font-poppins">
                                        {item.title}
                                    </h3>
                                    <p className="text-base font-nunito leading-relaxed">
                                        {item.description}
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
