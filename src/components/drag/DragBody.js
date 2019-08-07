import React from 'react'
import DragContainer from './DragContainer';
import './DragBody.css'

const DragBody = () => (
  <div className='container-wrapper'>
    <DragContainer containerType='todo' />
    <DragContainer containerType='done' />
    <DragContainer containerType='work' />
  </div>
)

export default DragBody