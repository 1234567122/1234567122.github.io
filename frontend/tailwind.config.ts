import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15202b",
        muted: "#5b6b7a",
        line: "#dbe7ee",
        brand: "#0f8a9d",
        accent: "#e4b64a",
        field: "#f6fafc"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(20, 42, 58, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
