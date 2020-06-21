import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Current you have {books.length} books to geth through....</p>
    </div>
  );
};

export default NavBar;
