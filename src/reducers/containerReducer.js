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
    case 'CHANGE_CONTAINER_NAME':
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }
        return {
          ...item,
          ...action.payload.item
        }
    })
    default: 
      return state
  }
}