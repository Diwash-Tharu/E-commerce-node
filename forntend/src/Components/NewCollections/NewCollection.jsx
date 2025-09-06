import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
export const NewCollection = () => {
  return (
    <div className='newcollections'>
        <h1>New Collection</h1>
        <hr />

        <div className="collections">
            {/* {new_collection.map((item, index) => (
                <div className="collection-item" key={index}>
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))} */}

            {new_collection.map((item,i)=>{
                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        {/* <p>Discover our latest arrivals and exclusive offers.</p>
        <button>Shop Now</button> */}
    </div>
  )
}
