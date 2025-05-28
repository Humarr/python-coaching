'use client'

import TruthSection from '@/components/TruthSection'
import ChefAnalogy from '@/components/ChefAnalogy'
import Benefits from '@/components/Benefits'
import WhatYouGet from '@/components/WhatYouGet'
import Modules from '@/components/Modules'
import Pricing from '@/components/Pricing'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Testimonials from '@/components/Testimonials'
import Hero from '@/components/HeroSection'

export default function Home() {
  return (
    <main className="font-nunito bg-[#f5f5f5] text-[#36454f] min-h-screen">
      {/* Hero  */}
      <Hero />

      {/* Truth Section */}
      <TruthSection />

      {/* Chef Analogy */}
      <ChefAnalogy />

      {/* Benefits */}
      <Benefits />

      {/* What You Get */}
      <WhatYouGet />

      {/* Modules */}
      <Modules />

      {/*Testimonials*/}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* Guarantee */}
      <Guarantee />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  )
}
