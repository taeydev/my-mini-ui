import styled from '@emotion/styled';
import { colors, shadows, borderRadius } from '@/styles/designSystem';

interface ModalContainerProps {
  width: string;
}

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  background: ${colors.white};
  border-radius: ${borderRadius.md};
  box-shadow: ${shadows.medium};
  width: ${({ width }) => width};
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
  }
`;

export const ModalHeader = styled.div`
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray[200]};
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.gray[600]};
`;

export const ModalContent = styled.div`
  padding: 24px;
  overflow-y: auto;
  color: ${colors.gray[600]};
  line-height: 1.5;
`;

export const ModalFooter = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid ${colors.gray[200]};
`;

export const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray[500]};
  font-size: 20px;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.gray[600]};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary.main};
    outline-offset: 2px;
    border-radius: 4px;
  }
`; 