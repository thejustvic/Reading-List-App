import React from 'react'
import DragItem from '../DragItem/DragItem';
import { BookContext } from '../../../contexts/BookContext';
import './DragContainer.css'
import { ContainerContext } from '../../../contexts/ContainerContext';

const DragContainer = props => {

  const useBookContext = React.useContext(BookContext)
  const useContainerContext = React.useContext(ContainerContext)

  const createDragItems = () => {
    let items = [];
    
    useBookContext.books.filter(item => item.type === props.container.id).forEach(item => items.push(
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
      <p className='container-name'>{props.container.name}</p>
      <div 
        className='drag-container'
        onDrop={event => {
          let data = JSON.parse(
            event.dataTransfer.getData('drag-item')
          );
          useBookContext.dispatch({
            type: 'ADD_BOOK',
            payload:{
              title: data.title,
              author: data.author,
              type: props.container.id,
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
      <button 
        className='container-button'
        onClick={() => useContainerContext.dispatch({
          type: 'REMOVE_CONTAINER', 
          payload: props.container.id
        })}
      >delete</button>
    </div>
  )
}

export default DragContainer