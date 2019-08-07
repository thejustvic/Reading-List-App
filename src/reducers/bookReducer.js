import uuid from 'uuid/v1'

export const bookReducer = (state, action) => {
  switch(action.type){
    case 'ADD_BOOK': 
      return [...state, {
        title: action.payload.title,
        author: action.payload.author,
        type: action.payload.type,
        id: uuid(),
        lastUpdateDate: new Date(),
        createDate: action.payload.createDate ? 
          action.payload.createDate : new Date(),
      }]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload)
    case 'CHANGE_BOOK':
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