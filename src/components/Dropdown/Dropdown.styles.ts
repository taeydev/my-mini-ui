import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, borderRadius, shadows } from '@/styles/designSystem';
import { VariantType } from '@/types/variants';
import { darken } from '@/utils/ColorUtils';

interface DropdownButtonProps {
  variant: VariantType;
  isOpen: boolean;
  disabled?: boolean;
}

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const getButtonColorStyles = (variant: VariantType) => {
  switch (variant) {
    case 'primary':
      return css`
        background: ${colors.white};
        color: ${colors.primary.main};
        border: 1px solid ${colors.primary.main};
        &:hover {
          background: ${colors.gray[100]};
        }
      `;
    case 'secondary':
      return css`
        background: ${colors.white};
        color: ${colors.secondary.main};
        border: 1px solid ${colors.secondary.main};
        &:hover {
          background: ${colors.gray[100]};
        }
      `;
    default:
      return css`
        background: ${colors.white};
        color: ${colors.gray[600]};
        border: 1px solid ${colors.gray[300]};
        &:hover {
          border-color: ${colors.gray[400]};
        }
      `;
  }
};

export const DropdownButton = styled.button<DropdownButtonProps>`
  all: unset;
  position: relative;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${borderRadius.xs};
  font-size: 14px;
  line-height: 20px;
  transition: all 0.2s ease;

  ${({ variant }) => getButtonColorStyles(variant)}

  &::after {
    content: '';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%) ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
    transition: transform 0.2s ease;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      background: ${colors.gray[100]};
    `}
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 4px 0;
  list-style: none;
  background: ${colors.white};
  border: 1px solid ${colors.gray[200]};
  border-radius: ${borderRadius.xs};
  box-shadow: ${shadows.menu};
  z-index: 1000;
  max-height: 250px;
  overflow-y: auto;
`;

interface DropdownItemProps {
  isSelected: boolean;
}

export const DropdownItem = styled.li<DropdownItemProps>`
  padding: 8px 15px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.gray[600]};
  background: ${({ isSelected }) => isSelected ? colors.gray[100] : 'transparent'};
  transition: all 0.15s ease;

  &:hover {
    background: ${colors.gray[100]};
  }

  &:active {
    background: ${colors.gray[200]};
  }
`; 