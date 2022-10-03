import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark container-fluid">
      <h4>
        <Link className="link" to="/">
          Home
        </Link>
      </h4>
      <h4>
        <Link className="link" to="/yardsales">
          Yardsales
        </Link>
      </h4>
      <h4>
        <Link className="link" to="/createyardsale">
          Post Yardsale
        </Link>
      </h4>
      <h4>
        <Link className="link" to="/login">
          Login
        </Link>
      </h4>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <h3>
//         <Link to="/">Home</Link>
//       </h3>
//       <h3>
//         <Link to="/yardsale">Post</Link>
//       </h3>
//     </div>
//   );
// };

// export default Navbar;
