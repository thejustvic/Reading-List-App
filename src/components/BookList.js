import React from 'react'
import uuid from 'uuid/v1'
import NewBookForm from './NewBookForm'

const BookList = () => {

  const [books, setBooks] = React.useState([
    { title: 'sss', id: 1 },
    { title: 'sss', id: 2 },
  ]);

  const addBook = title => {
    setBooks([ ...books, { title, id: uuid() }]);
  }

  return(
    <div className='song-list'>
      {books.map(book => {
        return (
          <li key={book.id}>{book.title}</li>
        )
      })}
      <NewBookForm addBook={addBook} />
    </div>
  )
}

export default BookList