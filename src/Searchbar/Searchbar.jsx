import { Component } from 'react/cjs/react.production.min';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChange = evt => {
    this.setState({ inputValue: evt.currentTarget.value.toLowerCase() });
  };

  onSubmit = evt => {
    evt.preventDefault();

    // for empty query
    if (this.state.inputValue.trim() === '') {
      toast.warn('Please, enter your query');
      return;
    }

    this.props.onFormSubmit(this.state.inputValue);

    // reset Form
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormBtn type="submit">
            <BsSearch style={{ width: 24, height: 24, fill: 'blue' }} />
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            name="inputValue"
            value={this.state.inputValue}
            onChange={this.onChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
