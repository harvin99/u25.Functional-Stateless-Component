import React, { Component } from "react";
import axios from "axios";

import "./BookList.css";

import HeaderSearch from "./HeaderSearch"
import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: [],
    };
  }
  componentDidMount() {
    axios.get("https://appbooks-tvh.herokuapp.com/api/books").then(
      (result) => {
        this.setState({
          isLoaded: true,
          books: result.data.books,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }
  onKeyUp = (event) => {
    let text = event.target.value;
    //console.log(text);
    if (!text) return;
    //Remove space and switch to Lower case
    text = text.trim().toLowerCase();
    if (!text) return;
    if (event.keyCode === 13) {
      let url = "https://appbooks-tvh.herokuapp.com/api/books/search?q=" + text;
      axios.get(url).then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result.data.books,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    }
  };
  render() {
    const { books } = this.state;
    return (
      <div className="container">
        <HeaderSearch onKeyUp = {this.onKeyUp} />
        <div className="main">
          {books.map((book, index) => (
            <Book book={book} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default BookList;
