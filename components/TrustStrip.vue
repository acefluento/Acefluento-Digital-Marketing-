<template>
  <section class="py-14 border-y border-white/[0.07] bg-brand-navy-2">
    <div class="max-w-7xl mx-auto px-6">
      <div v-reveal class="text-center mb-8">
        <p class="text-white/55 text-sm sm:text-base font-medium mb-5">
          Trusted by organizations serving their communities every day.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <span
            v-for="proof in proofPoints"
            :key="proof"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/60 text-sm font-medium"
          >
            <svg class="w-4 h-4 text-brand-emerald" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            {{ proof }}
          </span>
        </div>
      </div>

      <div v-stagger="80" class="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div
          v-for="client in clients"
          :key="client.name"
          class="rounded-2xl border border-white/[0.08] bg-brand-navy/70 p-5 text-center hover:border-brand-blue/25 transition-colors"
        >
          <div class="mx-auto mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-extrabold shadow-lg" :class="client.accent">
            {{ client.initials }}
          </div>
          <h3 class="font-bold text-white/90">{{ client.name }}</h3>
          <p class="text-white/35 text-xs uppercase tracking-widest mt-2">{{ client.type }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TrustStrip',
  data() {
    return {
      proofPoints: [
        'Church Websites',
        'Assisted Living Growth Systems',
        'Reputation Management',
        'Conversion-Focused Design',
      ],
      clients: [
        { name: 'Euclid Church of Christ', type: 'Church Website', initials: 'EC', accent: 'from-purple-500 to-indigo-400' },
        { name: 'Creative Living Care Group', type: 'Care Brand', initials: 'CL', accent: 'from-teal-500 to-cyan-400' },
        { name: 'Acefluento', type: 'Growth Systems', initials: 'AF', accent: 'from-brand-red to-brand-blue' },
      ],
    }
  },
})
</script>
