import PropTypes from 'prop-types';

import ImageGalleryItem from './../ImageGalleryItem';

import { ImageGallery } from './ImageGallery.styled';

export default function Gallery({ imgArr, onImgClick }) {
  return (
    <ImageGallery>
      {imgArr.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          largeImgSrc={largeImageURL}
          onImgClick={onImgClick}
        />
      ))}
    </ImageGallery>
  );
}

Gallery.propTypes = {
  imgArr: PropTypes.array.isRequired,
};
