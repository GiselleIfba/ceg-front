
// themes how colors and trasitions
export const theme = {
  colors: {
    shadowcolor: "#aaa",
    white: "#fff",
    headerBg2: "#FFF953",
    bg: "#f2f2f2",
    blackBlue: "#033E8C",
    blue: "#1e6fd9",
    green: "#55E083"
  },
  transition:{
    transition: "1.2s"
  },
  length: "1200px",
  fontStyle: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
};
// old main color headerBg2: '#1e6fd9', yellow: "#FAC916"

// breakpoints for all screen types 
const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// devices to use on resposivity features 
export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`,
};

