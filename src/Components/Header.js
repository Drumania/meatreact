import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Logo</h1>
        <h2>
          El secreto
          <br />
          de tu cocina
        </h2>
      </div>
      <ul>
        <li>
          <a href="#!" target="_blank">
            facebook
          </a>
        </li>
        <li>
          <a href="#!" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="#!" target="_blank">
            Youtube
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
