import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Atelier Color Palette
        charcoal: {
          DEFAULT: "#0D0D0D",
          light: "#1A1A1A",
          lighter: "#2D2D2D",
          50: "#F5F5F5",
          100: "#E0E0E0",
          200: "#BDBDBD",
          300: "#9E9E9E",
          400: "#757575",
          500: "#616161",
          600: "#424242",
          700: "#2D2D2D",
          800: "#1A1A1A",
          900: "#0D0D0D",
        },
        ivory: {
          DEFAULT: "#F8F6F1",
          dark: "#EBE7DF",
          50: "#FDFCFA",
          100: "#F8F6F1",
          200: "#EBE7DF",
          300: "#DED8CC",
          400: "#C9C0AF",
          500: "#B4A892",
        },
        copper: {
          DEFAULT: "#C17F59",
          light: "#D4A574",
          dark: "#A66B47",
          50: "#FDF5F0",
          100: "#FAEBE0",
          200: "#F5D7C2",
          300: "#E5B999",
          400: "#D4A574",
          500: "#C17F59",
          600: "#A66B47",
          700: "#8A5639",
          800: "#6E422C",
          900: "#522E1F",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "slide-right": "slideRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-soft": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      boxShadow: {
        "premium": "0 20px 40px rgba(13, 13, 13, 0.12), 0 8px 16px rgba(13, 13, 13, 0.08)",
        "premium-lg": "0 30px 60px rgba(13, 13, 13, 0.15), 0 12px 24px rgba(13, 13, 13, 0.1)",
        "copper": "0 10px 30px rgba(193, 127, 89, 0.3)",
        "copper-lg": "0 20px 50px rgba(193, 127, 89, 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "stitch-pattern": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h10M15 30h30M50 30h10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.15' stroke-dasharray='2,4'/%3E%3Cpath d='M30 0v10M30 15v30M30 50v10' stroke='%23C17F59' stroke-width='1' fill='none' opacity='0.15' stroke-dasharray='2,4'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
};

export default config;
