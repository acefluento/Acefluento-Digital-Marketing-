<template>
  <section id="software" class="py-28 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/6 rounded-full blur-3xl translate-x-1/4"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="max-w-2xl mb-16">
        <span class="section-label mb-6 inline-flex">Software you can start today</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Don't want a project.<br /><span class="gradient-text">Want it handled?</span>
        </h2>
        <p class="text-white/55 text-lg leading-relaxed">
          Not every problem needs a build. Some need a system that runs every day without anyone on your team remembering to run it.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-5">
        <!-- Primary product -->
        <div
          v-reveal
          class="lg:col-span-3 bg-brand-navy-2 border border-brand-blue/25 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-56 h-56 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="relative">
            <div class="flex items-center gap-3 mb-6">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald text-xs font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse-slow"></span>
                Live now
              </span>
              <span class="text-white/35 text-xs">from $297/mo</span>
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold tracking-tight mb-4">ALF Reputation Engine</h3>
            <p class="text-white/60 leading-relaxed mb-8 max-w-xl">
              Families read your reviews before they ever call you. This monitors every platform daily, alerts you the moment something negative lands, drafts the response, and keeps new reviews coming in — without adding a task to anyone's day.
            </p>

            <ul v-stagger="60" class="space-y-3 mb-9">
              <li
                v-for="feature in features"
                :key="feature"
                class="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
              >
                <svg class="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ feature }}
              </li>
            </ul>

            <div class="flex flex-col sm:flex-row gap-4">
              <a href="/alf-reputation-engine" class="btn-primary text-sm gap-2 group">
                See pricing & features
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/alf-dashboard" class="btn-secondary text-sm">Tour the dashboard</a>
            </div>
          </div>
        </div>

        <!-- Secondary offers -->
        <div class="lg:col-span-2 grid gap-5">
          <div
            v-for="offer in offers"
            :key="offer.title"
            v-reveal
            class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-7 flex flex-col hover:border-brand-blue/25 transition-colors"
          >
            <div class="w-11 h-11 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-5">
              <svg class="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" :d="offer.iconPath" />
              </svg>
            </div>
            <h3 class="font-bold text-base mb-2">{{ offer.title }}</h3>
            <p class="text-white/50 text-sm leading-relaxed mb-5 flex-1">{{ offer.description }}</p>
            <a :href="offer.href" class="text-brand-blue text-sm font-semibold hover:text-white transition-colors">
              {{ offer.cta }} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SoftwareSection',
  data() {
    return {
      features: [
        'Daily monitoring across Google, Yelp, Facebook, and senior-care directories',
        'Instant alerts before a negative review sits for a week',
        'AI-drafted responses in your voice — HIPAA-safe by default',
        'Automated review-request campaigns that keep velocity steady',
        'Monthly reporting you can hand straight to ownership',
      ],
      offers: [
        {
          title: 'Google Business Profile Optimization',
          description:
            'Your profile is the front door families actually walk through. We claim it, complete it, and keep it accurate — or audit yours free first.',
          iconPath:
            'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
          href: '/articles/google-business-profile-checklist-assisted-living',
          cta: 'Get the free checklist',
        },
        {
          title: 'High-Converting Website Build',
          description:
            'Fast, modern, and engineered around one job: turning a worried visitor at 10pm into a booked tour. Built in weeks, not quarters.',
          iconPath:
            'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          href: '#contact',
          cta: 'Book a build call',
        },
      ],
    }
  },
})
</script>
