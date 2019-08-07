import uuid from 'uuid/v1'

export const bookReducer = (state, action) => {
  switch(action.type){
    case 'ADD_BOOK': 
      return [...state, {
        title: action.payload.title,
        author: action.payload.author,
        type: action.payload.type,
        id: uuid(),
        date: new Date()
      }]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload)
    default: 
      return state
  }
}