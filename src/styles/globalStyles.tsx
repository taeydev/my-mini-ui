import { css, Global } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

      * {
        font-family: "Noto Sans KR", "Noto Sans", sans-serif;
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export default GlobalStyles;
