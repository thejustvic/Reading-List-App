import React from 'react'
import DragContainer from '../DragContainer/DragContainer';
import './DragBody.css'
import { ContainerContext } from '../../../contexts/ContainerContext';

const DragBody = () => {
  const [containerName, setContainerName] = React.useState('')
  const useContainerContext = React.useContext(ContainerContext)

  const handleSubmit = e => {
    e.preventDefault()
    useContainerContext.dispatch({
      type: 'ADD_CONTAINER',
      payload: containerName,
    })
    setContainerName('')
  }

  const renderDragContainers = () => {
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
    <div className='drag-body'>
      <form onSubmit={handleSubmit}>  
        <input 
          type='text' 
          required 
          onChange={e => setContainerName(e.target.value)} 
          value={containerName}
          placeholder='container name'
        />
        <input type='submit' value='add container' />
      </form>
      
      <div className='container-wrapper'>
        {renderDragContainers()}
      </div>
    </div>
  )
}

export default DragBody