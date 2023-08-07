/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,liquid,njk,pug,svg,js,ts,jsx,tsx,json}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1344px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      addVariant("is-active", "&.is-active");
      addVariant("group-is-active", ".group.is-active &");
      addVariant("is-expanded", "&.is-expanded");
      addVariant("group-is-expanded", ".group.is-expanded &");
      addVariant("is-success", "&.is-success");
      addVariant("group-is-success", ".group.is-success &");
      addVariant("is-error", "&.is-error");
      addVariant("group-is-error", ".group.is-error &");
      addVariant("is-scrolled", "html.is-scrolled &");
      addVariant("is-mobile-menu", "html.is-mobile-menu &");
      addVariant("is-logged-in", "html.is-logged-in &");
      addVariant("is-not-logged-in", "html.is-not-logged-in &");
    }),
  ],
};
