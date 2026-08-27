module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        elevated: 'rgb(var(--elevated) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        ember: 'rgb(var(--ember) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Syne', 'GeneralSans-Semibold', 'sans-serif'],
        sans: ['Outfit', 'GeneralSans-Regular', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--accent) / 0.25), 0 20px 50px -20px rgb(var(--accent) / 0.35)',
        lift: '0 24px 60px -28px rgb(0 0 0 / 0.45)',
      },
      maxWidth: {
        site: '72rem',
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'fade-up': 'fadeUp 0.8s ease both',
        float: 'float 8s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 0.9 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
