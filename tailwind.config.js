// tailwind.config.ts
import { colors } from './color';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Shared colors
        brand: colors.brand,

        // Light and dark mode colors
        light: colors.light,
        dark: colors.dark,

        // Additional themes
        lightBlue: colors.lightBlue,
        green: colors.green,
      },
    },
  },
  plugins: [],
}
