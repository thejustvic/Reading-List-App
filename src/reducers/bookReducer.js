import uuid from 'uuid/v1'

const destructuringSwap = (
  list, 
  sourceOrder, 
  targetOrder,
  sourceType,
  targetType,
) => {
  console.log('------------------------')
  console.log('sourceOrder', sourceOrder)
  console.log('targetOrder', targetOrder)
  console.log('sourceType', sourceType)
  console.log('targetType', targetType)
  console.log('------------------------')


  // Object.values(list).map(elem => {
    // let sou, tag
    // if(sourceOrder === elem.id){
    //   sou = elem.id
    // }
    // if(targetOrder === elem.id){
    //   tag = elem.id
    // }

    // console.log(elem.id)



    // console.log('sou', sou)
    // console.log('tag', tag)

    // var a = this.obj1;
    // this.obj1 = this.obj2;
    // this.obj2 = a;
  // })

  
  return list;
}

export const bookReducer = (state, action) => {
  switch(action.type){
    case 'ADD_BOOK': 
      return [...state, {
        title: action.payload.title,
        author: action.payload.author,
        type: action.payload.type,
        description: action.payload.description,
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

    case 'SWAP_BOOK': 
      // return [...state, {
        // title: action.payload.title,
        // author: action.payload.author,
        // type: action.payload.type,
        // description: action.payload.description,
        // id: uuid(),
        // lastUpdateDate: new Date(),
        // createDate: action.payload.createDate ? 
        //   action.payload.createDate : new Date(),
      // }]

      return destructuringSwap(
        state, 
        action.payload.sourceOrder, 
        action.payload.targetOrder,
        action.payload.sourceType, 
        action.payload.targetType,
      )

    default: 
      return state
  }
}