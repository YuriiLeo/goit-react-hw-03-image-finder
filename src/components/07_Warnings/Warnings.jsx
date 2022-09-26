import React from 'react';
import PropTypes from "prop-types";
import { Title } from './Warnings.styled';

export default function Warnings({text}) {
  return (
      <Title>{text}</Title>
  )
}

Warnings.propTypes = {
  text: PropTypes.string.isRequired
}
