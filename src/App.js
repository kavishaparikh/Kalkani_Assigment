import React, { useState, useEffect } from 'react'
import Header from './Components/Header/Header';
import ItemCard from './Components/ItemCard/ItemCard';

function App() {

  const [searchText, setSearchText] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [items, setItems] = useState([])
  const [lastPage, setlastPage] = useState(1)
  const [totalAnime, setTotalAnime] = useState(0)
  const updateSearchText = ({ text }) => {
    setSearchText(text)
  };

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/characters?page=${pageNo}&limit=15&q=${searchText || ""}&order_by=favorites&sort=desc`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json.data)
        console.log(json)
        setlastPage(json.pagination.last_visible_page)
        setTotalAnime(json.pagination.items.total)
      })
  }, [searchText, pageNo])

  return (
    <>
      <Header searchText={searchText} updateSearchText={updateSearchText} totalAnime={totalAnime}></Header>
      <div className='buttonContainer'>
        {pageNo > 1 && <div onClick={() => {
          setPageNo(pageNo - 1)
        }}>
          <button>Prev</button>
        </div>}
        {pageNo < lastPage && <div onClick={() => {
          setPageNo(pageNo + 1)
        }}>
          <button>Next</button>
        </div>}

      </div>
      <div className='itemCardContainer'>
        {
          items ?
            items.map(item => (
              <ItemCard name={item.name} id={item.mal_id} image={item.images.jpg.image_url}
                favorites={item.favorites} nicknames={item.nicknames} url={item.url}> </ItemCard>
            )) :
            <h2>No data found</h2>
        }
      </div>
    </>
  )
}

export default App