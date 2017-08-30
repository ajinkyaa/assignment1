const initialState = [
  {
    text: 'List Item 1',
    selected: false,
    id: 0
  },
  {
    text: 'List Item 2',
    selected: false,
    id: 1
  },
  {
    text: 'List Item 3',
    selected: true,
    id: 2
  }
]

export default function items(state = initialState, action) {
  switch (action.type) {
    case "EDIT_ITEM":
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )
      break;
    case "SET_SELECTED" :
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, selected: true } :
          todo
      )
      break;
    default:
      return state
  }
}