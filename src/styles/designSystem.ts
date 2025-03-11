import { css } from "@emotion/react";

export const colors = {
  primary: {
    main: "#92a3fd",
    start: "#9dceff",
    end: "#92a3fd",
  },
  secondary: {
    main: "#c58bf2",
    start: "#eea4ce",
    end: "#c58bf2",
  },
  error: "#FF3D00",
  success: "#00C853",
  white: "#FFFFFF",
  black: "#2c2c2c",
  gray: {
    100: "#f8f8f8",
    200: "#f3f3f3",
    300: "#e8e8e8",
    400: "#c8c8c8",
    500: "#919191",
    600: "#707070",
  },
  gradients: {
    primary: "linear-gradient(90deg, #9dceff, #92a3fd)",
    secondary: "linear-gradient(90deg, #eea4ce, #c58bf2)",
  },
};

export const typography = {
  h1: { size: "32px", weight: 600, lineHeight: "40px" },
  h2: { size: "24px", weight: 500, lineHeight: "32px" },
  body: { size: "16px", weight: 400, lineHeight: "22px" },
  small: { size: "14px", weight: 400, lineHeight: "20px" },
};

export const typographyStyle = (variant: keyof typeof typography) => css`
  font-size: ${typography[variant].size};
  font-weight: ${typography[variant].weight};
  line-height: ${typography[variant].lineHeight};
`;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  xxl: "32px",
};

export const borderRadius = {
  xs: "6px",
  sm: "8px",
  md: "12px",
  lg: "16px",
};

export const shadows = {
  soft: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  medium: "0px 4px 10px rgba(0, 0, 0, 0.15)",
  menu: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

export const buttonSizes = {
  small: {
    padding: "8px 9px",
    fontSize: "12px",
    height: "32px",
  },
  medium: {
    padding: "10px 15px",
    fontSize: "14px",
    height: "40px",
  },
  large: {
    padding: "12px 18px",
    fontSize: "16px",
    height: "48px",
  },
};
