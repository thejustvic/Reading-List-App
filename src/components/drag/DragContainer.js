import React from 'react'
import DragItem from './DragItem';
import { BookContext } from '../../contexts/BookContext';
import './DragContainer.css'

const DragContainer = ({ containerType }) => {

  const { books, dispatch } = React.useContext(BookContext)

  const createDragItems = () => {
    let items = [];
    
    books.filter(item => item.type === containerType).forEach((item,key) => items.push(
      <DragItem
        key={key}
        title={item.title}
        id={item.id}
      />
    ))

    return(
      items
    )
  }

  return(
    <div 
      className='drag-container'
      onDrop={event => {
        let data = JSON.parse(
          event.dataTransfer.getData('drag-item')
        );
        dispatch({
          type: 'ADD_BOOK',
          payload:{
            title: data,
            type: containerType,
          }
        })
      }}
      onDragOver={event => {
        event.preventDefault();
      }}
    >
      {createDragItems()}
    </div>
  )
}

export default DragContainer