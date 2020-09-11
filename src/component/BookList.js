import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";
// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ color: theme.syntax, background: theme.bg }}
//       >
//         <ul className="list-unstyled  ">
//           <li style={{ background: theme.ui }}>The old man and the sea</li>
//           <li style={{ background: theme.ui }}>Paradise Regain</li>
//           <li style={{ background: theme.ui }}>To Deffodill</li>
//         </ul>
//       </div>
//     );
//   }
// }
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul className="list-unstyled ">
        {books.map((book) => {
          return (
            <li style={{ background: theme.ui }} key={book.id}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
