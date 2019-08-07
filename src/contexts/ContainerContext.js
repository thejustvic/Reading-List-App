import React from 'react'
import { containerReducer } from '../reducers/containerReducer';

export const ContainerContext = React.createContext()

const ContainerContextProvider = props => {

  const [containers, dispatch] = React.useReducer(containerReducer, [], () => {
    const localData = localStorage.getItem('containers')

    return localData ? JSON.parse(localData) : []
  })

  React.useEffect(() => {
    localStorage.setItem('containers', JSON.stringify(containers))
  }, [containers])
  
  return(
    <ContainerContext.Provider value={{ containers, dispatch }}>
      {props.children}
    </ContainerContext.Provider>
  )
}

export default ContainerContextProvider