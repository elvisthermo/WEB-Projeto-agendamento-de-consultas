import React from 'react';


import './styles.css';

const SearchBar = ({ input:keyword, onChange:setKeyword }) => {
  return (
    <div id="cover">
      <form className="form-pesquisa" method="get" action="">
        <div className="tb">
          <div className="td"><input className="inputo" key="random1" value={keyword} type="text" placeholder="Procurar clínicas..." onChange={(e) => setKeyword(e.target.value)} /></div>
          <div className="td" id="s-cover">
            <button type="submit" >
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
