export const editItems = (id, text) => ({ 
  type: 'EDIT_ITEM', 
  id, 
  text 
})

export const setSelected = (id, text) => ({ 
  type: 'SET_SELECTED', 
  id, 
  text 
})