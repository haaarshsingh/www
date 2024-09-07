/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      boxShadow: {
        marker: "0px 3px 7.5px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        intro: "intro 0.3s forwards ease-in-out",
        cloud: "cloud 120s linear infinite",
        marker: "marker 4s ease-out infinite",
        plane: "plane 30s linear infinite",
        "plane-shadow": "plane-shadow 30s linear infinite",
      },
      keyframes: {
        intro: {
          "0%": {
            transform: "translateY(10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
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
      },
    },
  },
  plugins: [],
};
