/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
    //custom theme 
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#0083db",
            secondary: "#f6d860",
            accent: "#FF7533",
            neutral: "#3d4451",
            "base-100": "#ffffff",
            nav: "#43A047"
          },
        },
        "dark",
      ],
    },
}
