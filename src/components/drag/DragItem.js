import React from 'react'
import { BookContext } from '../../contexts/BookContext'
import './DragItem.css'

const DragItem = ({ title, id }) => {

  const { dispatch } = React.useContext(BookContext)

  return(
    <div className='drag-item-wrapper'>
      <div
        className='drag-item'
        draggable={true}
        onDragStart={event => {
          event.dataTransfer.setData('drag-item', JSON.stringify(title));
        }}

        onDragEndCapture={()=>
          dispatch({
            type: 'REMOVE_BOOK', 
            payload: id
          })
        }
      >
        {title}
      </div>
    </div>
  )
}

export default DragItem