import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - change this single line to retheme entire site
        primary: colors.indigo,

        // Secondary/neutral colors
        secondary: colors.gray,

        // Product variant colors (from lib/utils.ts colorMap)
        // These are used for product color swatches in the product detail page
        variants: {
          black: '#111827',
          white: '#FFFFFF',
          gray: '#6B7280',
          grey: '#6B7280',
          red: '#DC2626',
          blue: '#2563EB',
          green: '#059669',
          yellow: '#F59E0B',
          orange: '#EA580C',
          purple: '#9333EA',
          pink: '#EC4899',
          brown: '#7C2D12',
          beige: '#FEF3C7',
          navy: '#1E3A8A',
          cream: '#FEF3C7',
          tan: '#D2B48C',
          olive: '#6B7237',
          maroon: '#7F1D1D',
          teal: '#0D9488',
          indigo: '#4F46E5',
          brass: '#FDE68A',
          chrome: '#E5E7EB',
          natural: '#FEF3C7',
          salmon: '#FA8072',
          matte: '#4B5563',
        },
      },

      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config
