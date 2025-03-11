import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { borderRadius, colors, shadows, spacing } from "@/styles/designSystem";
import MenuItem from "./MenuItem";

export interface MenuProps {
  horizontal?: boolean;
  className?: string;
}

const Menu = ({
  horizontal = false,
  children,
  className,
}: MenuProps & PropsWithChildren) => {
  return (
    <MenuContainer horizontal={horizontal} className={className}>
      {children}
    </MenuContainer>
  );
};

Menu.Item = MenuItem;

const MenuContainer = styled.nav<{ horizontal: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  background-color: var(--menu-bg-color, ${colors.white});
  border-radius: var(--menu-border-radius, ${borderRadius.xs});
  box-shadow: var(--menu-box-shadow, ${shadows.menu});
  gap: var(--menu-gap, ${spacing.xs});
  padding: var(--menu-padding, ${spacing.md});
`;

export default Menu;
