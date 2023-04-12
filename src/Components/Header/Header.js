import React from 'react'
import "./Header.css"

function Header({ searchText, updateSearchText, totalAnime }) {
    return (
        <div className="container">
            <div>
                <h1>Search Anime Characters</h1>
            </div>
            <div>
                <input type="text" value={searchText} onChange={(e) => {
                    updateSearchText({ text: e.target.value })
                }} />
            </div>
            <div>
                <h4>Total {totalAnime} matching anime characters</h4>
            </div>
        </div>
    )
}

export default Header