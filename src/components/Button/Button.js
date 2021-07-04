import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({ incrementPage }) {
  return (
    <div>
      <button className={styles.Button} onClick={incrementPage}>
        Загрузить больше
      </button>
    </div>
  );
}

Button.propTypes = {
  incrementPage: PropTypes.func,
};

export default Button;
