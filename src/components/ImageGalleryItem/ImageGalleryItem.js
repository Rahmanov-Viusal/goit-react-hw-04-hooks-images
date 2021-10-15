import PropTypes from 'prop-types';
import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  openModal,
  webformatURL,
  largeImageURL,
  tags = 'image',
}) {
  const handleClickImage = e => {
    openModal(e.target.dataset.large);
  };
  return (
    <li className={s.Item}>
      <img
        onClick={handleClickImage}
        src={webformatURL}
        alt={tags}
        className={s.Image}
        data-large={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

// export default ImageGalleryItem;
