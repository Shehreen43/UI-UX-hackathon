import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'], // Use the custom variable
              },
      colors: {
        text: '#737373',
        text2: '#252B42',
        prim_green: '#23856D',
        prim_blue: '#23A6F0',
        orange: '#E77C40',
        secondary2: '#2DC071',
      },
    },
  },
  plugins: [],
} satisfies Config;
