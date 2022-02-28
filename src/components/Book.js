import React from "react";
import PropTypes from "prop-types";
const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: props.rStateBook.imageLinks
              ? `url(${props.rStateBook.imageLinks.thumbnail})`
              : "",
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={props.rStateBook.shelf ? props.rStateBook.shelf : "none"}
            onChange={(e) => {
              props.changeShelf(props.rStateBook, e.target.value);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.rStateBook.title}</div>
      <div className="book-authors">{`${props.rStateBook.authors}`}</div>
    </div>
  );
};
Book.propTypes = {
  rStateBook: PropTypes.object,
};
export default Book;
