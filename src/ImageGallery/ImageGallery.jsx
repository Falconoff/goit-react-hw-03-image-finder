import { Component } from 'react';

export default class Gallery extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('prevProps.searchQuery', prevProps.searchQuery);
      console.log('this.props.searchQuery', this.props.searchQuery);
    }
  }

  render() {
    // return <ul className="gallery"></ul>;
    return <h2>{this.props.searchQuery}</h2>;
  }
}
