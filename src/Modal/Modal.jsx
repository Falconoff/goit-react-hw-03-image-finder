import { Component } from 'react';

import { Overlay, ModalContainer } from './Modal.styled';

export default class Modal extends Component {
  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      console.log('Escape click');

      this.props.onClose();
    }
  };

  componentDidMount() {
    console.log('== componentDidMount == Modal');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('== componentDidUnmount == Modal');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  overlayClickHandler = evt => {
    console.log('evt.target', evt.target);
    console.log('evt.currentTarget', evt.currentTarget);

    if (evt.target === evt.currentTarget) {
      console.log('overlay Click ');
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.overlayClickHandler}>
        <ModalContainer>
          <img src="" alt="" />
          <p>Hello World!</p>
        </ModalContainer>
      </Overlay>
    );
  }
}
