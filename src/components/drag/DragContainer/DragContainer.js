import React from 'react'
import DragItem from '../DragItem/DragItem';
import { BookContext } from '../../../contexts/BookContext';
import './DragContainer.css'
import { ContainerContext } from '../../../contexts/ContainerContext';

const DragContainer = props => {
  const [state, setState] = React.useState(false)
  const [containerName, setContainerName] = React.useState(props.container.name)
  const useBookContext = React.useContext(BookContext)
  const useContainerContext = React.useContext(ContainerContext)

  const createDragItems = () => {
    let items = [];

    useBookContext.books
    .filter(item => item.type === props.container.id)
    .forEach((item, key) => items.push(
      <DragItem
        key={key}
        book={item}
      />
    ))

    return(
      items
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
    useContainerContext.dispatch({
      type: 'CHANGE_CONTAINER_NAME',
      payload:{
        id: props.container.id,
        item: {
          name: containerName
        }
      }
    })
    setState(false)
  }

  return(
    <div>
      <p 
        className='container-name'
        title='push'
        onClick={() => {
          setState(true)
        }}
      >{props.container.name}</p>
      <div 
        className='drag-container'
        onDrop={event => {
          let data = JSON.parse(
            event.dataTransfer.getData('drag-item')
          );
          useBookContext.dispatch({
            type: 'ADD_BOOK',
            payload:{
              title: data.title,
              author: data.author,
              type: props.container.id,
              createDate: data.createDate,
            }
          })
          useBookContext.dispatch({
            type: 'REMOVE_BOOK', 
            payload: data.id
          })
        }}
        onDragOver={event => {
          event.preventDefault();
        }}
      >
        {createDragItems()}
      </div>
      <button 
        className='container-button'
        onClick={() => useContainerContext.dispatch({
          type: 'REMOVE_CONTAINER', 
          payload: props.container.id
        })}
      >delete</button>
      <div>
        {
          state &&
            <div className='item-change'>
              <form onSubmit={handleSubmit}>
                <input 
                  type='text' 
                  // required 
                  onChange={e => setContainerName(e.target.value)} 
                  value={containerName}
                  placeholder='name'
                />
              
                <input type='submit' value='change name' />
              </form>
              <button 
                onClick={()=> {
                  setState(false)
                  setContainerName(props.container.name)
                }}
              >close</button>
            </div>
        }
      </div>
    </div>
  )
}

export default DragContainer