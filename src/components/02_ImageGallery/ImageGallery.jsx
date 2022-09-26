import React from 'react';
import PropTypes from "prop-types";
import ImageGalleryItem from 'components/03_ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';


export default function ImageGallery({ items, toggleModal }) {
  return (
  <Gallery>
    {
      items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          img={webformatURL}
          onClick={toggleModal}
          imgLarge={largeImageURL} />
      ))}
      </Gallery>
  );
};

ImageGallery.propTypes = {
      toggleModal: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
        webformatURL: PropTypes.string,
        id: PropTypes.number,
        largeImageURL: PropTypes.string
    }))
}