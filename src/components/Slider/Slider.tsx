import { useCallback, useEffect, useRef, useState } from "react";
import Tooltip from "../Tooltip";
import {
  Indicator,
  SliderContainer,
  SliderFilledTrack,
  SliderHandle,
  SliderTrack,
  StepIndicator,
} from "./Slider.styles";

export interface IndicatorInfo {
  name?: string;
  render: React.ReactNode;
}

export interface SliderProps {
  initialValue: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  stepIndicators?: Record<number, IndicatorInfo>;
  className?: string;
}

const Slider = ({
  initialValue,
  onChange,
  min = 1,
  max = 10,
  step = 1,
  stepIndicators,
  className,
}: SliderProps) => {
  const [handleX, setHandleX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [indicatorOffsets, setIndicatorOffsets] = useState<
    Record<number, number>
  >({});
  const trackRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const calculateOffsetX = useCallback(
    (value: number) => {
      if (!trackRef.current) return 0;

      const track = trackRef.current.getBoundingClientRect();
      const totalRange = max - min;
      // 1. steppedValue를 min을 기준으로 올바르게 계산
      const rawSteppedValue = min + Math.round((value - min) / step) * step;
      // 2. steppedValue를 min/max 범위로 강제 고정
      const steppedValue = Math.max(min, Math.min(max, rawSteppedValue));

      // 3. totalSteps를 정수로 강제하지 않음 (소수 허용)
      const totalSteps = totalRange / step; // Math.floor 제거
      const stepWidth = track.width / totalSteps;

      // 4. stepIndex 계산
      const stepIndex = (steppedValue - min) / step;
      const offsetX = stepIndex * stepWidth;

      return Math.max(0, Math.min(track.width, offsetX));
    },
    [min, max, step]
  );

  useEffect(() => {
    const newOffsetX = calculateOffsetX(initialValue);
    setHandleX(newOffsetX);
  }, [initialValue, calculateOffsetX]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // start dragging
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = useCallback(() => {
    // stop dragging
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !trackRef.current) return;
      const track = trackRef.current.getBoundingClientRect();

      const percentage = (e.clientX - track.x) / track.width;
      let newValue = Math.round(min + percentage * (max - min));
      // step 적용
      newValue = Math.round(newValue / step) * step;

      const clampedValue = Math.max(min, Math.min(max, newValue));
      const clampedX = calculateOffsetX(clampedValue);
      setHandleX(clampedX);
      onChange(clampedValue);
    },
    [isDragging, min, max, step, onChange, calculateOffsetX]
  );

  // StepIndicators의 위치 계산
  const updateIndicatorPositions = useCallback(() => {
    if (!stepIndicators || !trackRef.current) return;

    const offsets: Record<number, number> = {};
    Object.keys(stepIndicators).forEach((value) => {
      offsets[Number(value)] = calculateOffsetX(Number(value));
    });

    setIndicatorOffsets(offsets);
  }, [stepIndicators, calculateOffsetX]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    updateIndicatorPositions();
  }, [updateIndicatorPositions]);

  return (
    <SliderContainer>
      {stepIndicators && (
        <StepIndicator>
          {Object.entries(stepIndicators).map(([value, info]) => {
            const offsetX = indicatorOffsets[Number(value)] || 0;
            return (
              <Tooltip key={value} content={info.name ?? ""} offsetX={offsetX}>
                <Indicator offset={offsetX}>{info.render}</Indicator>
              </Tooltip>
            );
          })}
        </StepIndicator>
      )}
      <SliderTrack ref={trackRef} className={className}>
        <SliderFilledTrack className="slider-filled-track" offset={handleX} />
        <SliderHandle
          ref={handleRef}
          className="slider-handle"
          offset={handleX}
          onMouseDown={handleMouseDown}
        />
      </SliderTrack>
    </SliderContainer>
  );
};

export default Slider;
