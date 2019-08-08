import React from 'react'
import './DragItem.css'
import { BookContext } from '../../../contexts/BookContext';

const DragItem = ({ book }) => {

  const [state, setState] = React.useState(false)
  const useBookContext = React.useContext(BookContext)
  const [title, setTitle] = React.useState(book.title)
  const [author, setAuthor] = React.useState(book.author)
  const [description, setDescription] = React.useState(book.description)

  const handleSubmit = e => {
    e.preventDefault()
    useBookContext.dispatch({
      type: 'CHANGE_BOOK',
      payload:{
        id: book.id,
        item: {
          title,
          author,
          description,
          lastUpdateDate: new Date()
        }
      }
    })
    setState(false)
  }

  return(
    <>
      <div
        className='drag-item'
        draggable={true}
        onDragStart={event => {
          event.dataTransfer.setData('drag-item', JSON.stringify(book));
        }}
        onClick={() => {
          setState(true)
        }}
        title='push'
      >
        {book.title}
      </div>

      <div>
        {
          state &&
            <div className='item-change'>
              <form onSubmit={handleSubmit}>
                <button 
                  type='button'
                  className='close-button'
                  onClick={()=> {
                    setState(false)
                    setTitle(book.title)
                    setAuthor(book.author)
                    setDescription(book.description)
                  }}
                >close</button>
                <div className='item-fields'>
                  <label>author:</label>
                  <input 
                    type='text' 
                    // required 
                    onChange={e => setAuthor(e.target.value)} 
                    value={author}
                    placeholder='author'
                  />
                  <br />
                  <label>title:</label>
                  <input 
                    type='text' 
                    // required 
                    onChange={e => setTitle(e.target.value)} 
                    value={title}
                    placeholder='title'
                  />
                  <br />
                  <textarea 
                    rows="4" 
                    cols="50"
                    onChange={e => setDescription(e.target.value)} 
                    value={description}
                    placeholder='description'
                  />
                  <br />
                  <label>create date:</label>
                  {book.createDate.toLocaleString("ru")}
                  <br />
                  <br />
                  <label>update date:</label>
                  {book.lastUpdateDate.toLocaleString("ru")}
                </div>
                <input type='submit' value='change book' />
              </form> 
            </div>
        }
      </div>
    </>
  )
}

export default DragItem