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

export default function Gallery({ imgArr }) {
  // componentDidUpdate(prevProps, prevState) {
  //   const API_KEY = '24083416-1e00017d670d2bdb130fa2702';
  //   const URL = 'https://pixabay.com/api';
  //   const page = 1;

  //   if (prevProps.searchQuery !== this.props.searchQuery) {
  //     console.log('prevProps.searchQuery', prevProps.searchQuery);
  //     console.log('this.props.searchQuery', this.props.searchQuery);

  //     this.setState({ isLoading: true });

  //     setTimeout(() => {
  //       fetch(
  //         `${URL}/?image_type=photo&orientation=horizontal&q=${this.props.searchQuery}&page=${page}&per_page=12&key=${API_KEY}`,
  //       )
  //         .then(res => {
  //           if (res.ok) {
  //             return res.json();
  //           }
  //           return Promise.reject(
  //             new Error(`There is nothing with ${this.props.searchQuery}`),
  //           );
  //         })
  //         .then(result => this.setState({ imgArr: result }))
  //         .catch(error => this.setState({ error }))
  //         .finally(this.setState({ isLoading: false }));
  //     }, 1000);
  //   }
  // }

  // render() {
  // return <ul className="gallery"></ul>;
  return (
    <div>
      {/* {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.imgArr.length === 0 && <h1>Nothing found ((</h1>}
        {!this.props.searchQuery && <h1>Enter your search ^</h1>}
        {this.state.isLoading && <h1>Is loading...</h1>} 
        <h2>{this.props.searchQuery}</h2> */}
      {console.log('== Gallery == imgArr:', imgArr.length)}
      <ImageGallery>
        {imgArr.map(({ id, webformatURL, largeImageURL }) => (
          // console.log()
          <ImageGalleryItem key={webformatURL} src={webformatURL} />
        ))}
      </ImageGallery>
    </div>
  );
  // }
}

Gallery.propTypes = {
  imgArr: PropTypes.array.isRequired,
};
