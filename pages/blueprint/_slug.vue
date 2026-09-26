<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <!-- Hero -->
      <section class="pt-36 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/6 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-red/4 rounded-full blur-3xl"></div>
        </div>
        <div class="relative max-w-4xl mx-auto px-6">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/25 text-brand-blue text-sm font-medium mb-8">
            <span class="w-2 h-2 rounded-full bg-brand-blue animate-pulse-slow"></span>
            {{ blueprint.eyebrow }}
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
            {{ blueprint.titleLead }}<br />
            <span class="gradient-text">{{ blueprint.titleAccent }}</span>
          </h1>
          <p class="text-white/65 text-lg leading-relaxed max-w-2xl mb-8">
            {{ blueprint.intro }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 items-start mb-8">
            <a href="#contact" class="btn-primary text-base gap-2 group">
              Book a Free Strategy Call
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a :href="blueprint.software.href" class="btn-secondary text-base">
              {{ blueprint.software.cta }}
            </a>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-white/35 text-xs">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/50 font-semibold">
              {{ blueprint.audienceLabel }}
            </span>
            <span>{{ blueprint.readTime }}</span>
            <span aria-hidden="true">·</span>
            <span>Free — no email required</span>
          </div>
        </div>
      </section>

      <!-- Who this is for -->
      <section class="py-16 bg-brand-navy-2 border-y border-white/[0.06]">
        <div class="max-w-4xl mx-auto px-6">
          <span class="section-label mb-6 inline-flex">Who this is for</span>
          <ul v-stagger="80" class="grid sm:grid-cols-2 gap-4 mt-6">
            <li
              v-for="item in blueprint.forWho"
              :key="item"
              class="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
            >
              <svg class="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </section>

      <!-- The stages -->
      <section class="py-24">
        <div class="max-w-4xl mx-auto px-6">
          <div v-reveal class="mb-16">
            <span class="section-label mb-6 inline-flex">The blueprint</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              Six stages, in order
            </h2>
            <p class="text-white/50 leading-relaxed max-w-2xl">
              Each stage assumes the one before it. Working them out of sequence is the most common reason this kind of effort stalls.
            </p>
          </div>

          <div class="space-y-6">
            <article
              v-for="stage in blueprint.stages"
              :key="stage.number"
              v-reveal
              class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-8 sm:p-10 hover:border-brand-blue/20 transition-colors"
            >
              <div class="flex items-baseline gap-4 mb-5">
                <span class="text-brand-red font-extrabold text-2xl tracking-tight flex-shrink-0">{{ stage.number }}</span>
                <h3 class="text-xl sm:text-2xl font-bold tracking-tight leading-snug">{{ stage.title }}</h3>
              </div>

              <p class="text-white/60 leading-relaxed mb-7">{{ stage.why }}</p>

              <p class="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">What to do</p>
              <ul class="space-y-3 mb-8">
                <li
                  v-for="action in stage.actions"
                  :key="action"
                  class="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2"></span>
                  {{ action }}
                </li>
              </ul>

              <div class="border-l-2 border-brand-emerald/40 bg-brand-emerald/[0.04] rounded-r-xl pl-5 pr-5 py-4">
                <p class="text-brand-emerald text-xs uppercase tracking-widest font-semibold mb-2">Done right, this looks like</p>
                <p class="text-white/65 text-sm leading-relaxed">{{ stage.proof }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Benchmarks -->
      <section class="py-24 bg-brand-navy-2 border-y border-white/[0.06]">
        <div class="max-w-5xl mx-auto px-6">
          <div v-reveal class="max-w-2xl mb-14">
            <span class="section-label mb-6 inline-flex">Benchmarks</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              The numbers to hold yourself to
            </h2>
            <p class="text-white/50 leading-relaxed">
              Steal these targets. If you only track one thing, track the first row.
            </p>
          </div>
          <div v-stagger="80" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              v-for="metric in blueprint.metrics"
              :key="metric.label"
              class="bg-brand-navy border border-white/[0.08] rounded-2xl p-6 hover:border-brand-blue/25 transition-colors"
            >
              <p class="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">{{ metric.label }}</p>
              <p class="text-2xl font-extrabold tracking-tight text-brand-blue mb-3">{{ metric.target }}</p>
              <p class="text-white/45 text-sm leading-relaxed">{{ metric.note }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mistakes -->
      <section class="py-24">
        <div class="max-w-4xl mx-auto px-6">
          <div v-reveal class="max-w-2xl mb-14">
            <span class="section-label mb-6 inline-flex">Avoid these</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-4">
              Six mistakes that cost the most
            </h2>
          </div>
          <div v-stagger="80" class="space-y-5">
            <div
              v-for="item in blueprint.mistakes"
              :key="item.mistake"
              class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-7 border-l-2 border-l-brand-red/50"
            >
              <p class="font-bold text-base mb-2 text-white/90">{{ item.mistake }}</p>
              <p class="text-white/55 text-sm leading-relaxed">{{ item.fix }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Software / SaaS funnel -->
      <section class="py-24 bg-brand-navy-2 border-y border-white/[0.06]">
        <div class="max-w-4xl mx-auto px-6">
          <div class="bg-brand-navy border border-brand-blue/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-brand-blue/8 rounded-full blur-3xl pointer-events-none"></div>
            <div class="relative">
              <span class="section-label mb-6 inline-flex">Or have it handled</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mt-4 mb-2">
                {{ blueprint.software.name }}
              </h2>
              <p class="text-brand-blue font-semibold text-sm mb-5">{{ blueprint.software.price }}</p>
              <p class="text-white/60 leading-relaxed mb-8 max-w-2xl">{{ blueprint.software.pitch }}</p>
              <ul v-stagger="60" class="space-y-3 mb-10">
                <li
                  v-for="bullet in blueprint.software.bullets"
                  :key="bullet"
                  class="flex items-start gap-3 text-white/70 text-sm leading-relaxed"
                >
                  <svg class="w-5 h-5 text-brand-emerald flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ bullet }}
                </li>
              </ul>
              <div class="flex flex-col sm:flex-row gap-4">
                <a :href="blueprint.software.href" class="btn-primary text-sm gap-2 group">
                  {{ blueprint.software.cta }}
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#contact" class="btn-secondary text-sm">Talk it through first</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="py-24">
        <div class="max-w-3xl mx-auto px-6">
          <div v-reveal class="mb-14">
            <span class="section-label mb-6 inline-flex">Questions</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4">
              Straight answers
            </h2>
          </div>
          <div v-stagger="80" class="space-y-5">
            <div
              v-for="faq in blueprint.faqs"
              :key="faq.q"
              class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-7"
            >
              <p class="font-bold text-base mb-3">{{ faq.q }}</p>
              <p class="text-white/55 text-sm leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Keep reading -->
      <section v-if="relatedArticles.length" class="py-20 bg-brand-navy-2 border-t border-white/[0.06]">
        <div class="max-w-5xl mx-auto px-6">
          <div v-reveal class="mb-10">
            <span class="section-label mb-6 inline-flex">Keep reading</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mt-4">
              More free guides
            </h2>
          </div>
          <div v-stagger="80" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <NuxtLink
              v-for="article in relatedArticles"
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
          <NuxtLink
            to="/resources"
            class="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold mt-10 hover:text-white transition-colors"
          >
            All free resources →
          </NuxtLink>
        </div>
      </section>

      <CtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { blueprints, Blueprint } from '~/data/blueprints'
import { articles } from '~/data/articles'

export default Vue.extend({
  name: 'BlueprintPage',
  validate({ params }) {
    return blueprints.some((b) => b.slug === params.slug)
  },
  head() {
    const blueprint = (this as any).blueprint as Blueprint
    const title = `${blueprint.eyebrow}: ${blueprint.titleLead} ${blueprint.titleAccent} | Acefluento`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: blueprint.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: blueprint.description },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://acefluento.com/blueprint/${blueprint.slug}`,
        },
      ],
    }
  },
  computed: {
    blueprint(): Blueprint {
      return blueprints.find((b) => b.slug === this.$route.params.slug) as Blueprint
    },
    relatedArticles() {
      const audience = (this as any).blueprint.audience
      return articles.filter((a) => a.audience === audience).slice(0, 3)
    },
  },
})
</script>
