import React from 'react';
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
