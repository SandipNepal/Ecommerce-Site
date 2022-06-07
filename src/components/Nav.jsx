import React from "react";

function Nav() {
  return (
    <div className="navBar flex-container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/News">News</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;

