import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import BooksList from "./components/BooksList";
import Search from "./components/Search";
import Title from "./components/Title";
import Button from "./components/Button";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDebounce } from "use-debounce";

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const [updateAllBooks, setUpdateAllBooks] = useState([]);

  const [transIdToshelves, setTransIdToshelves] = useState(new Map());

  const [value] = useDebounce(query, 500);
  const getInputValue = (inputVal) => {
    setQuery(inputVal);
  };

  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setBooks(res);
      setTransIdToshelves(createMap(res));
    });
  }, []);

  useEffect(() => {
    let searchTimer = setTimeout(() => {
      if (value) {
        BooksAPI.search(value).then((res) => {
          if (res.error) {
            setSearchBooks([]);
          } else {
            setSearchBooks(res);
          }
        });
      } else {
        setSearchBooks([]);
      }
    }, 300);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [value]);

  useEffect(() => {
    const transBookToShelf = searchBooks.map((sBook) => {
      if (transIdToshelves.has(sBook.id)) {
        return transIdToshelves.get(sBook.id);
      } else {
        return sBook;
      }
    });
    setUpdateAllBooks(transBookToShelf);
  }, [searchBooks, transIdToshelves]);

  const createMap = (books) => {
    const map = new Map();
    books.map((book) => {
      return map.set(book.id, book);
    });
    return map;
  };
  const changeShelf = (book, shelfName) => {
    setBooks(
      books.map((b) => {
        if (b.id === book.id) {
          b.shelf = shelfName;
        } else {
          return b;
        }
        return b;
      })
    );
    BooksAPI.update(book, shelfName).then((res) => console.log(res));
  };

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Search
              queryValue={query}
              value={getInputValue}
              searchResult={updateAllBooks}
              changeShelf={changeShelf}
            />
          </Route>

          <Route path="/">
            <div className="list-books">
              <Title />
              <BooksList allBooks={books} changeShelf={changeShelf} />
              <Button />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
