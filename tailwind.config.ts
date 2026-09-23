import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm, natural, wellness-appropriate palette — deliberately not
        // the default cream+terracotta or dark-tech combinations.
        cream: "#FAF6EC", // primary background
        sand: "#EFE4CC", // secondary background / dividers
        cocoa: "#2B2118", // primary text, near-black but warm brown
        clay: "#A8551F", // primary accent — ochre/clay, not terracotta
        "clay-dark": "#823F16",
        moss: "#3E5A38", // secondary accent, used sparingly
        "moss-dark": "#2C4126",
        ivory: "#FFFDF8",
        stone: "#8A7F6E", // muted supporting text
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
