import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemForm from './ItemForm'

const Items = (props) => {

  const [items, setItems] = useState([]);
  const [ showForm, setShowForm ] = useState(false)

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
      { showForm && <ItemForm /> }
      <button onClick={() => setShowForm(!showForm)}>
        { showForm ? "Close Form" : "Show Form" }
      </button>
      <br />
      <ul>
        { renderItems() }
      </ul>
    </>
  )
}

export default Items;
