import React from 'react'
import "./Popular.css"
import data_product from '../Assets/data.js'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>

        <div className="popluar-item">
            {data_product.map((Item)=>{
                return <Item key={i} id={Item.id} name={Item.name} image={Item.image} new_price={Item.new_price} old_price={Item.old_price}/>
                
            })}
        </div>

    </div>
  )
}
