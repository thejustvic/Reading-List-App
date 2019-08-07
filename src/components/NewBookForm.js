import React from 'react'
import { BookContext } from '../contexts/BookContext'
import { ContainerContext } from '../contexts/ContainerContext';

const NewBookForm = () => {

  const { dispatch } = React.useContext(BookContext)

  const useContainerContext = React.useContext(ContainerContext)

  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [type, setType] = React.useState(
    useContainerContext &&
    useContainerContext.containers &&
    useContainerContext.containers[0] &&
    useContainerContext.containers[0].id
  )

  React.useEffect(()=>{
    setType(
      useContainerContext &&
      useContainerContext.containers &&
      useContainerContext.containers[0] &&
      useContainerContext.containers[0].id
    )
  },[useContainerContext])

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
        {
          useContainerContext.containers.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          })
        }
      </select>
      <input type='submit' value='add book' disabled={!useContainerContext.containers.length > 0} />
    </form>
  )
} 

export default NewBookForm