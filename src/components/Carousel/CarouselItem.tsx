import Image from "@components/Image";
import { ItemContainer } from "./CarouselItem.styles";

interface CarouselItemProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: string;
  imageHeight?: string;
  onClick?: () => void;
  className?: string;
}

const CarouselItem = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  onClick,
  className,
}: CarouselItemProps) => {
  return (
    <ItemContainer className={className} onClick={onClick}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </ItemContainer>
  );
};

export default CarouselItem;
