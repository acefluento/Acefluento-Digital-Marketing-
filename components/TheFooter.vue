<template>
  <footer class="bg-brand-navy-2 border-t border-white/[0.08] py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <!-- Column 1: Brand -->
        <div class="col-span-2 lg:col-span-1">
          <a href="/" class="flex items-center gap-2.5 mb-5">
            <div class="w-9 h-9 rounded-xl bg-brand-red flex items-center justify-center shadow-lg shadow-brand-red/20">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span class="text-xl font-bold tracking-tight">Ace<span class="text-brand-red">fluento</span></span>
          </a>
          <p class="text-white/40 text-sm leading-relaxed max-w-xs">
            {{ mission }}
          </p>
          <p class="text-white/30 text-xs mt-4">Based in Cleveland, OH</p>
        </div>

        <!-- Column 2: Navigation -->
        <div>
          <h4 class="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">Navigation</h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="text-white/45 text-sm hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact -->
        <div>
          <h4 class="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">Contact</h4>
          <ul class="space-y-3">
            <li>
              <a href="tel:2168083109" class="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                216-808-3109
              </a>
            </li>
            <li>
              <a href="mailto:Acefluento@gmail.com" class="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Acefluento@gmail.com
              </a>
            </li>
            <li>
              <a href="#contact" class="text-white/45 text-sm hover:text-white transition-colors">
                Book a Strategy Call
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Social -->
        <div>
          <h4 class="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">Follow</h4>
          <ul class="space-y-3">
            <li v-for="social in socials" :key="social.name">
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-2"
              >
                <svg class="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.iconPath" />
                </svg>
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
        <span>© {{ year }} Acefluento LLC. All rights reserved.</span>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white/60 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mission, socials } from '~/data/site'

export default Vue.extend({
  name: 'TheFooter',
  data() {
    return {
      year: new Date().getFullYear(),
      mission,
      socials,
      navLinks: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#services' },
        { label: 'Work', href: '/#work' },
        { label: 'Process', href: '/#process' },
        { label: 'Free Resources', href: '/resources' },
        { label: 'Articles', href: '/articles' },
        { label: 'Occupancy Blueprint (ALF)', href: '/blueprint/assisted-living' },
        { label: 'Church Growth Blueprint', href: '/blueprint/church' },
        { label: 'FAQs', href: '/#faqs' },
        { label: 'ALF Reputation Engine', href: '/alf-reputation-engine' },
        { label: 'Book a Call', href: '/#contact' },
      ],
    }
  },
})
</script>
