// import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './../ImageGalleryItem';

import { ImageGallery } from './ImageGallery.styled';

// export default class Gallery extends Component {
//   state = {
//     imgArr: [],
//     // isLoading: false,
//     // error: null,
//   };

export default function Gallery({ imgArr, onImgClick }) {
  return (
    <>
      {console.log('== Gallery == imgArr:', imgArr.length)}
      <ImageGallery>
        {imgArr.map(({ id, webformatURL, largeImageURL }) => (
          // console.log()
          <ImageGalleryItem
            key={webformatURL}
            src={webformatURL}
            largeImgSrc={largeImageURL}
            onImgClick={onImgClick}
          />
        ))}
      </ImageGallery>
    </>
  );
  // }
}

Gallery.propTypes = {
  imgArr: PropTypes.array.isRequired,
};
