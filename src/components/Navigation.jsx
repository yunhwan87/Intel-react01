import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      Navigation
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/Counter">Counter</NavLink>
      <NavLink to="/TodoList">TodoList</NavLink>
      <NavLink to="/UpDown">UpDown</NavLink>
      <a href="https://www.naver.com" target="_blank">
        Naver
      </a>
    </nav>
  );
}

export default Navigation;
