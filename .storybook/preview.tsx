import React from "react";
import { Global, css } from "@emotion/react";
import type { Preview } from "@storybook/react";
import { colors } from "../src/styles/designSystem";

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

      body {
        background-color: ${colors.gray[100]};
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
    options: {
      storySort: {
        order: [
          'Design System',
          'Components',
          [
            'Input Components',
            ['Button', 'TextField', 'Dropdown', 'Slider'],
            'Navigation Components',
            ['Menu'],
            'Data Display Components',
            ['Card', 'Tooltip'],
            'Media Components',
            ['Carousel', 'Image', 'ImageButton'],
            'Overlay Components',
            ['Modal']
          ],
        ],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F8F9FA',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '360px',
            height: '640px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
      },
    },
  },
};

export default preview;
