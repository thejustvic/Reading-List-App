import React from 'react'
import { BookContext } from '../contexts/BookContext'
import './BookDetails.css'

const BookDetails = ({ book }) => {
  const { dispatch } = React.useContext(BookContext)
  return(
    <div 
      className='book-details'
      onClick={() => dispatch({
        type: 'REMOVE_BOOK', 
        payload: book.id
      })}
      title='remove'
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData('drag-item', JSON.stringify(book));
      }}
    >
      <div className='book-title'> title: {book.title}</div>
      <div className='book-author'>author: {book.author}</div>
      {/* <div className='book-type'>type: {book.type}</div> */}
      {/* <div className='book-id'>id: {book.id}</div> */}
      <div className='book-id'>date: {book.date.toLocaleString("ru")}</div>
    </div>
  )
}

export default BookDetails