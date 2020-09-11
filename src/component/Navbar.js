import React, { Component, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
// class Navbar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     console.log(this.context);

//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themecontext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themecontext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1 className="text-center mb-3">Context App</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "logged in" : "logged out"}
//                   </div>
//                   <ul className="list-unstyled list-inline-block text-decoration-none ">
//                     <li> Home </li>

//                     <li>About</li>

//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }
const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1 className="text-center mb-3">Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "logged in" : "logged out"}
      </div>
      <ul className="list-unstyled list-inline-block text-decoration-none ">
        <li> Home </li>

        <li>About</li>

        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
