import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Item, Image } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {

      clckHendler = () => {
        this.props.onClick(this.props.imgLarge);
    }

  render() {
    const { id, img } = this.props;
    const { clckHendler } = this;
    return (
    <Item key={id}>
       <Image onClick={clckHendler} src={img} alt="" />
    </Item>
    )
  }
}


ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string.isRequired,
  imgLarge: PropTypes.string.isRequired,
}