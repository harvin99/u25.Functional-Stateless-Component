import React from "react";
import PropTypes from "prop-types";

import "./BookList.css";

function ButtonAddToCart(props) {
    const {label} = props;
    return (
      <div className="btn">
        <button>
          { label }
        </button>
      </div>
    );
}
ButtonAddToCart.propTypes = {
  label: PropTypes.string.isRequired,
};
export default ButtonAddToCart;