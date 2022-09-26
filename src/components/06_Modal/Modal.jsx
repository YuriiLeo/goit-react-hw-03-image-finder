import React, { Component } from 'react';
import PropTypes from "prop-types";
import { createPortal } from 'react-dom';
import { Overlay, ModalSize } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');



export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown )
  }

  handleKeyDown = e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        console.log("press ESC");
        this.props.onClick();
      }
    }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  }

  render() {
    const { handleBackdropClick } = this;
    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalSize>
          {this.props.children}
        </ModalSize>
      </Overlay>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func,
  path: PropTypes.string.isRequired
}