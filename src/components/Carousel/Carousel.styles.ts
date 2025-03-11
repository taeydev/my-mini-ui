import { colors, spacing } from "@/styles/designSystem";
import styled from "@emotion/styled";

export const CarouselContainer = styled.div<{
  $width: number;
  $height: number;
}>`
  overflow: hidden;
  width: ${({ $width }) => ($width ? `${$width}px` : "300px")};
  height: ${({ $height }) => ($height ? `${$height}px` : "200px")};
  position: relative;
`;

export const CarouselWrapper = styled.div<{
  translateX: number;
  isTransition: boolean;
}>`
  display: flex;
  transition: ${(props) =>
    props.isTransition ? "transform 0.5s ease-in-out" : "none"};
  transform: translateX(${(props) => props.translateX}px);
  width: 100%;
`;

export const Slide = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CarouselButton = styled.button<{
  position: "left" | "right";
  width: string;
  height: string;
}>`
  background-color: transparent;
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  box-sizing: border-box;
  padding: ${spacing.xs};
  border: none;
  outline: none;
  cursor: pointer;

  top: 50%;
  transform: translateY(-50%);
  transition: scale 0.2s ease;
  left: ${(props) => props.position === "left" && "5px"};
  right: ${(props) => props.position === "right" && "5px"};

  svg path {
    fill: rgba(255, 255, 255, 0.7);
    stroke: ${colors.gray[500]};
  }

  &:hover {
    svg path {
      fill: rgba(255, 255, 255, 0.8);
      stroke: ${colors.gray[600]};
    }
  }
`;
