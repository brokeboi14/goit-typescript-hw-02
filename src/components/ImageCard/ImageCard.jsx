import css from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={css.imageCardContainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onImageClick}
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