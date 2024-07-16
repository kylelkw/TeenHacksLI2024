/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
			fontFamily: {
				display: ["Mona-Sans"]
			},
      boxShadow: {
        cool: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
      colors: {
        content: {
          1: "hsl(var(--color-content1) / <alpha-value>)",
          2: "hsl(var(--color-content2) / <alpha-value>)",
        },
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
          3: "hsl(var(--color-accent3) / <alpha-value>)",
        },
        bg: "hsl(var(--color-bg) / <alpha-value>)",
        highlight: "hsl(var(--color-highlight) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
