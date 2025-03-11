import {
  CardContent,
  Container,
  ImageContainer,
  Title,
  Description,
} from "./Card.styles";

export interface CardProps {
  image?: React.ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
}

const Card = ({
  image,
  title,
  description,
  onClick,
  width,
  height,
  className,
}: CardProps) => {
  return (
    <Container
      className={className}
      onClick={onClick}
      width={width}
      height={height}
    >
      <ImageContainer>{image}</ImageContainer>
      <CardContent>
        <Title width={width}>{title}</Title>
        {description && <Description width={width}>{description}</Description>}
      </CardContent>
    </Container>
  );
};

export default Card;
