<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <ResultsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PortfolioGallery />
      <ServicesSection />
      <ProblemSection />
      <SystemSection />
      <ProcessSection />
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
