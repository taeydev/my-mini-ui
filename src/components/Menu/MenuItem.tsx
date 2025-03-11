import { borderRadius, colors, spacing } from "@/styles/designSystem";
import styled from "@emotion/styled";

export interface MenuItemProps {
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
}

const MenuItem = ({
  children,
  onClick,
  selected = false,
  disabled = false,
  className,
  ...props
}: MenuItemProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledMenuItem
      className={`menu-item ${selected ? "menu-item-selected" : ""} ${
        disabled ? "menu-item-disabled" : ""
      } ${className ?? ""}`}
      onClick={onClick}
      $selected={selected}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledMenuItem>
  );
};

const StyledMenuItem = styled.button<{ $selected?: boolean }>`
  background: none;
  border: none;
  border-radius: ${borderRadius.sm};
  padding: ${spacing.md} ${spacing.lg};
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${({ $selected }) =>
    $selected ? `${colors.gray[300]}` : "transparent"};

  &:hover:not(:disabled) {
    background-color: ${colors.gray[200]};
  }

  &:disabled {
    color: ${colors.gray[500]};
    cursor: default;
  }
`;

export default MenuItem;
