import type { Config } from "tailwindcss";

<<<<<<< HEAD
export default {
=======
const config: Config = {
>>>>>>> deb28ce951d7321bb1d76fb34df920523f940b0f
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
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
} satisfies Config;
=======
};
export default config;
>>>>>>> deb28ce951d7321bb1d76fb34df920523f940b0f
