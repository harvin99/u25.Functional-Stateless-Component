import React from "react";
import PropTypes from "prop-types" 

import ButtonAddToCart from './ButtonAddToCart'
import "./BookList.css";

function Book(props){
    const { book } = props;
    return (
      <div className="card">
        <div className = "avatar"><img src={book.coverUrl ? book.coverUrl : book.image} alt="" /></div>
        <h2> {book.title} </h2>
        <p> {book.description} </p>
        <ButtonAddToCart 
          label = "Add to cart"
        />
      </div>
    );
}
Book.propTypes = {
    book : PropTypes.shape({
      title: PropTypes.string,
      description : PropTypes.string,
      coverUrl : PropTypes.string,
      image : PropTypes.string
    })
}
export default Book;