import React from 'react'

function Search({setSearch}) {
    return (
      <div className="ui search">
        <div className="ui icon input">
          Search by Name: <input onChange={(e) => setSearch(e.target.value)} className="prompt" />
          Search by Distance: <select>
              <option>5</option>
              <option>10</option>
              <option>15</option>
          </select>
        </div>
      </div>
    );
  }

export default Search