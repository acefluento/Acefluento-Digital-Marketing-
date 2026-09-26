<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <!-- Hero -->
      <section class="pt-36 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/6 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-emerald/4 rounded-full blur-3xl"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-6 text-center">
          <span class="section-label mb-6 inline-flex">Free — no email required</span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-4 mb-6 leading-[1.08]">
            Everything we know,<br /><span class="gradient-text">given away free</span>
          </h1>
          <p class="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Complete growth blueprints, pricing breakdowns, tour checklists, and response templates — for the families making a hard decision and the owners trying to grow. No forms, no drip sequence, no catch.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-3">
            <a href="#for-families" class="btn-secondary text-sm">I'm a family or resident</a>
            <a href="#for-owners" class="btn-primary text-sm">I own an ALF or ILF</a>
            <a href="#for-churches" class="btn-secondary text-sm">I lead a church</a>
          </div>
        </div>
      </section>

      <!-- Featured blueprints -->
      <section class="py-20 bg-brand-navy-2 border-y border-white/[0.06]">
        <div class="max-w-7xl mx-auto px-6">
          <div v-reveal class="max-w-2xl mb-12">
            <span class="section-label mb-6 inline-flex">Start here</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              The complete blueprints
            </h2>
            <p class="text-white/55 leading-relaxed">
              The full growth sequence we run with clients, published in the open. Every stage, every benchmark, every mistake worth avoiding.
            </p>
          </div>
          <div v-stagger="100" class="grid md:grid-cols-2 gap-5">
            <NuxtLink
              v-for="blueprint in blueprints"
              :key="blueprint.slug"
              :to="'/blueprint/' + blueprint.slug"
              class="bg-brand-navy border border-white/[0.08] rounded-2xl p-8 sm:p-10 flex flex-col group hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span class="inline-flex self-start items-center px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold mb-6">
                {{ blueprint.audienceLabel }}
              </span>
              <h3 class="text-xl sm:text-2xl font-bold tracking-tight leading-snug mb-4 group-hover:text-brand-blue transition-colors">
                {{ blueprint.eyebrow }}
              </h3>
              <p class="text-white/50 text-sm leading-relaxed mb-7 flex-1">{{ blueprint.description }}</p>
              <div class="flex items-center justify-between pt-6 border-t border-white/[0.07]">
                <span class="text-white/35 text-xs">{{ blueprint.stages.length }} stages · {{ blueprint.readTime }}</span>
                <span class="text-brand-blue text-sm font-semibold">Read it free →</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- For families & residents -->
      <section id="for-families" class="py-20 scroll-mt-24">
        <div class="max-w-7xl mx-auto px-6">
          <div v-reveal class="max-w-2xl mb-12">
            <span class="section-label mb-6 inline-flex">For families & residents</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              Choosing care for someone you love
            </h2>
            <p class="text-white/55 leading-relaxed">
              These are written for you, not for us. What things cost, what your rights are, what to look for on a tour, and which questions get honest answers. Nothing here is a sales pitch.
            </p>
          </div>
          <div v-stagger="100" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <NuxtLink
              v-for="article in familyArticles"
              :key="article.slug"
              :to="'/articles/' + article.slug"
              class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-7 flex flex-col group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 class="font-bold text-base leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-white/50 text-sm leading-relaxed mb-5 flex-1">{{ article.description }}</p>
              <span class="text-white/35 text-xs">{{ article.readTime }}</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- For owners & operators -->
      <section id="for-owners" class="py-20 bg-brand-navy-2 border-y border-white/[0.06] scroll-mt-24">
        <div class="max-w-7xl mx-auto px-6">
          <div v-reveal class="max-w-2xl mb-12">
            <span class="section-label mb-6 inline-flex">For owners & operators</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              Fill beds without renting occupancy
            </h2>
            <p class="text-white/55 leading-relaxed">
              Work the blueprint yourself, or start with the three systems that move occupancy fastest.
            </p>
          </div>

          <div v-stagger="100" class="grid sm:grid-cols-3 gap-5 mb-16">
            <div
              v-for="offer in offers"
              :key="offer.title"
              class="bg-brand-navy border border-white/[0.08] rounded-2xl p-8 flex flex-col hover:border-brand-blue/25 transition-colors"
            >
              <div class="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="offer.iconPath" />
                </svg>
              </div>
              <h3 class="font-bold text-lg mb-3">{{ offer.title }}</h3>
              <p class="text-white/50 text-sm leading-relaxed mb-6 flex-1">{{ offer.description }}</p>
              <a :href="offer.href" class="text-brand-blue text-sm font-semibold hover:text-white transition-colors">
                {{ offer.cta }} →
              </a>
            </div>
          </div>

          <div v-reveal class="max-w-2xl mb-10">
            <h3 class="text-xl font-bold tracking-tight mb-2">Free reading for operators</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              The same thinking behind everything we build — take it and use it.
            </p>
          </div>
          <div v-stagger="100" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <NuxtLink
              v-for="article in ownerArticles"
              :key="article.slug"
              :to="'/articles/' + article.slug"
              class="bg-brand-navy border border-white/[0.08] rounded-2xl p-7 flex flex-col group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 class="font-bold text-base leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-white/50 text-sm leading-relaxed mb-5 flex-1">{{ article.description }}</p>
              <span class="text-white/35 text-xs">{{ article.readTime }}</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- For churches -->
      <section id="for-churches" class="py-20 scroll-mt-24">
        <div class="max-w-7xl mx-auto px-6">
          <div v-reveal class="max-w-2xl mb-12">
            <span class="section-label mb-6 inline-flex">For churches & ministries</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              Turn online visitors into people in the room
            </h2>
            <p class="text-white/55 leading-relaxed">
              Almost nobody walks in cold anymore. Most churches lose newcomers at the invisible stage — online, on a phone, before anyone knows they exist. These fix that, and most of it costs nothing.
            </p>
          </div>
          <div v-stagger="100" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <NuxtLink
              v-for="article in churchArticles"
              :key="article.slug"
              :to="'/articles/' + article.slug"
              class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-7 flex flex-col group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 class="font-bold text-base leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-white/50 text-sm leading-relaxed mb-5 flex-1">{{ article.description }}</p>
              <span class="text-white/35 text-xs">{{ article.readTime }}</span>
            </NuxtLink>
            <NuxtLink
              to="/blueprint/church"
              class="bg-brand-navy-2 border border-brand-blue/25 rounded-2xl p-7 flex flex-col group hover:border-brand-blue/50 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 class="font-bold text-base leading-snug mb-3 text-brand-blue">
                The full Church Growth Blueprint
              </h3>
              <p class="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                All six stages: local search, the five pages visitors need, guest follow-up, and what to measure.
              </p>
              <span class="text-white/35 text-xs">12 min read</span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <ConnectSection />

      <InlineCta
        message="Want a straight answer on where your website, reviews, or Google profile stand today?"
        href="/#contact"
      />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { articles } from '~/data/articles'
