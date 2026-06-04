<template>
  <section id="results" class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="text-center mb-16">
        <span class="section-label mb-4">Results snapshot</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Replace the mock dashboard with<br /><span class="gradient-text">real proof</span>
        </h2>
        <p class="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          Two examples of how Acefluento turns trust barriers into clearer visitor journeys, stronger credibility, and better inquiry readiness.
        </p>
      </div>

      <div v-stagger="120" class="grid lg:grid-cols-2 gap-6">
        <article
          v-for="result in results"
          :key="result.brand"
          class="bg-brand-navy-2 border border-white/[0.08] rounded-3xl overflow-hidden hover:border-brand-blue/25 transition-all duration-300"
        >
          <div class="h-1.5 bg-gradient-to-r" :class="result.accent"></div>
          <div class="p-7 sm:p-9">
            <div class="flex items-start justify-between gap-4 mb-7">
              <div>
                <p class="text-white/35 text-xs uppercase tracking-widest mb-2">{{ result.industry }}</p>
                <h3 class="text-2xl font-extrabold tracking-tight">{{ result.brand }}</h3>
              </div>
              <span class="rounded-full px-3 py-1 text-xs font-semibold" :class="result.tagColor">Built by Acefluento</span>
            </div>

            <div class="space-y-6">
              <section>
                <p class="text-white/35 text-xs font-semibold uppercase tracking-widest mb-2">Challenge</p>
                <p class="text-white/65 text-sm leading-relaxed">{{ result.challenge }}</p>
              </section>

              <section>
                <p class="text-white/35 text-xs font-semibold uppercase tracking-widest mb-3">Solution</p>
                <ul class="grid sm:grid-cols-2 gap-2.5">
                  <li v-for="item in result.solution" :key="item" class="flex gap-2 text-white/60 text-sm leading-relaxed">
                    <span class="mt-2 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
                    {{ item }}
                  </li>
                </ul>
              </section>

              <section>
                <p class="text-white/35 text-xs font-semibold uppercase tracking-widest mb-3">Outcome</p>
                <ul class="space-y-2.5">
                  <li v-for="item in result.outcome" :key="item" class="flex gap-3 text-white/70 text-sm leading-relaxed">
                    <svg class="w-4 h-4 mt-0.5 text-brand-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ item }}
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ResultsSection',
  data() {
    return {
      results: [
        {
          brand: 'Euclid Church of Christ',
          industry: 'Church / Organization',
          accent: 'from-purple-500 to-indigo-400',
          tagColor: 'bg-purple-500/15 text-purple-300',
          challenge: 'Outdated website, poor visitor experience, and difficult access to sermons, livestreams, and basic service information.',
          solution: [
            'Complete website redesign',
            'Visitor onboarding flow',
            'Livestream integration',
            'Mobile responsive structure',
            'Clear service information',
          ],
          outcome: [
            'Modern digital front door',
            'Easier access to worship content',
            'Simplified visitor journey',
            'Improved member communication',
          ],
        },
        {
          brand: 'Creative Living Care Group',
          industry: 'Assisted Living / Care Brand',
          accent: 'from-teal-500 to-cyan-400',
          tagColor: 'bg-teal-500/15 text-teal-300',
          challenge: 'Needed a professional web presence that reflected compassionate care and made multiple facilities easier for families to understand.',
          solution: [
            'Modern brand presentation',
            'Facility-focused landing pages',
            'Clear service positioning',
            'Family-oriented messaging',
            'Magnolia Manor presentation support',
          ],
          outcome: [
            'Stronger credibility',
            'Better first impressions',
            'Easier facility discovery',
            'Improved inquiry readiness',
          ],
        },
      ],
    }
  },
})
</script>
