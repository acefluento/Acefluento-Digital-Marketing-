<template>
  <div class="min-h-screen bg-brand-navy text-white font-sans">
    <TheNavbar />
    <main>
      <!-- Article header -->
      <section class="pt-36 pb-12">
        <div class="max-w-3xl mx-auto px-6">
          <span class="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold mb-6">
            {{ article.audienceLabel }}
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            {{ article.title }}
          </h1>
          <div class="flex items-center gap-3 text-white/40 text-sm">
            <span>{{ formatDate(article.date) }}</span>
            <span aria-hidden="true">·</span>
            <span>{{ article.readTime }}</span>
          </div>
        </div>
      </section>

      <!-- Article body (trusted in-repo HTML from data/articles.ts) -->
      <section class="pb-16">
        <div class="max-w-3xl mx-auto px-6">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="article-body" v-html="article.body"></div>
          <NuxtLink
            to="/articles"
            class="inline-flex items-center gap-2 text-brand-blue text-sm font-semibold mt-12 hover:text-white transition-colors"
          >
            ← All articles
          </NuxtLink>
        </div>
      </section>

      <InlineCta :message="article.ctaMessage || undefined" href="/#contact" />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { articles, Article } from '~/data/articles'

export default Vue.extend({
  name: 'ArticlePage',
  validate({ params }) {
    return articles.some((a) => a.slug === params.slug)
  },
  head() {
    const article = (this as any).article as Article
    return {
      title: `${article.title} | Acefluento`,
      meta: [
        { hid: 'description', name: 'description', content: article.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: article.title },
        { hid: 'og:description', property: 'og:description', content: article.description },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://acefluento.com/articles/${article.slug}`,
        },
      ],
    }
  },
  computed: {
    article(): Article {
      return articles.find((a) => a.slug === this.$route.params.slug) as Article
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

<!-- Not scoped: styles article body rendered via v-html. The .article-body
     prefix keeps every rule contained to this block. -->
<style>
.article-body h2 {
  @apply text-2xl font-bold tracking-tight mt-12 mb-4;
}
.article-body h3 {
  @apply text-lg font-bold mt-8 mb-3;
}
.article-body p {
  @apply text-white/70 leading-relaxed mb-5;
}
.article-body ul,
.article-body ol {
  @apply text-white/70 leading-relaxed mb-5 pl-6 space-y-2;
}
.article-body ul {
  @apply list-disc;
}
.article-body ol {
  @apply list-decimal;
}
.article-body strong {
  @apply text-white font-semibold;
}
.article-body a {
  @apply text-brand-blue underline underline-offset-2 hover:text-white transition-colors;
}
.article-body blockquote {
  @apply border-l-2 border-brand-blue/40 pl-5 italic text-white/60 my-6;
}
</style>
