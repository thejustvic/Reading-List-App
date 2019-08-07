import React from 'react'
import DragItem from './DragItem';
import { BookContext } from '../../contexts/BookContext';
import './DragContainer.css'

const DragContainer = ({ containerType }) => {

  const { books, dispatch } = React.useContext(BookContext)

  const createDragItems = () => {
    let items = [];
    
    books.filter(item => item.type === containerType).forEach(item => items.push(
      <DragItem
        key={item.id}
        book={item}
      />
    ))

    return(
      items
    )
  }

  return(
    <div>
      <p className='container-name'>{containerType}</p>
      <div 
        className='drag-container'
        onDrop={event => {
          let data = JSON.parse(
            event.dataTransfer.getData('drag-item')
          );
          dispatch({
            type: 'ADD_BOOK',
            payload:{
              title: data.title,
              author: data.author,
              type: containerType,
              id: data.id
            }
          })
        }}
        onDragOver={event => {
          event.preventDefault();
        }}
      >
        {createDragItems()}
      </div>
      <button className='container-button' onClick={()=>console.log(containerType)}>delete</button>
    </div>
  )
}

export default DragContainer