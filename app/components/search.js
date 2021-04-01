const React = require('react');
const { useState } = require('react');
const SearchIcon = require('../icons/serach');
require('./search.scss');

const Layout = () => {
  const [input, setInput] = useState('');

  const handleOnChange = e => {
    setInput(e.target.value);
  }

  return (
    <div className="search">
      <div className="search-container">
        <a href="/">
          <div className="search-container-meli-icon" />
        </a>
        <form className="search-container-form" action="/items" method="get">
          <input
            className="search-container-form-input"
            placeholder="ingresa tu busqueda..."
            onChange={handleOnChange}

          />
          <input type="hidden" value={input} name="search" />
          <button className="search-container-button" type="submit">
            <SearchIcon className="search-container-button-icon" />
          </button>
        </form>
      </div>
    </div>
  )
}

module.exports = Layout;
