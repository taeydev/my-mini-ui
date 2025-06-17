import { Button } from "./ImageButton.styles";
import React from "react";

export interface ImageButtonProps {
  image: React.ReactNode;
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
      aria-label={alt}
    >
      {image}
    </Button>
  );
};

export default ImageButton;
