import styled from "@emotion/styled";
import { colors } from "@/styles/designSystem";

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StepIndicator = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 25px;
  margin-bottom: 10px;
`;

export const Indicator = styled.div<{ offset: number }>`
  position: absolute;
  left: ${(props) => `${props.offset}px`};
  transform: translateX(-50%);
  cursor: default;
`;

export const SliderTrack = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 9999px;
  background-color: ${colors.gray[200]};
`;

export const SliderFilledTrack = styled.div<{ offset: number }>`
  width: ${(props) => `${props.offset}px`};
  height: 5px;
  border-radius: 9999px;
  background-color: ${colors.primary.main};
`;

export const SliderHandle = styled.div<{ offset: number }>`
  position: absolute;
  top: -100%;
  left: ${(props) => `${props.offset}px`};
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${colors.primary.main};
  cursor: pointer;
`;
