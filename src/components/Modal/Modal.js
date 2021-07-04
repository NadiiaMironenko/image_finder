import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./modal.module.css";

export default class Modal extends Component {
  static propTypes = {
    onBackdropClick: PropTypes.func,
    image: PropTypes.string.isRequired,
  };

  render() {
    const { onBackdropClick, image } = this.props;
    return (
      <>
        <section className={style.Overlay} onClick={onBackdropClick}>
          <div className={style.Modal}>
            <img src={image} alt="backdropImage" />
          </div>
        </section>
      </>
    );
  }
}
