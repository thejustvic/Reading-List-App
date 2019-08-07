import React from 'react'
import './DragItem.css'
import { BookContext } from '../../../contexts/BookContext';

const DragItem = ({ book }) => {

  const [state, setState] = React.useState(false)
  const useBookContext = React.useContext(BookContext)
  const [title, setTitle] = React.useState(book.title)
  const [author, setAuthor] = React.useState(book.author)

  const handleSubmit = e => {
    e.preventDefault()
    useBookContext.dispatch({
      type: 'CHANGE_BOOK',
      payload:{
        id: book.id,
        item: {
          title,
          author,
          lastUpdateDate: new Date()
        }
      }
    })
    setState(false)
  }

  return(
    <>
      <div className='drag-item-wrapper'>
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
      </div>

      <div>
        {
          state &&
            <div className='item-change'>
              <form onSubmit={handleSubmit}>
                <input 
                  type='text' 
                  // required 
                  onChange={e => setAuthor(e.target.value)} 
                  value={author}
                  placeholder='author'
                />
                <input 
                  type='text' 
                  // required 
                  onChange={e => setTitle(e.target.value)} 
                  value={title}
                  placeholder='title'
                />
              
                <input type='submit' value='change book' />
              </form>
              <button 
                onClick={()=> {
                  setState(false)
                  setTitle(book.title)
                  setAuthor(book.author)
                }}
              >close</button>
            </div>
        }
      </div>
    </>
  )
}

export default DragItem