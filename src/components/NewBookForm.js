import React from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm = () => {

  const { dispatch } = React.useContext(BookContext)

  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [type, setType] = React.useState('todo')

  React.useEffect(()=>{
    console.log(type)
  },[type])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD_BOOK',
      payload:{
        title,
        author,
        type,
      }
    })
    setTitle('')
    setAuthor('')
  }

  const handleChangeType = e => {
    setType(e.target.value);
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
      <select value={type} onChange={e => handleChangeType(e)}>
        <option value="todo">todo</option>
        <option value="done">done</option>
        <option value="work">work</option>
      </select>
      <input type='submit' value='add book' />
    </form>
  )
} 

export default NewBookForm