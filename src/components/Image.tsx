import { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import ImageErrorIcon from "@icons/ImageErrorIcon";

export interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  fallback?: React.ReactNode; // 로딩 중 표시할 컴포넌트 (예: Skeleton UI)
  errorFallback?: React.ReactNode; // 에러 발생 시 표시할 컴포넌트 (예: 대체 이미지나 에러 메시지)
}

const Image = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  fallback = (
    <SpinnerWrapper width={width} height={height}>
      <ThreeDots color={"#888"} width={width} height={height} />
    </SpinnerWrapper>
  ),
  errorFallback = (
    <SpinnerWrapper width={width} height={height}>
      <ImageErrorIcon width={width} height={height} />
    </SpinnerWrapper>
  ),
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <ImageWrapper width={width} height={height}>
      {isLoading && !hasError && fallback}
      {hasError && errorFallback}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          opacity: isLoading || hasError ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />
    </ImageWrapper>
  );
};

// 받아오기 전까지 모양이 찌그러져서
const ImageWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
  position: relative;
`;

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(0.8); }
`;

const DotsLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const Dot = styled.div<{ color: string; size: string }>`
  width: ${(props) => props.size}; /* 이미지 크기에 비례하는 크기 */
  height: ${(props) => props.size}; /* 이미지 크기에 비례하는 크기 */
  max-width: 20px; /* 최대 크기 */
  max-height: 20px; /* 최대 크기 */
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: ${bounce} 1.5s infinite ease-in-out both;

  &:nth-of-type(1) {
    animation-delay: -0.32s;
  }
  &:nth-of-type(2) {
    animation-delay: -0.16s;
  }
`;

const SpinnerWrapper = styled.div<{ width: string; height: string }>`
  background-color: #efefef;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  aspect-ratio: ${(props) => `${props.width}/${props.height}`};
`;

export const ThreeDots = ({
  color = "#fff",
  width,
  height,
}: {
  color?: string;
  width: string;
  height: string;
}) => {
  const dotSize = `${Math.min(parseInt(width), parseInt(height)) * 0.08}px`;

  return (
    <DotsLoader>
      <Dot color={color} size={dotSize} />
      <Dot color={color} size={dotSize} />
      <Dot color={color} size={dotSize} />
    </DotsLoader>
  );
};
const ErrorImageWrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageErrorFallback = ({
  width = "100%",
  height = "auto",
}: {
  width?: string;
  height?: string;
}) => (
  <ErrorImageWrapper width={width} height={height}>
    <ImageErrorIcon />
  </ErrorImageWrapper>
);

export default Image;
