import { Link, NavLink } from "react-router-dom";

import userPhoto from "../../assets/user.png";
import { useContext } from "react";
import { NewsContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(NewsContext);

  const navLink = (
    <>
      <li>
        {" "}
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );

  // handle log out button ...........
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logout successfully!!!");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="w-10 rounded-full">
          <img src={userPhoto} />
        </div>
        {user ? (
          <Link to="/login">
            {" "}
            <button
              onClick={handleLogOut}
              className="btn rounded btn-sm bg-gray-900 text-white"
            >
              Sign Out
            </button>
          </Link>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn rounded btn-sm bg-gray-900 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
