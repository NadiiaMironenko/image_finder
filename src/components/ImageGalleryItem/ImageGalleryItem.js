import React from "react";
import PropTypes from "prop-types";
import styles from "./imageGalleryItem.module.css";

function ImageGalleryItem({
  webSrc = "",
  largeImageURL = "",
  onClick,
  alt = "",
}) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webSrc}
        alt={alt}
        onClick={() => onClick(largeImageURL)}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(Object),
  byClick: PropTypes.func,
};

export default ImageGalleryItem;
