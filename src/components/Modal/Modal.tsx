import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@/icons/CloseIcon';
import { 
  ModalOverlay, 
  ModalContainer, 
  ModalHeader, 
  ModalTitle,
  ModalContent, 
  ModalFooter,
  CloseButton 
} from './Modal.styles';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
  width = '500px'
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // 모달이 열릴 때 현재 포커스된 요소 저장
      previousActiveElement.current = document.activeElement as HTMLElement;
      // body 스크롤 방지
      document.body.style.overflow = 'hidden';
      // 모달로 포커스 이동
      modalRef.current?.focus();
    } else {
      // 모달이 닫힐 때 body 스크롤 복구
      document.body.style.overflow = 'unset';
      // 이전 포커스 요소로 복구
      previousActiveElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className={className}
        width={width}
      >
        {title && (
          <ModalHeader>
            <ModalTitle id="modal-title">{title}</ModalTitle>
            <CloseButton 
              type="button" 
              onClick={onClose}
              aria-label="모달 닫기"
            >
              <CloseIcon width="20px" height="20px" color="currentColor" />
            </CloseButton>
          </ModalHeader>
        )}
        <ModalContent>{children}</ModalContent>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default Modal; 