import React from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
  const { dispatch } = React.useContext(BookContext)
  return(
    <li onClick={() => dispatch({
          type: 'REMOVE_BOOK', 
          payload: book.id
        })}
    >
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
      <div className='type'>{book.type}</div>
    </li>
  )
}

export default BookDetails