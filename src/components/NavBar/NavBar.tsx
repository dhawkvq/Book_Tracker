import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as BookIcon } from "../../images/book-open.svg";
import "./navBar.css";

export const NavBar: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="navBar">
      <NavLink className="appIconContainer" to="/">
        <BookIcon />
        <h1>Shelf</h1>
      </NavLink>
      <NavLink to={pathname === "/" ? "/search" : "/"}>
        {pathname === "/" ? "Search" : "Home"}
      </NavLink>
    </div>
  );
};
