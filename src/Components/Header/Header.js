import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ FillterByTitle }) => {
  const [userNewSearch, setUserNewSearch] = useState("");

  const OnSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    FillterByTitle(userNewSearch);
    setUserNewSearch("")
  };

  return (
    <div className='bg-dark'>
      <div className='container'>
        <div className='row'>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand brand-color" href="#"><div className='brand-color'>New Restaurant</div></a>
              <FontAwesomeIcon className="navbar-toggler navbar-toggler-icon text-light" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" icon={faBars} />
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <form className="d-flex" onSubmit={OnSearch}>
                  <input
                    value={userNewSearch}
                    onChange={(e) => setUserNewSearch(e.target.value)}
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="button" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
