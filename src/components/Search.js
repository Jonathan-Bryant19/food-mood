import React from 'react'

function Search({setSearch, handleOnChange}) {
    

    return (
      <div className={"container"}>
        <div className={"row gx-2"}>
          <div className={'col'}>
            <label style={{fontFamily: "Amaranth", fontSize: "22px"}} className='col-form-label pe-3'>Search by Name:</label> <input style={{fontFamily: "Amaranth", fontSize: "22px"}} onChange={(e) => setSearch(e.target.value)} className="prompt" />
          </div>
          <div className='col'>
            <label style={{fontFamily: "Amaranth", fontSize: "22px"}} className='col-form-label pe-3'>Search by Distance:</label>
            <select style={{fontFamily: "Amaranth", fontSize: "22px"}} defaultValue="select" onChange={handleOnChange}>
              <option value="select" disabled>Select a Distance</option>
              <option >10</option>
              <option >15</option>
              <option >25</option>
              <option >50</option>
            </select>
          </div>
        </div>
      </div>
    );
  }

export default Search
