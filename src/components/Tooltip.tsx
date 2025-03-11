import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  offsetX?: number;
  offsetY?: number;
}

const Tooltip = ({
  content,
  children,
  placement = "top",
  offsetX = 0,
  offsetY = 0,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (childRef.current && tooltipRef.current) {
        const childRect = childRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const { width: childWidth, height: childHeight } = childRect;

        let newTop = 0;
        let newLeft = 0;

        switch (placement) {
          case "top":
            newTop = -tooltipRect.height - offsetY;
            newLeft = childWidth / 2 - tooltipRect.width / 2 + offsetX;
            break;
          case "bottom":
            newTop = childHeight + offsetY;
            newLeft = childWidth / 2 - tooltipRect.width / 2 + offsetX;
            break;
          case "left":
            newTop = childHeight / 2 - tooltipRect.height / 2 + offsetY;
            newLeft = -tooltipRect.width + offsetX;
            break;
          case "right":
            newTop = childHeight / 2 - tooltipRect.height / 2 + offsetY;
            newLeft = childWidth + offsetX;
            break;
        }

        setPosition({ top: newTop, left: newLeft });
      }
    };
    updatePosition();
  }, [placement, offsetX, offsetY]);

  return (
    <div style={{ position: "relative" }}>
      <TooltipContainer
        ref={tooltipRef}
        visible={isVisible}
        top={position.top}
        left={position.left}
      >
        {content}
      </TooltipContainer>
      <ChildContainer
        ref={childRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </ChildContainer>
    </div>
  );
};

const TooltipContainer = styled.div<{
  visible: boolean;
  top: number;
  left: number;
}>`
  max-width: 300px;
  word-wrap: break-word;
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: "Open Sans", "sans-serif";
  font-size: 12px;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  ${({ top, left }) => css`
    top: ${top}px;
    left: ${left}px;
  `}
`;

const ChildContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;

export default Tooltip;
