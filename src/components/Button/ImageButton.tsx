import Image from "../Image";
import { Button } from "./ImageButton.styles";

export interface ImageButtonProps {
  image: string;
  alt: string;
  onClick: () => void;
  width?: string;
  height?: string;
  className?: string;
}

const ImageButton = ({
  image,
  alt,
  onClick,
  width = "30px",
  height = "30px",
  className,
}: ImageButtonProps) => {
  return (
    <Button
      onClick={onClick}
      width={width}
      height={height}
      className={className}
    >
      <Image src={image} alt={alt} width={width} height={width} />
    </Button>
  );
};

export default ImageButton;
