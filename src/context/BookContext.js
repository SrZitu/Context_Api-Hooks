import React, { createContext, useContext, useState } from "react";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The old man and the sea", id: 1 },
    { title: "Paradise Regained", id: 2 },
    { title: "To Daffodils", id: 3 },
    { title: "Othello", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
