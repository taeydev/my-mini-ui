import { useCallback, useState } from "react";
import {
  CarouselContainer,
  CarouselTrack,
  SkeletonItem,
  TrackItem,
} from "./InteractiveCarousel.styles";

export interface ImageItem {
  src: string;
  onClick?: () => void;
}

interface InteractiveCarouselProps {
  imageItems: ImageItem[];
  isLoading?: boolean;
}
/**
 * 3D 입체효과의 Carousel
 */
const InteractiveCarousel = ({
  imageItems,
  isLoading,
}: InteractiveCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + imageItems.length) % imageItems.length
    );
  }, [imageItems.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imageItems.length);
  }, [imageItems.length]);

  if (isLoading) {
    console.log("로딩중...");
    return (
      <CarouselContainer>
        <CarouselTrack>
          {[...Array(3)].map((_, i) => (
            <SkeletonItem
              key={i}
              position={i === 0 ? "left" : i === 1 ? "center" : "right"}
            />
          ))}
        </CarouselTrack>
      </CarouselContainer>
    );
  }

  if (imageItems.length === 0) {
    return null;
  }

  const prevIndex = (currentIndex - 1 + imageItems.length) % imageItems.length;
  const nextIndex = (currentIndex + 1) % imageItems.length;

  const handleClickItem = (item: ImageItem) => {
    item.onClick?.();
  };

  return (
    <CarouselContainer>
      <CarouselTrack>
        <TrackItem
          position="left"
          key={prevIndex}
          imageSrc={imageItems[prevIndex].src}
          imageAlt="image"
          imageWidth="200px"
          imageHeight="200px"
          onClick={prevSlide}
        />
        <TrackItem
          position="center"
          key={currentIndex}
          imageSrc={imageItems[currentIndex].src}
          imageAlt="image"
          imageWidth="200px"
          imageHeight="200px"
          onClick={() => handleClickItem(imageItems[currentIndex])}
        />
        <TrackItem
          position="right"
          key={nextIndex}
          imageSrc={imageItems[nextIndex].src}
          imageAlt="image"
          imageWidth="200px"
          imageHeight="200px"
          onClick={nextSlide}
        />
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default InteractiveCarousel;
