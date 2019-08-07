import React from 'react'
import DragContainer from './DragContainer';
import './DragBody.css'

const DragBody = () => {

  const [containerTypeName, setContainerTypeName] = React.useState('container')

  const [containers, setContainer] = React.useState([
      <DragContainer containerType='todo' />,
      <DragContainer containerType='done' />,
      <DragContainer containerType='work' />,
  ])
  console.log(containers)

  const handleSubmit = e => {
    e.preventDefault()
    setContainer([
      ...containers,
      <DragContainer containerType={containerTypeName} />,
    ])
  }

  return(
    <>
      <form onSubmit={handleSubmit}>  
        <input 
          type='text' 
          required 
          onChange={e => setContainerTypeName(e.target.value)} 
          value={containerTypeName}
          placeholder='containerTypeName'
        />
        <input type='submit' value='add container' />
      </form>
      
      <div className='container-wrapper'>
        {containers}
      </div>
    </>
  )
}

export default DragBody