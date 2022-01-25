import PropTypes from 'prop-types';

import { GalleryListItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ src, onImgClick, largeImgSrc }) {
  return (
    <GalleryListItem onClick={() => onImgClick(largeImgSrc)}>
      <img src={src} alt="" />
    </GalleryListItem>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
};
