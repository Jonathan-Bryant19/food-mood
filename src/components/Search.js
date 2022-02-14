import React from 'react'

function Search({setSearch, handleOnChange}) {
    

    return (
      <div className="ui search">
        <div className="ui icon input">
          Search by Name: <input onChange={(e) => setSearch(e.target.value)} className="prompt" />
          Search by Distance: 
          <select onChange={handleOnChange}>
              <option>10</option>
              <option>15</option>
              <option>25</option>
              <option>50</option>
          </select>
        </div>
      </div>
    );
  }

export default Search
