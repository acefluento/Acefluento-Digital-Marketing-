<template>
  <section class="py-28 bg-brand-navy relative overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-6">
      <div v-reveal class="text-center mb-14">
        <span class="section-label mb-4">Testimonials</span>
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-5">
          Start with proof. Replace with<br /><span class="gradient-text">approved quotes</span> as they arrive.
        </h2>
        <p class="text-white/45 text-sm max-w-2xl mx-auto leading-relaxed">
          These testimonial cards are ready for exact client-approved language and attribution once each client signs off.
        </p>
      </div>

      <div v-stagger="100" class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <figure
          v-for="testimonial in testimonials"
          :key="testimonial.client"
          class="rounded-3xl border border-white/[0.08] bg-brand-navy-2 p-7 sm:p-9 hover:border-brand-blue/25 transition-colors"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center font-extrabold" :class="testimonial.accent">
              {{ testimonial.initials }}
            </div>
            <div>
              <figcaption class="font-bold">{{ testimonial.client }}</figcaption>
              <p class="text-white/35 text-xs uppercase tracking-widest mt-1">{{ testimonial.type }}</p>
            </div>
          </div>
          <blockquote class="text-white/70 text-lg leading-relaxed">
            “{{ testimonial.quote }}”
          </blockquote>
          <p class="mt-5 text-white/30 text-xs">Placeholder copy — replace with exact approved attribution.</p>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          client: 'Euclid Church of Christ',
          type: 'Church website',
          initials: 'EC',
          accent: 'from-purple-500 to-indigo-400',
          quote: 'Acefluento helped us create a modern website that reflects who we are and makes it easier for visitors to connect with our congregation.',
        },
        {
          client: 'Assisted Living Client',
          type: 'Care organization',
          initials: 'AL',
          accent: 'from-teal-500 to-cyan-400',
          quote: 'The new website gave our organization a much more professional presence and helped communicate our mission clearly.',
        },
      ],
    }
  },
})
</script>
