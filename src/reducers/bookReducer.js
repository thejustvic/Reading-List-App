import uuid from 'uuid/v1'

function swap(
  arr, 
  targetOrderKey, 
  targetOrderType,
  sourceOrderKey,
  sourceOrderType,
) {
  let temp,temp1,temp2,temp3,temp4,temp5

  if(sourceOrderType !== targetOrderType){
        temp1 = arr[targetOrderKey].author;
    arr[targetOrderKey].author = arr[sourceOrderKey].author;
    arr[sourceOrderKey].author = temp1;

        temp2 = arr[targetOrderKey].createDate;
    arr[targetOrderKey].createDate = arr[sourceOrderKey].createDate;
    arr[sourceOrderKey].createDate = temp2;

        temp3 = arr[targetOrderKey].id;
    arr[targetOrderKey].id = arr[sourceOrderKey].id;
    arr[sourceOrderKey].id = temp3;

        temp4 = arr[targetOrderKey].lastUpdateDate;
    arr[targetOrderKey].lastUpdateDate = arr[sourceOrderKey].lastUpdateDate;
    arr[sourceOrderKey].lastUpdateDate = temp4;

        temp5 = arr[targetOrderKey].title;
    arr[targetOrderKey].title = arr[sourceOrderKey].title;
    arr[sourceOrderKey].title = temp5;
  }
  else {
    temp = arr[targetOrderKey];
    arr[targetOrderKey] = arr[sourceOrderKey];
    arr[sourceOrderKey] = temp;
  }

  return arr;
}

const destructuringSwap = (
  list, 
  sourceOrder, 
  targetOrder,
  sourceType,
  targetType,
) => {
  let sourceOrderKey, targetOrderKey

  Object.values(list).forEach((elem,key) => {
    if(elem.id === sourceOrder){
      sourceOrderKey = key
    }
    if(elem.id === targetOrder){
      targetOrderKey = key
    }
  })
 
  return swap(
    list, 
    targetOrderKey, 
    targetType,
    sourceOrderKey,
    sourceType,
  );
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
      const rr = destructuringSwap(
        state, 
        action.payload.sourceOrder, 
        action.payload.targetOrder,
        action.payload.sourceType, 
        action.payload.targetType,
      )

      return [...rr]
    default: 
      return state
  }
}