<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <!-- Hero -->
      <section class="pt-36 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-6 text-center">
          <span class="section-label mb-6 inline-flex">Resources</span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 mb-6">
            Free guides for families.<br />
            <span class="gradient-text">Growth systems for operators.</span>
          </h1>
          <p class="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're researching care for a loved one or running a community, start here — the useful stuff is free.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#for-families" class="btn-primary text-sm">
              I'm researching care for a loved one
            </a>
            <a href="#for-owners" class="btn-secondary text-sm">
              I run a facility or church
            </a>
          </div>
        </div>
      </section>

      <!-- For families: free value first, no sales CTA -->
      <section id="for-families" class="py-20 bg-brand-navy-2 scroll-mt-24">
        <div class="max-w-7xl mx-auto px-6">
          <div v-reveal class="max-w-2xl mb-12">
            <span class="section-label mb-6 inline-flex">For families</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              Researching senior living?
            </h2>
            <p class="text-white/55 leading-relaxed">
              Choosing a community for someone you love is hard enough. These guides are free, practical, and written to help you ask better questions — no strings attached.
            </p>
          </div>
          <div v-stagger="100" class="grid sm:grid-cols-2 gap-5 max-w-4xl">
            <NuxtLink
              v-for="article in familyArticles"
              :key="article.slug"
              :to="'/articles/' + article.slug"
              class="bg-brand-navy border border-white/[0.08] rounded-2xl p-8 flex flex-col group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 class="font-bold text-lg leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {{ article.description }}
              </p>
              <span class="text-white/35 text-xs">{{ article.readTime }}</span>
            </NuxtLink>
          </div>
          <NuxtLink
            to="/articles"
            class="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold mt-10 hover:text-white transition-colors"
          >
            More guides →
          </NuxtLink>
        </div>
      </section>

      <!-- For owners & operators: the offer stack -->
      <section id="for-owners" class="py-20 scroll-mt-24">
        <div class="max-w-7xl mx-auto px-6">
          <div v-reveal class="max-w-2xl mb-12">
            <span class="section-label mb-6 inline-flex">For owners & operators</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              Run an ALF, ILF, or church?
            </h2>
            <p class="text-white/55 leading-relaxed">
              Families and members decide online before they ever call. These are the three systems we build to make sure they choose you.
            </p>
          </div>

          <div v-stagger="100" class="grid sm:grid-cols-3 gap-5 mb-16">
            <div class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-8 flex flex-col hover:border-brand-blue/25 transition-colors">
              <div class="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold text-lg mb-3">High-Converting Websites</h3>
              <p class="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                Fast, modern websites built to turn visitors into tours, inquiries, and first visits — not just look good in a portfolio.
              </p>
              <a href="/#services" class="text-brand-blue text-sm font-semibold hover:text-white transition-colors">
                See how we build →
              </a>
            </div>

            <div class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-8 flex flex-col hover:border-brand-blue/25 transition-colors">
              <div class="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 class="font-bold text-lg mb-3">ALF Reputation Engine</h3>
              <p class="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                Review monitoring, drafted responses, and automated review-request campaigns built specifically for assisted living.
              </p>
              <NuxtLink to="/alf-reputation-engine" class="text-brand-blue text-sm font-semibold hover:text-white transition-colors">
                Explore the engine →
              </NuxtLink>
            </div>

            <div class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-8 flex flex-col hover:border-brand-blue/25 transition-colors">
              <div class="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="font-bold text-lg mb-3">Google Business Profile Optimization</h3>
              <p class="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                Your GBP is the first thing families see on the map. We optimize it so you show up, stand out, and get the call.
              </p>
              <a href="/#contact" class="text-brand-blue text-sm font-semibold hover:text-white transition-colors">
                Get your profile reviewed →
              </a>
            </div>
          </div>

          <!-- Owner-audience articles -->
          <div v-reveal class="max-w-2xl mb-10">
            <h3 class="text-xl font-bold tracking-tight mb-2">Free reading for operators</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              Start with the free stuff — it's the same thinking behind everything we build.
            </p>
          </div>
          <div v-stagger="100" class="grid sm:grid-cols-2 gap-5 max-w-4xl">
            <NuxtLink
              v-for="article in ownerArticles"
              :key="article.slug"
              :to="'/articles/' + article.slug"
              class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-8 flex flex-col group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 class="font-bold text-lg leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {{ article.description }}
              </p>
              <span class="text-white/35 text-xs">{{ article.readTime }}</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <ConnectSection />

      <InlineCta
        message="Want a straight answer on where your website, reviews, or GBP stand today?"
        href="/#contact"
      />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { articles } from '~/data/articles'

export default Vue.extend({
  name: 'ResourcesPage',
  head() {
    return {
      title: 'Resources for Families & Senior-Care Operators | Acefluento',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Free guides for families researching assisted living, plus growth systems for ALF/ILF owners and churches: high-converting websites, the ALF Reputation Engine, and Google Business Profile optimization.',
        },
        {
          property: 'og:title',
          content: 'Resources for Families & Senior-Care Operators | Acefluento',
        },
        {
          property: 'og:description',
          content:
            'Free guides for families researching assisted living, plus growth systems for ALF/ILF owners and churches: high-converting websites, the ALF Reputation Engine, and Google Business Profile optimization.',
        },
      ],
      link: [{ hid: 'canonical', rel: 'canonical', href: 'https://acefluento.com/resources' }],
    }
  },
  computed: {
    familyArticles() {
      return articles.filter((a) => a.audience === 'families')
    },
    ownerArticles() {
      return articles.filter((a) => a.audience === 'owners')
    },
  },
})
</script>
