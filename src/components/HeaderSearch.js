import React from "react";
import PropTypes from "prop-types";

import "./BookList.css";

function HeaderSearch(props){
    const { onKeyUp } = props;
    return (
      <div className="header">
        <div className="input_search">
          <i class="fas fa-search"></i>
          <input type="text" onKeyUp={onKeyUp} />
        </div>
      </div>
    );
}
HeaderSearch.propTypes = {
  onKeyUp: PropTypes.func,
};
export default HeaderSearch;
