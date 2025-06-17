import React, { useState, useRef, useEffect } from 'react';
import { DropdownContainer, DropdownButton, DropdownList, DropdownItem } from './Dropdown.styles';
import { VariantType } from '@/types/variants';

export interface DropdownProps {
  options: Array<{
    value: string;
    label: string;
  }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  variant?: VariantType;
  disabled?: boolean;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = '선택해주세요',
  variant = 'light',
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (selectedValue: string) => {
    onChange?.(selectedValue);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOpen(prev => !prev);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <DropdownContainer ref={dropdownRef} className={className}>
      <DropdownButton
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        variant={variant}
        isOpen={isOpen}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </DropdownButton>
      {isOpen && !disabled && (
        <DropdownList role="listbox" aria-label={placeholder}>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option.value)}
              isSelected={option.value === value}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown; 