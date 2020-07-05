import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <div className="search-btn">
      <ion-icon id="" name="search"></ion-icon>
    </div>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
