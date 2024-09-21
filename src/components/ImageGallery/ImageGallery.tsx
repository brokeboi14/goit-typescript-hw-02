import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../api/images-api';


interface ImageGalleryProps {
  images: Image[];
  onImageClick: (
    regularUrl: string,
    altDescription: string,
    userName: string,
    likes: number,
    description?: string
  ) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageGalleryList}>
      {images.map(image => {
        return (
          <li className={css.imageGalleryListItem} key={image.id}>
            <ImageCard
              image={image}
              onImageClick={() =>
                onImageClick(
                  image.urls.regular,
                  image.alt_description,
                  image.user.name,
                  image.likes,
                  image.description,
                )
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;