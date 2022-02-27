module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //FontSize22px,Lineheight26pxを追加するために設定しました
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "22px": ["22px", "26px"],
    },
    extend: {
      colors: {
        primary: {
          rose: "#F43F5E",
        },
        secondary: {
          orange: "#FB923C",
        },
        tertiary: {
          yellow: "#FBBF24",
        },
      },
    },
    plugins: [],
  },
};
