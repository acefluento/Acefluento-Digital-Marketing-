<template>
  <section class="py-20 bg-brand-navy-2 border-y border-white/[0.06]">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <span class="section-label mb-6 inline-flex">Connect</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
        Follow along
      </h2>
      <p class="text-white/55 leading-relaxed max-w-xl mx-auto mb-10">
        Insights on growing trust-based organizations — assisted living, independent living, and churches — from Nolan and the Acefluento team.
      </p>
      <div class="flex flex-wrap justify-center gap-3">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-brand-navy border border-white/[0.08] text-white/60 text-sm font-medium hover:border-brand-blue/30 hover:text-white transition-all"
        >
          <svg class="w-4 h-4 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path :d="social.iconPath" />
          </svg>
          {{ social.name }}
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { socials } from '~/data/site'

export default Vue.extend({
  name: 'ConnectSection',
  data() {
    return { socials }
  },
})
</script>
