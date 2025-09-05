import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
export const NewCollection = () => {
  return (
    <div className='newcollections'>
        <h1>New Collection</h1>
        <hr />

        <div className="collections">
            {new_collection.map((item, index) => (
                <div className="collection-item" key={index}>
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
        {/* <p>Discover our latest arrivals and exclusive offers.</p>
        <button>Shop Now</button> */}
    </div>
  )
}
