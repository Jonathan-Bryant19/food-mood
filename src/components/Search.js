import React from 'react'

function Search({setSearch, handleOnChange}) {
    

    return (
      <div className={"container"}>
        <div className={"row gx-2"}>
          <div className={'col'}>
            Search by Name: <input onChange={(e) => setSearch(e.target.value)} className="prompt" />
          </div>
          <div className='col'>
            Search by Distance: 
            <select onChange={handleOnChange}>
              <option value="none" selected disabled>Select a Distance</option>
              <option>10</option>
              <option>15</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
    );
  }

export default Search
