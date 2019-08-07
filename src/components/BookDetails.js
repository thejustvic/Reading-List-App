import React from 'react'
import { BookContext } from '../contexts/BookContext'
import './BookDetails.css'

const BookDetails = ({ book }) => {
  const { dispatch } = React.useContext(BookContext)
  return(
    <li 
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
      onDragEnd={()=>
        dispatch({
          type: 'REMOVE_BOOK', 
          payload: book.id
        })
      }
    >
      <div className='book-title'> title: {book.title}</div>
      <div className='book-author'>author: {book.author}</div>
      <div className='book-type'>type: {book.type}</div>
      <div className='book-id'>id: {book.id}</div>
    </li>
  )
}

export default BookDetails