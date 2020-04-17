import React, { useState } from 'react'
import axios from 'axios'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  const handleClick = () => {
    window.location.reload(false);
  }

  return (
   <div style={styles.popup}>
     <div style={styles.popupContent}>
     <span style={styles.close} onClick={handleClick}><FontAwesomeIcon icon={faTimes}/></span>
     <form onSubmit={handleSubmit} style={styles.form}>
      <label>
        Name 
        <input
        type="string"
        required
        name="name"
        onChange={(e) => setName(e.target.value)} />
      </label>
      <br/>
      <label>
        Description 
        <input
        type="text"
        required
        name="description"
        onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br/>
      <label>
        Image
        <input
        type="string"
        required
        name="image"
        onChange={(e) => setImage(e.target.value)} />
      </label>
      <br/>
      <label>
        Likes
        <input
        type="integer"
        required
        name="likes"
        onChange={(e) => setLikes(e.target.value)} />
      </label>
      <br/>
      <input style={styles.button} type='submit' value='Submit' />
    </form>
    </div>
   </div>
  );
 }

 export default ItemForm

 const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
    color: 'black',
  },
  button: {
    margin: '1em',
    padding: '1em',
    height: 'auto',
    width: '20%',
    borderRadius: '.25em',
    fontSize: '.75em',
    backgroundColor: '#5878F3',
    color: 'white'
  },
 popup: {
    position: 'fixed',
    zIndex: '1',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  popupContent: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '20%',
    left: '30%',
    width: '40%',
    padding: '20px',
    borderRadius: '5px',
    border: '1px solid black',
  },
  close: {
    color: 'Black',
    float: 'right',
    cursor: 'pointer',
  },
}