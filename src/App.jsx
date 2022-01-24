import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { BallTriangle } from 'react-loader-spinner';

import Searchbar from './Searchbar';
import Gallery from './ImageGallery';
import Message from './Message';
import fetchImgs from './service/apiService';

// import { AppContainer } from './App.styled';
import './App.css';

class App extends Component {
  state = {
    searchQuery: '',
    imgArr: [],
    // isLoading: false,
    error: null,
    status: 'idle',
  };

  // 	Паттерн state machine - машина состояний. 4 состояния (status):
  //  'idle' - простой, бездействие
  //  'pending' - ожидается выполнение
  //  'resolved' - выполнилось с результатом
  //  'rejected' - отклонено

  formSubmitHandler = searchQuery => {
    console.log('got from Form: ', searchQuery);
    this.setState({ searchQuery });
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '24083416-1e00017d670d2bdb130fa2702';
    const URL = 'https://pixabay.com/api';
    const page = 1;

    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log('prevState.searchQuery', prevState.searchQuery);
      console.log('this.state.searchQuery', this.state.searchQuery);

      // display Loader and reset previous query result
      // this.setState({ isLoading: true, imgArr: [] });
      this.setState({ status: 'pending' });

      // setTimeout(() => {
      //   fetch(
      //     `${URL}/?image_type=photo&orientation=horizontal&q=${this.state.searchQuery}&page=${page}&per_page=12&key=${API_KEY}`,
      //   ).then(result => {
      //     if (result.ok) {
      //       return result.json();
      //     }
      //     return Promise.reject(
      //       new Error(`There is nothing with ${this.state.searchQuery}`),
      //     );
      //   });

      fetchImgs(this.state.searchQuery, 1)
        .then(result =>
          this.setState({ imgArr: result.hits, status: 'resolved' }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));

      // .finally(this.setState({ isLoading: false }));

      // async function getImages(query) {
      //   const URL = 'https://pixabay.com/api';
      //   const API_KEY = '24083416-1e00017d670d2bdb130fa2702';
      //   const page = 1;

      //   const response = await fetch(
      //     `${URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
      //   );
      //   const result = await response.json();
      //   const newArray = await result.hits;
      //   console.log('newArray:', newArray);

      //   return newArray;
      // }

      // async function addImages(query) {
      //   const imgArray = await getImages(query);
      //   console.log('imgArray:', imgArray);
      //   return imgArray;
      //   // this.setState({ imgArr: imgArray });
      // }

      // const qwe = getImages(this.state.searchQuery);
      // console.log('qwe:', qwe);
      // this.setState(qwe => (imgArr: qwe));

      // }, 2000);
    }
  }

  // 	Паттерн state machine - машина состояний. 4 состояния (status):
  //  'idle' - простой, бездействие
  //  'pending' - ожидается выполнение
  //  'resolved' - выполнилось с результатом
  //  'rejected' - отклонено

  render() {
    // const { error, searchQuery, imgArr, isLoading, status } = this.state;
    const { error, imgArr, status } = this.state;
    const imgArrLength = imgArr.length;

    // if (status === 'idle') {
    //   return <h1>Please, enter what you want to see</h1>;
    // }

    // if (status === 'pending') {
    //   return <h1>Is loading...</h1>;
    // }

    // if (status === 'resolved') {
    //   return imgArr.length === 0 ? (
    //     <h1>Nothing was found ((</h1>
    //   ) : (
    //     <Gallery imgArr={imgArr} />
    //   );
    // }

    // if (status === 'rejected') {
    //   return <h1>{error.message}</h1>;
    // }

    return (
      <>
        <ToastContainer autoClose={3000} />
        <Searchbar onFormSubmit={this.formSubmitHandler} />
        {/* ====================================== */}

        {status === 'idle' && (
          <Message text={'Please, enter what you want to see'} />
        )}

        {status === 'pending' && <Message text={'Is loading...'} />}
        {/* {status === 'pending' && (
          <BallTriangle
            heigth="100"
            width="100"
            color="grey"
            ariaLabel="loading"
          />
        )} */}

        {status === 'resolved' && imgArrLength > 0 && (
          <Gallery imgArr={imgArr} />
        )}

        {status === 'resolved' && imgArrLength === 0 && (
          <Message text={'Nothing was found'} />
        )}

        {status === 'rejected' && <Message text={error.message} />}

        {/* ====================================== */}
        {/* {error && <h1>{error.message}</h1>} */}
        {/* {searchQuery === '' && <h1>Please, enter what you want to see</h1>} */}
        {/* {isLoading && <h1>Is loading...</h1>} */}
        {/* {searchQuery !== '' && imgArr.length === 0 && !isLoading && (
          <h1>Nothing was found ((</h1>
        )} */}
        {/* {console.log('== App == this.state.imgArr:', this.state.imgArr)} */}
        {/* {console.log(
          '== App == this.state.imgArr.length:',
          this.state.imgArr.length,
        )} */}
        {/* {imgArr.length !== 0 && <Gallery imgArr={imgArr} />} */}
      </>
    );
  }
}

export default App;
