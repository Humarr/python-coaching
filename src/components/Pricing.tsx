'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const bonuses = [
  'Bonus #1: 30+ Real Code Templates You Can Reuse Instantly',
  'Bonus #2: AI Workflow Blueprint for Devs (Use AI Without Depending on It)',
  'Bonus #3: The Python Career Map – From Zero to Freelance to Full-time',
  'Bonus #4: Lifetime Access to All Future Updates',
  'Bonus #5: Personalized Code Portfolio Review (Limited Spots)',
]

export default function Pricing() {
  return (
    <section className="w-full py-24 bg-[#ffffff] text-[#36454f]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg font-nunito">
            One payment. Lifetime access. Weekly coaching. Results that compound.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#f5f5dc] rounded-2xl border border-[#72007f]/10 p-10 shadow-xl"
        >
          <h3 className="text-3xl font-bold font-poppins text-[#72007f] text-center mb-6">
            $297 One-Time Payment
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#72007f] mt-1" />
              <span className="font-nunito text-base">
                Lifetime access to the full coaching program
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#72007f] mt-1" />
              <span className="font-nunito text-base">
                Weekly live Q&A calls + replays
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#72007f] mt-1" />
              <span className="font-nunito text-base">
                Private community + project feedback
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#72007f] mt-1" />
              <span className="font-nunito text-base">
                Lifetime updates to all future content
              </span>
            </li>
          </ul>

          <div className="mt-10">
            <h4 className="text-2xl font-semibold font-poppins mb-4 text-[#36454f]">
              Enroll now and get these exclusive bonuses:
            </h4>
            <ul className="grid md:grid-cols-2 gap-4">
              {bonuses.map((bonus, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#cc5500] mt-1" />
                  <span className="font-nunito text-base leading-relaxed">
                    {bonus}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-[#72007f] hover:bg-[#5a005f] transition text-white font-semibold rounded-xl text-lg font-poppins">
              Enroll Now & Get Instant Access
            </button>
            <p className="mt-4 text-sm font-nunito text-[#36454f]">
              30-Day 100% Money-Back Guarantee – No Questions Asked
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
