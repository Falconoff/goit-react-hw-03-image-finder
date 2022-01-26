import { Component } from 'react';

import { Overlay, ModalContainer } from './Modal.styled';

export default class Modal extends Component {
  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  overlayClickHandler = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.overlayClickHandler}>
        <ModalContainer>
          <img src={this.props.srcLI} alt="" />
        </ModalContainer>
      </Overlay>
    );
  }
}
