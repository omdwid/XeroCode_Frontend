/** @type {import('tailwindcss').Config} */

// TODO: map the fontsizes, colors(primary, secondary , neutral, accent) and gradients for the project
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: "#3056D3",
          green: "#66B066",
          orange: "#F3BC4C",
          red: "#DF5E63",
          darkOrange: "#E27244",
        },
        primary: {
          100: "#525252",
          200: "#3D3D3D",
        },

        secondary: "#F7F7FD",
        neutral: "#DEDEE9",
      },

      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        roboto: ["Roboto Flex", "sans-serif"],
      },

      boxShadow: {
        xl: "0px 5.661764621734619px 14.154411315917969px 0px #00000021",
      },

      fontSize: {},
      fontWeight: {
        normal: 500,
        light: 400,
        bold: 600,
        bolder: 700,
      },
    },
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
};
