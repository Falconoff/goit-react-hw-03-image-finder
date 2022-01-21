import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar';
import Gallery from './ImageGallery';

import './App.css';

class App extends Component {
  state = { searchQuery: '' };

  formSubmitHandler = searchQuery => {
    console.log('got from Form: ', searchQuery);
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <ToastContainer autoClose={3000} />
        <Searchbar onFormSubmit={this.formSubmitHandler} />
        <Gallery searchQuery={this.state.searchQuery} />
      </>
    );
  }
}

export default App;
