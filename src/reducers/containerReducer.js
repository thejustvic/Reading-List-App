import uuid from 'uuid/v1'

export const containerReducer = (state, action) => {
  switch(action.type){
    case 'ADD_CONTAINER': 
      return [...state, {
        name: action.payload,
        id: uuid()
      }]
    case 'REMOVE_CONTAINER':
      return state.filter(container => container.id !== action.payload)
    default: 
      return state
  }
}