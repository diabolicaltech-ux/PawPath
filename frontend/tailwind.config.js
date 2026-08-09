/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8ECAE6',   // Baby Blue — main brand color
          light: '#E8F4F8',     // Light tint for backgrounds
          pale: '#D4ECF5',      // Pale blue for borders
          dark: '#6BB5D6',      // Hover states
          deeper: '#4A9FC6',    // Active/pressed
        },
        dark: {
          DEFAULT: '#1A1A2E',   // Headings, primary text
          muted: '#636E72',     // Body text, secondary labels
        },
        surface: {
          DEFAULT: '#FFFFFF',   // Cards, modals
          alt: '#F8F9FA',       // Alternative backgrounds
          warm: '#F0F4F8',      // Warm section backgrounds
        },
        accent: {
          red: '#E74C3C',
          orange: '#F39C12',
          green: '#2ECC71',
          blue: '#3498DB',
        },
        bd: {
          DEFAULT: '#E2E8F0',   // Card borders
          light: '#D4ECF5',     // Lighter borders
        }
      },
    },
  },
  plugins: [],
};
