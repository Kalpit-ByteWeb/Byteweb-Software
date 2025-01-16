import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonbackground:"#1C1C3C",
        primary:"#11B3E0",
        secondary:"#000000",
        body:"#3D4050",
      },
      backgroundImage: {
        'byteweb-software-gradient': 'linear-gradient(90deg, #000000 0%, #1C1C3C 53.5%, #2E2E2E 98%)',
        'heading-gradient-color' : 'linear-gradient(90deg, #00AC91 0%, #10B2DA 50.6%, #F63767 100%)',
      },
      boxShadow: {
        'button-box-shadow': '0px 2px 8px 0px rgba(255, 255, 255, 0.1)',  // Custom light shadow
        'button-box-shadow-2': 'box-shadow: 0px 2px 8px 0px rgba(48, 44, 255, 0.1)',

      },
      lineHeight: {
        '80': '5rem', // Add a custom line height
      },
      fontSize:{
        'banner-heading-size' : '3.75rem',
      },
      padding:{
        '88':'5.5rem',
      },
      
    },
    container: {
      screens: {
        DEFAULT: '1440px', // Set default container size to 1440px
      },
  },
  plugins: [],
} 
}satisfies Config;
