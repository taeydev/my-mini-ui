import PictureIcon from "@/icons/PictureIcon";
import {
  CardContent,
  Container,
  ImageContainer,
  Title,
  Description,
} from "./Card.styles";
import { colors } from "@/styles/designSystem";

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
      <ImageContainer>
        {image ? (
          image
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <PictureIcon 
              width="38px" 
              height="38px" 
              color={colors.gray[400]} 
              style={{ width: '38px', height: '38px' }}
            />
          </div>
        )}
      </ImageContainer>
      <CardContent>
        <Title width={width}>{title}</Title>
        {description && <Description width={width}>{description}</Description>}
      </CardContent>
    </Container>
  );
};

export default Card;
