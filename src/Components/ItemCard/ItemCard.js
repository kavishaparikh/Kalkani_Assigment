import React from 'react'

function ItemCard({ name, image, favorites, nicknames, url }) {
    return (
        <div className='itemCard'>
            <div>
                <img src={image} height="40px" width="40px" style={{margin:"5px"}}></img>
            </div>
            <div className='itemMidContainer'>
                <div>
                    {name}
                </div>
                <div style={{ display: "flex" }}>
                    {nicknames.length > 0 && (
                        nicknames.map(nickName => (
                            <div className='nickName'>{nickName}</div>
                        ))
                    )}
                </div>
            </div>
            <div></div>
            <div  style={{margin:"10px" ,fontSize: "15px"}}>
            <i class="fa fa-heart" style={{color: "red" , margin:"2px"}}></i>{favorites}  
            </div>
            <div >
                <a target='_blank' href={url}> <i class="fa fa-arrow-right fa-2xl" style={{color: "black"}}></i>  </a>
            </div>
        </div>
    )
}

export default ItemCard