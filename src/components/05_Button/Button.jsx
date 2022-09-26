import React from 'react';
import PropTypes from "prop-types";
// import ButtonStyled from "components/05_Button/Button";

export default function Button({loadMore}) {
  return (
    <button className='Button' type='button' onClick={loadMore}>More images</button>
  )
}

Button.propTypes = {
  loadMore:PropTypes.func,
}