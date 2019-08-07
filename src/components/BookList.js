import React from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {

  const { books } = React.useContext(BookContext) 

  return books.length ? (
    <div className='song-list'>
      {books.map(book => {
        return (
          <BookDetails key={book.id} book={book} />
        )
      })}
    </div>
  ) : (
    <>
      no books
    </>
  )
}

export default BookList