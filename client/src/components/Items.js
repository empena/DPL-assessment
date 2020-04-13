import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Items = () => {

  const [items, setItems] = useState([]);

  useEffect( () => {
    axios.get("/api/items")
      .then( res => {
        setItems(res.data);
      })
  }, [])

  const renderItems = () => {
    return items.map( item => (
      <>
      <div key={item.id} />
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.image}</p>
        <p>{item.likes}</p>
        </>
    ))
  }

  return (
    <>
      <h1>Items</h1>
      <br />
      <ul>
        { renderItems() }
      </ul>
    </>
  )
}

export default Items;
