import React from 'react'
import { BookContext } from '../../../contexts/BookContext'
import './DragItem.css'

const DragItem = ({ book }) => {

  const { dispatch } = React.useContext(BookContext)

  return(
    <div className='drag-item-wrapper'>
      <div
        className='drag-item'
        draggable={true}
        onDragStart={event => {
          event.dataTransfer.setData('drag-item', JSON.stringify(book));
        }}

        onDragEnd={() => 
          dispatch({
            type: 'REMOVE_BOOK', 
            payload: book.id
          })
        }
        onClick={() => {
          console.log('log')
        }}
        title='push'
      >
        {book.title}
      </div>
    </div>
  )
}

export default DragItem