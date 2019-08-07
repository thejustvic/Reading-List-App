import React from 'react'
import DragContainer from '../DragContainer/DragContainer';
import './DragBody.css'
import { ContainerContext } from '../../../contexts/ContainerContext';

const DragBody = () => {
  const [containerTypeName, setContainerTypeName] = React.useState('')
  const useContainerContext = React.useContext(ContainerContext)

  const handleSubmit = e => {
    e.preventDefault()

    useContainerContext.dispatch({
      type: 'ADD_CONTAINER',
      payload: containerTypeName,
    })

    setContainerTypeName('')
  }

  const createDragContainers = () => {
    let items = [];
    
    useContainerContext.containers.forEach(item => items.push(
      <DragContainer
        key={item.id}
        container={item}
      />
    ))

    return(
      items
    )
  }

  return(
    <>
      <form onSubmit={handleSubmit}>  
        <input 
          type='text' 
          required 
          onChange={e => setContainerTypeName(e.target.value)} 
          value={containerTypeName}
          placeholder='container name'
        />
        <input type='submit' value='add container' />
      </form>
      
      <div className='container-wrapper'>
        {createDragContainers()}
      </div>
    </>
  )
}

export default DragBody