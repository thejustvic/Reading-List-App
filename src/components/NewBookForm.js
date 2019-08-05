import React from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm = () => {

  const { addBook } = React.useContext(BookContext)

  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addBook(title, author)
    setTitle('')
    setAuthor('')
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <label>Book Name:</label>
      <input 
        type='text' 
        required 
        onChange={e => setAuthor(e.target.value)} 
        value={author}
        placeholder='author'
      />
       <input 
        type='text' 
        required 
        onChange={e => setTitle(e.target.value)} 
        value={title}
        placeholder='title'
      />
      <input type='submit' value='add book' />
    </form>
  )
} 

export default NewBookForm