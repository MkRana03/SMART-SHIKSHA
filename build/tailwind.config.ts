import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(220, 14%, 96%)', // Soft off-white
        foreground: 'hsl(221, 20.30%, 28.00%)', // Dark blue-gray

        card: {
          DEFAULT: 'hsl(0, 0%, 100%)', // Pure white
          foreground: 'hsl(220, 15%, 20%)',
        },

        popover: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(220, 15%, 20%)',
        },

        primary: {
          DEFAULT: 'hsl(230, 85%, 60%)', // Modern vibrant blue
          foreground: 'hsl(0, 0%, 100%)',
        },

        secondary: {
          DEFAULT: 'hsl(210, 80%, 45%)', // Deep blue
          foreground: 'hsl(0, 0%, 100%)',
        },

        muted: {
          DEFAULT: 'hsl(218, 37.30%, 76.90%)', // Soft gray
          foreground: 'hsl(220, 15%, 30%)',
        },

        accent: {
          DEFAULT: 'hsl(230, 85%, 60%)', // Modern purple
          foreground: 'hsl(0, 0%, 100%)',
        },

        destructive: {
          DEFAULT: 'hsl(0, 75%, 50%)', // Bright red
          foreground: 'hsl(0, 0%, 100%)',
        },

        border: 'hsl(220, 14%, 80%)', // Light gray border
        input: 'hsl(220, 14%, 95%)',
        ring: 'hsl(230, 85%, 60%)',

        chart: {
          '1': 'hsl(210, 80%, 55%)', // Blue
          '2': 'hsl(280, 70%, 55%)', // Purple
          '3': 'hsl(350, 80%, 55%)', // Red
          '4': 'hsl(160, 70%, 55%)', // Green
          '5': 'hsl(40, 90%, 55%)', // Yellow
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
