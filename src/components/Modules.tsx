'use client'

import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'

const modules = [
    {
        title: 'Module 1: The Programmer’s Mind',
        description:
            'Learn how to think like a programmer, solve problems like an engineer, and build confidence even before touching a line of code.',
    },
    {
        title: 'Module 2: Python from Scratch',
        description:
            'Start from zero. Learn variables, data types, conditionals, loops, and functions—with zero overwhelm and all the clarity.',
    },
    {
        title: 'Module 3: Projects That Make You Dangerous',
        description:
            'We’ll build real, usable projects: automation scripts, basic web tools, and more. Not toy examples—useful tools.',
    },
    {
        title: 'Module 4: Debugging & Thinking in Code',
        description:
            'You’ll learn to dissect bugs, trace errors, and develop the muscle of turning chaos into clarity. This is what separates the amateurs from the pros.',
    },
    {
        title: 'Module 5: Real-World Application Sprint',
        description:
            'You’ll take on challenges inspired by real-life dev problems. You’ll pitch solutions, write code, review others, and sharpen your instincts.',
    },
    {
        title: 'Module 6: Portfolio + Liftoff',
        description:
            'We’ll help you polish your projects, present them well, and position yourself to land freelance work or full-time roles—or start something of your own.',
    },
]

export default function Modules() {
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
                    The Curriculum Breakdown
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {modules.map((mod, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl p-6 border border-[#cc5500]/10"
                        >
                            <div className="flex items-start gap-4">
                                <Layers className="text-[#cc5500] w-16 h-6 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-xl mb-1 font-poppins">
                                        {mod.title}
                                    </h3>
                                    <p className="text-base font-nunito leading-relaxed">
                                        {mod.description}
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
