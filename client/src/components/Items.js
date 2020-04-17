import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemForm from './ItemForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'


const Items = () => {

  const [ items, setItems ] = useState([]);
  const [ showForm, setShowForm ] = useState(false)

  useEffect( () => {
    axios.get('/api/items')
      .then( res => {
        setItems(res.data);
      })
  }, [])

  const renderItems = () => {
    return items.map( item => (
      <div style={styles.card} key={item.id}>
        <img src={item.image} alt="item" style={styles.cardImage}/>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <div style={styles.likesBox}><FontAwesomeIcon icon={faHeart}/> {item.likes}</div>    
      </div>
    ))
  }

  const sortLeastItems = () => {
    var item = [...items]
    setItems(item.sort((a, b) => a.likes - b.likes ));
  }

  const sortMostItems = () => {
    var item = [...items]
    setItems(item.sort((a, b) => b.likes - a.likes ));
  }

  return (
    <>
      <div style={styles.navMain}>
        <div style={styles.navLeft}>
          <h2>Items</h2>
        </div>
        <div style={styles.navRight}>
          { showForm && <ItemForm items={items} setItems={setItems} /> }
          <button style={styles.navButton} className="borderLeftRight" onClick={() => setShowForm(!showForm)}>Add Item</button>
          <button style={styles.navButton} className="borderLeftRight" onClick={() => sortLeastItems()}><FontAwesomeIcon icon={faArrowCircleDown}/></button>
          <button style={styles.navButton} className="borderLeftRight" onClick={() => sortMostItems()}><FontAwesomeIcon icon={faArrowCircleUp}/></button>

        </div>
      </div>
      <div style={styles.container}>     
        { renderItems() }
      </div>
    </> 
  )
}

export default Items;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '1.5em 3em 1em 3em',
    backgroundColor: '#f0f0f0',
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    height: '100%',
    width: '15%',
    boxShadow: '0 .25em .25em 0 rgba(0,0,0,0.2)',
    backgroundColor: 'white',
    padding: '1em 1em',
    margin: '.75em .75em',
  },
  navMain: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '4em',
    backgroundColor: 'black',
    color: '#5878F3',
  },
  navRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '70%',
    padding: '0em 1em 0em 2em',
  },
  navLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '30%',
    padding: '0em 4em 0em 2em',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    flexBasis: 'auto',
  },
  navButton: {
    border: 'none',
    outline: 'none',
    color: 'white',
    fontSize: '1em',
    margin: '1em 1em',
    backgroundColor: 'inherit',
    cursor: 'pointer',
  },
  likesBox: {
    borderRadius: '.25em',
    padding: '.5em',
    backgroundColor: '#5878F3',
    color: 'white',
    fontSize: '.75em',
  }
}