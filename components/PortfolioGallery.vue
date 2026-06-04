<template>
  <section id="portfolio" class="py-28 bg-brand-navy-2 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-1/4 w-[500px] h-[260px] bg-brand-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div class="max-w-2xl">
          <span class="section-label mb-4">Recent projects</span>
          <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
            Portfolio gallery
          </h2>
          <p class="text-white/55 text-lg leading-relaxed">
            Visual project cards give prospects a fast way to see the type of work Acefluento builds before they book a call.
          </p>
        </div>
        <a href="#contact" class="btn-secondary">Book a Strategy Call</a>
      </div>

      <div v-stagger="90" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <article
          v-for="project in projects"
          :key="project.name"
          class="group rounded-3xl border border-white/[0.08] bg-brand-navy overflow-hidden hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="p-4 bg-white/[0.03] border-b border-white/[0.06]">
            <div class="rounded-2xl overflow-hidden border border-white/[0.08] bg-brand-navy-2">
              <div class="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]">
                <span class="w-2 h-2 rounded-full bg-brand-red/70"></span>
                <span class="w-2 h-2 rounded-full bg-yellow-400/60"></span>
                <span class="w-2 h-2 rounded-full bg-brand-emerald/70"></span>
              </div>
              <div class="h-36 p-4 bg-gradient-to-br" :class="project.preview">
                <div class="h-4 w-2/3 bg-white/75 rounded mb-3"></div>
                <div class="h-2.5 w-full bg-white/35 rounded mb-2"></div>
                <div class="h-2.5 w-4/5 bg-white/25 rounded mb-4"></div>
                <div class="grid grid-cols-3 gap-2">
                  <div class="h-10 rounded bg-white/20"></div>
                  <div class="h-10 rounded bg-white/15"></div>
                  <div class="h-10 rounded bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-5">
            <p class="text-white/35 text-xs uppercase tracking-widest mb-2">{{ project.industry }}</p>
            <h3 class="font-bold text-lg mb-3">{{ project.name }}</h3>
            <div class="flex flex-wrap gap-2 mb-5">
              <span v-for="service in project.services" :key="service" class="rounded-full bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[11px] text-white/50">
                {{ service }}
              </span>
            </div>
            <a :href="project.href" class="text-brand-blue text-sm font-semibold hover:text-white transition-colors">
              {{ project.linkLabel }} →
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PortfolioGallery',
  data() {
    return {
      projects: [
        {
          name: 'Euclid Church of Christ',
          industry: 'Church',
          services: ['Website', 'Livestream', 'Giving'],
          href: '#work',
          linkLabel: 'View case study',
          preview: 'from-purple-500/80 to-indigo-500/30',
        },
        {
          name: 'Magnolia Manor',
          industry: 'Assisted Living',
          services: ['Facility Page', 'Trust Copy'],
          href: '#work',
          linkLabel: 'View project',
          preview: 'from-teal-500/80 to-cyan-500/30',
        },
        {
          name: 'Creative Living Care Group',
          industry: 'Care Group',
          services: ['Website', 'Messaging', 'Inquiry Flow'],
          href: '#work',
          linkLabel: 'View case study',
          preview: 'from-emerald-500/80 to-teal-500/30',
        },
        {
          name: 'Future Church Projects',
          industry: 'Churches',
          services: ['Websites', 'Connection Systems'],
          href: '#contact',
          linkLabel: 'Start a project',
          preview: 'from-brand-red/80 to-brand-blue/30',
        },
      ],
    }
  },
})
</script>
