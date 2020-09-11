import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import ThemeContextProvider from "./context/ThemeContext";
import ToggleTheme from "./component/ToggleTheme";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>

          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
