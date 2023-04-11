import React from 'react'

function ItemCard({name,id, image,favorites,nicknames,url}) {
  return (
    <div className='itemCard'>
        <div>
            <img src={image } height="40px" width="40px"></img>
        </div>
        <div className='itemMidContainer'>
            <div>
                {name}
            </div>
            <div style={{display:"flex"}}>
            {nicknames.length>0 && (
                nicknames.map(nickName=>(
                    <div className='nickName'>{nickName}</div>
                ))
            )}
            </div>
        </div>
        <div>
            {favorites}
        </div>
        <div>
            <a target='_blank' href={url}>=></a>
        </div>
    </div>
  )
}

export default ItemCard