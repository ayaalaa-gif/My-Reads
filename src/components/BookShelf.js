import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BooksShelf = (props) => {
  const bookShelfTitle = props.title;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.readingStates.map((rStateBook) => {
            return (
              <li key={rStateBook.id}>
                <Book rStateBook={rStateBook} changeShelf={props.changeShelf} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

BooksShelf.propTypes = {
  readingStates: PropTypes.array,
};
export default BooksShelf;
