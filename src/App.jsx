import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { BallTriangle } from 'react-loader-spinner';

import Searchbar from './Searchbar';
import Gallery from './ImageGallery';
import Message from './Message';
import imagesAPI from './service/apiService';
import ShowLoader from './Loader';
import ShowMoreBtn from './Button';

// import { AppContainer } from './App.styled';
import './App.css';

class App extends Component {
  state = {
    searchQuery: '',
    imgArr: [],
    error: null,
    status: 'idle',
    currenPage: 1,
  };

  formSubmitHandler = searchQuery => {
    console.log('got from Form: ', searchQuery);
    this.setState({ searchQuery });
  };

  loadMoreHandler = () => {
    console.log('loadMoreHandler');
    this.setState(prevState => {
      return { currenPage: prevState.currenPage + 1 };
    });
  };

  fetchImages = (query, page) => {
    setTimeout(() => {
      // const query = this.state.searchQuery;
      // console.log(fetchImgs);

      imagesAPI
        .fetchImgs(query, page)
        .then(result =>
          this.setState({ imgArr: result.hits, status: 'resolved' }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }, 2000);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currenPage !== this.state.currenPage
    ) {
      // console.log('prevState.searchQuery', prevState.searchQuery);
      // console.log('this.state.searchQuery', this.state.searchQuery);

      this.setState({ status: 'pending' });

      this.fetchImages(this.state.searchQuery, this.state.currenPage);

      // setTimeout(() => {
      //   const query = this.state.searchQuery;
      //   // console.log(fetchImgs);

      //   imagesAPI
      //     .fetchImgs(query, 1)
      //     .then(result =>
      //       this.setState({ imgArr: result.hits, status: 'resolved' }),
      //     )
      //     .catch(error => this.setState({ error, status: 'rejected' }));
      // }, 2000);
    }
  }

  // -----------------------------------------------------------------
  // 	Паттерн "state machine" - машина состояний. 4 состояния (status):
  //  'idle' - простой, бездействие
  //  'pending' - ожидается выполнение
  //  'resolved' - выполнилось с результатом
  //  'rejected' - отклонено

  render() {
    const { error, imgArr, status } = this.state;
    const imgArrLength = imgArr.length;

    return (
      <>
        <ToastContainer autoClose={3000} />
        <Searchbar onFormSubmit={this.formSubmitHandler} />
        {/* ====================================== */}

        {status === 'idle' && (
          <Message text={'Please, enter what you want to see'} />
        )}

        {status === 'pending' && <ShowLoader />}

        {status === 'resolved' && imgArrLength > 0 && (
          <Gallery imgArr={imgArr} />
        )}

        {status === 'resolved' && imgArrLength === 0 && (
          <Message text={`No matches found for "${this.state.searchQuery}"`} />
        )}

        {status === 'rejected' && <Message text={error.message} />}

        <ShowMoreBtn onClickHandler={this.loadMoreHandler} />
      </>
    );
  }
}

export default App;
