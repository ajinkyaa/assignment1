import {initialState} from './initialState'

export default function items(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELECTED':
      return state.map(item =>
        item.id === action.id ?
          { ...item, selected: true } :
          { ...item, selected: false }
      )
      break
    case 'EDIT_ITEM':
      return state.map(item =>
        item.id === action.id ?
          { ...item, text: action.text } :
          item
      )
      break
    default:
      return state
  }
}