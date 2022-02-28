import React from "react";
import BooksShelf from "./BookShelf";
import PropTypes from "prop-types";
const BooksList = (props) => {
  const currentlyReading = props.allBooks.filter(
    (cBook) => cBook.shelf === "currentlyReading"
  );
  const wantsToRead = props.allBooks.filter(
    (cBook) => cBook.shelf === "wantToRead"
  );
  const read = props.allBooks.filter((cBook) => cBook.shelf === "read");
  return (
    <div className="list-books-content">
      <div>
        {/* currently reading  */}
        <BooksShelf
          readingStates={currentlyReading}
          title={"Currently Reading"}
          changeShelf={props.changeShelf}
        />
        {/* wants to read*/}
        <BooksShelf
          readingStates={wantsToRead}
          title={"Want To Read"}
          changeShelf={props.changeShelf}
        />
        {/* read */}
        <BooksShelf
          readingStates={read}
          title={"Read"}
          changeShelf={props.changeShelf}
        />
      </div>
    </div>
  );
};
BooksList.propTypes = {
  allBooks: PropTypes.array
}
export default BooksList;
