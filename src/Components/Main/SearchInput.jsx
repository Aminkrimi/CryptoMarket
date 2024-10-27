import React from "react";

const SearchInput = ({ value, handler }) => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-tab">
          <div className="search-field">
            <i data-feather="search" className="search-icon"></i>
            <form>
              <input
                placeholder="Search"
                value={value}
                onChange={handler}
                className="text-field"
              />
            </form>
          </div>
          <div class="search-btn">
            <p>search</p>
          </div>
        </div>
      </div>
      <h1 className="text d-inline-block">Live Market</h1>
    </div>
  );
};

export default SearchInput;
