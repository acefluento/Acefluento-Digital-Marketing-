<template>
  <section id="resources" class="py-28 bg-brand-navy-2 border-y border-white/[0.06] relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-emerald/5 rounded-full blur-3xl -translate-x-1/3"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div v-reveal class="max-w-2xl mb-16">
        <span class="section-label mb-6 inline-flex">Free, no email required</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Take the <span class="gradient-text">playbook</span> and run it yourself
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          We publish the full growth sequence we use with clients — every stage, every benchmark, nothing held back. Work it on your own, or bring us in for the parts you'd rather not own.
        </p>
      </div>

      <!-- Blueprint cards -->
      <div v-stagger="100" class="grid md:grid-cols-2 gap-5 mb-14">
        <NuxtLink
          v-for="blueprint in blueprints"
          :key="blueprint.slug"
          :to="'/blueprint/' + blueprint.slug"
          class="bg-brand-navy border border-white/[0.08] rounded-2xl p-8 sm:p-10 flex flex-col group hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300"
        >
          <span class="inline-flex self-start items-center px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold mb-6">
            {{ blueprint.audienceLabel }}
          </span>
          <h3 class="text-2xl font-bold tracking-tight leading-snug mb-4 group-hover:text-brand-blue transition-colors">
            {{ blueprint.eyebrow }}
          </h3>
          <p class="text-white/50 text-sm leading-relaxed mb-7 flex-1">
            {{ blueprint.description }}
          </p>
          <div class="flex items-center justify-between pt-6 border-t border-white/[0.07]">
            <span class="text-white/35 text-xs">{{ blueprint.stages.length }} stages · {{ blueprint.readTime }}</span>
            <span class="text-brand-blue text-sm font-semibold inline-flex items-center gap-1.5">
              Read it free
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Guides row -->
      <div v-reveal class="bg-brand-navy border border-white/[0.08] rounded-2xl p-8 sm:p-10">
        <div class="flex flex-col lg:flex-row lg:items-center gap-8">
          <div class="flex-1">
            <h3 class="font-bold text-lg mb-3">Plus {{ articleCount }} free guides</h3>
            <p class="text-white/50 text-sm leading-relaxed mb-5 max-w-xl">
              Written for the two people who matter most in this decision: the family choosing a community, and the owner trying to fill it. Pricing breakdowns, resident rights, tour checklists, review templates, and GBP audits.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="topic in topics"
                :key="topic"
                class="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs font-medium"
              >
                {{ topic }}
              </span>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
            <NuxtLink to="/resources" class="btn-primary text-sm whitespace-nowrap">
              Browse all resources
            </NuxtLink>
            <NuxtLink to="/articles" class="btn-secondary text-sm whitespace-nowrap text-center">
              Read the articles
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { blueprints } from '~/data/blueprints'
import { articles } from '~/data/articles'

export default Vue.extend({
  name: 'BlueprintsSection',
  data() {
    return {
      blueprints,
      articleCount: articles.length,
      topics: [
        'Assisted living costs',
        'Resident rights',
        'Memory care tours',
        'Review response templates',
        'Google Business Profile',
        'Church websites',
      ],
    }
  },
})
</script>
