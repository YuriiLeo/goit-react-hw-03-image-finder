import React from 'react';
import { BallTriangle } from 'react-loader-spinner'
import { Overlay } from 'components/06_Modal/Modal.styled';
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');

export const Loader = props => {
  return createPortal(
      <Overlay>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
      </Overlay>,
      modalRoot,
    );
  }

