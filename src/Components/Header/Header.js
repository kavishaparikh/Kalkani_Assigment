import React from 'react'
import "./Header.css"

function Header({searchText,updateSearchText}) {
  return (
    <div className="container">
        <div>
            <h2>Search Anime Characters</h2>
        </div>
        <div>
            <input type="text" value={searchText} onChange={(e)=>{
                updateSearchText({text:e.target.value})
            }}/>
        </div>
        <div>
            <h5>Total matching anime characters</h5>
        </div>
    </div>
  )
}

export default Header