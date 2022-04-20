module.exports = {
  content: ["../../packages/*/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#6758FF",
      secondary: "#FF7FA7",
      white: "#ffffff",
      transparent: "#00000000",
      divider: "#3f3f3f",
      "divider-light": "#3f3f3f1a",
      "shadow-color": "#0000000b",
      border: {
        main: "#979797",
      },
      "input-border": "#bfbfbf",
      placdholder: "#4f4f4f",
      "placdholder-primary": "#887CFFa0",
      black: {
        700: "#151515",
        800: "#111017",
        900: "#000002",
      },
      text: {
        gray1: "#D1D1D1",
        gray2: "#818181",
        gray3: "#7B7B7B",
        gray4: "#C4C4C4",
        gray5: "#D5D5D5",
        gray6: "#D9D9D9",
        gray7: "#BFBFBF",
        gray8: "#606060",
        black1: "#23292F",
      },
    },
    extend: {
      spacing: {
        "full-screen": "1280px",
        "card-container-width": "683px",
      },
      keyframes: {
        siderbar_progress_show: {
          from: {
            right: "-253px",
          },
          to: {
            right: "0px",
          },
        },
      },
      animation: {
        siderbar_progress_show: "siderbar_progress_show 0.5s",
      },
    },
  },
  plugins: [],
};
