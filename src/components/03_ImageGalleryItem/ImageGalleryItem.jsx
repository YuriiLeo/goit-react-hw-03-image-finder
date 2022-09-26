import React, { Component } from 'react';
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
