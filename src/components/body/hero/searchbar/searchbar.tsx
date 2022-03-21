import React from "react";
import "./searchbar.css"

const Searchbar = () => {
  return (
    <div id="searchbar">
      <div className="destination">
        <p>Where</p>
        <input type="text" placeholder="City..." />
      </div>
      <div className="from">
        <p>From</p>
        <input type="date" />
      </div>
      <div className="until">
        <p>Until</p>
        <input type="date" />
      </div>
      <div className="btn">
      <button type="button">Search..</button>
      </div>
    </div>
  );
};

export default Searchbar;
