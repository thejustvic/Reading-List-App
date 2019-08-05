import React from 'react'
import uuid from 'uuid/v1'

const Navbar = () => {

  const [books, setBooks] = React.useState([
    { title: 'sss', id: 1 },
    { title: 'sss', id: 2 },
  ]);

  const AddBook = () => {
    setBooks([ ...books, { title: 'aaa', id: uuid() }]);
  }

  return(
    <div className='song-list'>
      {books.map(book => {
        return (
          <li key={book.id}>{book.title}</li>
        )
      })}
      <button onClick={AddBook}>Add Book</button>
    </div>
  )
}

export default Navbar