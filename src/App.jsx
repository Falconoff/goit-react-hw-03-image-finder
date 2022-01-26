import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar';
import Gallery from './ImageGallery';
import Message from './Message';
import imagesAPI from './service/apiService';
import ShowLoader from './Loader';
import ShowMoreBtn from './Button';
import Modal from './Modal';

import './App.css';

class App extends Component {
  state = {
    searchQuery: '',
    imgArr: [],
    error: null,
    status: 'idle',
    currenPage: 1,
    showModal: false,
    largeImgSrc: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currenPage !== this.state.currenPage
    ) {
      this.setState({ status: 'pending' });

      this.fetchImages(this.state.searchQuery, this.state.currenPage);
    }
  }

  formSubmitHandler = searchQuery => {
    this.setState({ imgArr: [], currenPage: 1, searchQuery });
  };

  loadMoreHandler = () => {
    this.setState(prevState => {
      return { currenPage: prevState.currenPage + 1 };
    });
  };

  fetchImages = (query, page) => {
    // setTimeout for to see the Loader
    // setTimeout(() => {
    imagesAPI
      .fetchImgs(query, page)
      .then(response => {
        this.setState(prevState => ({
          imgArr: [...prevState.imgArr, ...response],
          status: 'resolved',
        }));
      })

      .catch(error => this.setState({ error, status: 'rejected' }));
    // }, 2000);
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handleImageClick = imgSrs => {
    this.setState({ largeImgSrc: imgSrs });
    this.toggleModal();
  };

  // -----------------------------------------------------------------
  // 	Паттерн "state machine" - машина состояний. 4 состояния (status):
  //  'idle' - простой, бездействие
  //  'pending' - ожидается выполнение
  //  'resolved' - выполнилось с результатом
  //  'rejected' - отклонено

  render() {
    const { error, imgArr, status, showModal } = this.state;
    const imgArrLength = imgArr.length;

    return (
      <>
        <ToastContainer autoClose={3000} />
        <Searchbar onFormSubmit={this.formSubmitHandler} />

        {status === 'idle' && (
          <Message text={'Please, enter what you want to see'} />
        )}

        {imgArrLength > 0 && (
          <Gallery imgArr={imgArr} onImgClick={this.handleImageClick} />
        )}

        {status === 'resolved' && imgArrLength > 0 && (
          <ShowMoreBtn onClickHandler={this.loadMoreHandler} />
        )}

        {status === 'pending' && <ShowLoader />}

        {status === 'resolved' && imgArrLength === 0 && (
          <Message text={`No matches found for "${this.state.searchQuery}"`} />
        )}

        {status === 'rejected' && <Message text={error.message} />}

        {showModal && (
          <Modal onClose={this.toggleModal} srcLI={this.state.largeImgSrc} />
        )}
      </>
    );
  }
}

export default App;
