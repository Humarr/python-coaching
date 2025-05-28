'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function Guarantee() {
    return (
        <section className="w-full py-24 bg-[#f5f5dc] text-[#36454f]">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white border border-[#72007f]/10 shadow-xl rounded-2xl p-10"
                >
                    <div className="flex flex-col items-center text-center">
                        <ShieldCheck className="w-12 h-12 text-[#cc5500] mb-4" />
                        <h2 className="text-3xl font-bold font-poppins mb-4">
                            Our 30-Day “Code With Confidence” Guarantee
                        </h2>
                        <p className="text-lg font-nunito leading-relaxed mb-6">
                            We believe in this program so much that we&#39;re taking on all the risk.
                            If you show up, do the work, and still don’t feel like you’re becoming
                            a more confident, capable, and creative coder… we’ll give you 100%
                            of your money back. No questions asked. No drama. No guilt trip.
                        </p>
                        <p className="text-base font-nunito">
                            Just send us a message within 30 days of enrolling, and we’ll issue a full refund.
                            Simple as that. You have absolutely nothing to lose—and a new skill set to gain for life.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
