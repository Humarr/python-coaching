'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: 'Is learning Python still worth it with AI tools like ChatGPT around?',
        answer:
            'Absolutely. AI doesn’t replace coders—it enhances them. But only if you understand the logic behind what it’s doing. Knowing how to code means you can command AI, not just depend on it.',
    },
    {
        question: 'Do I need any prior experience to join this program?',
        answer:
            'None at all. This course is built for total beginners—from “what’s a variable?” all the way to building real-world projects.',
    },
    {
        question: 'What if I’ve tried coding before and failed?',
        answer:
            'That’s actually perfect. This time, you’re not learning alone. Our coaching, analogies, and support system are designed to make everything finally *click* for you.',
    },
    {
        question: 'How much time will I need each week?',
        answer:
            'If you can spare 4–6 focused hours per week, you’ll make serious progress. And if you give more? You’ll multiply your results.',
    },
    {
        question: 'Can I really get a job with this?',
        answer:
            'Yes, if you apply what you learn. Many of our students start freelancing, automating work, or landing internships even before finishing. We focus on *practical*, job-ready skills.',
    },
    {
        question: 'Is there a refund policy?',
        answer:
            'Yes—our 30-day “Code With Confidence” guarantee means you either get results, or you get your money back. Simple.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="w-full py-24 bg-[#f5f5dc] text-[#36454f]">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold font-poppins mb-4">
                        Got Questions?
                    </h2>
                    <p className="text-lg font-nunito">
                        Here are answers to the most common ones we get before people enroll.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-[#72007f]/10 rounded-xl shadow-md overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center px-6 py-5 text-left font-poppins text-lg font-semibold text-[#72007f] hover:bg-[#fff5fc] transition-colors"
                            >
                                {faq.question}
                                <ChevronDown
                                    className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-5 text-[#36454f] font-nunito text-base leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
