import React from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = React.createContext()

const BookContextProvider = props => {

  const [books, dispatch] = React.useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books')

    return localData ? JSON.parse(localData) : []
  })

  React.useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  
  return(
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider