import React from "react";
import BookContextProvider from "./contexts/BookContext";
import NavBar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
