import { colors, spacing, borderRadius, shadows } from "@/styles/designSystem";
import styled from "@emotion/styled";

export const Container = styled.div<{ width?: number; height?: number }>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  width: ${({ width }) => (width ? `${width}px` : "250px")};
  height: ${({ height }) => (height ? `${height}px` : "300px")};
  border-radius: ${borderRadius.md};
  box-sizing: border-box;
  box-shadow: ${shadows.soft};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${shadows.medium};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 55%;
  background-color: ${colors.gray[100]};
  border-top-left-radius: ${borderRadius.md};
  border-top-right-radius: ${borderRadius.md};
  overflow: hidden;

  img,
  svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.md};
  width: 100%;
  height: 45%;
  box-sizing: border-box;
`;

export const Title = styled.h2<{ width?: number }>`
  font-size: ${({ width }) => (width && width <= 150 ? "0.9rem" : "1.5rem")};
  color: ${colors.black};
  margin: 0 0 ${spacing.sm} 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p<{ width?: number }>`
  display: -webkit-box;
  font-size: ${({ width }) => (width && width <= 150 ? "0.8rem" : "1rem")};
  color: ${colors.gray[500]};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${({ width }) => (width && width <= 150 ? 2 : 3)};
  -webkit-box-orient: vertical;
`;
