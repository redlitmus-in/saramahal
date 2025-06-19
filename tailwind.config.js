/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'xs': '375px',   // Small phones
      'sm': '640px',   // Large phones / small tablets
      'md': '768px',   // Tablets
      'lg': '1024px',  // Laptops
      'xl': '1280px',  // Desktops
      '2xl': '1536px', // Large desktops
      // Custom breakpoints for specific devices
      'mobile': {'max': '767px'},
      'tablet': {'min': '768px', 'max': '1023px'},
      'desktop': {'min': '1024px'},
      // Touch device optimization
      'touch': {'raw': '(hover: none) and (pointer: coarse)'},
      'mouse': {'raw': '(hover: hover) and (pointer: fine)'},
      // Reduced motion
      'reduce-motion': {'raw': '(prefers-reduced-motion: reduce)'},
    },
    
    container: {
      center: true,
      padding: {
        DEFAULT: "0.6rem", // Reduced mobile-first approach (was 0.75rem)
        'xs': "0.8rem",    // Reduced (was 1rem)
        'sm': "1rem",      // Reduced (was 1.25rem)
        'md': "1.2rem",    // Reduced (was 1.5rem)
        'lg': "1.6rem",    // Reduced (was 2rem)
        'xl': "1.6rem",    // Reduced (was 2rem)
        '2xl': "1.6rem",   // Reduced (was 2rem)
      },
      screens: {
        "xs": "375px",
        "sm": "640px",
        "md": "768px", 
        "lg": "1024px",
        "xl": "960px",   // Reduced from 1200px to 960px for 80% scale
        "2xl": "960px",  // Same as xl for consistency
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["DM Serif Display", ...fontFamily.serif],
      },
      
      // Mobile-optimized spacing scale
      spacing: {
        '13': '3.25rem',  // Custom spacing for 80% scale
        '15': '3.75rem',  // Custom spacing for 80% scale
        '17': '4.25rem',  // Custom spacing for 80% scale
        '18': '4.5rem',
        '19': '4.75rem',  // Custom spacing for 80% scale
        '88': '22rem',
        '128': '32rem',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      
      // Responsive font sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Mobile-specific sizes
        'mobile-sm': ['0.75rem', { lineHeight: '1.125rem' }],
        'mobile-base': ['0.875rem', { lineHeight: '1.375rem' }],
        'mobile-lg': ['1rem', { lineHeight: '1.5rem' }],
        'mobile-xl': ['1.125rem', { lineHeight: '1.625rem' }],
        'mobile-2xl': ['1.25rem', { lineHeight: '1.75rem' }],
      },
      
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      // Mobile-optimized animation durations
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      
      // Performance-optimized keyframes
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.4s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.4s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.4s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.4s ease-out",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        // Mobile-optimized animations (slower)
        "mobile-bounce": "bounce-gentle 3s ease-in-out infinite",
        "mobile-pulse": "pulse-gentle 3s ease-in-out infinite",
      },
      
      // Touch-friendly sizes
      minHeight: {
        'touch': '44px', // iOS minimum touch target
        'touch-large': '48px', // Android minimum touch target
      },
      
      minWidth: {
        'touch': '44px',
        'touch-large': '48px',
      },
      
      // Backdrop blur values for glassmorphism
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
      // Box shadow optimized for mobile
      boxShadow: {
        'mobile': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'mobile-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'mobile-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'mobile-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'elegant': '0 4px 20px 0 rgb(0 0 0 / 0.05), 0 1px 3px 0 rgb(0 0 0 / 0.1)',
        'premium': '0 8px 32px 0 rgb(0 0 0 / 0.08), 0 2px 8px 0 rgb(0 0 0 / 0.12)',
      },
      
      // Z-index scale for consistent layering
      zIndex: {
        '-1': '-1',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    // Custom plugin for mobile-specific utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Safe area utilities
        '.pt-safe': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.pb-safe': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.pl-safe': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.pr-safe': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.p-safe': {
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        },
        
        // Touch-friendly utilities
        '.touch-friendly': {
          minHeight: '44px',
          minWidth: '44px',
          touchAction: 'manipulation',
        },
        
        // Hardware acceleration
        '.gpu': {
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        },
        
        // Mobile-optimized text rendering
        '.text-optimize': {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        },
        
        // Mobile scrolling improvements
        '.scroll-smooth-mobile': {
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        },
        
        // Reduce motion utilities
        '.motion-reduce': {
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
            transition: 'none',
          },
        },
      }
      
      addUtilities(newUtilities)
    },
  ],
} 