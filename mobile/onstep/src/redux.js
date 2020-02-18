import { createStore } from 'redux';
import update from 'react-addons-update'

const initialState = {
  todos: [
    {
      name: 'Read a bit',
      complete: true
    },
    {
      name: 'Do laundry',
      complete: false
    }
  ]
};

export const store = createStore(
  reducer,
  initialState,
);
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'S':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    default:
      return state;
  }
}
// Actions
export const setname = () => ({
  type: 'SET_NAME',
  payload: "Eman"
});
function handleSetName(state,action){
    return update(state,{
        name:{
            $set:action.payload
        }
    })
}

export const toggleTodoComplete = (todoId) => ({
  type: 'TOGGLE_TODO',
  payload: todoId
});

export const deleteTodoAction = (todoId) => ({
  type: 'DELETE_TODO',
  payload: todoId
});