import { blueprints } from '~/data/blueprints'

export default Vue.extend({
  name: 'ResourcesPage',
  data() {
    return {
      blueprints,
      offers: [
        {
          title: 'High-Converting Websites',
          description:
            'Fast, modern sites engineered around one job: turning a worried 10pm search into a booked tour.',
          iconPath:
            'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          href: '/#contact',
          cta: 'Book a build call',
        },
        {
          title: 'ALF Reputation Engine',
          description:
            'Review monitoring, drafted responses, and automated review-request campaigns. From $297/mo.',
          iconPath:
            'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.68 10.1c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
          href: '/alf-reputation-engine',
          cta: 'See the software',
        },
        {
          title: 'Google Business Profile',
          description:
            'The front door families actually walk through. Start with our free checklist, or have us run it.',
          iconPath:
            'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
          href: '/articles/google-business-profile-checklist-assisted-living',
          cta: 'Get the checklist',
        },
      ],
    }
  },
  head() {
    const description =
      'Free ungated resources for assisted living families and owners: complete occupancy and church growth blueprints, pricing guides, resident rights, tour checklists, review response templates, and Google Business Profile audits.'
    return {
      title: 'Free Resources for Families, ALF Owners & Churches | Acefluento',
      meta: [
        { hid: 'description', name: 'description', content: description },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Free Resources for Families, ALF Owners & Churches | Acefluento',
        },
        { hid: 'og:description', property: 'og:description', content: description },
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
    churchArticles() {
      return articles.filter((a) => a.audience === 'church')
    },
  },
})
</script>
