module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        baseGray: {
          200: "#C2C6D2",
        },
      },
    },
    plugins: [],
  },
  variants: {
    extend: {
      backgroundColor: ["checkedLabel"],
      textColor: ["checkedLabel"],
    },
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant("checkedLabel", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`radio-button${separator}${className}`)}:checked + label`;
        });
      });
    },
  ],
};
