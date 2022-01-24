import PropTypes from 'prop-types';

import { GalleryListItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ src }) {
  return (
    <GalleryListItem>
      <img src={src} alt="" />
    </GalleryListItem>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
};
