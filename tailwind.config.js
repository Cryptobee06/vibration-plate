/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'border',
    'border-emerald-300',
    'bg-emerald-50',
    'text-emerald-800',
    'border-blue-300',
    'bg-blue-50',
    'text-blue-800',
    'border-amber-300',
    'bg-amber-50',
    'text-amber-800',
    'border-orange-300',
    'bg-orange-50',
    'text-orange-800',
    'border-red-300',
    'bg-red-50',
    'text-red-800',
    'border-rose-300',
    'bg-rose-50',
    'text-rose-800',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          border: '#9ab7f2',
          800: '#075985',
          900: '#0c4a6e',
          brandBlue: '#2563EB',
          brandBlueDark: '#1E3A8A', 
          herobg: 'rgba(10, 37, 64, 0.9)', 
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}