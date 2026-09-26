<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SystemSection />
      <BlueprintsSection />
      <ServicesSection />
      <SoftwareSection />
      <InlineCta message="Not sure whether you need a build, the software, or just a second opinion? Start with the call — we'll tell you straight." />
      <WhoWeHelpSection />
      <ResultsSection />
      <TestimonialsSection />
      <InlineCta :dark="true" message="If your site, your reviews, or your follow-up is quietly costing you clients — let's find out where." />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
