import React from 'react'
import uuid from 'uuid/v1'

export const BookContext = React.createContext()

const BookContextProvider = props => {
  const [books, setBooks] = React.useState([
    { title: 'www', author: 'zzz', id: uuid() }
  ])
  const addBook = (title, author) => {
    setBooks([
      ...books,
      {title, author, id: uuid()}
    ])
  }
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id))
  }

  return(
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider