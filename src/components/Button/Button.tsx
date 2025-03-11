import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { VariantType } from "@/types/variants";
import { borderRadius, buttonSizes } from "@/styles/designSystem";
import { buttonColorMap, buttonWithOutlineColorMap } from "./Button.styles";

export interface ButtonProps {
  variant?: VariantType;
  outline?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
}

const baseStyles = css`
  all: unset; /* 기본 스타일 제거 */
  cursor: pointer;
  font-weight: 500;
  border-radius: ${borderRadius.xs};
  box-sizing: border-box;
  line-height: 1;
`;

const Button = styled.button<ButtonProps>(
  baseStyles,
  ({ variant = "primary", outline }) =>
    outline ? buttonWithOutlineColorMap[variant] : buttonColorMap[variant],
  ({ size = "medium" }) => buttonSizes[size],
  ({ rounded }) =>
    rounded
      ? css`
          border-radius: 9999px;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: not-allowed;
          pointer-events: none;
        `
      : undefined
);

export default Button;
