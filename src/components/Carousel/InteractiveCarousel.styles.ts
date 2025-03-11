import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CarouselItem from "@components/Carousel/CarouselItem";

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 1;
  min-height: 220px;
`;

export const CarouselTrack = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

interface TrackItemProps {
  position: "left" | "center" | "right";
}

export const trackItemStyles = (position: "left" | "center" | "right") => css`
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  position: absolute;

  ${position === "left" &&
  css`
    transform: translateX(-50%) scale(0.7);
    z-index: 1;
    filter: brightness(70%) blur(2px);
    opacity: 0.7;
  `}
  ${position === "center" &&
  css`
    transform: translateX(0) scale(1);
    z-index: 2;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
  `}
  ${position === "right" &&
  css`
    transform: translateX(50%) scale(0.7);
    z-index: 1;
    filter: brightness(70%) blur(2px);
    opacity: 0.7;
  `}
`;

// TrackItem 스타일 정의 (기존 TrackItem)
export const TrackItem = styled(CarouselItem)<TrackItemProps>`
  ${(props) => trackItemStyles(props.position)}
`;

// SkeletonItem 스타일 정의
export const SkeletonItem = styled.div<TrackItemProps>`
  ${(props) => trackItemStyles(props.position)}
  width: 200px;
  height: 200px;
  background-color: #d3d3d3; /* 약간 어두운 밝은 회색 */
  /* 부드러운 그라디언트 배경 */
  background: linear-gradient(90deg, #d3d3d3 0%, #e6e6e6 50%, #d3d3d3 100%);

  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
`;
