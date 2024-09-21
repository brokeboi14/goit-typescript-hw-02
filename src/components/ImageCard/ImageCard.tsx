import css from './ImageCard.module.css';
import { Image } from '../../api/images-api';

interface ImageCardProps {
  image: Image;
  onImageClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const ImageCard: React.FC<{ image: Image; onImageClick: (srcUrl: string, altDescription: string, authorName: string, likes: number, largeDescription: string) => void }> = ({ image, onImageClick }) => {
  return (
    <div className={css.imageCardContainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image.urls.regular, image.alt_description, image.user.name, image.likes, image.alt_description)}
      />
      <ul className={css.imageCardHoverInfo}>
        <li className={css.imageCardHoverInfoItem}>
          {image.user.name}
        </li>
        <li className={css.imageCardHoverInfoItem}>
          {image.likes}
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;