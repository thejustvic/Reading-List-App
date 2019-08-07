import React from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
  const { dispatch } = React.useContext(BookContext)
  return(
    <li 
      className='book-details'
      onClick={() => dispatch({
        type: 'REMOVE_BOOK', 
        payload: book.id
      })}
    >
      <div className='book-title'>{book.title}</div>
      <div className='book-author'>{book.author}</div>
      {/* <div className='book-type'>{book.type}</div> */}
    </li>
  )
}

export default BookDetails