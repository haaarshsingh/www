/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        marker: "0px 3px 7.5px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        cloud: "cloud 120s linear infinite",
        marker: "marker 4s ease-out infinite",
        plane: "plane 30s linear infinite",
        "plane-shadow": "plane-shadow 30s linear infinite",
      },
      keyframes: {
        cloud: {
          "0%": {
            transform: "translate(-350px, -350px)",
          },
          "25%": {
            transform: "translate(350px, 350px)",
          },
          "50%": {
            transform: "translate(600px, -350px)",
          },
          "75%": {
            transform: "translate(-400px, 350px)",
          },
          "100%": {
            transform: "translate(-350px, -350px)",
          },
        },
        plane: {
          "0%": {
            transform: "translate(50px, 350px) rotate(30deg)",
          },
          "40%": {
            transform: "translate(300px, -60px) rotate(30deg)",
          },
          "100%": {
            transform: "translate(300px, -60px) rotate(30deg)",
          },
        },
        "plane-shadow": {
          "0%": {
            transform: "translate(50px, 410px) rotate(30deg)",
          },
          "40%": {
            transform: "translate(300px, -20px) rotate(30deg)",
          },
          "100%": {
            transform: "translate(300px, -20px) rotate(30deg)",
          },
        },
        marker: {
          "0%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "1",
          },
          "35%": {
            transform: "translate(-50%, -50%) scale(6)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(6)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
