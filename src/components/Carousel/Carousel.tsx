import { useCallback, useEffect, useRef, useState } from "react";
import {
  CarouselButton,
  CarouselContainer,
  CarouselWrapper,
  Slide,
} from "./Carousel.styles";
import PrevIcon from "@icons/PrevIcon";
import NextIcon from "@icons/NextIcon";

export interface SlideInfo {
  imageSrc: string;
  imageAlt?: string;
  onClick?: () => void;
}

export interface CarouselProps {
  slides: SlideInfo[];
  slideWidth: number;
  slideHeight: number;
  loop?: boolean;
}

const Carousel = ({
  slides,
  slideWidth,
  slideHeight,
  loop = true,
}: CarouselProps) => {
  const totalSlides = slides.length;
  const buttonSize = slideWidth ? Math.max(20, slideWidth * 0.1) : 30;
  const iconSize = buttonSize * 0.8;

  const [index, setIndex] = useState<number>(loop ? 1 : 0);
  const [isTransition, setIsTransition] = useState<boolean>(false);

  const isDraggingRef = useRef(false); // drag 상태를 useRef로 관리
  const [translateX, setTranslateX] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const startX = useRef<number | null>(null);
  const currentTranslateX = useRef<number | null>(null);

  const transitionRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    if (loop) {
      if (index - 1 <= 0) {
        setIsTransition(true);
        // 가짜 슬라이드로 이동
        setIndex(0);
        transitionRef.current = setTimeout(() => {
          setIsTransition(false);
          setIndex(totalSlides); // 마지막 실제 슬라이드로 순간 이동
        }, 500);
      } else {
        setIsTransition(true);
        setIndex((prev) => prev - 1);
      }
    } else {
      setIsTransition(true);
      setIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
    }
  };

  const handleNext = () => {
    if (loop) {
      if (index >= totalSlides) {
        setIsTransition(true);
        // 가짜 슬라이드로 이동
        setIndex((prev) => prev + 1);
        transitionRef.current = setTimeout(() => {
          setIsTransition(false);
          setIndex(1); // 첫 번째 실제 슬라이드로 순간 이동
        }, 500);
      } else {
        setIsTransition(true);
        setIndex((prev) => prev + 1);
      }
    } else {
      setIsTransition(true);
      setIndex((prev) =>
        prev + 1 > totalSlides - 1 ? totalSlides - 1 : prev + 1
      );
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // start dragging
    e.preventDefault();
    setIsClicked(true);
    isDraggingRef.current = false;
    setIsTransition(false);
    startX.current = e.clientX;
    currentTranslateX.current = translateX;
  };

  const handleMouseUp = useCallback(() => {
    setIsClicked(false);
    if (!isDraggingRef.current) return;
    // stop dragging
    setTimeout(() => {
      isDraggingRef.current = false; // ✅ 클릭보다 늦게 업데이트되도록 딜레이
    }, 0);
    setIsTransition(true);

    if (currentTranslateX.current) {
      // 드래그 이동 거리 계산
      const movement = translateX - currentTranslateX.current;
      const newIndex = Math.round(movement / slideWidth); // 슬라이드 크기 기준으로 정렬

      let targetIndex = index - newIndex;

      if (loop) {
        setIsTransition(true);
        if (targetIndex <= 0) {
          setIndex(0); // 가짜 슬라이드로 이동
          transitionRef.current = setTimeout(() => {
            setIsTransition(false);
            setIndex(totalSlides); // 마지막 실제 슬라이드로 순간 이동
          }, 500);
        } else if (targetIndex > totalSlides) {
          setIndex(totalSlides + 1);
          transitionRef.current = setTimeout(() => {
            setIsTransition(false);
            setIndex(1); // 첫 번째 슬라이드로 순간 이동
          }, 500);
        } else {
          setIndex(targetIndex);
          setTranslateX(-index * slideWidth); // index가 바뀌지 않는 경우에도 제자리로 이동
        }
      } else {
        setIndex(Math.max(0, Math.min(targetIndex, totalSlides - 1)));
      }
    }
  }, [translateX, index, loop, totalSlides, slideWidth]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isClicked) return;

      isDraggingRef.current = true;
      if (startX.current && currentTranslateX.current) {
        const diff = e.clientX - startX.current;
        let newTranslateX = currentTranslateX.current + diff;
        // 슬라이드 크기 기준으로 75%보다 넘게 움직였을 때 전환 처리
        const threshold = slideWidth * 0.75;
        if (diff > threshold) {
          newTranslateX = currentTranslateX.current + threshold;
        } else if (diff < -threshold) {
          newTranslateX = currentTranslateX.current - threshold;
        }
        setTranslateX(newTranslateX);
      }
    },
    [isClicked, slideWidth]
  );

  const handleClick = (
    e: React.MouseEvent,
    onClick: (() => void) | undefined
  ) => {
    if (isDraggingRef.current) {
      e.preventDefault(); // 드래그 중 클릭을 막음
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    setTranslateX(-index * slideWidth);
  }, [index, slideWidth]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <CarouselContainer $width={slideWidth} $height={slideHeight}>
      <CarouselWrapper translateX={translateX} isTransition={isTransition}>
        {loop && (
          <Slide
            src={slides[totalSlides - 1].imageSrc}
            alt={slides[totalSlides - 1].imageAlt}
            onClick={(e) => handleClick(e, slides[totalSlides - 1].onClick)}
          />
        )}
        {slides.map((slide, index) => (
          <Slide
            key={index}
            src={slide.imageSrc}
            alt={slide.imageAlt}
            onClick={(e) => handleClick(e, slide.onClick)}
            onMouseDown={handleMouseDown}
          />
        ))}
        {loop && (
          <Slide
            src={slides[0].imageSrc}
            alt={slides[0].imageAlt}
            onClick={(e) => handleClick(e, slides[0].onClick)}
          />
        )}
      </CarouselWrapper>
      <CarouselButton
        position={"left"}
        onClick={handlePrev}
        width={`${buttonSize}px`}
        height={`${buttonSize}px`}
      >
        <PrevIcon width={`${iconSize}px`} height={`${iconSize}px`} />
      </CarouselButton>
      <CarouselButton
        position={"right"}
        onClick={handleNext}
        width={`${buttonSize}px`}
        height={`${buttonSize}px`}
      >
        <NextIcon width={`${iconSize}px`} height={`${iconSize}px`} />
      </CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
