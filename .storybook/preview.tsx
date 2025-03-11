import React from "react";
import { Global, css } from "@emotion/react";
import type { Preview } from "@storybook/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

      * {
        font-family: "Noto Sans KR", "Noto Sans", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
  />
);

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
