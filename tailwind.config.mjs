/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Mona-Sans"],
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
            keyframes: {
                bounceDown: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(10px)" },
                },
                animatedLine: {
                    "0%": { width: 0 },
                    "100%": { width: "80%" },
                },
            },
            animation: {
                bounceDown: `bounceDown 2s ease-in-out infinite`,
                aniamtedLine: `animatedLine 1s ease-out forwards`
            },
        },
    },
    plugins: [],
};
