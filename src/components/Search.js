import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";
const Search = (props) => {
  const changeInputHandler = (e) => {
    const inputValue = e.target.value;
    props.value(inputValue);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={props.queryValue}
            onChange={changeInputHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.searchResult.map((rStateBook) => {
            return (
              <li key={rStateBook.id}>
                <Book rStateBook={rStateBook} changeShelf={props.changeShelf}  />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
Search.propTypes = {
  allBooks: PropTypes.array,
  searchResult: PropTypes.array,
  queryValue: PropTypes.string,
  value: PropTypes.func
}
export default Search;
