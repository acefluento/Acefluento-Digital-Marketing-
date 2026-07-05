<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <SystemSection />
      <ServicesSection />
      <InlineCta message="Taking on one Fast-Track client in July — full site + lead system, live in 14 days. Not sure which service fits? Start with a free strategy call." />
      <WhoWeHelpSection />
      <ResultsSection />
      <InlineCta :dark="true" message="If your current site, messaging, or follow-up is costing you leads — let's find out where. The July Fast-Track slot goes to the first fit." />
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
