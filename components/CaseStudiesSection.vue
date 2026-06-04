<template>
  <section id="work" class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="max-w-3xl mb-16">
        <span class="section-label mb-4">Featured work</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Case studies built around<br /><span class="gradient-text">trust, proof, and action</span>
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          Each project is structured around the client’s real audience: what they need to trust, what they need to understand, and what action they should take next.
        </p>
      </div>

      <div v-stagger="100" class="grid lg:grid-cols-2 gap-6">
        <article
          v-for="study in studies"
          :key="study.brand"
          class="rounded-3xl border border-white/[0.08] bg-brand-navy p-7 sm:p-9 hover:border-brand-blue/25 transition-colors"
        >
          <div class="flex items-center justify-between gap-4 mb-8">
            <div>
              <p class="text-white/35 text-xs uppercase tracking-widest mb-2">{{ study.industry }}</p>
              <h3 class="text-2xl font-extrabold">{{ study.brand }}</h3>
            </div>
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center font-extrabold" :class="study.accent">
              {{ study.initials }}
            </div>
          </div>

          <div class="mb-7">
            <p class="text-white/35 text-xs font-semibold uppercase tracking-widest mb-3">What we built</p>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li v-for="item in study.built" :key="item" class="flex items-center gap-2 text-white/65 text-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
            <p class="text-white/35 text-xs font-semibold uppercase tracking-widest mb-2">Focus</p>
            <p class="text-white/70 text-base leading-relaxed">{{ study.focus }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CaseStudiesSection',
  data() {
    return {
      studies: [
        {
          brand: 'Euclid Church of Christ',
          industry: 'Church / Organization',
          initials: 'EC',
          accent: 'from-purple-500 to-indigo-400',
          built: [
            'Modern church website',
            'Sermon archive',
            'Livestream integration',
            'Online giving',
            'Visitor connection system',
          ],
          focus: 'Turning a church website into a digital front door for visitors and members.',
        },
        {
          brand: 'Creative Living Care Group',
          industry: 'Assisted Living / Care Brand',
          initials: 'CL',
          accent: 'from-teal-500 to-cyan-400',
          built: [
            'Assisted living website',
            'Facility showcase',
            'Trust-building messaging',
            'Conversion-focused structure',
          ],
          focus: 'Helping families evaluate care options with confidence.',
        },
      ],
    }
  },
})
</script>
