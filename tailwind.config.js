/** @type {import('tailwindcss').Config} */

import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue", 
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./utils/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Main brand color - Blue
        primary: '#3b82f6',
        'primary-light': '#60a5fa',
        'primary-dark': '#2563eb',
        
        // Gray colors for text and backgrounds
        secondary: '#64748b',
        'secondary-light': '#94a3b8',
        'secondary-dark': '#475569',
        
        // Success - Green
        success: '#22c55e',
        'success-light': '#4ade80',
        'success-dark': '#16a34a',
        
        // Warning - Orange
        warning: '#f59e0b',
        'warning-light': '#fbbf24',
        'warning-dark': '#d97706',
        
        // Danger/Error - Red
        danger: '#ef4444',
        'danger-light': '#f87171',
        'danger-dark': '#dc2626',
        
        // Info - Cyan
        info: '#06b6d4',
        'info-light': '#22d3ee',
        'info-dark': '#0891b2',
        
        // Background colors
        'bg-light': '#f8fafc',
        'bg-dark': '#1e293b',
        'bg-card': '#ffffff',
        'bg-sidebar': '#1e293b',
        
        // Text colors
        'text-primary': '#1e293b',
        'text-secondary': '#64748b',
        'text-light': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [ scrollbar({nonCompatible: true}) ],
}

