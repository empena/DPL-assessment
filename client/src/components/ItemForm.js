import React, { useState } from 'react'
import axios from 'axios'

const ItemForm = (props) => {

  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ image, setImage ] = useState('')
  const [ likes, setLikes ] = useState()

  const handleSubmit = (e) => {
    axios.post("/api/items", { name, description, image, likes } )
    .then( res => {
      props.add(res.data)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
        type="string"
        required
        name="name"
        onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description
        <input
        type="text"
        required
        name="description"
        onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Image
        <input
        type="string"
        required
        name="image"
        onChange={(e) => setImage(e.target.value)} />
      </label>
      <label>
        Likes
        <input
        type="integer"
        required
        name="likes"
        onChange={(e) => setLikes(e.target.value)} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default ItemForm