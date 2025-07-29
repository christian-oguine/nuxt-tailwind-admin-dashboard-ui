/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Blue - Primary brand color
        primary: '#3b82f6',
        
        // Gray - Secondary/neutral color  
        secondary: '#6b7280',
        
        // Green - Success states
        success: '#22c55e',
        
        // Red - Error/danger states
        danger: '#ef4444',
        
        // Orange - Warning states
        warning: '#f59e0b',
        
        // Cyan - Info states
        info: '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}