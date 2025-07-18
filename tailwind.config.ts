import type { Config } from "tailwindcss";
// all in fixtures is set to tailwind v3 as interims solutions
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#FF2C2C", // Bright blood red (dark mode)
          foreground: "#FFFFFF",
          dark: "#CC0000", // Dark blood red
          light: "#FF8A8A", // Light red for light mode
          rgb: "255, 44, 44", // For rgba() usage in CSS
          "rgb-light": "255, 138, 138", // For rgba() usage in light mode
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand colors with adaptive theme (light/dark mode)
        brand: {
          primary: "#FF2C2C", // Bright blood red (dark mode)
          "primary-light": "#FF8A8A", // Light red for light mode
          secondary: "#CC0000", // Dark blood red
          "secondary-light": "#FF9999", // Light secondary for light mode
          tertiary: "#FF4444", // Lighter blood red
          "tertiary-light": "#FFB3B3", // Light tertiary for light mode
          accent: "#FF0000", // Pure red
          "accent-light": "#FF6666", // Light accent for light mode
          light: "#FF6666", // Light blood red
          dark: "#990000", // Very dark blood red
          rgb: "255, 44, 44", // For rgba() usage (dark mode)
          "rgb-light": "255, 138, 138", // For rgba() usage (light mode)
          "rgb-secondary": "204, 0, 0", // For rgba() usage
          "rgb-secondary-light": "255, 153, 153", // For rgba() usage (light mode)
          "rgb-tertiary": "255, 68, 68", // For rgba() usage
          "rgb-tertiary-light": "255, 179, 179", // For rgba() usage (light mode)
          "rgb-accent": "255, 0, 0", // For rgba() usage
          "rgb-accent-light": "255, 102, 102", // For rgba() usage (light mode)
          icon: "FF2C2C", // For URL parameters (without #)
          "icon-light": "FF8A8A", // For URL parameters (light mode)
        },
        // Blood red palette based on #FF2C2C
        blood: {
          50: "#FFF5F5",
          100: "#FFE3E3",
          200: "#FFCCCC",
          300: "#FFB3B3",
          400: "#FF8080",
          500: "#FF4D4D",
          600: "#FF2C2C",
          700: "#CC0000",
          800: "#990000",
          900: "#660000",
          950: "#330000",
        },
        // Keep standard red for versatility
        red: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
