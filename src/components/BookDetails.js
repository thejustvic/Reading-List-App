import React from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
  const { removeBook } = React.useContext(BookContext)
  return(
    <li onClick={() => removeBook(book.id)}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  )
}

export default BookDetails