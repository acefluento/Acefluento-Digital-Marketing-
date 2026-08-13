<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <!-- Header -->
      <section class="pt-36 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-6 text-center">
          <span class="section-label mb-6 inline-flex">Free insights</span>
          <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
            Articles & <span class="gradient-text">guides</span>
          </h1>
          <p class="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
            Practical guidance for families researching senior living — and for the owners, operators, and church leaders building trust online.
          </p>
        </div>
      </section>

      <!-- Article cards -->
      <section class="pb-24">
        <div class="max-w-7xl mx-auto px-6">
          <div v-stagger="100" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <NuxtLink
              v-for="article in sortedArticles"
              :key="article.slug"
              :to="'/articles/' + article.slug"
              class="bg-brand-navy-2 border border-white/[0.08] rounded-2xl p-8 flex flex-col group hover:border-brand-blue/25 hover:-translate-y-1 transition-all duration-300"
            >
              <span class="inline-flex self-start items-center px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold mb-5">
                {{ article.audienceLabel }}
              </span>
              <h2 class="font-bold text-lg leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                {{ article.title }}
              </h2>
              <p class="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {{ article.description }}
              </p>
              <div class="flex items-center gap-3 text-white/35 text-xs">
                <span>{{ formatDate(article.date) }}</span>
                <span aria-hidden="true">·</span>
                <span>{{ article.readTime }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <InlineCta
        message="Have a question these guides don't answer? Let's talk it through."
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
  name: 'ArticlesIndex',
  head() {
    return {
      title: 'Articles & Guides for Senior Living and Churches | Acefluento',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Free articles and guides: choosing assisted living, ALF vs. ILF, online reputation for senior-care operators, and growing trust-based organizations.',
        },
        {
          property: 'og:title',
          content: 'Articles & Guides for Senior Living and Churches | Acefluento',
        },
        {
          property: 'og:description',
          content:
            'Free articles and guides: choosing assisted living, ALF vs. ILF, online reputation for senior-care operators, and growing trust-based organizations.',
        },
      ],
      link: [{ hid: 'canonical', rel: 'canonical', href: 'https://acefluento.com/articles' }],
    }
  },
  computed: {
    sortedArticles() {
      return [...articles].sort((a, b) => b.date.localeCompare(a.date))
    },
  },
  methods: {
    formatDate(date: string): string {
      return new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
})
</script>
