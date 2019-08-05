import React from 'react'

const NewBookForm = ({ addBook }) => {

  const [title, setTitle] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addBook(title)
    setTitle('')
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <label>Book Name:</label>
      <input 
        type='text' 
        required 
        onChange={e => setTitle(e.target.value)} 
        value={title}
      />
      <input type='submit' value='add book' />
    </form>
  )
} 

export default NewBookForm