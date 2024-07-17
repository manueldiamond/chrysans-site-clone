import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F7CB00",
        "primary-2":'rgb(255,186,0)',
        "secondary": "#003364",
        "grey":'#838282',
      },
      fontFamily: {
        "primary": ['Roboto', 'sans-serif'],
        "secondary": ['Roboto Slab', 'serif'],
        "text": ['Roboto', 'sans-serif'],
        "accent": ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        "primary": '600',
        "secondary": '400',
        "text": '400',
        "accent": '500',
      },
      container:{
        center: true,
        padding: '15px',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1191px',
        },
      }
    },
  },
  plugins: [],
};
export default config;
