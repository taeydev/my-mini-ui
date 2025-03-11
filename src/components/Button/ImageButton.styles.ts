import styled from "@emotion/styled";

interface ButtonProps {
  width?: string;
  height?: string;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  ${({ width }) => width};
  ${({ height }) => height};
  border: none;
  border-radius: 50%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  box-sizing: border-box;
  background-color: rgb(0, 0, 0, 0.1);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
