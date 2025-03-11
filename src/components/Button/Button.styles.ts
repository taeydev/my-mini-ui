import { css } from "@emotion/react";
import { colors } from "@/styles/designSystem";
import { darken } from "@/utils/ColorUtils";

export const buttonColorMap = {
  primary: css`
    background: ${colors.gradients.primary};
    color: ${colors.white};
    &:hover {
      background: linear-gradient(
        90deg,
        ${darken(colors.primary.start, 10)},
        ${darken(colors.primary.end, 10)}
      );
    }
    &:active {
      background: linear-gradient(
        90deg,
        ${darken(colors.primary.start, 20)},
        ${darken(colors.primary.end, 20)}
      );
    }
  `,
  secondary: css`
    background: ${colors.gradients.secondary};
    color: ${colors.white};
    &:hover {
      background: linear-gradient(
        90deg,
        ${darken(colors.secondary.start, 10)},
        ${darken(colors.secondary.end, 10)}
      );
    }
    &:active {
      background: linear-gradient(
        90deg,
        ${darken(colors.secondary.start, 20)},
        ${darken(colors.secondary.end, 20)}
      );
    }
  `,
  light: css`
    background-color: ${colors.gray[200]};
    color: ${colors.gray[500]};
    &:hover {
      background-color: ${colors.gray[300]};
    }
    &:active {
      background-color: ${colors.gray[400]};
    }
  `,
};

export const buttonWithOutlineColorMap = {
  primary: css`
    background-color: ${colors.white};
    border: 1px solid ${colors.primary.main};
    color: ${colors.primary.main};
    &:hover {
      background-color: ${colors.gray[100]};
    }
    &:active {
      background-color: ${colors.gray[200]};
    }
  `,
  secondary: css`
    background-color: ${colors.white};
    border: 1px solid ${colors.secondary.main};
    color: ${colors.secondary.main};
    &:hover {
      background-color: ${colors.gray[100]};
    }
    &:active {
      background-color: ${colors.gray[200]};
    }
  `,
  light: css`
    background-color: ${colors.white};
    border: 1px solid ${colors.gray[300]};
    color: ${colors.gray[500]};
    &:hover {
      background-color: ${colors.gray[200]};
    }
    &:active {
      background-color: ${colors.gray[300]};
    }
  `,
};
