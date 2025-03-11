import styled from "@emotion/styled";
import { colors, spacing, borderRadius } from "@/styles/designSystem";

export const Input = styled.input<{ hasError: boolean }>`
  padding: 0 ${spacing.lg};
  color: ${colors.black};
  height: 48px;
  font-size: 14px;
  font-weight: 400;
  border-radius: ${borderRadius.sm};
  width: 100%;
  box-sizing: border-box;
  border: 1px solid
    ${({ hasError }) => (hasError ? colors.error : colors.gray[300])};
  outline: none;
  transition: border-color 0.3s ease;
  background-color: ${colors.white};

  ::placeholder {
    font-family: "Noto Sans KR", "Noto Sans", "sans-serif";
  }

  &:focus {
    border-color: ${({ hasError }) =>
      hasError ? colors.error : colors.primary.main};
  }

  &:disabled {
    background-color: ${colors.gray[100]};
    cursor: not-allowed;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ErrorText = styled.span`
  color: ${colors.error};
  font-size: 12px;
  margin-top: ${spacing.xs};
  padding-left: ${spacing.xs};
`;

export const HelpText = styled.span`
  color: ${colors.gray[500]};
  font-size: 12px;
  margin-top: ${spacing.xs};
  padding-left: ${spacing.xs};
`;
