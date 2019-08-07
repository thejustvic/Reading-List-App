import React from 'react'
import './DragItem.css'

const DragItem = ({ book }) => (
  <div className='drag-item-wrapper'>
    <div
      className='drag-item'
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData('drag-item', JSON.stringify(book));
      }}
      onClick={() => {
        console.log('log')
      }}
      title='push'
    >
      {book.title}
    </div>
  </div>
)

export default DragItem