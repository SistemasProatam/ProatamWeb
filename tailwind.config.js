/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './pages/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Navbar/footer injected classes
    'fixed', 'w-full', 'z-50', 'transition-all', 'duration-300',
    'max-w-7xl', 'mx-auto', 'px-6', 'lg:px-10',
    'flex', 'items-center', 'justify-between', 'h-20',
    'gap-3', 'flex-shrink-0', 'hidden', 'nav-logo-dark', 'nav-logo-white',
    'h-8', 'w-auto', 'invert', 'brightness-0',
    'lg:flex', 'items-center', 'gap-8',
    'nav-link', 'py-1', 'active',
    'lg:hidden', 'flex-col', 'gap-1.5', 'p-2',
    'burger-line',
    'lg:hidden', 'bg-white', 'shadow-lg', 'absolute', 'left-0', 'top-full',
    'py-4', 'border-b', 'border-gray-100', 'font-medium',
    'gap-1', 'lang-btn', 'text-xs', 'mx-1',
    'btn-primary', 'btn-primary-dark', 'btn-outline',
    'bg-brand-navy', 'bg-brand-green', 'bg-brand-dark',
    'text-brand-green', 'text-brand-navy', 'text-white',
    'border-t', 'border-white/10', 'py-16', 'lg:py-24', 'relative', 'overflow-hidden', 'text-left',
    'opacity-5', 'pointer-events-none',
    'hover:text-brand-green', 'hover:bg-brand-green', 'transition-colors',
    'h-10', 'mb-6',
    'text-sm', 'leading-relaxed', 'max-w-sm', 'mb-6',
    'text-white/60', 'text-white/50', 'text-white/40', 'text-white/30',
    'lg:col-span-4', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-start-6',
    'grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-12', 'gap-12', 'lg:gap-8', 'mb-16',
    'space-y-3', 'space-y-4',
    'w-5', 'h-5', 'flex-shrink-0',
    'stroke-linecap-round', 'stroke-linejoin-round', 'stroke-width-2',
    'pt-8', 'flex', 'flex-col', 'md:flex-row', 'items-center', 'justify-between', 'gap-4',
    'text-[10px]', 'tracking-[0.2em]', 'uppercase', 'font-bold',
    'tracking-[0.1em]',
    'mobile-menu', 'open',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#407656',
        'brand-light': '#5fa57c',
        'brand-navy': '#113557',
        'brand-dark': '#0A0A0F',
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-placeholder': "linear-gradient(135deg, #0A0A0F 0%, #0D1A3A 50%, #0A2010 100%)",
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'kenburns': 'kenburns 18s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
}
