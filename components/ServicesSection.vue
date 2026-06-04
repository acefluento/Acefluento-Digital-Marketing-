<template>
  <section id="services" class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="max-w-2xl mx-auto text-center mb-16">
        <span class="section-label mb-6 inline-flex">Growth systems</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Services that support the full path<br /><span class="gradient-text">from trust to action</span>
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          We lead with the system first. Industries are secondary to the conversion path your audience needs.
        </p>
      </div>

      <div v-stagger="100" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        <div
          v-for="service in services"
          :key="service.title"
          class="card-dark group relative flex flex-col"
        >
          <div class="w-11 h-11 rounded-xl bg-brand-blue/12 border border-brand-blue/20 flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
            <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" :d="service.iconPath" />
            </svg>
          </div>
          <h3 class="font-bold text-lg mb-3">{{ service.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed flex-1">{{ service.description }}</p>
        </div>
      </div>

      <div class="rounded-3xl border border-white/[0.08] bg-brand-navy-2 p-6 sm:p-8 text-center max-w-4xl mx-auto">
        <p class="text-white/35 text-xs uppercase tracking-widest mb-4">Strong-fit industries</p>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="industry in industries" :key="industry" class="rounded-full bg-white/[0.04] border border-white/[0.08] px-4 py-2 text-white/55 text-sm">
            {{ industry }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Website Design',
          description: 'Modern websites and landing pages built around credibility, visitor clarity, and conversion flow.',
          iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
        },
        {
          title: 'Reputation Management',
          description: 'Trust-building review systems and reputation support for organizations where credibility drives inquiries.',
          iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.363 2.443a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.538 1.118l-3.363-2.443a1 1 0 00-1.176 0l-3.363 2.443c-.783.57-1.838-.197-1.538-1.118l1.286-3.955a1 1 0 00-.364-1.118L4.018 9.382c-.783-.57-.381-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.955z',
        },
        {
          title: 'Automation',
          description: 'Lead routing, appointment paths, and follow-up systems that reduce the gap between interest and response.',
          iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        },
        {
          title: 'Conversion Optimization',
          description: 'Messaging, page structure, calls to action, and testing designed to improve inquiry readiness.',
          iconPath: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
        },
      ],
      industries: ['Assisted Living Facilities', 'Churches', 'Local Service Businesses', 'Select Digital Brands'],
    }
  },
})
</script>
