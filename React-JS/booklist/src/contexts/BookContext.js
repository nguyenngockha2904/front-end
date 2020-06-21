import React, { createContext, useState, useReducer, useEffect } from "react";
import uuid from "uuid/dist/v1";
import { BookReducer } from "../reducers/BookReducers";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   { title: "name of the wind", author: "patrick rothfuss", id: 1 },
  //   { title: "the final empire", author: "barandon sanderson", id: 2 },
  // ]);
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };
  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
